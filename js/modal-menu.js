document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.querySelector('.menu-toggle');
    const modal = document.querySelector('.menu-container');
    const closeModalButton = modal.querySelector('.mobile-menu-btn');
  
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
  
    document.querySelector('.menu-container').addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });