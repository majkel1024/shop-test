@extends('layouts.app')


@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Podgląd produktu</div>

                <div class="card-body">
                        @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">Nazwa</label>

                            <div class="col-md-6">
                                <input id="name" maxlength="100" type="text" class="form-control" name="name" value="{{ $product->name }}" disabled>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="description" class="col-md-4 col-form-label text-md-end">Opis</label>

                            <div class="col-md-6">
                                <textarea id="description" maxlength="1500" class="form-control" name="description" disabled>{{ $product->description }}</textarea>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="amount" class="col-md-4 col-form-label text-md-end">Ilość</label>

                            <div class="col-md-6">
                                <input id="amount" type="number" min="0" class="form-control" name="amount" value="{{ $product->amount }}" disabled>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="price" class="col-md-4 col-form-label text-md-end">Cena</label>

                            <div class="col-md-6">
                                <input id="price" step="0.01" min="0" type="number" class="form-control" name="price" value="{{ $product->price }}" disabled>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="category" class="col-md-4 col-form-label text-md-end">Kategoria</label>

                            <div class="col-md-6">
                                <input id="category" class="form-control" name="category"
                                @if ($product->hasCategory())
                                value="{{ $product->category->name }}"
                                @else
                                value=""
                                @endif
                                disabled>
                            </div>
                        </div>

                        <div class="row mb-3" justify-content-center>
                            <div class="col-md-6" justify-content-center>
                                @if (!is_null($product->image_path))
                                <img src="{{asset('storage/' . $product->image_path)}}" alt="Zdjęcie produktu">
                                @endif
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
