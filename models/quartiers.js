const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quartiers', {
    quartier_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(55),
      allowNull: false,
      unique: "name_UNIQUE"
    },
    ville_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'villes',
        key: 'villes_id'
      }
    }
  }, {
    sequelize,
    tableName: 'quartiers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "quartier_id" },
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
        name: "fk_quartiers_villes1_idx",
        using: "BTREE",
        fields: [
          { name: "ville_id" },
        ]
      },
    ]
  });
};
