module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("user", {

        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true

        },  

       username: {
          type: DataTypes.STRING(50),
          allowNull: true

        },

        email: {
          autoIncrement: false,
          type: DataTypes.STRING(50),
          allowNull: false,
          primaryKey: false

        },

        password : {
          autoIncrement: false,
          type: DataTypes.STRING(50),
          allowNull: false,
          primaryKey: false
        },

  }, {

    sequelize,
    tableName: 'user',
    timestamps: true,
    indexes: [

      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });



  return User;

}; 