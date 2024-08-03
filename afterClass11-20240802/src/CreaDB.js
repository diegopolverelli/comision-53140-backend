import { Sequelize } from "sequelize"

const sequelize = new Sequelize('', 'root', '123', {
    host: 'localhost',
    dialect: "mysql", port: "3306"
});

const dbName="basePrueba2"

async function creaDB(){
    try {
        let resultado=await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`)
        console.log(resultado)
        console.log("DB creada...!!!")
    } catch (error) {
        console.log(error.messsage)
    } finally {
        sequelize.close()
    }
}

creaDB()