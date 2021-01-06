const { Sequelize } = require('sequelize');


module.exports = (sequelize)=>{
  return sequelize.define('Comment',{
    title: Sequelize.STRING,
    description: Sequelize.TEXT
  });

}

