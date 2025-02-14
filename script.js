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
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const date = document.getElementById('birtdhay').value;
    const useremail = document.getElementById('Email').value;

    
    if (username && password && date && useremail) {
        localStorage.setItem('username', username);
        localStorage.setItem('date', date);
        localStorage.setItem('useremail', useremail);
        
        window.location.href = 'main.html';
    } else {
        alert('tolong ketik yang benar');
    }
}

// profil //

function showProfilePage() {
    const username = localStorage.getItem('username');
    const date = localStorage.getItem('date');
    const useremail = localStorage.getItem('useremail');
    //pemanggialan data untuk di tampilkan
    if (username && date && useremail) {
        document.getElementById('profile-username').textContent = username;
        document.getElementById('Tanggal-lahir').textContent = date;
        document.getElementById('useremail').textContent = useremail;
    } else {

        
        window.location.href = 'login.html';
    }
}


function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('date');
    localStorage.removeItem('useremail');
    window.location.href = 'login.html';
}

// menampilkan profil //
if (window.location.pathname.endsWith('main.html')) {
    showProfilePage();
}


