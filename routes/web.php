<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


use Illuminate\Http\Request;

Route::get('/test', function()
{
	return view('blank');
});

Route::get('/submit_order', function(Request $request)
{
	// grab the order variables
	$order = $request->all();

	// create a json object
	$json_order = json_encode($order);

	// just so we have unique filenames
	$now = new Datetime;

	$filename = "order-" . $now->format('Y-m-d.H.i.s') . ".json";
	
	// create a file pointer for this json object
	$fn = fopen($filename,"w+");

	// write it. note this is being saved in public folder
	fwrite($fn,$json_order);

	//close the pointer
	fclose($fn);

	$path_to_file = $filename;
	// with more time we'd force the user to download the JSON directly
	// from the response
	
	return response()->download($path_to_file);
});