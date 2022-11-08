let counter = 0;

let json = {
    images: [
        { "src": "image_01.jpg", "name": "Image 01" },
        { "src": "image_02.jpg", "name": "Image 02" },
        { "src": "image_03.jpg", "name": "Image 03" },
        { "src": "image_04.jpg", "name": "Image 04" },
        { "src": "image_05.jpg", "name": "Image 05" },
        { "src": "image_06.jpg", "name": "Image 06" },
        { "src": "image_07.jpg", "name": "Image 07" },
    ]
};

document.addEventListener("DOMContentLoaded", () => {

    reloadImages();

});

function reloadImages() {
    let thumbCounter = 0;
    for (var i = counter; i < counter + 4; i++) {
        
        let thumb = document.getElementById("thumb0" + thumbCounter);
        thumb.src = "images/" + json.images[i].src;

        thumbCounter++;
    }

    var bigOne = document.getElementById("largeImage");
    bigOne.src = "images/" + json.images[counter].src;
}

function moveRight() {
    if (counter < json.images.length - 4) {
        counter++;
        reloadImages();
    }
}

function moveLeft() {
    if (counter > 0) {
        counter--;
        reloadImages();
    }
}

  
function showImage(image) {
    document.getElementById("largeImage").src = image.src;
}



