const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques depuis le dossier "public"
app.use(express.static('public'));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
