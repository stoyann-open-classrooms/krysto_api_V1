const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adresses', {
    adresse_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    adresse: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'adresses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "adresse_id" },
        ]
      },
      {
        name: "fk_adresses_villes1_idx",
        using: "BTREE",
        fields: [
          { name: "ville_id" },
        ]
      },
    ]
  });
};
