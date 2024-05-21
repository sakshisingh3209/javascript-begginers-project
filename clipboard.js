function copytext() {
    let text = document.getElementById("copy");
    text.select();
    document.execCommand('copy');
}