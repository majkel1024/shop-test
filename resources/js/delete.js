$(function () {
    $('.delete_user').click(function () {

        Swal.fire({
            template: '#usun_usera'
        }).then((result) => {
                if (result.value) {
                    $.ajax({
                            method: "DELETE",
                            url: $(this).data("id"),
                        })
                        .done(function (data) {
                            window.location.reload();
                        })

                        .fail(function (data) {
                            Swal.fire({
                                title: 'Błąd!',
                                text: data.responseJSON.message,
                                icon: data.responseJSON.status,
                                confirmButtonText: 'OK :('
                            })
                        });
                }
            }

        )
    });
});
