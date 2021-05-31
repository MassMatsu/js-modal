const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = [...document.getElementsByClassName('show-modal')];

function toggleModal() {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}

btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    // if (modal.classList.contains('hidden')) {
    //   modal.classList.remove('hidden');
    //   overlay.classList.remove('hidden');
    // }
    toggleModal();
  });
});

btnCloseModal.addEventListener('click', () => {
  // if (!modal.classList.contains('hidden')) {
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
  // }
  toggleModal();
});

console.log(modal.classList.contains('hidden'));
