let users
let sessions

export default class UsersDAO {
  static async injectDB(conn) {
    if (users && sessions) {
      return
    }
    try {
      users = await conn.db(process.env.DB).collection("users")
    //   sessions = await conn.db(process.env.DB).collection("sessions")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async getUsers() {
    return await users.find({}).project({ username: 1, fullname: 1, current_loc: 1, job_title:1, company: 1, })
  }

  static async getUser(username) {
    // Retrieve the user document corresponding with the user's username.
    // There are couple UUID we can use to identify user: username, email, _id. 
    return await users.findOne({ username: username })
  }

  static async getUserByEmail(email) {
    // Retrieve the user document corresponding with the user's username.
    // There are couple UUID we can use to identify user: username, email, _id. 
    let res = await users.findOne({ email: email })
    if (res == null) {
      await users.insertOne({ email: email, username: email })
      res = await users.findOne({ email: email})
    }
    return res
  }

  // update user information
  static async updateUserInfo(username, email, info) {
    try {  
      const updateResponse = await users.updateOne(
        { username: username, email: email },
        { $set:  info  },
        { upsert: false }
      )

      if (updateResponse.matchedCount === 0) {
        return { error: "No user found with that email" }
      }
      return { error: null }
    } catch (e) {
      console.error(
        `An error occurred while updating this user's information, ${e}`,
      )
      return { error: e }
    }
  }

  // Temporary function for Android. use only email to identify users.
  static async updateUserInfoMobile(email, info) {
    try {  
      const updateResponse = await users.updateOne(
        { email: email },
        { $set:  info  },
        { upsert: false }
      )

      if (updateResponse.matchedCount === 0) {
        return { error: "No user found with that email" }
      }
      return { error: null }
    } catch (e) {
      console.error(
        `An error occurred while updating this user's information, ${e}`,
      )
      return { error: e }
    }
  }




  //--------------------------------- below is not used -------------------------------------

  /**
   * Adds a user to the `users` collection
   * @param {UserInfo} userInfo - The information of the user to add
   * @returns {DAOResponse} Returns either a "success" or an "error" Object
   */
  static async addUser(userInfo) {
    /**
    Ticket: Durable Writes
    Please increase the durability of this method by using a non-default write
    concern with ``insertOne``.
    */

    try {
      // TODO Ticket: User Management
      // Insert a user with the "name", "email", and "password" fields.
      // TODO Ticket: Durable Writes
      // Use a more durable Write Concern for this operation.
      await users.insertOne({ 
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
       }, 
       {w: 2})
      return { success: true }
    } catch (e) {
      if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
        return { error: "A user with the given email already exists." }
      }
      console.error(`Error occurred while adding new user, ${e}.`)
      return { error: e }
    }
  }

  /**
   * Adds a user to the `sessions` collection
   * @param {string} email - The email of the user to login
   * @param {string} jwt - A JSON web token representing the user's claims
   * @returns {DAOResponse} Returns either a "success" or an "error" Object
   */
  static async loginUser(email, jwt) {
    try {
      // TODO Ticket: User Management
      // Use an UPSERT statement to update the "jwt" field in the document,
      // matching the "user_id" field with the email passed to this function.
      await sessions.updateOne(
        { user_id: email },
        { $set: { jwt: jwt } },
      )
      return { success: true }
    } catch (e) {
      console.error(`Error occurred while logging in user, ${e}`)
      return { error: e }
    }
  }

  /**
   * Removes a user from the `sessons` collection
   * @param {string} email - The email of the user to logout
   * @returns {DAOResponse} Returns either a "success" or an "error" Object
   */
  static async logoutUser(email) {
    try {
      // TODO Ticket: User Management
      // Delete the document in the `sessions` collection matching the email.
      await sessions.deleteOne({ user_id: email })
      return { success: true }
    } catch (e) {
      console.error(`Error occurred while logging out user, ${e}`)
      return { error: e }
    }
  }

  /**
   * Gets a user from the `sessions` collection
   * @param {string} email - The email of the user to search for in `sessions`
   * @returns {Object | null} Returns a user session Object, an "error" Object
   * if something went wrong, or null if user was not found.
   */
  static async getUserSession(email) {
    try {
      // TODO Ticket: User Management
      // Retrieve the session document corresponding with the user's email.
      return sessions.findOne({ user_id: email })
    } catch (e) {
      console.error(`Error occurred while retrieving user session, ${e}`)
      return null
    }
  }

  /**
   * Removes a user from the `sessions` and `users` collections
   * @param {string} email - The email of the user to delete
   * @returns {DAOResponse} Returns either a "success" or an "error" Object
   */
  static async deleteUser(email) {
    try {
      await users.deleteOne({ email })
      await sessions.deleteOne({ user_id: email })
      if (!(await this.getUser(email)) && !(await this.getUserSession(email))) {
        return { success: true }
      } else {
        console.error(`Deletion unsuccessful`)
        return { error: `Deletion unsuccessful` }
      }
    } catch (e) {
      console.error(`Error occurred while deleting user, ${e}`)
      return { error: e }
    }
  }

  /**
   * Given a user's email and an object of new preferences, update that user's
   * data to include those preferences.
   * @param {string} email - The email of the user to update.
   * @param {Object} preferences - The preferences to include in the user's data.
   * @returns {DAOResponse}
   */
  static async updatePreferences(email, preferences) {
    try {
      /**
      Ticket: User Preferences
      Update the "preferences" field in the corresponding user's document to
      reflect the new information in preferences.
      */

      preferences = preferences || {}

      // TODO Ticket: User Preferences
      // Use the data in "preferences" to update the user's preferences.
      const updateResponse = await users.updateOne(
        { email: email },
        { $set: { preferences: preferences } },
        { upsert: true }
      )

      if (updateResponse.matchedCount === 0) {
        return { error: "No user found with that email" }
      }
      return updateResponse
    } catch (e) {
      console.error(
        `An error occurred while updating this user's preferences, ${e}`,
      )
      return { error: e }
    }
  }

  static async checkAdmin(email) {
    try {
      const { isAdmin } = await this.getUser(email)
      return isAdmin || false
    } catch (e) {
      return { error: e }
    }
  }

  static async makeAdmin(email) {
    try {
      const updateResponse = users.updateOne(
        { email },
        { $set: { isAdmin: true } },
      )
      return updateResponse
    } catch (e) {
      return { error: e }
    }
  }
}

/**
 * Parameter passed to addUser method
 * @typedef UserInfo
 * @property {string} name
 * @property {string} email
 * @property {string} password
 */

/**
 * Success/Error return object
 * @typedef DAOResponse
 * @property {boolean} [success] - Success
 * @property {string} [error] - Error
 */