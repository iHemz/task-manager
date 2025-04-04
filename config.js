const config = {
  development: {
    apiBaseUrl: "http://localhost:3000/api/v1",
  },
  production: {
    apiBaseUrl: "https://tasker-xi-neon.vercel.app/api/v1",
  },
};

const env = process.env.NODE_ENV || "development";
const currentConfig = config[env];

module.exports = currentConfig;
