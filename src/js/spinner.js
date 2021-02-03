var opts = {
  lines: 15, // The number of lines to draw
  length: 0, // The length of each line
  width: 10, // The line thickness
  radius: 31, // The radius of the inner circle
  scale: 1.25, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1.4, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-default', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#FF6B08', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '46%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

// var target = document.getElementById('gallery');
// var spinner = new Spinner(opts).spin(target);
// spinner.stop();

export default opts