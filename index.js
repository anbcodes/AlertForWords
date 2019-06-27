function check(item) {
    if (item.kind === "regex") {
        let regex = new RegExp(item.value, "g")
        let body = document.body.innerText
        if (body.match(regex)) {
            alert("Regex found!")
        }
    } else {
        let regex = new RegExp(`(${item.value})`, "g")
        let body = document.body.innerText
        if (body.match(regex)) {
            alert("Word found!")
        }
    }
}

chrome.storage.sync.get({
    storage: [],
    time: 1000
  }, (items) => {
    setTimeout(() => {
        items.storage.forEach(item => {
            check(item)
        });
    }, items.time)
    
});
