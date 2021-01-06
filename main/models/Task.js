const { Sequelize } = require('sequelize');




module.exports = (sequelize)=>{
  return sequelize.define('Task',{
    name: Sequelize.STRING,
    isPrivate: Sequelize.BOOLEAN,
    dueDate: Sequelize.DATE,
    completed: Sequelize.BOOLEAN
  });
  
}

