function caps(words) {
return words.map(function(word){

    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}


var cappycap = []


// var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

$(document).ready(function() {
  var inputList = []
  var outputsList = []
  $("#inputs").submit(function(){
    if ($("#food").val() != ""){
    inputList.push($("#food").val());
    console.log(inputList);
  }
    event.preventDefault()
    $("#food").val("")
  })

  $("#displayList").click(function(){
  $("#shoppingList").toggle();
  outputsList = caps(inputList).sort();
  console.log(outputsList);
  outputsList.forEach(function(buy){
  $("#shoppingList").append("<li>" + buy + "</li>")
})
  })
})
