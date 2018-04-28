<script src="/extension/content.js" type="text/javascript"></script>
// console.log(createevent[1]);
// Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.

var event = {
  'summary': createevent[1][0],
  'start': {
    'dateTime': createevent[1][1] + 'T09:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'end': {
    'dateTime': createevent[1][1] + 'T10:00-07:00',
    'timeZone': 'America/Los_Angeles'
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
