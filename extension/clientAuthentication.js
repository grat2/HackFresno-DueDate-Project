function authGet() {
  chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
    // Use the token.
  });
}

function handleClientLoad() {
  // Loads the client library and the auth2 library together for efficiency.
  // Loading the auth2 library is optional here since `gapi.client.init` function will load
  // it if not already loaded. Loading it upfront can save one network request.
  gapi.load('client:auth2', initClient);
}

function initClient() {
  // Initialize the client with API key and People API, and initialize OAuth with an
  // OAuth 2.0 client ID and scopes (space delimited string) to request access.
  gapi.client.init({
      apiKey: 'AIzaSyBgQWhZ9QLiYz0RpHjUnidASqF_jLeJu84',
      discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
      clientId: '87063025225-4j2fi91vfmlchvtlf94vn0r7b5k4djus.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/calendar'
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    signinButton.onclick = handleSignInClick;
    signoutButton.onclick = handleSignOutClick;
  });
}

function updateSigninStatus(isSignedIn) {
  // When signin status changes, this function is called.
  // If the signin status is changed to signedIn, we make an API call.
  if (isSignedIn) {

  }
}

function handleSignInClick(event) {
  // Ideally the button should only show up after gapi.client.init finishes, so that this
  // handler won't be called before OAuth is initialized.
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

authGet();
