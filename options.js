let doneButton = document.getElementById("submit")
chrome.storage.sync.get({
    text: '',
    time: 1000
  }, function(items) {
    document.getElementById('textarea').value = items.text;
    document.getElementById('time').value = items.time;
});
doneButton.onclick = () => {
    let text = document.getElementById('textarea').value;
    let time = document.getElementById('time').value
    chrome.storage.sync.set({
        text: text,
        time: time
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}