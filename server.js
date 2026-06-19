const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors()); // Permite que o teu frontend aceda à API na Nuvem
app.use(express.json());

// O Render define a porta automaticamente através de process.env.PORT
const PORT = process.env.PORT || 3000;
const JOGOS_FILE = path.join(__dirname, 'jogos.json');

// Rota principal para o teu Frontend consumir
app.get('/api/jogos', (req, res) => {
    fs.readFile(JOGOS_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao ler os dados dos jogos" });
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}`);
});