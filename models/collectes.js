const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collectes', {
    collecte_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    date_collecte: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    demande_par: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    employe_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'employee_id'
      }
    }
  }, {
    sequelize,
    tableName: 'collectes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "collecte_id" },
        ]
      },
      {
        name: "fk_collectes_users1_idx",
        using: "BTREE",
        fields: [
          { name: "demande_par" },
        ]
      },
      {
        name: "fk_collectes_employee1_idx",
        using: "BTREE",
        fields: [
          { name: "employe_id" },
        ]
      },
    ]
  });
};
