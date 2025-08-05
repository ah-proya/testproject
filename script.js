// تایپ خودکار عنوان اصلی
const title = document.querySelector("h1");
const texts = ["About Me", "Ahproya Ahmadkhah", "HTML • Java • Python"];
let i = 0, j = 0, current = "", isDeleting = false;

function typeLoop() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      current = texts[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = texts[i].substring(0, j--);
    }

    title.innerHTML = `<span>${current}</span>`;

    if (j === texts[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(typeLoop, isDeleting ? 50 : 120);
  }
}
typeLoop();