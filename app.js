const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = [...document.querySelectorAll('.show-modal')];


function openModal() {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
}
function closeModal() {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}

// click to show the modal ------------------
btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn.textContent)
    openModal();
  });
});

// click to close the modal
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// keypress to close the modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal()
})