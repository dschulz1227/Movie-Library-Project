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
            $("#movieTable").find("tbody").html('<tr><th>#</th><th>Title</th><th>Genre</th><th>Director Name</th><th>Edit</th><th>Delete</th></tr>');
            for (let i = 0; i < data.length; i++) {
                $("#movieTable").find('tbody').append(`
                <tr><td>${data[i]["id"]}</td>
                <td>${data[i]["title"]}</td><td>${data[i]["genre"]}</td>
                <td>${data[i]["director"]}</td><td><button onclick='loadMovieForm(${data[i]["id"]})'>Edit</button></td>
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
            clearForm()
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

function loadMovieForm(id) {    // function loadMovieToForm
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
           $("#id").val(data["id"]);
            // place id of movie in the display:none element
        },
        error: function (meta, errorThrown, third) {
            console.log(errorThrown);
        }
    });
    
}

function putMovie(movie) {  // called when "Save Edit" button is clicked
    var data = getMovieObject();
    let idFromInput = parseInt($("#id").val());    
    data.id = idFromInput;
    console.log(data)
    

    // then go get the id from the page
    // assign the id to data.id
    // console.log(data)
        $.ajax({
            contentType: 'application/json',
            type: 'PUT',
            url: "http://localhost:3000/api/movies/",
            data: JSON.stringify(data),
        }).then(function () {
            getAllMovies();
            clearForm()
        });

}
 
  // make the PUT API call

// function updateMovie(){
//     let movie = {
//         title = $("title").val()
//     }

//     console.log
// }


let $tr = $(this).closest("tr");
$tr.find("")

function clearForm(){
    document.getElementById('id').value=''; 
    document.getElementById('title').value=''; 
    document.getElementById('genre').value=''; 
    document.getElementById('director').value=''; 
} 



function deletePrompt() {
    var txt;
    if (confirm("Confirm you wish to delete this movie!")) {
      txt = "You pressed OK!";
    } 
    else {
      txt = "You pressed Cancel!";
    }
}
