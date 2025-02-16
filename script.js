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


if (window.location.pathname.endsWith('main.html')) {
    showProfilePage();
}


//todo list//


document.getElementById('addbtn').addEventListener('click', addTask);

        function addTask() {
            const catatan = document.getElementById('catatan').value;
            const Tanggal = document.getElementById('Tanggal').value;
            const priority = document.getElementById('priority-select').value;

            if (catatan === '' || Tanggal === '') {
                alert('tolong masukan sesuatu');
                return;
            }

            const li = document.createElement('li');
            li.innerHTML = `
             <input type= "checkbox" class="cek">
             <span class="task">${catatan}</span>
             <span class="date">${Tanggal}</span>
             <span class="priority">${priority}</span>
             <button class="edit">Edit</button>
             <button class="delete">Delete</button>
            `;

            document.getElementById('draft').appendChild(li);

            document.getElementById('catatan').value = '';
            document.getElementById('Tanggal').value = '';

            li.querySelector('.delete').addEventListener('click', () => {
                li.remove();
            });

            li.querySelector('.edit').addEventListener('click', () => {
                document.getElementById('catatan').value = catatan;
                document.getElementById('Tanggal').value = Tanggal;
                document.getElementById('priority-select').value = priority;
                li.remove();
                });

            
        }

        