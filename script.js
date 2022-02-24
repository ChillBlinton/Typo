let $upKey = $("#keyboard-upper-container")
let $lowKey = $("#keyboard-lower-container")
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

//toggling shift key 
$(document).keydown(function (keyvent1) {
    if (keyvent1.which === 16) { //uopkeys
        $($upKey).css("display", "block");
        $($lowKey).css("display", "none");
        $(document).keyup(function (keyvent2) {
            if (keyvent2.which === 16) { //lowkeys
                $($upKey).css("display", "none");
                $($lowKey).css("display", "block");
            }
        });
    }
});

$(document).keypress(function (keyvent3) {
    console.log(keyvent3.which)  //easier logout button press
    let $key = $("#" + keyvent3.which);
    $($key).css("background-color", "aqua");
    $(document).keyup(function (keyvent3) {
        $($key).css("background-color", "white"); //turns key lighter after press? --inpect css for color
    });
});



//check keys pressed
// $("body").keyup(function (event) {
//     console.log(event.keyCode);
// });
// $("body").keydown(function (event) {
//     console.log(event.keyCode);
// });
// $("body").keypress(function (event) {
//     console.log(event.keyCode);
// });


//****DO NOT CAPS LOCK OR IT WILL TAKE YOU AN HOUR TO FIGURE OUT WHY THINGS ARENT LOGGING> JEEZ */