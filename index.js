let Data = "X";

let arr = Array(9).fill(null)

function handleClick(box) {
   const id = Number(box.id);
   arr[id] = Data;
   // console.log(arr[id]);
   // console.log(arr);
   checkWinner();
   box.innerText = Data;
   Data = Data === "X" ? "O" : "X";
}

function checkWinner() {
   if (
      (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
      (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
      (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
      (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
      (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
      (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
      (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
      (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
   ) {
      return document.write(`Winner is : ${Data}`);
   }
}