// login //

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    

    
    if (username && password) {
        
        localStorage.setItem('username', username);
        
        window.location.href = 'main.html';
    } else {
        alert('tolong periksa kembali');
    }
}

// regitrasi //

function register() {
    

    
    if (username && password && birtday) {
    
        localStorage.setItem(
            'username',username
        );
    
        window.location.href = 'main.html';
    } else {
        alert('tolong ketik yang benar');
    }
}

// profil //

function showProfilePage() {
    const username = localStorage.getItem('username');
    const birtday = localStorage.getItem('birtday');
    if (username) {
        document.getElementById('profile-username').textContent = username;
    } 
    

    else {
        
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}

// menampilkan profil //
if (window.location.pathname.endsWith('main.html')) {
    showProfilePage();
}

// to do lis //