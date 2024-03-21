const modal = document.getElementById('modal');
const showModal = document.getElementById('showModal');
const overlay = document.getElementById("overlay");
const cancel = document.getElementById('cancel');

showModal.addEventListener("click", () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
})

cancel.addEventListener("click", () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
})
