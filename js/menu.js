document.getElementById('openMenu').addEventListener('click', function() {
    document.getElementById('menuList').classList.add('show');
    document.getElementById('openMenu').style.display = 'none';
    document.getElementById('closeMenu').style.display = 'block';
});

document.getElementById('closeMenu').addEventListener('click', function() {
    document.getElementById('menuList').classList.remove('show');
    document.getElementById('openMenu').style.display = 'block';
    document.getElementById('closeMenu').style.display = 'none';
});
