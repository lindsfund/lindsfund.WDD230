
//load all images with a data src attribute
const photo = document.querySelectorAll("img[data-src]");

//settings for the InstersectionObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 100px 0px"
  };



  const loadImages = (image) => {
      image.setAttribute("src", image.getAttribute("data-src"));
      image. onload = () => {
          image.removeAttribute("data-src");
      };
  };


//is the image intersecting the Viewport (IntersectionObserver)
if ("IntersectionObserver" in window) {
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }else{
      console.log(entry.target);
      loadImages(entry.target);
      observer.unobserve(entry.target);
    }});
}, imgOptions);

//loops through each img to check and load 
photo.forEach((img) => {
        observer.observe(img);
    });
  }else{
    photo.forEach((img) => {
      loadImages(img);
    });
  }

    