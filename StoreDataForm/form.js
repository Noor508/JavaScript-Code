var objArray = [];

document.getElementById('btn1').onclick = function() {
    // Get the values from the input fields
    var id = document.getElementById('txtID').value;
    var name = document.getElementById('txtName').value;
    var age = document.getElementById('txtAge').value;
    var exp = document.getElementById('txtExp').value;
    var qual = document.getElementById('txtQual').value;

    // Create an object to store the values
    var obj = {
        id: id,
        name: name,
        age: age,
        experience: exp,
        qualification: qual
    };

    // Push the object to the array
    objArray.push(obj);
    alert('object added'); 


    // Clear the input fields
    document.getElementById('txtID').value = '';
    document.getElementById('txtName').value = '';
    document.getElementById('txtAge').value = '';
    document.getElementById('txtExp').value = '';
    document.getElementById('txtQual').value = '';
};

document.getElementById('btn2').onclick = function() {
    // Get the output div
    var output = document.getElementById('output');

    // Clear the output div
    output.innerHTML = '';

    // Loop through the array and display the data
    objArray.forEach(function(obj, index) {
        var para = document.createElement('p');
        para.innerHTML = `Record ${index + 1}: ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}, Experience: ${obj.experience}, Qualification: ${obj.qualification}`;
        output.appendChild(para);
    });
};
