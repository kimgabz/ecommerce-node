
const admin = require("firebase-admin");
const serviceAccount = require("../config/online-shopping-49d92.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;