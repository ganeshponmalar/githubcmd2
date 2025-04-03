document.getElementById('menu-toggle').addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '200px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '200px';
    }
});
