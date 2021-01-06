const { Sequelize } = require('sequelize');


module.exports = (sequelize)=>{
  return sequelize.define('Project',{
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    
  });
}



