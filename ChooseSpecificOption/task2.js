        var rowCounter = 0;

        function ClickEventHandler() {
            rowCounter++;

            var row = document.createElement("div");
            row.setAttribute("class", "row");

            var spanDegree = document.createElement("span");
            spanDegree.innerText = rowCounter + " Degree:";
            row.appendChild(spanDegree);

            var inpDegree = document.createElement("input");
            inpDegree.setAttribute("type", "text");
            inpDegree.setAttribute("id", "txtDegree");
            row.appendChild(inpDegree);

            var spanName = document.createElement("span");
            spanName.innerText = " Name:";
            row.appendChild(spanName);

            var inpName = document.createElement("input");
            inpName.setAttribute("type", "text");
            inpName.setAttribute("id", "txtName");
            row.appendChild(inpName);

            var spanMarks = document.createElement("span");
            spanMarks.innerText = " Marks:";
            row.appendChild(spanMarks);

            var inpMarks = document.createElement("input");
            inpMarks.setAttribute("type", "text");
            inpMarks.setAttribute("id", "txtMarks");
            row.appendChild(inpMarks);

            var btnRemove = document.createElement("input");
            btnRemove.setAttribute("type", "button");
            btnRemove.setAttribute("id", "btnRemove");
            btnRemove.setAttribute("value", "Remove");
            btnRemove.onclick = function () {
                var result = confirm("Do you want to remove?");
                if (result) {
                    var mc = document.getElementById("maincontainer");
                    mc.removeChild(this.parentNode);
                }
            };
            row.appendChild(btnRemove);

            var maincontainer = document.getElementById("maincontainer");
            maincontainer.appendChild(row);
        }