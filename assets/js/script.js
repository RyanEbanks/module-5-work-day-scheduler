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
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // newTime = dayjs().hour(); // gets current hour
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

  newTime = dayjs().hour();
  console.log(newTime);

   for(var i = 9; i <= 17; i++) {

     if(newTime === i) {
       $(idObject[i]).removeClass("future");
       $(idObject[i]).removeClass("past");
       $(idObject[i]).addClass("present");
     }
     else if(newTime > i) {
      $(idObject[i]).removeClass("future");
      $(idObject[i]).removeClass("present");
      $(idObject[i]).addClass("past");
    } else {
      $(idObject[i]).removeClass("present");
      $(idObject[i]).removeClass("past");
      $(idObject[i]).addClass("future");
    }
     console.log(idObject[i]);
   }
  //   console.log(idObject[i]);

  // for(var i = 0; i < 13; i++) {
  //   $("#hour-[i]").removeAttr('class', 'future')
  //   $("#hour-11").attr('class', 'present');
  // }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



//Providing the current date to the header div
var currentDay = dayjs().format("MMMM D, YYYY");
$('#currentDay').text(currentDay);
console.log(currentDay);


/* 
1. Time blocks for standard business hours ...........v
2. Based on time using dayjs or setinterval the
class past present or future will be appended to a div
3. Past Present and future hold their own timeblock color
4. Click event for timeblocks, I can enter event
5. Save Button
6. When save button is clicked text is saved in local storage
7. When refreshed the saved events stay on the page
*/