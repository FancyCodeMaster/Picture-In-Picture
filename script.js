// DOMs
const video = document.getElementById("video");
const button = document.getElementById("button");

// Async function that takes screen sharing permission from the user and add it to the video element and allows you to play
async function getVideo() {

    try {
        const screenShare = await navigator.mediaDevices.getDisplayMedia();
        // adding the screen share as the src of the video
        video.srcObject = screenShare;
        // If video's data are loaded , then play the video
        video.onloadedmetadata = () => {
            video.play();
        };
    } catch (error) {
        console.log("Shit , error : " , error);
    }

};

// Calling Asynchronous function 
getVideo();

// Getting the picture in picture request from video without showing the video and enabling it after we click START button
button.addEventListener("click", async () => {

    // Disable the button
    button.disabled = true;

    // Request to show Picture in Picture mode
    await video.requestPictureInPicture();

    // Enable the button again
    button.disabled = false;

});