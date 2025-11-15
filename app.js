import express from 'express';
import { PORT, NODE_ENV } from './config/env.js';
import authRouter from './routes/auth.js';
import usersRouter from './routes/users.js';
import subsRouter from './routes/subs.js';
import connectToDatabase from './database/mongodb.js';
const app = express();

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/auth', authRouter);
app.use('api/v1/subscriptions', subsRouter);

app.get('/', (req, res) => {
    res.send("hello welcome");
});


app.listen(PORT, async () => {
    console.log(`subscription API is running in ${NODE_ENV} mode on http://localhost:${PORT}`);
    await connectToDatabase();
});

export default app;