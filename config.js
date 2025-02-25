let config = null;

export const fetchConfig = async () => {
  try {
    const response = await fetch('https://arydigital.tv/api/saved_fetchConfig.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    if (!response.ok) {
      throw new Error(`Failed to fetch configuration: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.appsConfig) {
      throw new Error('Invalid response structure. appsConfig not found.');
    }
    config = data.appsConfig;
    console.log('Configuration loaded:', config.channel);
  } catch (error) {
    console.error('Error fetching configuration:', error.message);
    throw error; // Re-throw the error so the caller knows it failed
  }
};

export const getConfig = () => {
  if (!config) {
    throw new Error('Configuration has not been loaded yet. Please call fetchConfig first.');
  }
  return config;
};
