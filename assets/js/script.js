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

  //On click event the save button will execute the code inside
  $(".saveBtn").on("click", function () {
    for (var i = 9; i <= 17; i++) {
      //Iterating through the hour id with the class description and getting the value
      var descriptionText = $(`#hour-${i} .description`).val();
      if (descriptionText) {
      //Adding that current iteration to local storage
        localStorage.setItem(`#hour-${i}`, descriptionText);
      }
    }
  });

  //This updates the past, present and future colors into divs based on the ID
  for (var j = 9; j <= 17; j++) {
    //Getting items from local storage by iterating the through id names
    var textAreaStorage = localStorage.getItem(idObject[j]);
    //Printing the text value from the local storage to the html
    $($(`#hour-${j} .description`)).html(textAreaStorage);
    if (newTime === j) {
      $(idObject[j]).removeClass("future");
      $(idObject[j]).removeClass("past");
      $(idObject[j]).addClass("present");
    }
    else if (newTime > j) {
      $(idObject[j]).removeClass("future");
      $(idObject[j]).removeClass("present");
      $(idObject[j]).addClass("past");
    } else {
      $(idObject[j]).removeClass("present");
      $(idObject[j]).removeClass("past");
      $(idObject[j]).addClass("future");
    }
  }
  //Setting the time to the current day
  var currentDay = dayjs().format("MMMM D, YYYY");
  $('#currentDay').text(currentDay);
});
