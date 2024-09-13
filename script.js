let currentPage = 1;
const flipContainer = document.getElementById('flipContainer');

document.body.addEventListener('click', () => {
    if (currentPage === 1) {
        flipContainer.innerHTML = `
            <div class="flip">
                <img src="image2.jpg" class="background" alt="Background Image 2">
            </div>
        `;
        document.querySelector('.flip').classList.add('flipped');
        currentPage++;
    } else if (currentPage === 2) {
        flipContainer.innerHTML = `
            <div class="flip">
                <img src="image3.jpg" class="background" alt="Background Image 3">
            </div>
        `;
        document.querySelector('.flip').classList.add('flipped');
        currentPage++;
    } else {
        window.location.href = "end.html";
    }
});
