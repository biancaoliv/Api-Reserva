module.exports = {
    production: {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        define: {
            timestamp: true,
            underscored: true,
        },
    },
    development: {
        dialect: 'sqlite',
        storage: './src/database/database.sqlite',
    },
};
