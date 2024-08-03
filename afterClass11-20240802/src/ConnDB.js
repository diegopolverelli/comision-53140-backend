import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('basePrueba2', 'root', '123', {
    host: 'localhost',
    dialect: "mysql", port: "3306",
    logging:false
});

try {
    await sequelize.authenticate();
    console.log('DB online...!!!');
  } catch (error) {
    console.error('Error:', error.message);
  }