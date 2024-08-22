var btn = document.getElementById('btn1');
btn.onclick = function() {
    var txt = document.getElementById('txt1');
    var p = document.getElementById('para');

    p.innerText = txt.value; // This will display the text inside the paragraph
};
