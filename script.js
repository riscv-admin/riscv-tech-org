// Get all rows that can show tooltips
const rows = document.querySelectorAll('.row');

// Get the tooltip element
const tooltip = document.getElementById('tooltip');

// Loop through rows and add mouseover/mouseout events
rows.forEach(row => {
    row.addEventListener('mouseover', function() {
        // Set the tooltip content from the data-tooltip attribute
        tooltip.textContent = this.getAttribute('data-tooltip');
        
        // Calculate position for the tooltip
        let rect = this.getBoundingClientRect();
        tooltip.style.top = rect.bottom + window.scrollY + "px";
        tooltip.style.left = rect.left + window.scrollX + "px";
        
        // Show the tooltip
        tooltip.style.display = 'block';
    });

    row.addEventListener('mouseout', function() {
        // Hide the tooltip
        tooltip.style.display = 'none';
    });
});




