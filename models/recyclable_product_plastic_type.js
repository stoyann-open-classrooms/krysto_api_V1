const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recyclable_product_plastic_type', {
    recyclable_product_plastic_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    recyclable_product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'recyclable_products',
        key: 'recyclable_products_id'
      }
    },
    plastic_type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'plastic-types',
        key: 'plastic-types_id'
      }
    }
  }, {
    sequelize,
    tableName: 'recyclable_product_plastic_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "recyclable_product_plastic_type_id" },
        ]
      },
      {
        name: "recyclable_product_plastic_type_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "recyclable_product_plastic_type_id" },
        ]
      },
      {
        name: "fk_recyclable_product_plastic_type_plastic-types1_idx",
        using: "BTREE",
        fields: [
          { name: "plastic_type_id" },
        ]
      },
      {
        name: "fk_recyclable_product_plastic_type_recyclable_products1_idx",
        using: "BTREE",
        fields: [
          { name: "recyclable_product_id" },
        ]
      },
    ]
  });
};
