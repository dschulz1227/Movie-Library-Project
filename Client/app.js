"use strict"

$(document).ready(function () {
    $.ajax({
        crossDomain: true,
        contentType: "application/json",
        url: "http://localhost:3000/api/movies",
        dataType: "json",
        type: "get",

        success: function (data, second, third) {
            // let result = JSON.stringify(data)
            for (let i = 0; i < data.length; i++) {
                $("#movieTable").find('tbody').append(`<tr><td>${data[i]["id"]}</td><td>${data[i]["title"]}</td><td>${data[i]["genre"]}</td><td>${data[i]["director"]}</td></tr>`)


            }
        },
        error: function (meta, errorThrown, third) {
            console.log(errorThrown);
        }
    })
})

// function getAllMovies(){
//     $.ajax({
//         crossDomain: true,
//         contentType: "application/json",
//         url: "http://localhost:3000/api/movies",
//         dataType: "json",
//         type: "get"
//     }
//     )}

// function getMovieObject(){   
//      $.ajax({
//         crossDomain: true,
//         contentType: "application/json",
//         url: "http://localhost:3000/api/movies",
//         dataType: "json",
//         type: "get",

//         success: function (data, second, third) {
//             // let result = JSON.stringify(data)
//             // for (let i = 0; i < data.length; i++) {
//              $("#movieTable").find('tbody').append(`<tr><td>${data[data.length]["id"]}</td><td>${data[data.length]["title"]}</td><td>${data[data.length]["genre"]}</td><td>${data[data.length]["director"]}</td></tr>`)


            // }
        // $("#movieTable").find('tbody').append(`<tr><td>${data[i]["id"]}</td><td>${data[i]["title"]}</td><td>${data[i]["genre"]}</td><td>${data[i]["director"]}</td></tr>`)
    // "id": document.getElementById('id').value,
    // "title": document.getElementById('title').value,
    // "genre": document.getElementById('genre').value,
    // "director":document.getElementById('director').value
        }
    })
}


// function createMovie(){
//     var data = getMovieObject();
//     $(document).ready(function(){
//         $.ajax({
//             type:'POST',
//             url:"http://localhost:3000/api/movies",
//             data:data
//         }).then(function(){
//             getAllMovies();
//         })
//     })

    
}