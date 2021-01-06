const path = require("path");
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname,'../db.sqlite')
  });

  // require all model below

  const Project = require('./Project')(sequelize)


sequelize.authenticate()
.then(()=>console.log("database connected sucessful"))
.catch((err)=>console.log("error occurred"))


sequelize.sync()
.then(()=>{
  
  Project.create({
    title:'this is a title',
    description:"test description"
  }).then(()=>{
    console.log("done")
  }).catch((err)=>console.log(err))

})
.catch((err)=>{
  console.error('Unable to connect to the database:', err);

})
  




  