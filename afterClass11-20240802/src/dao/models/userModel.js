import { DataTypes } from "sequelize";
// const sequelize = new Sequelize('sqlite::memory:');
import { sequelize } from '../../ConnDB.js';

export const modeloUsuarios = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, unique: true
    },
  },
  {
    // Other model options go here
    timestamps: true
  },
);

