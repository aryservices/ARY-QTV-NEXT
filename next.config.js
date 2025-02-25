// next.config.js

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Generate sitemap on the server side
      require("./generate-sitemap");
    }
    return config;
  },
};
