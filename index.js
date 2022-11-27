console.log("Hello world");
console.log("ฮั่นแน่~ มีคนแอบดู");

function changeData(index, data) {
  var inputBox = document.getElementsByClassName("index-" + index);
  for (var i = 0; i < inputBox.length; i++) {
    inputBox[i].value = data;
  }
  disableCopyAnsButton(false);

  // console.log("index-" + index, data);
}

function copyAnswer() {
  var space = [7, 11, 19, 25];
  var ans = "";
  for (var i = 1; i <= 30; i++) {
    if (space.includes(i)) {
      ans += " ";
    } else {
      thisValue = document.getElementById("ans-" + i).value;
      // console.log(thisValue);
      if (thisValue === "") {
        ans += "?";
      } else {
        ans += thisValue;
      }
    }
  }
  ans = ans.toUpperCase();
  // console.log(ans);
  navigator.clipboard.writeText(ans);
  disableCopyAnsButton(true);
}

function disableCopyAnsButton(isDisable) {
  const button = document.getElementById("copy-ans-btn");
  if (isDisable == true) {
    button.innerText = "คัดลอกคำตอบแล้ว";
    button.disabled = true;
  } else {
    button.innerText = "คัดลอกคำตอบ";
    button.disabled = false;
  }
}
