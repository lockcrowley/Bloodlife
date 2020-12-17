module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'blood_life',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};