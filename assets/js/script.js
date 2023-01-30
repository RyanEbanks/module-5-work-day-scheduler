
$(function () {
  //Storing the names of the ID's into objects to reference them later
  var idObject = {
    9: "#hour-9",
    10: "#hour-10",
    11: "#hour-11",
    12: "#hour-12",
    13: "#hour-13",
    14: "#hour-14",
    15: "#hour-15",
    16: "#hour-16",
    17: "#hour-17"
  }
  newTime = dayjs().hour(); //Getting the current hour

var idAndClass ={
  9: "#hour-9 .description",
  10: "#hour-10 .description",
  11: "#hour-11 .description",
  12: "#hour-12 .description",
  13: "#hour-13 .description",
  14: "#hour-14 .description",
  15: "#hour-15 .description",
  16: "#hour-16 .description",
  17: "#hour-17 .description"
}

  $(".saveBtn").on("click", function() {
    for(var i = 9; i <= 17; i++){
      var descriptionText = $(idAndClass[i]).val();
      console.log(descriptionText);
      console.log(i);
      if(descriptionText) {
        localStorage.setItem(idObject[i], descriptionText);
        console.log($(`#hour-${i} .description`));
      }
      }

  });
 
//This updates the past, present and future colors into divs based on the ID
   for(var j = 9; j <= 17; j++) {
       var textAreaStorage = localStorage.getItem(idObject[j]);
        $($(`#hour-${j} .description`)).html(textAreaStorage);
     if(newTime === j) {
       $(idObject[j]).removeClass("future");
       $(idObject[j]).removeClass("past");
       $(idObject[j]).addClass("present");
     }
     else if(newTime > j) {
      $(idObject[j]).removeClass("future");
      $(idObject[j]).removeClass("present");
      $(idObject[j]).addClass("past");
    } else {
      $(idObject[j]).removeClass("present");
      $(idObject[j]).removeClass("past");
      $(idObject[j]).addClass("future");
    }
   }
  var currentDay = dayjs().format("MMMM D, YYYY");
  $('#currentDay').text(currentDay);
});
