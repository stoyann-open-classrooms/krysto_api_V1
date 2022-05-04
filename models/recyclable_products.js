const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recyclable_products', {
    recyclable_products_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "name_UNIQUE"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    marque_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'marques',
        key: 'marques_id'
      }
    }
  }, {
    sequelize,
    tableName: 'recyclable_products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "recyclable_products_id" },
        ]
      },
      {
        name: "recyclable_products_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "recyclable_products_id" },
        ]
      },
      {
        name: "name_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "fk_recyclable_products_marques1_idx",
        using: "BTREE",
        fields: [
          { name: "marque_id" },
        ]
      },
    ]
  });
};
