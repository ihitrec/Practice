

let cellArray1 = document.getElementsByClassName("a");
let cellArray = Object.values(cellArray1);


$(".foward").click(moveFoward);
function moveFoward() {
    let firstImg = cellArray[0];
    let lastImg = cellArray[5];
    let lastImgOrder = parseInt($(lastImg).css("order"));
    let moveValue = parseInt($(".images").css("margin-left"));
    $(".images").animate({ marginLeft: `${moveValue - 320}px` }, 900);
    $(".foward").unbind("click");
    $(".backward").unbind("click");
    setTimeout(function () {
        $(firstImg).css("order", lastImgOrder + 1);
        $(".images").css("margin-left", `${moveValue}px`);
        cellArray.push(cellArray[0]);
        cellArray.shift();
        $(".foward").click(moveFoward);
        $(".backward").click(moveBackward);
    }, 920);
}


$(".backward").click(moveBackward);
function moveBackward() {
    let firstImg = cellArray[0];
    let lastImg = cellArray[5];
    let firstImgOrder = parseInt($(firstImg).css("order"));
    let moveValue = parseInt($(".images").css("margin-left"));
    $(lastImg).css("order", firstImgOrder - 1);
    $(".images").css("margin-left", `${moveValue - 320}px`)
    $(".images").animate({ marginLeft: `${moveValue}px` }, 900);
    $(".foward").unbind("click");
    $(".backward").unbind("click");
    cellArray.unshift(cellArray[5]);
    cellArray.pop();
    setTimeout(function () {
        $(".foward").click(moveFoward);
        $(".backward").click(moveBackward);
    }, 920);
}