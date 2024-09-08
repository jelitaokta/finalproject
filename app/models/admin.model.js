module.exports = (sequelize, DataTypes) => {

    const Admin = sequelize.define("admin", {
  
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
  
          password: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },
  
          role: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },
  
    }, {
  
      sequelize,
      tableName: 'admin',
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
  
  
  
    return Admin;
  
  }; 