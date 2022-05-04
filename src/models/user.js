module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Vous devez entrer un email valide !",
          }
        }},
      pwd: {
        type: DataTypes.STRING.BINARY ,
        allowNull: false
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }