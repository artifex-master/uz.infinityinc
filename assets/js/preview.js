$(document).ready(function () {
  $('.mobile-slick-certificates-wrap').imagePopup({
    closeButton:{
      src: "./assets/images/close-icon.png",
      width: "40px",
      height:"40px"
    },
    imageBorder: "15px solid #ffffff",
    borderRadius: "10px",
    imageWidth: "500px",
    imageHeight: "400px",
    imageCaption: {
        exist: true,
        color: "#ffffff",
        fontSize: "40px"
    },
    open: function(){
        console.log("opened");
    },
    close: function(){
        console.log("closed");
    }    
  });
});