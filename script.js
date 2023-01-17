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

    const dayJsObject = dayjs();
    $("#currentDay").html(dayJsObject.format("dddd YYYY-MM-DD HH:mm:ss"))

    // let currentHour = dayjs().hours()
    // console.log(currentHour)
    // for (let i = 9; i <= 17; i++) {
    //   if (i < currentHour) {
    //     $("#hour-" + i).children("textarea").addClass("past")
    //   } else if (i == currentHour) {
    //     $("#hours-" + i).children("textarea").addClass("present")
    //   } else {
    //     $("#hours-" + i).children("textarea").addClass("present")
    //   }

});