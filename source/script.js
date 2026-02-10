let button = document.getElementById("tombol")




button.addEventListener("click",function () {
    const Nama = document.getElementById("nama").value
    const Absen = document.getElementById("absen").value

    if (!Nama || !Absen) {
        alert(" Nama dan Absen wajib di isi ")
        return;
    } 

     if (Nama === "a" && Absen === "1") {
        alert("Login Berhasil")

     }else{
        alert("NAMA ATAU ABSEN SALAH")
     }
})