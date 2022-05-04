const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dons', {
    don_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    montant: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    association_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'asociations',
        key: 'associations_id'
      }
    },
    donnateur: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'dons',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "don_id" },
        ]
      },
      {
        name: "fk_dons_asociations1_idx",
        using: "BTREE",
        fields: [
          { name: "association_id" },
        ]
      },
      {
        name: "fk_dons_users1_idx",
        using: "BTREE",
        fields: [
          { name: "donnateur" },
        ]
      },
    ]
  });
};
