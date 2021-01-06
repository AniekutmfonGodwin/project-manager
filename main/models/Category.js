const { Sequelize } = require('sequelize');

module.exports = (sequelize)=>{
  return sequelize.define('Category',{
    title: Sequelize.STRING,
    description: Sequelize.TEXT
  });

}




