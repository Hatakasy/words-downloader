function download(text) {
  filename = "word.txt";
  final = "\n\n\n\n\n\n\nObrigado por usar. \n\nAtt. Hatakasy"
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text + final)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
