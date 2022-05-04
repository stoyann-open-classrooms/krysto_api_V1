const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plastic-types', {
    'plastic-types_id': {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plastic-types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plastic-types_id" },
        ]
      },
      {
        name: "plastic-types_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plastic-types_id" },
        ]
      },
    ]
  });
};
