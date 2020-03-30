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
	$order = $request->all();

	$json_order = json_encode($order);

	$now = new Datetime;
	$filename = "order-" . $now->format('Y-m-d') . ".json";
	$fn = fopen($filename,"w+");
	fwrite($fn,$json_order);
	fclose($fn);

	$path_to_file = $filename;

	return response()->download($path_to_file);
});