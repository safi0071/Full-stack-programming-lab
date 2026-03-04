const images = [
    {
        src: "https://picsum.photos/id/1015/500/300",
        caption: "Beautiful Landscape"
    },
    {
        src: "https://picsum.photos/id/1016/500/300",
        caption: "Mountain View"
    },
    {
        src: "https://picsum.photos/id/1018/500/300",
        caption: "Sunset Scene"
    }
];

let currentIndex = 0;

const imgElement = document.getElementById("galleryImage");
const captionElement = document.getElementById("caption");

function showImage(index) {
    imgElement.classList.add("fade");

    setTimeout(() => {
        imgElement.src = images[index].src;
        captionElement.textContent = images[index].caption;
        imgElement.classList.remove("fade");
    }, 500);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}