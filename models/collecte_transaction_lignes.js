const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collecte_transaction_lignes', {
    collecte_transaction_ligne_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'collecte_transaction_lignes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "collecte_transaction_ligne_id" },
        ]
      },
    ]
  });
};
