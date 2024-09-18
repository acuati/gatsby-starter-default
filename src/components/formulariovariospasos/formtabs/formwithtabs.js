import React, { useState, useEffect } from 'react';
import './formwithtabs.css'

const FormWithTabs = ({ formData, setFormData }) => {
  // Estado para manejar la pestaña activa
  const [activeTab, setActiveTab] = useState('text');
  
  // Función para cambiar la pestaña activa
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ ...formData, data: '' }); // Reinicia el valor del input en formData al cambiar de pestaña
  };

  // Función para manejar la validación y el cambio de valor en el input
  const handleValidation = (e) => {
    const value = e.target.value;

    if (activeTab === 'url') {
      // Validación de URL
      const urlPattern = new RegExp('^(https?:\\/\\/)?'+
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
        '((\\d{1,3}\\.){3}\\d{1,3}))'+
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
        '(\\?[;&a-z\\d%_.~+=-]*)?'+
        '(\\#[-a-z\\d_]*)?$','i');
      if (!urlPattern.test(value)) {
        alert('Por favor, ingresa una URL válida');
        return;
      }
    } else if (activeTab === 'email') {
      // Validación de email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        alert('Por favor, ingresa un email válido');
        return;
      }
    }

    // Actualiza el valor de formData si es válido
    setFormData({ ...formData, data: value });
  };

  return (
    <div>
      <div>
        {/* Tabs */}
        <button onClick={() => handleTabChange('text')} className={activeTab === 'text' ? 'active' : ''}>Texto</button>
        <button onClick={() => handleTabChange('email')} className={activeTab === 'email' ? 'active' : ''}>Email</button>
        <button onClick={() => handleTabChange('url')} className={activeTab === 'url' ? 'active' : ''}>URL</button>
      </div>
      
      <div>
        {/* Input */}
        <input
          type={activeTab === 'email' ? 'email' : activeTab === 'url' ? 'url' : 'text'}
          placeholder={activeTab === 'text' ? 'Ingresa texto' : activeTab === 'email' ? 'Ingresa email' : 'Ingresa URL'}
          value={formData.data || ''}
          onChange={handleValidation}
        />
      </div>
    </div>
  );
};

export default FormWithTabs;
