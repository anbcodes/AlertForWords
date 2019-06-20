chrome.storage.sync.get({
    text: '',
    time: 1000
  }, (items) => {
    let textToFind = items.text;
    let regexStr = "("
    textToFind.split("\n").forEach((word, index) => {
        if (index != textToFind.split("\n").length-1) {
            regexStr += word + "|"
        } else {
            regexStr += word
        }
    });
    regexStr += ")"

    let regex = new RegExp(regexStr, "gi")
    setTimeout(() => {
        let text = document.body.innerText
        let found = text.match(regex)
        if (found) {
            alert(`Found Word`)
        }
    }, items.time)
    
});
