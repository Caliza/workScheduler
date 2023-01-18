

  // Target the DOM with the .ready()method to run JavaScript as soon as the pages DOM is ready to be manipulated.

  //  $(this) takes text input from <textarea> and defines it as var 'value' & 'time'; sets it into LocalStorage.

  $(document).ready(function () {
    $('.saveBtn').on('click', function () {
      var value = $(this)
        .siblings('.description')
        .val();
      var time = $(this)
        .parent()
        .attr('id');
      console.log('time', time)
      console.log('value', value)
      localStorage.setItem(time, value);
      console.log('rad');
    })
  })


  // Lines 29-37 gets text input set to LocalStorage and passes it to its corresponding <textarea>.

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // dayJsObject is used to sett and display the date and time in the browser. currentHour is passed thruogh the for loop to check current time and set bakcground class/colors of the time slots based on .past, .present, .future.

  const dayJsObject = dayjs();
  $('#currentDay').html(dayJsObject.format('dddd YYYY-MM-DD HH:mm:ss'))

  let currentHour = dayjs().hour()
  console.log(currentHour)
  for (let i = 9; i <= 17; i++) {
    if (i < currentHour) {
      $('#hour-' + i).children('textarea').addClass('past')
    } else if (i == currentHour) {
      $('#hour-' + i).children('textarea').addClass('present')
    } else {
      $('#hour-' + i).children('textarea').addClass('future')
    }
  }
