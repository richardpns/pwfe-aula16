const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/authenticate', async (req, res) => {
  const { code } = req.body;
  const clientID = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const response = await axios.post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: clientID,
        client_secret: clientSecret,
        code,
      },
      {
        headers: {
          accept: 'application/json',
        },
      }
    );

    const { access_token } = response.data;
    res.json({ token: access_token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));