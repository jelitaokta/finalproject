module.exports = (sequelize, DataTypes) => {

    const Pengalaman = sequelize.define("pengalaman", {
  
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  
  
         perusahaan: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
  
          posisi: {
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

          tgl_selesai: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },

          tanggung_jawab: {
            autoIncrement: false,
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false
          },
  
    }, {
  
      sequelize,
      tableName: 'pengalaman',
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
  
  
  
    return Pengalaman;
  
  }; 