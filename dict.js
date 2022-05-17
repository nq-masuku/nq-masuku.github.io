$(document).ready(
    function () {
    $("#btn").click(function(){
        dictionaryCall();
    });
    });
    
    function dictionaryCall() {
    $.ajax({
    url: "http://localhost:3000/word-lookup",
    headers: {"Access-Control-Allow-Origin" : "*"},
    type: "get",
    dataType: "json",
    data: { word: $("#word").val() },
    success: showPicture,
    error: noPicture
    });
    };
    
    function showPicture(data) {
   
    //$("#pic").attr("src", data.url);
    $("h1").text(data[0].word);
    };
    function noPicture(error) {
    alert(error.responseText);
    };
    