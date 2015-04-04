# Simple-JS-Slideshow
A simple JS slideshow that flips through images in a directory numbered 1-max (ex. 1.jpg, 2.jpg, 3.jpg etc...)

##Setup
Create a directory including all your photos the same size numbered from 1 to # of photos.  Photoshop has a script you can use to do this.  Formatting will need to be done independently, but for an example please see <a href="http://stephanieleighliu.com/fathers_photos.html">this gallery</a>.

Change the following settings to match your needs under the model object:
    <br>imageDir: "./dad_pics/", //change name to directory where images are located.
    <br>totalImages: 31, //input total images in directory numbered 1 to totalImages
    <br>slideInterval: 2000, //duration when set to auto-play between each slide changing.  Default is 2 seconds.
    <br>imageLoc: "galImg", //name of img tag where photos placed in HTML
    <br>randomDisplay: true, //Will play images in a random order when play is selected. Set to false if want to play in sequence.
    
    
##Current limitations
Please check the included .html file for requirements for the HTML importing the JS slideshow.  Currently, event handlers are handled on the HTML page.
