let button = document.getElementById("tombol")




button.addEventListener("click",function () {
    const Nama = document.getElementById("nama").value
    const Absen = document.getElementById("absen").value
    const Password = document.getElementById("password").value

    if (!Nama || !Absen || !Password) {
        alert(" Nama dan Absen wajib di isi ")
        return;
    } 

     if (Nama === "a" && Absen === "1" && Password ==="11") {
        alert("Login Berhasil")

     }else{
        alert("AKUN TIDAK DI TEMUKAN")
     }
})