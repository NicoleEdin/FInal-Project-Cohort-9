console.log("tiah");

function validateForm() {
    var x = document.forms["myForm"]["field"].value;
    if (x == "") {
        alert("Name must be filled out");
      }
        else{

    return false;
  }
}
