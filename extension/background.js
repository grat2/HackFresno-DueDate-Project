<script src="/extension/content.js" type="text/javascript"></script>
// console.log(createevent[1]);
// Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.


//grabs every event in the createevent array and stores it in eData for conversion
//to a google calendar event
var eData;
for(eData in createevent) {
    var event = {
        'summary': eData[0],
        'start': {
            'dateTime': eData[1] + 'T09:00-07:00',
        },
        'end': {
            'dateTime': eData[1] + 'T09:30-07:00',
        },
        'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
        ],
        'attendees': [
            {'email': 'lpage@example.com'},
            {'email': 'sbrin@example.com'}
        ],
        'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'popup', 'minutes': 24 * 60},
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
