// backend/server.js
const env = require('./env');
const app = require('./app');

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
