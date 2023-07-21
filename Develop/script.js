// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
var currentHour = parseInt(dayjs().format('HH'));


$(function () {
  // Use class for "past", "present", and "future" to apply styles to the
  // time-block divs accordingly. The javascript will need to do this by
  // adding/removing these classes on each div by comparing the hour in the
  // id to the current hour. The html provided below is meant to be an example
  // demonstrating how the css provided can be leveraged to create the
  // desired layout and colors. The html below should be removed or updated
  // in the finished product. Remember to delete this comment once the
  // code is implemented.
  $('.time-block').each(function(){
    var key = $(this).attr('id');
    var getLocalValue = localStorage.getItem(key);
    $(this).children('.description').val(getLocalValue);

    var currentBlock = parseInt(key.split("-")[1]);
    if(currentBlock < currentHour){
      $(this).addClass('past');
    } else if(currentBlock === currentHour){
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })

  $('.saveBtn').on('click', function(){
    var key = $(this).parent().attr('id');
    var textValue = $(this).siblings('.description').val();
    localStorage.setItem(key, textValue);
  })
  
});