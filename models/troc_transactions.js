const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('troc_transactions', {
    troc_transaction_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    crediteur: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'trocs',
        key: 'author_id'
      }
    },
    debiteur: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'troc_transactions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "troc_transaction_id" },
        ]
      },
      {
        name: "fk_troc_transactions_trocs1_idx",
        using: "BTREE",
        fields: [
          { name: "crediteur" },
        ]
      },
      {
        name: "fk_troc_transactions_users1_idx",
        using: "BTREE",
        fields: [
          { name: "debiteur" },
        ]
      },
    ]
  });
};
