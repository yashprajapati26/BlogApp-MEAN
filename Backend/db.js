const Sequelize = require("sequelize");

const sequelize = new Sequelize(
 'mitesh_sathvara4',
 'mitesh_sathvara',
 'deep70',
  {
    host: "radixusers2.com", 
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize