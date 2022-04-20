$(document).ready(function() {
    defaultImageSrc = $("#preview").attr("src")
})
let index, defaultImageSrc;
$("#upload").change(function(e) {
    let files = e.target.files,
    length = files.length,
    imgsLength= 5 - $(".slideImage").length;
    if( imgsLength > length) { 
        setImagesLoop(length , files)
    }  else {
        setImagesLoop(imgsLength , files)
    }

    setTimeout(() => {
        if($(".slideImage").length == 5) {
            $(".uploudBtn").hide()
        } else {
            $(".uploudBtn").show()
        }
    } , 50)
   
   
})

function del() {
    $(".slider").children("img").eq(index).remove();
    console.log(index)
    if(index > 0) {
        index = index - 1
        let src = $(".slider").children("img").eq(index).attr("src");
        $("#preview").attr("src", src)
    }else {
        if($(".slideImage").length !==0) {
            let src = $(".slider").children("img").eq(index).attr("src");
            $("#preview").attr("src", src)
        }else {
            $("#preview").attr("src", defaultImageSrc)
        }
    }
    $(".uploudBtn").show()
}

function setImagesLoop(length , files) {
    for(var x = 0 ; x < length;x++ ) {
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
          $('.slider').prepend('<img src="'+srcData+'" class="slideImage" onClick="preview(this)" />')
        }
        fileReader.readAsDataURL(files[x]);
    }
}

function preview(e) {
    let src = $(e).attr("src");
    index = $(e).index();
    console.log(index)
    $("#preview").attr("src", src)
}