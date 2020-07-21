"use strict"

$(document).ready(function () {
    getAllMovies();
})

function getAllMovies() {
    $.ajax({
        crossDomain: true,
        contentType: "application/json",
        url: "http://localhost:3000/api/movies",
        dataType: "json",
        type: "get",

        success: function (data, second, third) {
            // let result = JSON.stringify(data)
            $("#movieTable").find("tbody").html("");
            for (let i = 0; i < data.length; i++) {
                $("#movieTable").find('tbody').append(`<tr><td>${data[i]["id"]}</td>
                <td>${data[i]["title"]}</td><td>${data[i]["genre"]}</td>
                <td>${data[i]["director"]}</td><td><button onclick='editMovie(${data[i]["id"]})'>Edit</button></td>
                <td><button onclick='deleteMovie(${data[i]["id"]})'>Delete</button></td></tr>`)
            }
        },
        error: function (meta, errorThrown, third) {
            console.log(errorThrown);
        }
    })
}

function getMovieObject() {
    var data = {
        // "id": document.getElementById('id').value,
        "title": document.getElementById('title').value,
        "genre": document.getElementById('genre').value,
        "director": document.getElementById('director').value
    }
    return data;
}

function createMovie() {

    var data = getMovieObject();
    console.log(data)
    $(document).ready(function () {
        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/api/movies",
            data: data
        }).then(function () {
            getAllMovies();
        })
    })
}


function deleteMovie(id) {
    $.ajax({
        type: 'DELETE',
        url: "http://localhost:3000/api/movies/" +id
    }).then(function () {
        getAllMovies();
    })


}

function editMovie(id) {    // function loadMovieToForm
    $.ajax({
        crossDomain: true,
        contentType: "application/json",
        url: "http://localhost:3000/api/movies/" + id,
        dataType: "json",
        type: "get",

        success: function (data, second, third) {
           $("#title").val(data["title"]);
           $("#genre").val(data["genre"]);
           $("#director").val(data["director"]);

        },
        error: function (meta, errorThrown, third) {
            console.log(errorThrown);
        }
    });
    
}

function putMovie(movie) {  // called when "Save Edit" button is clicked
    var data = getMovieObject();
    // make the PUT API call
}

// function updateMovie(){
//     let movie = {
//         title = $("title").val()
//     }
//     console.log
// }


let $tr = $(this).closest("tr");
$tr.find("")

