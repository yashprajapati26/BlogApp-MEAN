const sequelize = require('../db')
const DataTypes = require('sequelize')

const Post = sequelize.define("post", {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   content: {
     type: DataTypes.STRING,
     allowNull: false
   },
   username: {
     type: DataTypes.STRING,
   }
});

// sequelize.sync().then(() => {
//     console.log('Post table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });
 

module.exports = Post;