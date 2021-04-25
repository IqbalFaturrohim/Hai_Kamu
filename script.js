fl = 1;

function f1() {
    alert("Terima kasih yaaa... Semoga hubungan kita bisa harmonis untuk kedepannya... ");
}

function no() {
    alert("Makasi yaaa... udah mau jawab. Aku bisa terima keputusannmu");
}

function f() {
    if (fl == 1) {
        Bn.style.top = 90
        Bn.style.left = 500
        fl = 2
    } else if (fl == 2) {
        Bn.style.top = 90
        Bn.style.left = 50
        fl = 3
    } else if (fl == 3) {
        Bn.style.top = 235
        Bn.style.left = 360
        fl = 1
    }
}

function diKlik() {
    if (document.getElementById("btnNembak").innerHTML === "Yeiii aku di klik") {
        return document.getElementById("btnNembak").innerHTML = "Klik aku ^_^";
    }
    return document.getElementById("btnNembak").innerHTML = "Yeiii aku di klik";
}