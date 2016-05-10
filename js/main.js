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


function checkDate() {
    var date = $('#completion-date-input').val();
    var tag = $('#campaign-hashtag-input').val();
    var name = $('#campaign-name-input').val();
    var goal = $('#target-goal-input').val()
    var data = {
        date: date,
        hashtag: tag,
        title: name,
        goal: goal
    }
    newCampaign(data);
}
