var notify = document.querySelector(".notify");
var btn = document.querySelector(".btn");

btn.addEventListener("click", increaseNotifyCount);

function increaseNotifyCount() {
  var count = Number(notify.getAttribute("data-content") || 0);
  
  notify.setAttribute("data-content", count + 1);

  if (count === 0) notify.classList.add("counter");

  return false;
}
