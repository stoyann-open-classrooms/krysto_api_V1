const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('color_products', {
    color_products_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    color_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'colors',
        key: 'color_id'
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
    tableName: 'color_products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "color_products_id" },
        ]
      },
      {
        name: "color_products_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "color_products_id" },
        ]
      },
      {
        name: "fk_color_products_colors1_idx",
        using: "BTREE",
        fields: [
          { name: "color_id" },
        ]
      },
      {
        name: "fk_color_products_products1_idx",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
