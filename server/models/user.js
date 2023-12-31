const con = require("./db_connect");

async function createTable(){
  let sql = `CREATE TABLE IF NOT EXISTS User(
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  )`
  await con.query(sql);
}

createTable()

// CRUD
// Read - Login User 

// Testing out login function
// let newUser = {
//   username: "cathy123",
//   password: "icecream"
// }

// login(newUser);

async function login(user) {
  let userResult = await getUser(user.userName)
  console.log(user.userName);
  if(!userResult[0]) throw Error("Username not found!!")
  if(userResult[0].password != user.password) throw Error("Password Incorrect!!")
  return userResult[0]
}

// Register (Create) New User
async function register(user) {
    try {
      let userResult = await getUser(user.userName);
  
      // Check if the username already exists
      if (userResult.length > 0) {
        throw Error("Username already in use!!");
      }
  
      // Continue with the registration process if the username is unique
      let sql =`INSERT INTO User (userName, firstName, lastName, password)
      VALUES ("${user.userName}", "${user.firstName}", "${user.lastName}", "${user.password}");
    `;
  
      await con.query(sql);
      
      // Fetch the newly registered user for response
      const newUser = await getUser(user.userName);
      return { ...newUser[0], Password: undefined };
    } catch (error) {
      console.error('Error in register:', error);
      throw error;
    }
  }
  
  

// Update - CRUD
async function editUser(user) {
  let updatedUser = await getUser(user.userName)
  if(updatedUser.length > 0) throw Error("Username not available!")

  let sql = `UPDATE users
    SET UserName = "${user.userName}"
    WHERE UserId = ${user.UserId}
  `
  await con.query(sql)
  updatedUser = await getUser(user.username)
  return updatedUser[0]
}

// Delete User 
async function deleteUser(user) {
  let sql = `DELETE FROM User
    WHERE userID = ${user.userID}
  `
  await con.query(sql)
}

// Useful functions
async function getUser(username) {
  let sql = `
    SELECT * FROM User
    WHERE UserName = "${username}" 
  `
  console.log('SQL Query:', sql);
  return await con.query(sql);

}

module.exports = {login, register, editUser, deleteUser,getUser}