"use strict"

$(document).ready(function(){
    $.ajax({
        crossDomain:true,
        contentType:"application/json",
        url:"http://localhost:3000/api/movies",
        dataType:"json",
        type: "get",
        
        success: function(data, second, third){
            // let result = JSON.stringify(data)
            for (let i = 0; i < data.length; i++){
                    $("#movieTable").find('tbody').append(`<tr><td>${data[i]["id"]}</td><td>${data[i]["title"]}</td><td>${data[i]["genre"]}</td><td>${data[i]["director"]}</td></tr>`)
                    

                }
        },
        error: function(meta, errorThrown, third){
            console.log(errorThrown);
        }




    })
})
