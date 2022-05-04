const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('super_troc_images', {
    super_troc_images_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    image_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'images',
        key: 'image_id'
      }
    },
    super_troc_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'super_trocs',
        key: 'super_trocs_id'
      }
    }
  }, {
    sequelize,
    tableName: 'super_troc_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "super_troc_images_id" },
        ]
      },
      {
        name: "super_troc_images_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "super_troc_images_id" },
        ]
      },
      {
        name: "fk_super_troc_images_images1_idx",
        using: "BTREE",
        fields: [
          { name: "image_id" },
        ]
      },
      {
        name: "fk_super_troc_images_super_trocs1_idx",
        using: "BTREE",
        fields: [
          { name: "super_troc_id" },
        ]
      },
    ]
  });
};
