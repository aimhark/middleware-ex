import express from 'express';
const app = express();
const port = 5000;
import usersRouter from './routes/usersRouter.js';
import sanitizeUser from '.routes/sanitizeRouter.js';

// express middleware
app.use(express.json());

// ROUTES
app.use('/users', usersRouter);
app.use('/validateUser', validateRouter);
app.use('/sanitizeUser', sanitizeRouter);

app.listen(port, () => {
    console.log('server successfully started');
})

// ERROR HANDLING
app.use(
    function errorHandler (err, req, res, next) {
        res.status(err.status).send({
            error: {
                message: err.message,
                status: err.status
            }
        });
    }
)