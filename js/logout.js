function logout() {
	var yakin = confirm("Anda yakin ingin keluar?");
	if (yakin) {
		document.write("Anda berhasil keluar");
		window.location = "login.html";
	} else {
		window.location = "home.html"
	}
}