const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_images', {
    product_images_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'products',
        key: 'products_id'
      }
    },
    image_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'images',
        key: 'image_id'
      }
    }
  }, {
    sequelize,
    tableName: 'product_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_images_id" },
        ]
      },
      {
        name: "product_images_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_images_id" },
        ]
      },
      {
        name: "fk_product_images_images1_idx",
        using: "BTREE",
        fields: [
          { name: "image_id" },
        ]
      },
      {
        name: "fk_product_images_products1_idx",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
