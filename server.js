const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// ⚠️ COLLEZ VOTRE TOKEN ICI (depuis Postman, voir étape 4)
const BC_TOKEN = "VOTRE_TOKEN_ICI";

const BC_API = "https://api.businesscentral.dynamics.com/v2.0/c0c1558d-dd94-4514-b669-e334b8d8bf97/SANDBOX/api/mbengue/fleet/v1.0/veicoli?company=CRONUS%20IT";

app.use(express.static(path.join(__dirname, 'public')));

// Proxy vers Business Central
app.get('/api/veicoli', async (req, res) => {
    try {
        const response = await fetch(BC_API, {
            headers: {
                'Authorization': `Bearer ${BC_TOKEN}`,
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`🚗 Fleet Manager → http://localhost:${PORT}`));