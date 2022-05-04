const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asociations', {
    associations_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    adresse_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'adresses',
        key: 'adresse_id'
      }
    }
  }, {
    sequelize,
    tableName: 'asociations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "associations_id" },
        ]
      },
      {
        name: "fk_asociations_adresses1_idx",
        using: "BTREE",
        fields: [
          { name: "adresse_id" },
        ]
      },
    ]
  });
};
