const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trocs', {
    troc_id: {
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
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    author_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    category: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'troc_categories',
        key: 'troc_categories_id'
      }
    }
  }, {
    sequelize,
    tableName: 'trocs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "troc_id" },
        ]
      },
      {
        name: "fk_trocs_users_idx",
        using: "BTREE",
        fields: [
          { name: "author_id" },
        ]
      },
      {
        name: "fk_trocs_troc_categories1_idx",
        using: "BTREE",
        fields: [
          { name: "category" },
        ]
      },
    ]
  });
};
