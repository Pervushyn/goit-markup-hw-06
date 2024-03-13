document.addEventListener('DOMContentLoaded', function() {
  
  const openModalButton = document.querySelector('.hero-button');
  const modal = document.querySelector('.backdrop');
  const closeModalButton = modal.querySelector('.modal-close');

  function openModal() {
    modal.classList.remove('is-hidden'); 
  }

  function closeModal() {
    modal.classList.add('is-hidden'); 
  }

  openModalButton.addEventListener('click', openModal);

  closeModalButton.addEventListener('click', closeModal);

  modal.addEventListener('click', function(event) {
    if (event.target === this) {
      closeModal();
    }
  });

  // Предотвращаем закрытие модального окна при клике внутри самого модального окна
  document.querySelector('.backdrop').addEventListener('click', function(event) {
    event.stopPropagation();
  });
});