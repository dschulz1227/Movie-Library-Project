"use strict"

$(document).ready(function () {
    getAllMovies();
})

function getAllMovies(){
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
                $("#movieTable").find('tbody').append(`<tr><td>${data[i]["id"]}</td><td>${data[i]["title"]}</td><td>${data[i]["genre"]}</td><td>${data[i]["director"]}</td></tr>`)


            }
        },
        error: function (meta, errorThrown, third) {
            console.log(errorThrown);
        }
    })
}
function getMovieObject(){
    var data = {
    // "id": document.getElementById('id').value,
    "title": document.getElementById('title').value,
    "genre": document.getElementById('genre').value,
    "director":document.getElementById('director').value
    }
    return data;
}

function createMovie(){
    
    var data = getMovieObject();
    console.log(data)
    $(document).ready(function(){
        $.ajax({
            type:'POST',
            url:"http://localhost:3000/api/movies",
            data:data
        }).then(function(){
            getAllMovies();
        })
    })

    
<<<<<<< HEAD
}
=======
}

>>>>>>> 90959e56c776c4c527cf8796813cdff7f6eac998
