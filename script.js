function toggleMenu() {
    const menu= document.querySelector(".menu-links")
    const icon= document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function openModal() {
    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}