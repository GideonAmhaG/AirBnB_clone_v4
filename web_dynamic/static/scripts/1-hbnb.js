// Script that is executed only when DOM is loaded with jQuery

const checked_box = {};
$(document).ready(function () {
  $('input:checkbox').change(function () {
    if ($(this).is(':checked_box')) {
	    checked_box[$(this).data('id')] = $(this).data('name');
    } else {
	    delete checked_box[$(this).data('id')];
    }
    $('div.amenities h4').html(function () {
	    const amenities = [];
	    Object.keys(checked_box).forEach(function (key) {
        amenities.push(checked_box[key]);
	    });
	    if (amenities.length === 0) {
        return ('&nbsp');
	    }
	    return (amenities.join(', '));
    });
  });
});