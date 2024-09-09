// Import the list of users from another file named 'UserList.js'
import users from './UserList';

// Define a class named Users to manage user data and operations
class Users {
  // The constructor is called when we create a new instance of the Users class
  constructor() {
    // Create a copy of the imported users array to avoid modifying the original data
    this.users = [...users];
  }

  // This method checks if a user object has all the required fields and correct data types
  validateUser(user) {
    // List of fields that every user must have
    const requiredFields = ['name', 'budget', 'school', 'lifestyle', 'residencyType'];
    // Check if each required field exists in the user object
    for (let field of requiredFields) {
      if (!user[field]) throw new Error(`Missing required field: ${field}`);
    }
    // Check if the budget is a number
    if (typeof user.budget !== 'number') throw new Error('Budget must be a number');
  }

  // CREATE: This method adds a new user to the list
  createUser(newUser) {
    // First, check if the new user data is valid
    this.validateUser(newUser);
    // If valid, add the new user to the list
    this.users.push(newUser);
    // Return the newly created user
    return newUser;
  }

  // RETRIEVE: This method returns all users
  getAllUsers() {
    return this.users;
  }

  // RETRIEVE: This method finds users from a specific school
  getUsersBySchool(school) {
    // Use the filter method to create a new array with all users from the specified school
    return this.users.filter(user => user.school === school);
  }

  // RETRIEVE: This method finds a specific user by their name
  getUserByName(name) {
    // Use the find method to get the first user with the specified name
    return this.users.find(user => user.name === name);
  }

  // UPDATE: This method updates a user's information
  updateUser(name, updatedInfo) {
    // Find the index of the user with the specified name
    const userIndex = this.users.findIndex(user => user.name === name);
    // If no user is found, throw an error
    if (userIndex === -1) throw new Error('User not found');
    // Create a new user object by combining the old data with the updated info
    const updatedUser = { ...this.users[userIndex], ...updatedInfo };
    // Check if the updated user data is valid
    this.validateUser(updatedUser);
    // If valid, update the user in the list
    this.users[userIndex] = updatedUser;
    // Return the updated user
    return updatedUser;
  }

  // DELETE: This method removes a user from the list
  deleteUser(name) {
    // Find the index of the user with the specified name
    const userIndex = this.users.findIndex(user => user.name === name);
    // If no user is found, throw an error
    if (userIndex === -1) throw new Error('User not found');
    // Remove the user from the list and return the removed user
    return this.users.splice(userIndex, 1)[0];
  }

  // FIND: This method finds users by budget range
  findUsersByBudgetRange(targetBudget) {
    // Define the maximum budget range to be $50 above the target budget
    const max = targetBudget + 50;

    // Filter users to find those within the target budget and $50 above
    return this.users.filter(user => user.budget >= targetBudget && user.budget <= max);
  }

  // FIND: This method finds users with a specific lifestyle
  getUsersByLifestyle(lifestyle) {
    // Use the filter method to create a new array with all users with the specified lifestyle
    return this.users.filter(user => user.lifestyle === lifestyle);
  }

  // FIND: This method finds users with a specific residency type
  getUsersByResidencyType(residencyType) {
    // Use the filter method to create a new array with all users with the specified residency type
    return this.users.filter(user => user.residencyType === residencyType);
  }

  // FIND: This method finds users by multiple criteria
  findUsersByCriteria(targetBudget, lifestyle, residencyType) {
    // Define the maximum budget range to be $50 above the target budget
    const maxBudget = targetBudget + 50;

    // Filter users to find those matching the target budget, lifestyle, and residency type
    return this.users.filter(user => 
        user.budget >= targetBudget && 
        user.budget <= maxBudget &&
        user.lifestyle === lifestyle &&
        user.residencyType === residencyType
    );
  }
}

// Export the Users class so it can be used in other parts of the application
export default Users;
