/*
* Simple javascript slideshow.  Requires setting event handlers in HTML.
* Uses while loop for imageArray (err, object)
* no view object - maybe use one for getPrevImage and getNextImage?
* Created by Stephanie on 2/15/2015.
* Recreated on 3/29/2015 to include object model.
*/
var model = {
    imageDir: "./dad_pics/", //directory of stored images
    totalImages: 31, //total images in directory numbered 1 to totalImages
    slideInterval: 2000, //delay when in autoplay
    imageLoc: "galImg",
    randomDisplay: false, //no random display on
    imageNum: 0, //current image number
    imageArray: [],
    //Stores all image srcs assuming images are named  1.jpg through totalImages number.
    setImageSources: function() {
        for(i = 1; i <= this.totalImages; i++) {
            this.imageArray.push(new this.imageItem(this.imageDir + i + ".jpg"));
        }
    },
    imageItem: function(imageSource) {
        this.imageItem = new Image();
        this.imageItem.src = imageSource;
    },
    //Returns location (url/src) of image.
    getImageItemLocation: function(imageObj) {
        return(imageObj.imageItem.src);
    }
};

var controller = {
    timerID: null,
    //If at first image, returns url of previous image.
    getPrevImage: function() {
        if(model.imageNum === 0) {
            var newImage = model.getImageItemLocation(model.imageArray[model.totalImages-1]);
        } else {
            model.imageNum = (model.imageNum - 1) % model.totalImages;
            var newImage = model.getImageItemLocation(model.imageArray[model.imageNum]);
        }
        return newImage;
    },
    //Returns URL of next image.  If at last image, returns url of first image.
    getNextImage: function() {
        if(model.randomDisplay) {
            model.imageNum = this.randNum(0, model.totalImages -1);
        } else {
            model.imageNum = (model.imageNum + 1) % model.totalImages;
        }

        var newImage = model.getImageItemLocation(model.imageArray[model.imageNum]);
        return(newImage);
    },
    //Random number generator for if random display is set to true
    randNum: function(x,y) {
        var range = y - x + 1;
        return Math.floor(Math.random() * range) + x;
    },
    //Assigns results of getPrevImage as src
    prevImage: function(currentImage) {
        var newImage = this.getPrevImage();
        document[currentImage].src = newImage;
    },
    //Auto plays through the pictures with interval determining how long until the next image
    autoPlayImage: function(currentImage) {
        var newImage = this.getNextImage();
        document[currentImage].src = newImage;
        var recall = "controller.autoPlayImage('" + currentImage + "')";
        this.timerID = setTimeout(recall, model.slideInterval);
    }
};

function init() {

    model.setImageSources();
}

window.onload = init;