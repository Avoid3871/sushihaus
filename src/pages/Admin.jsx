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
      // Fallback
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
        setSaveMessage('Erfolgreich gespeichert! Änderungen sind jetzt live.');
        setTimeout(() => setSaveMessage(''), 3000);
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
        <button onClick={handleSave} disabled={isSaving} className="save-button">
          {isSaving ? 'Speichert...' : 'Änderungen Speichern'}
        </button>
      </div>
      
      {saveMessage && (
        <div className={`admin-message ${saveMessage.includes('Erfolgreich') ? 'success' : 'error'}`}>
          {saveMessage}
        </div>
      )}

      {isLoading || !menuData ? (
        <p>Lade Speisekarte...</p>
      ) : (
        <div className="admin-categories">
          {Object.keys(menuData).map((catKey) => {
            const category = menuData[catKey];
            return (
              <div key={catKey} className="admin-category">
                <h3>{category.label} {category.subtitle ? `(${category.subtitle})` : ''}</h3>
                
                <div className="admin-items">
                  {category.items.map((item, index) => (
                    <div key={index} className="admin-item-row">
                      <div className="input-group">
                        <label>Name</label>
                        <input 
                          type="text" 
                          value={item.name} 
                          onChange={(e) => handleItemChange(catKey, index, 'name', e.target.value)} 
                        />
                      </div>
                      <div className="input-group flex-2">
                        <label>Beschreibung</label>
                        <input 
                          type="text" 
                          value={item.desc || ''} 
                          onChange={(e) => handleItemChange(catKey, index, 'desc', e.target.value)} 
                        />
                      </div>
                      <div className="input-group price-group">
                        <label>Preis (€)</label>
                        <input 
                          type="text" 
                          value={item.price} 
                          onChange={(e) => handleItemChange(catKey, index, 'price', e.target.value)} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
