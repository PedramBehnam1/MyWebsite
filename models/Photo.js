// const Sequelize = require('sequelize');
// const sequelize = require('../database/connection');

// module.exports = sequelize.define("Photo" ,{
//     id: {
//         type: Sequelize.DataTypes.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: Sequelize.DataTypes.STRING,
//     image: {type: Sequelize.DataTypes.STRING, allowNull: false}
// });
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize)=>{
    class Photo extends Model {}
    Photo.init(
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: Sequelize.STRING,
            image: {type: Sequelize.STRING, allowNull: false},
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        },
        { 
            sequelize, 
            timestamps: false ,
            modelName: 'Photo',
            tableName:'photos'
        }
    )
    return Photo;

}