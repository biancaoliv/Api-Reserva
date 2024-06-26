const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const { PORT, ENV } = require('./config/constants');
const app = express();

require('./database');
app.use(morgan('dev'));
app.use(express.json());

app.use(routes);

app.use((req, res, next) => {
    const erro = new Error('Recurso não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        erro: {
            mensagem: error.message,
        },
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} with ${ENV} environment`);
});