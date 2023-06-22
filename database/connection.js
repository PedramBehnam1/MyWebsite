const Sequelize  = require('sequelize');


const sequelize = new Sequelize("MyWebsite","root","p65p2RtwzvXpJS3Fi3k2IJW5",{
    host:"billy.iran.liara.ir" ,
    dialect:"mysql" ,
    operatorsAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;