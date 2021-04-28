// image slider //


myImage = 2;
function swapImage() {
    switch (myImage) {
case 1:
            imgs.src = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/the_health_benefits_of_yoga_ref_guide/650x350_the_health_benefits_of_yoga_ref_guide.jpg"
            myImage = 2
            return(false);
case 2:
            imgs.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&w=1000&q=80"
            myImage = 1
            return(false);

}
}
setInterval(swapImage,1000);