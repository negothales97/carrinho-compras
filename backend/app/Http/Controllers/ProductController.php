<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ProductController extends Controller
{
    public function index()
    {
        return response()->json(Product::get());
    }

    public function store(Request $request)
    {

        $product = Product::create($request->all());
        return response()->json($product);
    }
}