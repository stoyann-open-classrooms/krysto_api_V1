const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    products_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ref: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    plastic_type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'plastic-types',
        key: 'plastic-types_id'
      }
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "products_id" },
        ]
      },
      {
        name: "products_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "products_id" },
        ]
      },
      {
        name: "fk_products_plastic-types1_idx",
        using: "BTREE",
        fields: [
          { name: "plastic_type_id" },
        ]
      },
    ]
  });
};
