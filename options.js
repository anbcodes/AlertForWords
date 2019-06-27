function addItemToDiv(div, value, kind) {
    let itemDiv = document.createElement("div")
    itemDiv.className = "itemDiv"
    let inputText = document.createElement("input")
    inputText.type = "text"
    inputText.value = value
    inputText.className = "inputText"
    itemDiv.appendChild(inputText)
    let inputButton = document.createElement("button")
    inputButton.innerText = kind
    inputButton.className = kind
    inputButton.onclick = (e) => {
        if (e.target.innerText === "text") {
            e.target.innerText = "regex"
            e.target.className = "regex"
        } else {
            e.target.innerText = "text"
            e.target.className = "text"
        }
    }
    let removeButton = document.createElement("button")
    removeButton.className = "remove"
    removeButton.innerText = "-"
    removeButton.style.margin = "5px"
    removeButton.onclick = (e) => {
        e.target.parentElement.remove()
    }
    itemDiv.appendChild(inputButton)
    itemDiv.appendChild(removeButton)
    div.appendChild(itemDiv)
}
let doneButton = document.getElementById("submit")
chrome.storage.sync.get({
    storage: [],
    time: 1000
  }, function(items) {
    let inputDiv = document.getElementById("input")
    items.storage.forEach(item => {
        addItemToDiv(inputDiv, item.value, item.kind)
    });
    let addButton = document.getElementById("addButton")
    addButton.className = "add"
    addButton.onclick = () => {
        addItemToDiv(inputDiv, "", "text")
    }
});
doneButton.onclick = () => {
    let inputs = Array.from(document.getElementById("input").children)
    let storage = []
    inputs.forEach(input => {
        storage.push({value:input.children[0].value, kind:input.children[1].innerText})
    })
    let time = document.getElementById('time').value
    chrome.storage.sync.set({
        storage: storage,
        time: time
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}