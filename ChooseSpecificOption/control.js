function Main() {
    document.getElementById("createButton").onclick = function() {
        var selectedValue = document.getElementById("cmbControl").value;
        var container = document.getElementById("container");
        var newControl = null;

        if (selectedValue === "Textbox") {
            newControl = document.createElement("input");
            newControl.setAttribute('type', 'text');
        } else if (selectedValue === "Button") {
            newControl = document.createElement("button");
            newControl.setAttribute('type', 'button');
            newControl.textContent = "Button"; // Set button text
        } else if (selectedValue === "Checkbox") {
            newControl = document.createElement("input");
            newControl.setAttribute('type', 'checkbox');
        } else if (selectedValue === "Password") {
            newControl = document.createElement("input");
            newControl.setAttribute('type', 'password');
        } else if (selectedValue === "Radio Button") {
            newControl = document.createElement("input");
            newControl.setAttribute('type', 'radio');
        }

        var dummydiv = document.createElement("div"); // Use "div" instead of "container"
        dummydiv.appendChild(newControl); // Changed from obj to newControl

        var link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerText = " X";
        link.onclick = function() {
            container.removeChild(this.parentNode);
            return false;
        };
        dummydiv.appendChild(link);
        container.appendChild(dummydiv);
    };
}