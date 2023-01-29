// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
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
  console.log(newTime);
//Saves information from the hour 11 div to local storage
//but if i save in any other field it erases the previous description
//Also it doesn't stay on reload
  $(".saveBtn").on("click", function() {
  var descriptionText = $("#hour-11 .description").val();
  // alert($(this).val());
  localStorage.setItem("Description", descriptionText);
  });
 

//This updates the past, present and future colors into divs based on the ID
   for(var j = 9; j <= 17; j++) {

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
     console.log(idObject[j]);
   }
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // This displays the current date in the header of the page.
  var currentDay = dayjs().format("MMMM D, YYYY");
  $('#currentDay').text(currentDay);
  console.log(currentDay);
});



/* 
1. Time blocks for standard business hours ...........v
2. Based on time using dayjs or setinterval the ..............v
class past present or future will be appended to a div ............v
3. Past Present and future hold their own timeblock color .............v
4. Click event for timeblocks, I can enter event
5. Save Button
6. When save button is clicked text is saved in local storage
7. When refreshed the saved events stay on the page
*/