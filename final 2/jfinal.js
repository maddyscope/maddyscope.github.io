var dogwood = document.getElementById("perso1");
var evergreen = document.getElementById("perso2");
var maple = document.getElementById("perso3");
var oak = document.getElementById("perso4");
var palm = document.getElementById("perso5");


// on crée la fonction qui va lancer le jeu 

function startgame(character) {
    if (character === "pear") {
        //setup for pear
        window.open("pear.html", "_self");
    }
    else if (character === "cherry") {
        //setup for cherry
        window.open("cherry.html", "_self");

    }
    else if (character === "apple") {
        //setup for apple
        window.open("apple.html", "_self");

    }
    else if (character === "orange") {
        //setup for orange
        window.open("orange.html", "_self");


    }else if (character === "lemon") {
        //setup for lemon
        window.open("lemon.html", "_self");

    }
    console.log("You have clicked " + character);
}

// here is where the game starts from each 

dogwood.addEventListener("click", function () {
    startgame("pear")
});

evergreen.addEventListener("click", function () {
    startgame("cherry")
});

maple.addEventListener("click", function () {
    startgame("apple")
});

oak.addEventListener("click", function () {
    startgame("orange")
});

palm.addEventListener("click", function () {
    startgame("lemon")
});


    
    
    
    