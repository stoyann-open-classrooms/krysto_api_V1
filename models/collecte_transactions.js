const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collecte_transactions', {
    collecte_transaction_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    date_transaction: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    transaction_ligne: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'collecte_transaction_lignes',
        key: 'collecte_transaction_ligne_id'
      }
    },
    collecte_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'collectes',
        key: 'collecte_id'
      }
    }
  }, {
    sequelize,
    tableName: 'collecte_transactions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "collecte_transaction_id" },
        ]
      },
      {
        name: "fk_collecte_transactions_collecte_transaction_lignes1_idx",
        using: "BTREE",
        fields: [
          { name: "transaction_ligne" },
        ]
      },
      {
        name: "fk_collecte_transactions_collectes1_idx",
        using: "BTREE",
        fields: [
          { name: "collecte_id" },
        ]
      },
    ]
  });
};
