/*TODO 
[X] calculator won't take decimal input. why */

function tipCalc(event) {
  event.preventDefault();
  let billAmt = parseFloat(document.getElementById('billamt').value);

  switch(true) {
    case (service.value === "excellent"): {
        let billTip = 0.25*billAmt;
        let billTotal = billAmt + billTip;
        console.log(billTip.toFixed(2));
        console.log(billTotal.toFixed(2));
        document.getElementById("tipAmt").textContent = billTip.toFixed(2);
        document.getElementById("totalBill").textContent = billTotal.toFixed(2);
        break;
      }
  } switch(true) {
    case (service.value === "good"): {
      let billTip = 0.20*billAmt;
      let billTotal = billAmt + billTip;
      console.log(billTip.toFixed(2));
      console.log(billTotal.toFixed(2));
      document.getElementById("tipAmt").textContent = billTip.toFixed(2);
      document.getElementById("totalBill").textContent = billTotal.toFixed(2);
      break;
    }
  } switch(true) {
    case (service.value === "fair"): {
        let billTip = 0.15*billAmt;
        let billTotal = billAmt + billTip;
        console.log(billTip.toFixed(2));
        console.log(billTotal.toFixed(2));
        document.getElementById("tipAmt").textContent = billTip.toFixed(2);
        document.getElementById("totalBill").textContent = billTotal.toFixed(2);
        break;
      }
  } switch(true) {
    case (service.value === "poor"): {
        let billTip = 0.10*billAmt;
        let billTotal = billAmt + billTip;
        console.log(billTip.toFixed(2));
        console.log(billTotal.toFixed(2));
        document.getElementById("tipAmt").textContent = billTip.toFixed(2);
        document.getElementById("totalBill").textContent = billTotal.toFixed(2);
        break;
      }
  }
}