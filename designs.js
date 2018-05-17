// Select color input
let color = $('#colorPicker').val();
$('#colorPicker').change(function() {
  color = $(this).val();
});

// Select size input
// Height
let height = $('#inputHeight').val();
$('#inputHeight').change(function() {
  height = $(this).val();
});

// Width
let width = $('#inputWidth').val();
$('#inputWidth').change(function() {
  width = $(this).val();
});

// When size is submitted by the user, call makeGrid()
$('#submit').click(makeGrid);

function makeGrid(e) {
  //Clear table
  $('#pixelCanvas').empty();
  //Make rows
  for (i = 0; i < height; i++) {
    $('table').append('<tr></tr>');
  }
  //Make columns
  for (i = 0; i < width; i++) {
    $('tr').append('<td></td>');
  }
  e.preventDefault();
}

// When mouse left is clicked; color
$('table').mousedown(colorize);

//color cell when clicked
function colorize(event) {
  var target = $(event.target);
  target.css('background-color', color);
}

//FUTURE:
// Remove grid lines
// Save a picture
// Right button erase
