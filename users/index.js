const fs = require('fs');
const uniqid = require('uniqid');

const usersFilePath = 'index.js';

// Function to read the users from the JSON file
function getUsers() {
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
}

// Function to write the users to the JSON file
function saveUsers(users) {
  const data = JSON.stringify(users);
  fs.writeFileSync(usersFilePath, data);
}

// Function to create a new user
function createUser(name, email) {
  const id = uniqid();
  const newUser = { id, name, email };
  const users = getUsers();
  users.push(newUser);
  saveUsers(users);
  return newUser;
}

// Function to read a user by ID
function readUser(id) {
  const users = getUsers();
  return users.find(user => user.id === id);
}

// Function to update a user by ID
function updateUser(id, name, email) {
  const users = getUsers();
  const index = users.findIndex(user => user.id === id);
  if (index === -1) {
    return null; // User not found
  }
  const updatedUser = { id, name, email };
  users[index] = updatedUser;
  saveUsers(users);
  return updatedUser;
}

// Function to delete a user by ID
function deleteUser(id) {
  const users = getUsers();
  const index = users.findIndex(user => user.id === id);
  if (index === -1) {
    return false; // User not found
  }
  users.splice(index, 1);
  saveUsers(users);
  return true;
}

// Usage example
const newUser = createUser('John Doe', 'john@example.com');
console.log(newUser); // { id: '6038d35c90fc9b001515f775', name: 'John Doe', email: 'john@example.com' }

const user = readUser(newUser.id);
console.log(user); // { id: '6038d35c90fc9b001515f775', name: 'John Doe', email: 'john@example.com' }

const updatedUser = updateUser(newUser.id, 'Jane Doe', 'jane@example.com');
console.log(updatedUser); // { id: '6038d35c90fc9b001515f775', name: 'Jane Doe', email: 'jane@example.com' }

const deleted = deleteUser(newUser.id);
console.log(deleted); // true
