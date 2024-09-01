// Toggle dropdown visibility when the dropdown button is clicked
document.getElementById('dropdownBtn').addEventListener('click', function(event) {
    var dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.classList.toggle('show');
    event.stopPropagation(); // Prevents the click event from bubbling up to the window click event
});

// Collapse the dropdown when a selection is made
document.querySelectorAll('.dropdown-content a').forEach(function(item) {
    item.addEventListener('click', function(event) {
        var dropdownContent = document.getElementById('dropdownContent');
        dropdownContent.classList.remove('show');
        document.getElementById('dropdownBtn').innerText = this.innerText; // Update the dropdown button with the selected category
        event.stopPropagation(); // Prevents the click event from bubbling up to the window click event
    });
});

// Collapse the dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('#dropdownBtn') && !event.target.closest('.dropdown')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
