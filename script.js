let $upKey = $("#keyboard-upper-container")
let $lowKey = $("#keyboard-lower-container")
let sentencesArr = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let sentences= 0;
let letter= 0;
let currentSentence = sentencesArr[sentences];
let currentLetter = sentencesArr[letter]

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
    console.log(keyvent3.which)  //easier logging button press
    let $key = $("#" + keyvent3.which);
    $($key).css("background-color", "aqua");
    $(document).keyup(function (keyvent3) {
        $($key).css("background-color", "white"); //turns key lighter after press? --inpect css for color
    });
});

//sentence displays
if (letter < currentSentence.length) {
    letter + 1
} else {
    if (sentences < sentencesArr.length) {
        sentences++
        $("#sentence").text(currentSentence)
        $("#feedback").empty();
    }
}


//****DO NOT CAPS LOCK OR IT WILL TAKE YOU AN HOUR TO FIGURE OUT WHY THINGS ARENT LOGGING> JEEZ */