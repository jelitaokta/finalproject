module.exports = (sequelize, DataTypes) => {

    const Pendidikan = sequelize.define("pendidikan", {
  
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true 
          },  
  
         institusi: {
            type: DataTypes.STRING,
            allowNull: true 
          },
  
          bidang_studi: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },
  
          tgl_mulai : {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },

          tgl_selesai : {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },
  
    }, {
  
      sequelize,
      tableName: 'pendidikan',
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
  
  
  
    return Pendidikan;
  }; 