
//load all images with a data src attribute
const photo = document.querySelectorAll("img[data-src]");

//settings for the InstersectionObserver
const options = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
  };



  const loadImages = (image) => {
      image.setAttribute("src", image.getAttribute("data-src"));
      image. onload = () => {
          image.removeAttribute("data-src");
      };
  };


//is the image intersecting the Viewport (IntersectionObserver)
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }else{
      console.log(entry.target);
      loadImages(entry.target);
      observer.unobserve(entry.target);
    }
    
  });
}, options);

//loops through each img to check and load 
photo.forEach((img) => {
        observer.observe(img);
    });



