<script src="/extension/content.js" type="text/javascript"></script>
// console.log(createevent[1]);
// Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.


//grabs every event in the createevent array and stores it in eData for conversion
//to a google calendar event
var popupTime = -1;
var eData;
for(eData in createevent) {
    if(popupTime == -1) {
        popupTime = 24;
    }
    var event = {
        'summary': eData[0],
        'start': {
            //event is set by default to start in the morning
            'dateTime': eData[1] + 'T09:00-07:00',
        },
        'end': {
            'dateTime': eData[1] + 'T09:30-07:00',
        },
        'recurrence': [
            //none
        ],
        'attendees': [
            //none
        ],
        'reminders': {
            'useDefault': false,
            'overrides': [
                //reminders are set by default to 1 day before and 1 hour before
                {'method': 'popup', 'minutes': popupTime * 60},
                {'method': 'popup', 'minutes': 60}
            ]
        }
    };

    var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    });

    request.execute(function(event) {
        appendPre('Event created: ' + event.htmlLink);
    });
}
