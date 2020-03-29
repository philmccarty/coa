$(document).ready(function()
{
	console.log('coa skills test ready');
});


$(document).on('click','#add_item_button', function()
{
	console.log("click add item button");
	
	var x = $('#sample_item').clone();

	// lets count how many items we have
	var number_of_items = $('.item_row').length;

	var this_item = number_of_items++;
	// and name THIS item in sequence

	$(x).attr('id','item_' + this_item);

	$('#items_div').append(x);
	$(x).show();
});