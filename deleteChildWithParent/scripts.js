function Main() {
    var l = document.getElementById("lnkDeleteme");
    l.onclick = function() {
        var cont = document.getElementById('mydiv');
        cont.removeChild(this);
    };
     
    var p = document.getElementById("lnkmyParent");
    p.onclick = function() {
        var f = document.getElementById("frm");
        f.removeChild(this.parentNode)
    };
}