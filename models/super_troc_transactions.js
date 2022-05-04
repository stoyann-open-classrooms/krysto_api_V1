const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('super_troc_transactions', {
    super_troc_transaction_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    debiteur: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
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
    tableName: 'super_troc_transactions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "super_troc_transaction_id" },
        ]
      },
      {
        name: "fk_super_troc_transactions_users1_idx",
        using: "BTREE",
        fields: [
          { name: "debiteur" },
        ]
      },
      {
        name: "fk_super_troc_transactions_super_trocs1_idx",
        using: "BTREE",
        fields: [
          { name: "super_troc_id" },
        ]
      },
    ]
  });
};
