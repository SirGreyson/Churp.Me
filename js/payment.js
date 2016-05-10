/**
 * Created by Greyson on 5/9/16.
 */

/**
 * Reference to Firebase database for user campaign management
 * @type {Firebase}
 */
var root = new Firebase("http://magiccitycoders-c.firebaseio.com/users/admin");
var payment = root.child('payment');

/**
 * Gets the admin user's payment information
 * @param context - the module element's context
 * @returns {*|Promise.<TResult>}
 */
function getPayment(context) {
    return payment.once("value", function () {
    }, context).then(function (snapshot) {
        return {
            context: context,
            email: snapshot.child("email").val(),
            password: snapshot.child("password").val(),
            balance: snapshot.child("balance").val().toLocaleString('en', {style: "currency", currency: "USD"})
        }
    });
}

/**
 * Adds a new payment information to the database
 * @param email - the payment account email address
 * @param password - the payment account password
 */
function addPayment(email, password) {
    payment.set({email: email, password: password, balance: 867.72}, function (error) {
        if (error) {
            console.log("User payment could not be added.", error);
        } else {
            console.log("User payment was successfully added");
        }
    });
}

/**
 * Removes an existing payment account from the database
 */
function removePayment() {
    payment.set({}, function (error) {
        if (error) {
            console.log("User payment could not be removed.", error);
        } else {
            console.log("User payment was successfully removed");
        }
    });
}

function updatePayment(email, password) {

}
