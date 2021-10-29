
function arrayOne(input) {
  let array1 = []
  for (let i=0; i <= input; i++) {
    array1.push(i)
    if (array1[i].toString().includes(3)) {
      array1[i] = "Won't you be my neighbor?"
    } else if (array1[i].toString().includes(2)) {
      array1[i] = "Boop!"
    } else if (array1[i].toString().includes(1)) { 
      array1[i] = "Beep!"
    }
  }
  return array1; 
};

  



  
// UI Logic
$(document).ready(function() {
  $("#arrayCounter").submit(function(event) {
    event.preventDefault();
    const totalCount = ($("#total-count").val());
    
    let totalCount = (array1)
  }
)})
