const tabBtn = document.querySelectorAll("#tabBtn");
const tabContent = document.querySelectorAll("#tabContent");

tabBtn.forEach((tab, index) => {
    tab.addEventListener("click", () => {
       tabContent.forEach(content => {
            content.classList.add("hidden");
       });
       tabBtn.forEach(tab => {
          tab.classList.remove("btn-active")
       });
       tabContent[index].classList.remove("hidden");
       tabBtn[index].classList.add("btn-active");
    });
});