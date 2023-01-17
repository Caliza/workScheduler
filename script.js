// Wrap (all code/vars inside function) all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// text9, text 10, etc

$(function () {

  // Target the DOM with the .ready()method to run JavaScript as soon as the pages DOM is ready to manipulate.

  // Taking text input from <textarea> with $(this) method and defining it to var value & time; sets it into LocalStorage.

  $(document).ready(function () {
    $('.saveBtn').on('click', function () {
      var value = $(this)
        .siblings('.description')
        .val();
      var time = $(this)
        .parent()
        .attr('id');
      console.log("time", time)
      console.log("value", value)
      localStorage.setItem(time, value);
      console.log("rad");
    })

    // Lines 29-37 gets text input from each LocalStorage and passes it corresponding <textarea>.

    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));



    // TODO: Add a listener for click events on the save button. This code should --Hint: assign eventListener to container block
  
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
    $("#currentDay").html(dayJsObject.format("dddd YYYY-MM-DD HH:mm:ss"))
  });
});

// Save!!! 
    // var eventInput = $("#event");

    // function saveToStorage() {

    //   var eventText = eventInput[0].value;
    //   localStorage.setItem("eventText", JSON.stringify(eventText));
    // };

    // function getFromStorage() {
    //   var eventOutput = localStorage.getItem("eventText");
    //   if (eventOutput !== null) {
    //     ---document.getElementById('event').innerHTML = eventOutput;
    //   } else {
    //     return;
    //   }
    // };
    // getFromStorage();

    // $('#btnX').on("click", function (event) {
    //   saveToStorage(event);
    //   console.log("rad");
    // }); 
    //Save!!!