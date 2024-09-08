module.exports = (sequelize, DataTypes) => {

    const Contact = sequelize.define("contact", {
  
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
  
          },  
  
         nama: {
            type: DataTypes.STRING(50),
            allowNull: true
  
          },
  
          email: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
  
          },
  
          pesan : {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },
  
    }, {
  
      sequelize,
      tableName: 'contact',
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
  
  
  
    return Contact;
  
  }; 