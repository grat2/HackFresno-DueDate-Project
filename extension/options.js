
  function save_options() {
      var time = document.getElementById('time').value;
      chrome.storage.sync.set({
          timerWanted : time
      }, function(){
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
  }
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.  
  function restore_options() {
      //Use default value time = 'One Day'  
      chrome.storage.sync.get({
        timerWanted: 'One Day'
      }, function(items) {
          document.getElementById('time').value = items.timerWanted;
      });
    }
    document.addEventListener('DOMContentLoaded', restore_options);
    document.getElementById('save').addEventListener('click',
        save_options);
        
 
  