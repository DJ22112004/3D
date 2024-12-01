
function onClickMenu(){
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}

const toggleText = document.getElementById('toggleText');
const toggleHeading = document.getElementById('toggleHeading');
const toggleParagraph = document.getElementById('toggleParagraph');
const dots = document.querySelectorAll('.dots');
let currentIndex = 0;
let intervalId;

function updateText(index) {
    const content = document.getElementById(`content${index}`);
    const heading = content.querySelector('h1').textContent;
    const paragraph = content.querySelector('p').textContent;

    toggleHeading.textContent = heading;
    toggleParagraph.textContent = paragraph;
}

function startTextRotation() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        updateText(currentIndex);
    }, 2000); // Change text every 2 seconds
}

dots.forEach((dot, index) => {
    dot.addEventListener('mouseenter', () => {
        clearInterval(intervalId); // Stop automatic text changing
        updateText(index);
    });

    dot.addEventListener('mouseleave', () => {
        currentIndex = index; // Ensure it continues from the last hovered dot
        startTextRotation(); // Restart automatic text changing
    });
});

startTextRotation(); // Start the rotation when the page loads
