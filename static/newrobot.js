// Generated by CoffeeScript 1.6.3
(function() {
  var update_name;

  update_name = function() {
    return $('#robot-name').text($(this).val());
  };

  $('#robot-name-input').change(update_name);

  $('#robot-name-input').keydown(update_name);

  $('#robot-name-input').keyup(update_name);

  $('#robot-name-input').keypress(update_name);

}).call(this);
