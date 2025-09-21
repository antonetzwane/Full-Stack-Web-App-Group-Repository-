import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('API is running'));

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));

