// Initialize variable for today's date
var today = dayjs();
// Change the text in #currentDay to the current date with the correct format
$('#currentDay').text(today.format('MMM D, YYYY'));
// Initialize variable for the current hour to then compare to the time for each 
// text block
var currentHour = parseInt(dayjs().format('HH'));


$(function () {
  // Initialize function to iterate through local storage and populate time blocks
  // with their respective events and notes
  $('.time-block').each(function(){
    var key = $(this).attr('id');
    var getLocalValue = localStorage.getItem(key);
    $(this).children('.description').val(getLocalValue);
    // Change each time block's color class to reflect whether its given time is
    // in the past, present, or future
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
  // Function to store a given time block's text content in local storage when
  // its respective save button is clicked.
  $('.saveBtn').on('click', function(){
    var key = $(this).parent().attr('id');
    var textValue = $(this).siblings('.description').val();
    localStorage.setItem(key, textValue);
  })
  
});