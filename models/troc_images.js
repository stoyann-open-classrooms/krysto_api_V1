const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('troc_images', {
    troc_images_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    troc_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'trocs',
        key: 'troc_id'
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
    tableName: 'troc_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "troc_images_id" },
        ]
      },
      {
        name: "troc_images_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "troc_images_id" },
        ]
      },
      {
        name: "fk_troc_images_images1_idx",
        using: "BTREE",
        fields: [
          { name: "image_id" },
        ]
      },
      {
        name: "fk_troc_images_trocs1_idx",
        using: "BTREE",
        fields: [
          { name: "troc_id" },
        ]
      },
    ]
  });
};
