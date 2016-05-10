/**
 * Created by Greyson on 5/9/16.
 */

/**
 * Reference to Firebase database for user campaign management
 * @type {Firebase}
 */
var root = new Firebase("http://magiccitycoders-c.firebaseio.com/users/admin");
var campaigns = root.child('campaigns');

/**
 * Return a list of objects representing campaigns from the database
 * @param context - the module element's context
 * @returns {*|Promise.<TResult>}
 */
function getCampaigns(context) {
    return campaigns.once("value", function () {
    }, context).then(function (snapshot) {
        return {
            value: snapshot.val(),
            context: context
        }
    })
}

/**
 * Adds a campaign with the specified criteria to the database
 * @param hashtag - the hashtag to use when supporting the campaign
 * @param target - the target amount of money to raise for the campaign
 * @param title - the title of the campaign
 */
function addCampaign(hashtag, target, title) {
    campaigns.push().set({balance: 0, hashtag: hashtag, target: target, title: title, transactions: []});
}

/**
 * Removes an existing campaign from the database
 * @param id - the id of the campaign to remove
 */
function removeCampaign(id) {
    //TODO Make this auto-update campaign page
    campaigns.child(id).set({});
}

/**
 * Adds a transaction to an existing campaign in the database
 * @param id - the id of the campaign to add to
 * @param amount - the amount of money for this transaction
 * @param username - the Twitter handle of the donating user
 */
function addTransaction(id, amount, username) {
    campaigns.child(id + "/transactions").push().set({amount: amount, username: username, timestamp: Date.now()});
}