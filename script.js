let $upKey = $("#keyboard-upper-container")
let $lowKey = $("#keyboard-lower-container")

//toggling shift key 
$(document).keydown(function (event) {
    if (event.which === 16) { //uopkeys
        $($upKey).css("display", "block");
        $($lowKey).css("display", "block");
        $(document).keyup(function (event2) {
            if (event2.which === 16) { //uopkeys
                $($upKey).css("display", "block");
                $($lowKey).css("display", "block");
            }
        });
    }
}

)



//check keys pressed & held
$("body").keyup(function (event) {
    console.log(event.keyCode);
});
$("body").keydown(function (event) {
    console.log(event.keyCode);
});
$("body").keypress(function (event) {
    console.log(event.keyCode);
});
