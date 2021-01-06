const { Sequelize } = require('sequelize');


module.exports=function (sequelize) {
  return sequelize.define('Project',{
    title: Sequelize.STRING,
    description: Sequelize.TEXT
  });

  
}


