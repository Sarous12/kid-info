let searchForm = document.querySelector('.search-form'); //selection du formulaire 
let navbar = document.querySelector('.navbar');//selection du menu nav
//lorsqu'on clique sur l'icone le searchForm s'active
document.querySelector('#search-btn').onclick= () => {
    // navbar.classList.toggle('none');// pour cacher les éléments du menu
    searchForm.classList.toggle('active');
    navbar2.classList.remove('active');
    loginForm.classList.remove('active');
}
// pour pouvoir fermer avec la croix du label 
document.querySelector('#close').onclick= () => {
    navbar.classList.toggle('none');
    searchForm.classList.toggle('active');
    
}
// pour afficher le formulaire de connexion
let loginForm = document.querySelector('.login-form');//pour selectionner le login-form
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar2.classList.remove('active');
    searchForm.classList.remove('active');
    
}

// pour afficher le menu lorsque nous sommes sur petite taille
let navbar2 = document.querySelector('.navbar');//pour selectionner le menu
document.querySelector('#menu-btn').onclick = () =>{
    navbar2.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}
// lorsqu'on clique sur un icone l'autre se referme
window.onscroll= () =>{
    navbar2.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

// pour augmenter et reduire la quantité du stock

document.getElementById('increase').addEventListener('click', function() {
    let value = parseInt(document.querySelector('.quantity-value').textContent, 10);
    document.querySelector('.quantity-value').textContent = value + 1;
});

document.getElementById('decrease').addEventListener('click', function() {
    let value = parseInt(document.querySelector('.quantity-value').textContent, 10);
    if (value > 1) { // Empêche de descendre en dessous de 1
        document.querySelector('.quantity-value').textContent = value - 1;
    }
});


document.getElementById('increases').addEventListener('click', function() {
    let value = parseInteger(document.querySelector('.quantity-value').textContent, 10);
    document.querySelector('.quantity-values').textContent = value + 1;
});

document.getElementById('decreases').addEventListener('click', function() {
    let value = parseInteger(document.querySelector('.quantity-values').textContent, 10);
    if (value > 1) { // Empêche de descendre en dessous de 1
        document.querySelector('.quantity-values').textContent = value - 1;
    }
});
