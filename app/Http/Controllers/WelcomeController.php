<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\View\View;
use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View|JsonResponse
     */
    public function index(Request $request): View|JsonResponse
    {
        $filters = $request->query('filter');
        $paginate = $request->query('paginate') ?? 5;

        $query = Product::query();
        if ($filters){

            if (array_key_exists('categories',$filters)){
            $query = $query->whereIn('category_id', $filters['categories']);
            }
            if ($filters['price-min']){
            $query = $query->where('price','>=', $filters['price-min']);
            }

            if ($filters['price-max']){
            $query = $query->where('price','<=', $filters['price-max']);
            }

            return response()->json($query->paginate($paginate));
        }

        return view('welcome',[
            'products' => $query->paginate($paginate),
            'Categories' => ProductCategory::orderBy('name', 'ASC')->paginate($paginate),
            'defaultImage' => 'https://via.placeholder.com/240x240/5fa9f8/efefef'
        ]);
    }
}
