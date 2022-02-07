@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-6">
               <h1> Lista produktów </h1>
            </div>

            <div class="col-6">
               <a class="float-end" href="{{ route('products.create') }}">
                <button type="button" class="btn btn-primary">Dodaj</button>
                </a>
            </div>
        </div>

        <div class="row">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nazwa</th>
                        <th scope="col">Opis</th>
                        <th scope="col">Ilość</th>
                        <th scope="col">Cena</th>
                        <th scope="col">Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($products as $product)
                        <tr>
                            <th scope="row">{{ $product->id }}</th>
                            <td>{{ $product->name }}</td>
                            <td>{{ $product->description }}</td>
                            <td>{{ $product->amount }}</td>
                            <td>{{ $product->price }}</td>
                            <td>
                                <a href="{{route('products.show',$product->id)}}">
                                    <button class="btn btn-primary btn-sm">P</button>
                                </a>
                                <a href="{{route('products.edit',$product->id)}}">
                                    <button class="btn btn-success btn-sm">E</button>
                                </a>
                                <button class="btn btn-danger btn-sm delete" data-id="{{ $product->id }}">X</button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $products->links() }}
        </div>
    </div>

    <template id="usun">
        <swal-title>
            Czy na pewno chcesz usunąć ten przedmiot ?
        </swal-title>
        <swal-icon type="warning" color="red"></swal-icon>
        <swal-button type="confirm">
            Tak, usuń!
        </swal-button>
        <swal-button type="cancel">
            Nie, nie usuwaj.
        </swal-button>
        <swal-param name="allowEscapeKey" value="false" />
        <swal-param name="customClass" value='{ "popup": "my-popup" }' />
    </template>
@endsection
@section('javascript')
    const deleteurl = "{{ url('products') }}/"
@endsection
@section('js-files')
    <script src="{{ asset('js/delete.js') }}" defer></script>
@endsection
