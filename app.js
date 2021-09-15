const img=[
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',

];
let  imageIndex= 0;
const imgElement =document.getElementById('slide-img');

setInterval(()=>{
    if(imageIndex >= img.length){
        imageIndex=0;
    }
    const imgslide=img[imageIndex];
    imgElement.setAttribute('src',imgslide)
    imageIndex++;
},1000);