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

function showSidebar() {
  document.querySelector('.sidebar').classList.add('show');
}

function hideSidebar() {
  document.querySelector('.sidebar').classList.remove('show');
}