function generateQR() {
    var inputValue = document.getElementById("input").value;
    if (inputValue.trim() !== "") {
      var qr = new QRCode(document.getElementById("qrcode"), {
        text: inputValue,
        width: 200,
        height: 200,
        colorDark : "#000",
        colorLight : "#fff",
        correctLevel : QRCode.CorrectLevel.H
      });
    } else {
      alert("Please enter a valid URL or message");
    }
  }
  