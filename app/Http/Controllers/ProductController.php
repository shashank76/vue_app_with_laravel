<?php

namespace App\Http\Controllers;

use App\Models\Product;
// use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
// use Illuminate\Http\Response;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all()->toArray();
        return array_reverse($products);      
    }
    public function store(Request $request)
    {
        $product = new Product([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'availability' => $request->input('availability'),
            'size' => $request->input('size'),
            'color' => $request->input('color'),
            'stock' => $request->input('stock')
        ]);
        $product->save();
        return response()->json('Product created!');
    }
    public function show($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }
    public function update($id, Request $request)
    {
        $product = Product::find($id);
        $product->update($request->all());
        return response()->json('Product updated!');
    }
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return response()->json('Product deleted!');
    }
}