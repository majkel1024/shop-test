@extends('layouts.app')

@section('content')
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Imię</th>
                    <th scope="col">Nazwisko</th>
                    <th scope="col">Nr. telefonu</th>
                    <th scope="col">Akcje</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($users as $user)
                    <tr>
                        <th scope="row">{{ $user->id }}</th>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->surname }}</td>
                        <td>{{ $user->telephone_number }}</td>
                        <td>
                            <button class="btn btn-danger btn-sm delete" data-id="{{ $user->id }}"> Usuń </button>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        {{ $users->links() }}
    </div>

    <template id="usun">
        <swal-title>
          Czy na pewno chcesz usunąć tego uzytkownika ?
        </swal-title>
        <swal-icon type="warning" color="red"></swal-icon>
        <swal-button type="confirm">
          Tak, usuń!
        </swal-button>
        <swal-button type="cancel">
          Nie, nie usuwaj.
        </swal-button>
        <swal-param name="allowEscapeKey" value="false" />
        <swal-param
          name="customClass"
          value='{ "popup": "my-popup" }' />
      </template>
@endsection
@section('javascript')
    const deleteurl = "{{url( 'users' )}}/"
@endsection
@section('js-files')
<script src="{{ asset('js/delete.js') }}" defer></script>
@endsection
