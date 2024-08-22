var counter = 0 ;
var colors = ['red' , 'green' , 'yellow' , 'pink'];

function Main(){
    setTimeout(test , 3000);
    

    setInterval(test1, 1000);

}


function test()
{
    alert ("Hello");
}

function test1(){
    counter++;

    var d = document.getElementById('sp');

    var c = colors[counter%4];

    d.setAttribute("style", "background-color:" + c);
    d.innerText= "Counter:"+ counter;
}