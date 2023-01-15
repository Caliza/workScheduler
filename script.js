// Wrap (all code/vars inside function) all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// text9, text 10, etc

$(function () {
  // TODO: Add a listener for click events on the save button. This code should --Hint: assign eventListener to container block
  //$. btnEL = document.getElementById("#btn");
// var inText =document.getElementsByClassName("description");
// var saveBtn = document.getElementsByClassName("saveBtn");

var eventInput = $('#event');
// var btnClick = $('#btnB');

function saveToStorage() {
  
  var passText =eventInput[0].value;
  localStorage.setItem("passText", JSON.stringify(passText));
};

function getFromStorage() {
  var eventOutput = JSON.parse(localStorage.getItem("passText"));
  if (eventOutput !== null) {
  document.getElementById('event').innerHTML = eventOutput.textInput;
  } else {
    return;
  }
};


    $('#btnX').on("click", function(){
      saveToStorage();
      getFromStorage();
        console.log("rad");
    });
 

  // use the id in the containing time-block as a key to save the user input in --Hint: grab value from time block/id
  
  // local storage. HINT: What does `this` reference in the click listener --Option 1: store each timeBlock as seperate key(a,b,c,) value pair. --Option 2 store array,
  // function? How can DOM traversal be used to get the "hour-x" id of the --Sibling or child
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set --should saved when button clicked
  // the values of the corresponding textarea elements. HINT: How can the id --be targeted <textarea>
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  // var currentDay = document.getElementById("#currentDay")
// function formatDate(dateObject){


const dayJsObject = dayjs();
// console.log(dayJsObject.format("D"))
$("#currentDay").html(dayJsObject.format("dddd YYYY-MM-DD HH:mm:ss"))
});

// $('#btnX').on("click", function(event){
//   console.log(event);
//   saveToStorage();
//   // getFromStorage();
//     console.log("rad");
// });