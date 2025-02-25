import React, { createContext, useContext, useEffect, useState } from 'react';

// Create context
const ConfigContext = createContext({});

// Custom hook to use the config in components
export function useConfig() {
  return useContext(ConfigContext);
}

// Provider component
export function ConfigProvider({ children }) {
  const [config, setConfig] = useState({});

  useEffect(() => {
    async function fetchConfig() {
      try {
        const response = await fetch('https://arydigital.tv/api/env.php');
        const configData = await response.json();
        setConfig(configData);
      } catch (error) {
        console.error('Error fetching config:', error);
      }
    }

    fetchConfig();
  }, []);

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}
