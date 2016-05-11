/**
 * Created by Greyson on 5/5/16.
 */

function showSettings() {
    $('settings-module').show();
    $('campaign-module').hide();
}

function showCampaigns() {
    $('settings-module').hide();
    $('campaign-module').show();
}

function parseDate(date) {
    return Date.parse(date);
}

function parseTimestamp(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1) + "/" + (date.getDate() + 1) + "/" + date.getFullYear();
}

function getCalString(date) {
    var dateString = parseTimestamp(date);
    var args = dateString.split("/");
    return args[2] + "-" + args[0] + "-" + args[1];
}
