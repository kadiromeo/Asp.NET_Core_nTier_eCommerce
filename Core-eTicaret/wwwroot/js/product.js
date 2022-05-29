﻿var dataTable;
$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').dataTable({
        "ajax": {
            "url": "/Admin/Product/GetAll"
        },
        "columns": [
            { "data": "title", "width": "15%" },
            { "data": "description", "width": "15%" },
            { "data": "price", "width": "15%" },
            { "data": "category.name", "width": "15%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-center">
    <a href="/Admin/Product/Upsert/${data}" class="btn btn-success"><i class="fas fa-edit"></i> </a>
    <a onclick=Delete("/Admin/Product/Delete/${data}") class="btn btn-danger"><i class="fas fa-trash"></i> </a>
</div>`;
                },
                "width": "40%"
            }
        ]
    });
}

function Delete(url) {
    swal({
        title: "Silmek istediğinize emin misiniz?",
        text: "Bu kaydı geri alamazsınız !",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((willDelete) => {

        if (willDelete) {
            $.ajax({
                type: "DELETE",
                url: url,
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        dataTable.api().ajax.reload();
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            })
        }
    })
}