module Options {

    var caseInsensitiveKey = "caseInsensitive";
    var checkbox = <HTMLInputElement> document.getElementById("case-insensitive");
    restoreState();
    checkbox.onclick = saveState;

    function restoreState() {
        if (localStorage[caseInsensitiveKey] !== undefined) {
            checkbox.checked = localStorage[caseInsensitiveKey] == "true";
        }
    }

    function saveState() {
        localStorage[caseInsensitiveKey] = !!checkbox.checked;

        // Display saved message
        var status = document.getElementById("status");
        status.innerHTML = "Options Saved.";
        setTimeout(function() {
            status.innerHTML = "";
        }, 1000);
    }
}

