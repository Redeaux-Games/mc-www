document.addEventListener('DOMContentLoaded', () => {

  const launchButton = document.querySelector('#launch-modal');
  const launchButtonA = document.querySelector('#launch-modal-a');
  const launchButtonB = document.querySelector('#launch-modal-b');
  const launchButtonC = document.querySelector('#launch-modal-c');
  const modal = document.querySelector('#modal');
  const closeButton = document.querySelector('.close-button');
  const modalContent = document.querySelector('#modal-content');

  launchButton.addEventListener('click', () => {
    fetch('../roadmap.html')
      .then((response) => response.text())
      .then((html) => {
        modalContent.innerHTML = html;
        modal.style.display = 'block';
      });
  });

  launchButtonA.addEventListener('click', () => {
    fetch('../cookies.html')
      .then((response) => response.text())
      .then((html) => {
        modalContent.innerHTML = html;
        modal.style.display = 'block';
      });
  });

  launchButtonB.addEventListener('click', () => {
    fetch('../terms.html')
      .then((response) => response.text())
      .then((html) => {
        modalContent.innerHTML = html;
        modal.style.display = 'block';
      });
  });

  launchButtonC.addEventListener('click', () => {
    fetch('../privacy.html')
      .then((response) => response.text())
      .then((html) => {
        modalContent.innerHTML = html;
        modal.style.display = 'block';
      });
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

});
