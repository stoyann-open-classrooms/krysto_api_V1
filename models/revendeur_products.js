const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('revendeur_products', {
    revendeur_products_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    revendeur_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'revendeurs',
        key: 'revendeur_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'products',
        key: 'products_id'
      }
    }
  }, {
    sequelize,
    tableName: 'revendeur_products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "revendeur_products_id" },
        ]
      },
      {
        name: "revendeur_products_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "revendeur_products_id" },
        ]
      },
      {
        name: "fk_revendeur_products_revendeurs1_idx",
        using: "BTREE",
        fields: [
          { name: "revendeur_id" },
        ]
      },
      {
        name: "fk_revendeur_products_products1_idx",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
