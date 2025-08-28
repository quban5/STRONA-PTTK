function toggleDropdown(button) {
  const allDropdowns = document.querySelectorAll('.ul-sidebar-dropdown');
  const allButtons = document.querySelectorAll('.sidebar-dropdown-category-button');

  const currentDropdown = button.nextElementSibling;
  const isOpen = currentDropdown.classList.contains('show');

  allDropdowns.forEach(dropdown => dropdown.classList.remove('show'));
  allButtons.forEach(btn => btn.classList.remove('rotate'));

  if (!isOpen) {
    currentDropdown.classList.add('show');
    button.classList.add('rotate');
  }
}

const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function showSidebar() {
  sidebar.classList.add('show');
  overlay.classList.add('show');
}

function hideSidebar() {
  sidebar.classList.remove('show');
  overlay.classList.remove('show');
}

overlay.addEventListener('click', hideSidebar);
