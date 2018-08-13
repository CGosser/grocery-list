var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

$(document).ready(function() {
  var inputList = []
  $("#inputs").submit(function(){
    inputList.push($("#food").val());
    console.log(inputList);
    event.preventDefault()
  })
  $("#displayList").click(function(){
  $("#shoppingList").toggle();
  event.preventDefault();
})
})
