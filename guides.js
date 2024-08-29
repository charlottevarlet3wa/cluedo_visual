const game = {
    characters: {
        mustard: {
            name: "Colonel Mustard",
            x : 7,
            y: 20,
            cards: ["Colonel Mustard", "Dagger", "Kitchen"],
            roll: function(){},
            move: function(x, y){},
            suggest: function(character, weapon, room){},
            accuse: function(character, weapon, room){},
            skip: function(){}
        },
        green : {},
        peacock : {},
        scarlet : {},
        white: {}
    },
    weapons: ["Dagger", "Candle Stick", "Revolver", "Rope", "Lead Pipe", "Wrench"],
    rooms: {
        ballroom : {
            name: "Ballroom",
            doors: [{x: 9, x: 4},{x: 14, y: 6}, {x: 18, y: 3}],
            characters: [],
        },
        kitchen : {},
        hall : {},
        lounge : {},
        diningRoom : {},
        conservatory : {},
        library : {}
    }
}

const sheet = {
    suspects : {
        mustard: {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "rgb(255,255,255)"},
            peacock: {text: "", backgroundColor: "#ffffff"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"}
        },
        green : {},
        peacock : {},
        scarlet : {},
        white: {}
    },
    weapons: {
        dagger : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "rgb(255,255,255)"},
            peacock: {text: "", backgroundColor: "#ffffff"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"}   
        },
        candlestick: {},
        revolver: {},
        rope: {},
        pipe: {},
        wrench: {},
    }
}