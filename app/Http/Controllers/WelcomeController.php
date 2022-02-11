<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\View\View;
use App\Http\Controllers\Controller;
use App\Models\ProductCategory;

class WelcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        return view('welcome',[
            'products' => Product::paginate(10),
            'Categories' => ProductCategory::orderBy('name', 'ASC')->get()
        ]);
    }
}
