import { useState, useEffect } from 'react';
import './Admin.css';
import { defaultMenuData } from '../data/defaultMenu.js';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [menuData, setMenuData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        fetchMenuData();
      } else {
        setError('Falsches Passwort');
      }
    } catch (err) {
      setError('Fehler bei der Anmeldung. Läuft das Backend?');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMenuData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/menu');
      if (res.ok) {
        const data = await res.json();
        setMenuData(data);
      } else {
        setMenuData(JSON.parse(JSON.stringify(defaultMenuData)));
      }
    } catch (err) {
      console.error(err);
      setMenuData(JSON.parse(JSON.stringify(defaultMenuData)));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');
    
    try {
      const res = await fetch('/api/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, menuData })
      });
      
      if (res.ok) {
        setSaveMessage('Erfolgreich gespeichert! Änderungen sind live.');
        setTimeout(() => setSaveMessage(''), 4000);
      } else {
        setSaveMessage('Fehler beim Speichern.');
      }
    } catch (err) {
      setSaveMessage('Fehler beim Verbinden mit dem Server.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleItemChange = (categoryKey, itemIndex, field, value) => {
    setMenuData(prev => {
      const newData = { ...prev };
      newData[categoryKey].items[itemIndex][field] = value;
      return newData;
    });
  };

  const handleCategoryNameChange = (categoryKey, newLabel) => {
    setMenuData(prev => {
      const newData = { ...prev };
      newData[categoryKey].label = newLabel;
      return newData;
    });
  };

  const handleAddCategory = () => {
    setMenuData(prev => {
      const newKey = `cat_${Date.now()}`;
      return {
        ...prev,
        [newKey]: { label: 'Neue Kategorie', subtitle: '', items: [] }
      };
    });
  };

  const handleDeleteCategory = (categoryKey) => {
    if (window.confirm('Kategorie wirklich löschen?')) {
      setMenuData(prev => {
        const newData = { ...prev };
        delete newData[categoryKey];
        return newData;
      });
    }
  };

  const handleAddItem = (categoryKey) => {
    setMenuData(prev => {
      const newData = { ...prev };
      newData[categoryKey].items.push({ name: '', desc: '', price: '', tag: '' });
      return newData;
    });
  };

  const handleDeleteItem = (categoryKey, itemIndex) => {
    if (window.confirm('Gericht wirklich löschen?')) {
      setMenuData(prev => {
        const newData = { ...prev };
        newData[categoryKey].items.splice(itemIndex, 1);
        return newData;
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <form className="admin-login-form" onSubmit={handleLogin}>
          <h2>Sushihaus Admin</h2>
          <p>Bitte Passwort eingeben, um die Speisekarte zu bearbeiten.</p>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Passwort"
            required
          />
          {error && <div className="admin-error">{error}</div>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Lädt...' : 'Anmelden'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Speisekarte Bearbeiten</h2>
      </div>

      {isLoading || !menuData ? (
        <p>Lade Speisekarte...</p>
      ) : (
        <div className="admin-categories">
          {Object.keys(menuData).map((catKey) => {
            const category = menuData[catKey];
            return (
              <div key={catKey} className="admin-category">
                <div className="admin-category-header">
                  <input 
                    type="text"
                    className="admin-category-title-input"
                    value={category.label}
                    onChange={(e) => handleCategoryNameChange(catKey, e.target.value)}
                    placeholder="Kategoriename"
                  />
                  <button 
                    className="admin-btn-delete" 
                    onClick={() => handleDeleteCategory(catKey)}
                    title="Kategorie löschen"
                  >
                    🗑️ Kategorie löschen
                  </button>
                </div>
                
                <div className="admin-items">
                  {category.items.map((item, index) => (
                    <div key={index} className="admin-item-row">
                      <div className="input-group">
                        <label>Name</label>
                        <input 
                          type="text" 
                          value={item.name} 
                          onChange={(e) => handleItemChange(catKey, index, 'name', e.target.value)} 
                          placeholder="z.B. Sake Maki"
                        />
                      </div>
                      <div className="input-group flex-2">
                        <label>Beschreibung</label>
                        <input 
                          type="text" 
                          value={item.desc || ''} 
                          onChange={(e) => handleItemChange(catKey, index, 'desc', e.target.value)} 
                          placeholder="Zutaten, Details..."
                        />
                      </div>
                      <div className="input-group price-group">
                        <label>Preis (€)</label>
                        <input 
                          type="text" 
                          value={item.price} 
                          onChange={(e) => handleItemChange(catKey, index, 'price', e.target.value)} 
                          placeholder="z.B. 6,90"
                        />
                      </div>
                      <div className="input-group tag-group">
                        <label>Tag</label>
                        <input 
                          type="text" 
                          value={item.tag || ''} 
                          onChange={(e) => handleItemChange(catKey, index, 'tag', e.target.value)} 
                          placeholder="vegan, scharf, beliebt"
                        />
                      </div>
                      <button 
                        className="admin-btn-icon-delete"
                        onClick={() => handleDeleteItem(catKey, index)}
                        title="Gericht löschen"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="admin-btn-add" 
                  onClick={() => handleAddItem(catKey)}
                >
                  + Neues Gericht hinzufügen
                </button>
              </div>
            );
          })}

          <button className="admin-btn-add-category" onClick={handleAddCategory}>
            + Neue Kategorie hinzufügen
          </button>
        </div>
      )}

      {/* Sticky Save Footer */}
      <div className="admin-sticky-footer">
        {saveMessage && (
          <span className={`admin-message ${saveMessage.includes('Erfolgreich') ? 'success' : 'error'}`}>
            {saveMessage}
          </span>
        )}
        <button onClick={handleSave} disabled={isSaving} className="save-button">
          {isSaving ? 'Speichert...' : 'Änderungen Speichern'}
        </button>
      </div>
    </div>
  );
}
