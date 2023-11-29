// models/BarangModel.js
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Barang = db.define(
  "barang",
  {
    KodeBarang: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    NamaBarang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Satuan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    HargaSatuan: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Stok: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Barang;

// Ensure the synchronization of the model with the database
(async () => {
  await db.sync();
})();
