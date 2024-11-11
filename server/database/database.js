import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Файл базы данных
});

const initDb = async () => {
    await sequelize.sync({ force: false }); // force: true - пересоздаст таблицы при каждом запуске
};

export { sequelize, initDb };
