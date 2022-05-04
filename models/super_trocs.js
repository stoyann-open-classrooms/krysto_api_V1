const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('super_trocs', {
    super_trocs_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    author: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'partenaires',
        key: 'partenaire_id'
      }
    }
  }, {
    sequelize,
    tableName: 'super_trocs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "super_trocs_id" },
        ]
      },
      {
        name: "super_trocs_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "super_trocs_id" },
        ]
      },
      {
        name: "fk_super_trocs_partenaires1_idx",
        using: "BTREE",
        fields: [
          { name: "author" },
        ]
      },
    ]
  });
};
