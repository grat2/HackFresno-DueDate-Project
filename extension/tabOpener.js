chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('test.html')}, function(tab){
// Tab opened.
  });
});