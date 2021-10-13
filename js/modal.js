(() => {
  const refs = {
    openModalBtn: document.querySelector('.header-btn'),
    closeModalBtn: document.querySelector('.close-btn'),
    modal: document.querySelector('.backdrop'),
    modalItem: document.querySelector('.modal')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', removeModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function removeModal(e) {
    if (e.target.value !== modalItem) {
      refs.modal.classList.add('is-hidden');
    }
    
  }
})();
