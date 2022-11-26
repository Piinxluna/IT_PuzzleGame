console.log("Hello world");
console.log("ฮั่นแน่~ มีคนแอบดู");

function changeData(index, data) {
  var inputBox = document.getElementsByClassName("index-" + index);
  for (var i = 0; i < inputBox.length; i++) {
    inputBox[i].value = data;
  }
  //   console.log("index-" + index, data);
}
