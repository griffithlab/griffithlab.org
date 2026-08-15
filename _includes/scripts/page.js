(function () {
  Array.prototype.forEach.call(document.getElementsByClassName("navigation__folder"), function (element) {
    element.addEventListener("mouseover", function () {
      const child = element.querySelector("ul");
      const position = element.getBoundingClientRect();
      if (window.innerWidth > 799) {
        child.style.left = position.left + "px";
      }
    });
  });
})()
