

let cellArray1 = document.getElementsByClassName("a");
let cellArray = Object.values(cellArray1);


$(".foward").click(moveFoward);
function moveFoward() {
    let firstImg = cellArray[0];
    let lastImg = cellArray[5];
    let lastImgOrder = parseInt($(lastImg).css("order"));  //   6
    let moveValue = parseInt($(".images").css("left"));   // 
    $(".images").css("left", `${moveValue - 320}px`);
    setTimeout(function () {
        $(firstImg).css("order", lastImgOrder + 1);
        cellArray.push(cellArray[0]);
        cellArray.shift();
    }, 5000)

}


$(".backward").click(moveBackward);
function moveBackward() {
    let firstImg = document.getElementsByClassName("a")[0];
    let lastImg = document.getElementsByClassName("a")[5];
    let moveValue = parseInt($(".images").css("left"));
    $(".images").css("left", `${moveValue + 320}px`);
}





// let firstImg = 0;
// function moveFoward() {
//     $(imgArray[firstImg]).css("order", "1");
//     firstImg++;
//     if (firstImg === 6) {
//         firstImg = 0;
//         for (i = 0; i < 6; i++) {
//             $(imgArray[i]).css("order", "initial");
//         }
//     }
// }
