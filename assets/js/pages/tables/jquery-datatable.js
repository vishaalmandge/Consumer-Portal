$(function () {
    $('.cptble').DataTable({
        responsive: true
    });

    //Exportable table
    $('.cptble-export').DataTable({
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});