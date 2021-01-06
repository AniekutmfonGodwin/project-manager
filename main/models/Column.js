const { Sequelize } = require('sequelize');


module.exports = (sequelize)=>{
  return sequelize.define('Column',{
    title: Sequelize.STRING,
    description: Sequelize.TEXT
  });
}

