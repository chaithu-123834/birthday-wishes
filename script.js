let slideIndex = 0;

function openCard() {
    document.getElementById("bgMusic").play(); // 🎵 Play music
    document.getElementById("slideshow-container").style.display = "block"; // 📸 Show images
    showSlides();
}

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000); // ⏳ Change image every 10 seconds
}