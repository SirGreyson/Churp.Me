/**
 * Created by Greyson on 5/3/16.
 */

/**
 * Reference to Firebase database for user management
 * @type {Firebase}
 */
var root = new Firebase("http://magiccitycoders-c.firebaseio.com");
var users = root.child('users');

/**
 * Determines whether or not a requested username is in use
 * @param username - the Twitter username in question
 * @returns {Promise.<Boolean>|*}
 */
function userExists(username, context) {
    return users.once('value', function () {
    }, context).then(function (snapshot) {
        return {
            value: snapshot.hasChild(username),
            context: context
        }
    });
}

/**
 * Confirms a set of login credentials are valid
 * @param username - the user's supposed Twitter username
 * @param password - the user's supposed password
 * @returns {Promise.<Boolean>|*}
 */
function authorizeUser(username, password) {
    return users.once('value').then(function (snapshot) {
        if (!snapshot.hasChild(username)) {
            return false;
        }
        return password == snapshot.child(username).val()['password'];
    });
}

/**
 * Adds a new user to the Firebase database
 * @param username - the new user's Twitter username
 * @param password - the new user's predefined password
 */
function addUser(username, password) {
    users.child(username).set({password: password}, function (error) {
        if (error) {
            console.log("User could not be added.", error);
        } else {
            console.log("User " + username + " was successfully added");
        }
    });
}

/**
 * Removes an existing user from the Firebase database
 * @param username - the Twitter username of the user to remove
 */
function removeUser(username) {
    users.child(username).set({}, function (error) {
        if (error) {
            console.log("User could not be removed.", error);
        } else {
            console.log("User " + username + " was successfully removed");
        }
    });
}

/**
 * Updates the password of an existing user
 * @param username - the Twitter username of the user to update
 * @param newPass - the new user-defined password
 */
function updatePassword(username, newPass) {
    users.child(username).update({password: newPass}, function (error) {
        if (error) {
            console.log("User password could not be updated.", error);
        } else {
            console.log("User " + username + " successfully updated their password");
        }
    });
}