function randomcolor() {
    let max=255;
    let rnd = Math.floor(Math.random() * max);
    return rnd;
}

function change_background() {
    let r=randomcolor();
    let g=randomcolor();
    let b=randomcolor();
    let rgb= "rgb(" + r + ", " + g + ", " + b + ")";
    document.getElementById("change").innerHTML = rgb;
    document.body.style.backgroundColor = rgb;
}