const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Données statiques (index.html dans public/)
app.use(express.static(path.join(__dirname, "public")));

// API pour récupérer le Selfie Code
app.get("/api/getSelfieCode", (req, res) => {
    // Simulez un selfie code pour le test
    const selfieCode = "SELFIE12345"; // Remplacez par une logique réelle
    res.json({ code: selfieCode });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
