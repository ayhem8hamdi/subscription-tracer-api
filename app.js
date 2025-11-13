import express from 'express';
const app = express();
import { PORT, NODE_ENV } from './config/env.js';

app.get('/', (req, res) => {
    res.send("hello welcome");
});


app.listen(PORT, () => {
    console.log(`subscription API is running in ${NODE_ENV} mode on http://localhost:${PORT}`);
});

export default app;