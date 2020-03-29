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
	$(x).addClass('item_row');

	var now_datetime = new Date().toLocaleString();
	$(x).find('.submitted_label').html(now_datetime);
	$('#items_div').append(x);
	$(x).show();

});

// alright, so if a user types something in a calc field
// we'll want to update the value in that row, and the totals

$(document).on('keyup','.calc_field', function()
{
	console.log("calc field changed");

	// lets grab the parent row
	var this_item = $(this).parent().parent();
	console.log(this_item);
	var quantity = this_item.find('.in_stock_input').val();
	var price = this_item.find('.price_per_item_input').val();

	var total_price = quantity * price;
	this_item.find('.total_value_label').html(total_price);
	console.log('quantity,price,',quantity,price);

	recalc_totals();
});


// We'll use this to calculate the totals.

function recalc_totals()
{
	var order_price = 0;
	var x = 0;
	$('.item_row').each(function()
	{	
		console.log('total rows: ' +x);
		var total_price = $(this).find('.total_value_label').html();
		console.log('total_price',total_price);
		console.log('old order price',order_price);
		order_price += parseFloat(total_price);
		console.log('new order price',order_price);
		x++;
	});

	$('#total_calculation').find('.total_value_label').html(order_price);

}