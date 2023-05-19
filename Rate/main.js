const btn = document.querySelector('button')
const post = document.querySelector('.post')
const widget = document.querySelector('.ster-widget');
btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    editbtn.onclick = () => {
        widget.style.display = "block";
        post.style.display = "none";
    }
    return false;
}