app.get("/api/getSelfieCode", (req, res) => {
    const selfieCode = "fouad"; // Simule un selfie code
    res.json({ code: selfieCode });
});
