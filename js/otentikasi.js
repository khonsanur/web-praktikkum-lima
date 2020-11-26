function validasi() {
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        if (user == "" && pass == "") {
            alert('Username / Password tidak boleh kosong');
            return false;
        }
        else if (pass.length < 7){
            alert('Password kurang dari 7');
            return false;
        }
        else if (user == "nurulfikri01" && pass == "nf12345"){
            alert('Login berhasil!');
            window.location = "home.html";
            return false;
        }else{
            alert("Username / Password anda salah, Coba lagi");
        }        
}