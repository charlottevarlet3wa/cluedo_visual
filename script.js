// DOM
const errorElem = document.getElementById('error');

// GAME
const game = {
    characters: {
        mustard: {
            name: "Colonel Mustard",
            roll: function(){},
            move: function(x, y){},
            suggest: function(character, weapon, room){},
            accuse: function(character, weapon, room){},
            skip: function(){}
        },
        green : {
            name: "Mr. Green",
            roll: function(){},
            move: function(x, y){},
            suggest: function(character, weapon, room){},
            accuse: function(character, weapon, room){},
            skip: function(){}
        },
        peacock : {
            name: "Mrs. Peacock",
            roll: function(){},
            move: function(x, y){},
            suggest: function(character, weapon, room){},
            accuse: function(character, weapon, room){},
            skip: function(){}
        },
        scarlet : {
            name: "Miss Scarlet",
            roll: function(){},
            move: function(x, y){},
            suggest: function(character, weapon, room){},
            accuse: function(character, weapon, room){},
            skip: function(){}
        },
        white: {
            name: "Mrs. White",
            roll: function(){},
            move: function(x, y){},
            suggest: function(character, weapon, room){},
            accuse: function(character, weapon, room){},
            skip: function(){}
        }
    },
    weapons: ["Dagger", "Candle Stick", "Revolver", "Rope", "Lead Pipe", "Wrench"],
    rooms: {
        ballroom : {
            name: "Ballroom"
        },
        kitchen : {
            name: "Kitchen"
        },
        hall : {
            name: "Hall"
        },
        lounge : {
            name: "Lounge"
        },
        diningRoom : {
            name: "Dining Room"
        },
        conservatory : {
            name: "Conservatory"
        },
        library : {
            name: "Library"
        }
    }
}

const sheet = {
    suspects : {
        mustard: {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"}
        },
        green : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"}
        },
        peacock : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"}
        },
        scarlet : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"}
        },
        white: {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"}
        }
    },
    weapons: {
        dagger : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"}   
        },
        candlestick: {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
        revolver: {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
        rope: {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
        pipe: {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
        wrench: {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
    },
    rooms: {
        ballroom : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
        kitchen : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
        hall : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
        lounge : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
        diningRoom : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
        conservatory : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        },
        library : {
            mustard: {text: "", backgroundColor: "white"},
            green: {text: "", backgroundColor: "white"},
            peacock: {text: "", backgroundColor: "white"},
            scarlet: {text: "", backgroundColor: "white"},
            white: {text: "", backgroundColor: "white"} 
        }
    }
}


// Exemple de liens d'images pour chaque personnage
const characterImages = {
    mustard: "images/mustard.png",
    green: "images/green.png",
    peacock: "images/peacock.png",
    scarlet: "images/scarlet.png",
    white: "images/white.png"
};


const nameToImage = {
    "Colonel Mustard" : 'mustard', 
    "Mr. Green": 'green', 
    "Mrs. Peacock": 'peacock', 
    "Miss Scarlet" : 'scarlet', 
    "Mrs. White" : 'white',
    "Dagger": 'dagger', 
    "Candle Stick" : 'candlestick', 
    "Revolver" : 'revolver', 
    "Rope" : 'rope', 
    "Lead Pipe" : 'pipe', 
    "Wrench" : 'wrench',
    "Kitchen" : 'kitchen', 
    "Hall" : 'hall', 
    "Lounge" : 'lounge', 
    "Dining Room" : 'diningroom', 
    "Ballroom" : 'ballroom', 
    "Conservatory" : 'conservatory', 
    "Library" : 'library'
}


function selectCharacter(characterKey) {
    gameState.selectedCharacter = characterKey;
    const characterName = game.characters[characterKey].name;

    // Update name and image in the info section
    document.getElementById('my-name').textContent = characterName;
    const imageElement = document.createElement('img');
    // imageElement.src = characterImages[characterKey];
    imageElement.src = `images/${characterKey}.jpg`;
    imageElement.alt = characterName;

    const imageContainer = document.getElementById('my-image');
    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElement);

    // Disable methods for other characters
    for (const charKey in game.characters) {
        if (charKey !== characterKey) {
            for (const method in game.characters[charKey]) {
                if (typeof game.characters[charKey][method] === 'function') {
                    game.characters[charKey][method] = null;
                }
            }
        }
    }
    // Update humanPlayerIndex
    gameState.humanPlayerIndex = gameState.players.findIndex(name => name == characterName);

    // Hide selection UI and start the game
    document.getElementById('character-selection').style.display = 'none';
    document.getElementById('info-container').classList.add(characterKey);
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.classList.add(characterKey);
    })
    document.getElementById('info-container').style.display = 'block';
    setupGame();
}

// Exemple d'événement clic pour chaque image
document.querySelectorAll('#character-selection img').forEach(image => {
    image.addEventListener('click', function() {
        const characterKey = this.getAttribute('data-character'); // Supposons que chaque image a un attribut data-character-key
        selectCharacter(characterKey);
    });
});

function updateSheetText(category, row, column, newText) {
    if (sheet[category] && sheet[category][row] && sheet[category][row][column]) {
        sheet[category][row][column].text = newText;
        const cell = document.querySelector(`#${category}-${row}-${column}`);
        if (cell) {
            cell.textContent = newText;
        }
    } else {
        displayError("Invalid sheet reference.");
    }
}

function updateSheetBackgroundColor(category, row, column, newColor) {
    if (sheet[category] && sheet[category][row] && sheet[category][row][column]) {
        sheet[category][row][column].backgroundColor = newColor;
        const cell = document.querySelector(`#${category}-${row}-${column}`);
        if (cell) {
            cell.style.backgroundColor = newColor;
        }
    } else {
        displayError("Invalid sheet reference.");
    }
}



function executeCommand(command) {
    // Remove unnecessary spaces
    command = command.trim();

    // Check if the command concerns 'sheet'
    const sheetRegex = /^sheet\.(suspects|weapons|rooms)\.([a-zA-Z]+)\.([a-zA-Z]+)\.(text|backgroundColor)\s*=\s*['"](.+)['"]\s*;?$/;
    const sheetMatch = command.match(sheetRegex);

    if (sheetMatch) {
        const [, category, row, column, property, value] = sheetMatch;

        // Validate categories, rows, and columns
        if (!sheet[category]) {
            displayError(`Invalid category "${category}".`);
            return;
        }

        if (!sheet[category][row]) {
            displayError(`Invalid name "${row}" in category "${category}".`);
            return;
        }

        if (!sheet[category][row][column]) {
            displayError(`Invalid name "${column}" for row "${row}" in category "${category}".`);
            return;
        }

        // Apply the modification
        sheet[category][row][column][property] = value;
        const cellId = `${category}-${row}-${column}`;
        const cell = document.getElementById(cellId);

        if (property === 'text') {
            cell.textContent = value;
        } else if (property === 'backgroundColor') {
            cell.style.backgroundColor = value;
        }

        return;
    }

    // Check if the command concerns 'game'
    const gameCommandRegex = /^game\.characters\.([a-zA-Z]+)\.([a-zA-Z]+)\(([^)]*)\)\s*;?$/;
    const gameMatch = command.match(gameCommandRegex);

    if (gameMatch) {
        const [, characterName, methodName, params] = gameMatch;

        // Restrict command execution to the selected character
        if (characterName !== gameState.selectedCharacter) {
            displayError(`You cannot control ${characterName}.`);
            return;
        }

        const character = game.characters[characterName];
        if (typeof character[methodName] !== 'function') {
            displayError(`Invalid method "${methodName}" for the character "${characterName}".`);
            return;
        }

        // Extract and process parameters
        let args = params.split(',').map(arg => arg.trim());

        // Convert references to their actual values if necessary
        args = args.map(arg => {
            if (arg.startsWith('game.characters.')) {
                const argArr = arg.split('.');
                if(argArr.length < 4){
                    displayError('Invalid character argument.');
                    return;
                }
                const charKey = argArr[2];
                if(!charKey || !game.characters[charKey]){
                    displayError('Invalid character name.')
                    return;
                }
                if(argArr[3] != 'name'){
                    displayError('Character name must be a string.')
                    return;
                }
                return game.characters[charKey].name;
            } else if (arg.startsWith('game.rooms.')) {
                const argArr = arg.split('.')
                if(argArr.length < 4){
                    displayError('Invalid room argument.');
                    return;
                }
                const roomKey = arg.split('.')[2];
                if(!roomKey || !game.rooms[roomKey]){
                    displayError('Invalid room name.')
                    return;
                }
                if(argArr[3] != 'name'){
                    displayError('Character name must be a string.')
                    return;
                }
                return game.rooms[roomKey].name;
            } else if (arg.startsWith('game.weapons[')) {
                const weaponIndex = parseInt(arg.match(/\[(\d+)\]/)[1]);
                if(!game.weapons[weaponIndex]){
                    displayError('Invalid weapon index.')
                    return;
                }
                return game.weapons[weaponIndex];
            } else {
                return arg.replace(/^['"]|['"]$/g, ''); // Strip quotes if it's a string
            }
        });

        // Call the appropriate method with the processed arguments
        switch (methodName) {
            case 'move':
                if (gameState.currentStep !== 'move') {
                    displayError("Method 'move' is unavailable right now.");
                    return;
                }
                if (args.length === 2) {
                    const [x, y] = args.map(Number);
                    if (isNaN(x) || isNaN(y)) {
                        displayError("Coordinates must be numbers.");
                        return;
                    }
                    const hasMoved = move(x, y);
                    if (hasMoved) {
                        displayError('');
                        gameState.currentStep = 'choose';
                    }
                } else {
                    displayError("The move command requires two parameters: x and y.");
                }
                break;
            case 'roll':
                if (gameState.currentStep !== 'dice') {
                    displayError(`Method '${methodName}' is unavailable right now.`);
                    return;
                }
                rollDice();
                displayError('');
                gameState.currentStep = 'move';
                break;
            case 'suggest':
                if (gameState.currentStep !== 'choose') {
                    displayError(`Method '${methodName}' is unavailable right now.`);
                    return;
                }
                if (args.length === 3) {
                    const [suspect, weapon, room] = args;
                    const hasSuggested = makeSuggestion(suspect, weapon, room);
                    if (hasSuggested) {
                        displayError('');
                        gameState.currentStep = 'aiDice';
                    }
                } else {
                    displayError("The suggest command requires three parameters: character, weapon, and room.");
                }
                break;
            case 'accuse':
                if (gameState.currentStep !== 'choose') {
                    displayError(`Method '${methodName}' is unavailable right now.`);
                    return;
                }
                if (args.length === 3) {
                    const [suspect, weapon, room] = args;
                    displayError('');
                    makeAccusation(suspect, weapon, room);
                } else {
                    displayError("The accuse command requires three parameters: character, weapon, and room.");
                }
                break;
            case 'skip':
                if (gameState.currentStep !== 'choose') {
                    displayError(`Method '${methodName}' is unavailable right now.`);
                    return;
                }
                displayError('');
                gameState.currentStep = 'aiDice';
                skip();
                break;
            default:
                displayError(`Unknown method "${methodName}".`);
                break;
        }
        return;
    }

    // If no valid command is found
    displayError('Invalid command. Use a valid format for sheet or game.');
}


// COMMAND INPUT


const commandInput = document.getElementById('command-input');

// Liste des options d'autocomplétion par contexte
const autoCompleteOptions = {
    initial: ["game", "sheet"],
    sheet: ["suspects", "weapons", "rooms"],
    sheetCharacter: ["mustard", "green", "peacock", "scarlet", "white"], // noms des suspects
    sheetProperty: ["text", "backgroundColor"],
    game: ["characters", "weapons", "rooms"],
    gameCharacter: ["mustard", "green", "peacock", "scarlet", "white"], // noms des personnages
    gameRoom: ["ballroom", "kitchen", "hall", "lounge", "diningRoom", "conservatory", "library"],
    gameMethod: ["suggest", "accuse", "move", "roll", "skip"],
    name: ["name"]
};

// Événement keydown pour l'autocomplétion
commandInput.addEventListener('keydown', function(event) {

    if(event.key === 'Enter'){
        event.preventDefault();
        const command = document.getElementById('command-input').value.trim();
        executeCommand(command);
    }
    
    if (event.ctrlKey || event.altKey || event.metaKey || event.key.length > 1) return;

    let currentText = commandInput.value;

    if (event.key.match(/[a-zA-Z0-9]/)) {
        currentText += event.key;

        // Déterminer le contexte actuel en fonction du texte déjà saisi
        let suggestions = [];
        let parts = currentText.split('(')[0].split('.');
        let lastPart = parts.pop(); // On récupère la dernière partie à compléter
        let args = [];

        // Gérer les méthodes avec arguments
        if (currentText.includes('(')) {
            const methodParts = currentText.split('(')[1];
            args = methodParts.split(','); // Arguments
        }

        // Sélectionner les suggestions en fonction du contexte
        if (parts.length === 0) {
            suggestions = autoCompleteOptions.initial;
        } else if (parts[0] === "sheet") {
            if (parts.length === 1) {
                suggestions = autoCompleteOptions.sheet;
            } else if (parts.length === 2) {
                suggestions = autoCompleteOptions.sheetCharacter;
            } else if (parts.length === 3) {
                suggestions = autoCompleteOptions.sheetCharacter;
            } else if (parts.length === 4) {
                suggestions = autoCompleteOptions.sheetProperty;
            }
        } else if (parts[0] === "game") {
            if (parts.length === 1) {
                suggestions = autoCompleteOptions.game;
            } else if (parts[1] === "characters" && parts.length === 2) {
                suggestions = autoCompleteOptions.gameCharacter;
            } else if (parts[1] === "characters" && parts.length === 3) {
                suggestions = autoCompleteOptions.gameMethod;
            } else if (parts[1] === "rooms" && parts.length === 2) {
                suggestions = autoCompleteOptions.gameRoom;
            }
        }

        // Gérer l'autocomplétion des arguments
        if (args.length > 0) {
            const lastArg = args[args.length - 1].trim();
            const argParts = lastArg.split('.');

            if (argParts.length === 1) {
                suggestions = autoCompleteOptions.initial;
            } else if (argParts.length === 2) {
                if (argParts[0] === "game") {
                    suggestions = autoCompleteOptions.game;
                }
            } else if (argParts[1] === "characters" && argParts.length === 3) {
                suggestions = autoCompleteOptions.gameCharacter;
            } else if (argParts[1] === "rooms" && argParts.length === 3) {
                suggestions = autoCompleteOptions.gameRoom;
            } else if (argParts.length === 4 && argParts[3] === "name") {
                suggestions = autoCompleteOptions.name;
            }

            const lastArgPart = argParts[argParts.length - 1];
            const matchingOptions = suggestions.filter(option => option.startsWith(lastArgPart));

            if (matchingOptions.length === 1) {
                event.preventDefault();
                console.log(args.length)
                console.log(argParts.length)

                // if (args.length === 1 && argParts.length === 1) {
                if (argParts.length === 1) {
                    console.log('premier')
                    args[args.length - 1] = matchingOptions[0];
                } else {
                    args[args.length - 1] = argParts.slice(0, -1).join('.') + '.' + matchingOptions[0];
                }

                parts.push(lastPart); // Ajouter la partie déjà complétée
                commandInput.value = parts.join('.') + '(' + args.join(', ');
            }
        } else {
            // Autocomplétion normale pour le texte en dehors des arguments
            const matchingOptions = suggestions.filter(option => option.startsWith(lastPart));

            if (matchingOptions.length === 1) {
                event.preventDefault();
                parts.push(matchingOptions[0]); // Ajouter la partie complétée

                if (currentText.includes('(')) {
                    // S'il y a déjà une parenthèse ouvrante, on ne touche pas à la suite
                    commandInput.value = parts.join('.') + '(' + args.join(', ');
                } else {
                    commandInput.value = parts.join('.');
                }
            }
        }
    }
});


// const commandInput = document.getElementById('command-input');

// // Liste des options d'autocomplétion par contexte
// const autoCompleteOptions = {
//     initial: ["game", "sheet"],
//     sheet: ["suspects", "weapons", "rooms"],
//     sheetCharacter: ["mustard", "green", "peacock", "scarlet", "white"], // noms des suspects
//     sheetProperty: ["text", "backgroundColor"],
//     game: ["characters", "weapons", "rooms"],
//     gameCharacter: ["mustard", "green", "peacock", "scarlet", "white"], // noms des personnages
//     gameRoom: ["ballroom", "kitchen", "hall", "lounge", "diningRoom", "conservatory", "library"],
//     gameMethod: ["suggest", "accuse", "move", "roll", "skip"],
//     name: ["name"]
// };

// // Événement keydown pour l'autocomplétion
// commandInput.addEventListener('keydown', function(event) {
//     if (event.ctrlKey || event.altKey || event.metaKey || event.key.length > 1) return;

//     let currentText = commandInput.value;

//     if (event.key.match(/[a-zA-Z0-9]/)) {
//         currentText += event.key;

//         // Déterminer le contexte actuel en fonction du texte déjà saisi
//         let suggestions = [];
//         // let parts = currentText.split('.');
//         let parts = currentText.split('(')[0].split('.');
//         let lastPart = parts.pop(); // On récupère la dernière partie à compléter
//         let args = [];

//         // Gérer les méthodes avec arguments
//         if (currentText.includes('(')) {
//             const methodParts = currentText.split('(')[1];
//             args = methodParts.split(','); // Arguments
//         }

//         // Sélectionner les suggestions en fonction du contexte
//         if (parts.length === 0) {
//             suggestions = autoCompleteOptions.initial;
//         } else if (parts[0] === "sheet") {
//             if (parts.length === 1) {
//                 suggestions = autoCompleteOptions.sheet;
//             } else if (parts.length === 2) {
//                 suggestions = autoCompleteOptions.sheetCharacter;
//             } else if (parts.length === 3) {
//                 suggestions = autoCompleteOptions.sheetCharacter;
//             } else if (parts.length === 4) {
//                 suggestions = autoCompleteOptions.sheetProperty;
//             }
//         } else if (parts[0] === "game") {
//             if (parts.length === 1) {
//                 suggestions = autoCompleteOptions.game;
//             } else if (parts[1] === "characters" && parts.length === 2) {
//                 suggestions = autoCompleteOptions.gameCharacter;
//             } else if (parts[1] === "characters" && parts.length === 3) {
//                 suggestions = autoCompleteOptions.gameMethod;
//             } else if (parts[1] === "rooms" && parts.length === 2) {
//                 suggestions = autoCompleteOptions.gameRoom;
//             }
//         }

//         // Gérer l'autocomplétion des arguments
//         if (args.length > 0) {
//             const lastArg = args[args.length - 1].trim();
//             const argParts = lastArg.split('.');

//             if (argParts.length === 1) {
//                 suggestions = autoCompleteOptions.initial;
//             } else if (argParts.length === 2) {
//                 if (argParts[0] === "game") {
//                     suggestions = autoCompleteOptions.game;
//                 }
//             } else if (argParts[1] === "characters" && argParts.length === 3) {
//                 suggestions = autoCompleteOptions.gameCharacter;
//             } else if (argParts[1] === "rooms" && argParts.length === 3) {
//                 suggestions = autoCompleteOptions.gameRoom;
//             } else if (argParts.length === 4 && argParts[3] === "name") {
//                 suggestions = autoCompleteOptions.name;
//             }

//             const lastArgPart = argParts[argParts.length - 1];
//             const matchingOptions = suggestions.filter(option => option.startsWith(lastArgPart));

//             if (matchingOptions.length === 1) {
//                 event.preventDefault();
//                 console.log('hey !')
//                 console.log('arg parts :')
//                 console.log(argParts)
//                 console.log('slie :')
//                 console.log(argParts.slice(0, -1))
//                 console.log('join :')
//                 console.log(argParts.slice(0, -1).join('.'))
//                 console.log('args :')
//                 console.log(args)
//                 console.log('args length :')
//                 console.log(args.length)
//                 if(!args[0]) {
//                     args[args.length - 1] = matchingOptions[0];
//                 } else {
//                     args[args.length - 1] = argParts.slice(0, -1).join('.') + '.' + matchingOptions[0];
//                 }
//                 parts.push(lastPart); // Ajouter la partie déjà complétée
//                 commandInput.value = parts.join('.') + '(' + args.join(', ');
//             }
//         } else {
//             // Autocomplétion normale pour le texte en dehors des arguments
//             const matchingOptions = suggestions.filter(option => option.startsWith(lastPart));

//             if (matchingOptions.length === 1) {
//                 event.preventDefault();
//                 parts.push(matchingOptions[0]); // Ajouter la partie complétée

//                 if (currentText.includes('(')) {
//                     // S'il y a déjà une parenthèse ouvrante, on ne touche pas à la suite
//                     commandInput.value = parts.join('.') + '(' + args.join(', ');
//                 } else {
//                     commandInput.value = parts.join('.');
//                 }
//             }
//         }
//     }
// });






const gameState = {
    players: ["Colonel Mustard", "Mr. Green", "Mrs. Peacock", "Miss Scarlet", "Mrs. White"], // 5 joueurs
    playersId: ["colonel-mustard", "mr-green", "mrs-peacock", "miss-scarlet", "mrs-white"], // 5 joueurs
    currentPlayerIndex: 5, // Indice du joueur (humain) actuel (à supprimer)
    humanPlayerIndex: 0, // Indice du joueur (humain) actuel 
    selectedCharacter: null, // element DOM du pion à déplacer
    isPlayerTurn: true, // Vérifie si c'est le tour du joueur humain
    currentStep: 'start', // Gère l'étape actuelle de l'IA
    suggestionResponseIndex: 0,
    turnIndex: 0, // indice du joueur qui interroge (à supprimer)
    roundIndex: 0, // max nombre de tours potentiellement infini, à définir manuellement
    interrogatedCharacterIndex: 0, // indice du joueur interrogé
    interrogatingCharacterIndex: 0, // indice du joueur qui interroge
    deck: { 
        characters: ["Colonel Mustard", "Mr. Green", "Mrs. Peacock", "Miss Scarlet", "Mrs. White"], 
        weapons: ["Dagger", "Candlestick", "Revolver", "Rope", "Lead Pipe", "Wrench"], 
        rooms: ["Kitchen", "Hall", "Lounge", "Dining Room", "Ballroom", "Conservatory", "Library"]
    },
    cards: [],
    suggestion: [],
    accusation: [],
    isFalseAccusation: false, // quand le joueur a fait une mauvaise accusation, il ne pourra plus que répondre aux suggestions
    solution: { character: null, weapon: null, room: null },
    messageBox: document.getElementById('message-box'),
    aiObjectives: [], // Stocke les objectifs des IA
    aiRoomStayCount: [], // Compte le nombre de tours passés dans une pièce par les IA
    aiCurrentRooms: [null, null, null, null, null],
    isStarted: false
};

const log = document.getElementById('message-log');
const tooltip = document.getElementById('tooltip');
const diceResult = document.getElementById('dice-result');
const squares = document.querySelectorAll('.square');
const characters = document.querySelectorAll('.character');
const rooms = document.querySelectorAll('.room');
const roomDoors = {
    'kitchen': document.querySelectorAll('.square[room="kitchen"]'),
    'ballroom': document.querySelectorAll('.square[room="ballroom"]'),
    'conservatory': document.querySelectorAll('.square[room="conservatory"]'),
    'dining-room': document.querySelectorAll('.square[room="dining-room"]'),
    'library': document.querySelectorAll('.square[room="library"]'),
    'lounge': document.querySelectorAll('.square[room="lounge"]'),
    'hall': document.querySelectorAll('.square[room="hall"]')
};

const roomToPosition = new Map([
    ["kitchen", {left: 0, top: 0, width: 5 * 25, height: 9 * 20}],
    ["ballroom", {left: 9 * 25, top: 0, width: 8 * 25, height: 5 * 20}],
    ["conservatory", {left: 21 * 25, top: 0, width: 5 * 25, height: 11 * 20}],
    ["dining-room", {left: 0, top: 15 * 20, width: 5 * 25, height: 6 * 20}],
    ["library", {left: 9 * 25, top: 17 * 20, width: 8 * 25, height: 4 * 20}],
    ["lounge", {left: 21 * 25, top: 14 * 20, width: 5 * 25, height: 7 * 20}],
    ["hall", {left: 10 * 25, top: 8 * 20, width: 6 * 25, height: 6 * 20}]
]);

const roomNames = ["Kitchen", "Hall", "Lounge", "Dining Room", "Ballroom", "Conservatory", "Library"];

const doors = [
    {room: "Ballroom", x: 18, y: 3},
    {room: "Ballroom", x: 9, y: 4},
    {room: "Kitchen", x: 6, y: 6},
    {room: "Ballroom", x: 14, y: 6},
    {room: "Conservatory", x: 21, y: 7},
    {room: "Hall", x: 13, y: 8},
    {room: "Kitchen", x: 2, y: 10},
    {room: "Hall", x: 17, y: 11},
    {room: "Hall", x: 10, y: 12},
    {room: "Conservatory", x: 24, y: 12},
    {room: "Lounge", x: 23, y: 14},
    {room: "Dining Room", x: 4, y: 15},
    {room: "Hall", x: 13, y: 15},
    {room: "Library", x: 14, y: 17},
    {room: "Lounge", x: 21, y: 17},
    {room: "Dining Room", x: 6, y: 18},
    {room: "Library", x: 9, y: 19},
    {room: "Lounge", x: 18, y: 19}
];

// SHEET

const sheet2 = {
    mustard: {mustard: {text: "", backgroundColor: ""}, green: {text: "", backgroundColor: ""}, peacock: {text: "", backgroundColor: ""}, scarlet: {text: "", backgroundColor: ""}, white: {text: "", backgroundColor: ""}},
    green: {mustard: {text: "", backgroundColor: ""}, green: {text: "", backgroundColor: ""}, peacock: {text: "", backgroundColor: ""}, scarlet: {text: "", backgroundColor: ""}, white: {text: "", backgroundColor: ""}},
    peacock: {mustard: {text: "", backgroundColor: ""}, green: {text: "", backgroundColor: ""}, peacock: {text: "", backgroundColor: ""}, scarlet: {text: "", backgroundColor: ""}, white: {text: "", backgroundColor: ""}},
    scarlet: {mustard: {text: "", backgroundColor: ""}, green: {text: "", backgroundColor: ""}, peacock: {text: "", backgroundColor: ""}, scarlet: {text: "", backgroundColor: ""}, white: {text: "", backgroundColor: ""}},
    white: {mustard: {text: "", backgroundColor: ""}, green: {text: "", backgroundColor: ""}, peacock: {text: "", backgroundColor: ""}, scarlet: {text: "", backgroundColor: ""}, white: {text: "", backgroundColor: ""}}
};

// Setup game
function setupGame() {
    // populateSelects();
    initializeDeck();
    selectSolution();
    distributeCards();

    // SHEET
    // createSheetTable();

    // Initialisation des positions des personnages
    console.log(characters)
    
    setCharacterPosition(document.getElementById('miss-scarlet'), 7, 3);
    setCharacterPosition(document.getElementById('colonel-mustard'), 7, 20);
    setCharacterPosition(document.getElementById('mrs-white'), 10, 9);
    setCharacterPosition(document.getElementById('mr-green'), 19, 5);
    setCharacterPosition(document.getElementById('mrs-peacock'), 20, 19);

    characters.forEach((character, index) => {
        character.style.display = 'block';
        gameState.aiRoomStayCount.push({
            "Kitchen": 0,
            "Hall": 0,
            "Lounge": 0,
            "Dining Room": 0,
            "Ballroom": 0,
            "Conservatory": 0,
            "Library": 0
        });
        const closestDoor = findClosestDoor(character.getAttribute('x'), character.getAttribute('y'));
        gameState.aiObjectives.push(closestDoor);
    });

    document.querySelector('#my-cards p').textContent = "My cards: " + gameState.cards[gameState.humanPlayerIndex];
    const cardImages = document.querySelectorAll('#my-cards img');
    gameState.cards[gameState.humanPlayerIndex].forEach((card, i) => {
        console.log(card)
        cardImages[i].src = `images/${nameToImage[card]}.jpg`;
    })
    nextPlayer();
}

// Initialize deck
function initializeDeck() {
    // Définir les cartes de personnages, d'armes et de pièces
    gameState.deck.characters = ["Colonel Mustard", "Mr. Green", "Mrs. Peacock", "Miss Scarlet", "Mrs. White"]; // 5
    gameState.deck.weapons = ["Dagger", "Candle Stick", "Revolver", "Rope", "Lead Pipe", "Wrench"]; // 6
    gameState.deck.rooms = ["Kitchen", "Hall", "Lounge", "Dining Room", "Ballroom", "Conservatory", "Library"]; // 7

    // Mélanger chaque catégorie de cartes
    gameState.deck.characters = shuffleDeck(gameState.deck.characters);
    gameState.deck.weapons = shuffleDeck(gameState.deck.weapons);
    gameState.deck.rooms = shuffleDeck(gameState.deck.rooms);
}

// Fonction pour mélanger un deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Échange éléments
    }
    return deck;
}

// Select solution cards
function selectSolution() {
    gameState.solution.character = selectRandomCard(gameState.deck.characters);
    gameState.solution.weapon = selectRandomCard(gameState.deck.weapons);
    gameState.solution.room = selectRandomCard(gameState.deck.rooms);
    displayMessage("3 cards have been hidden.");
}

// Distribute remaining cards to players
function distributeCards() {
    // Combinez les cartes restantes
    const remainingCards = shuffleDeck([...gameState.deck.characters, ...gameState.deck.weapons, ...gameState.deck.rooms]);

    // Initialiser les mains des joueurs
    gameState.players.forEach((player, index) => {
        gameState.cards.push([]);
    });

    // Distribuer les cartes aux joueurs
    const count = remainingCards.length;
    for (let i = 0; i < count; i++) {
        gameState.cards[i % gameState.players.length].push(remainingCards.pop());
    }

    displayMessage("All of the remaining cards have been distributed.");
}

function nextPlayer() {
    if(!gameState.isStarted){
        gameState.isStarted = true;
    } else {
        gameState.interrogatingCharacterIndex = (gameState.interrogatingCharacterIndex + 1) % gameState.players.length;
    }
    
    displayMessage('', true);
    if (gameState.interrogatingCharacterIndex === gameState.humanPlayerIndex) {
        gameState.currentStep = "dice";
        gameState.isPlayerTurn = true;
        playerTurn();
    } else {
        gameState.currentStep = "aiDice";
        aiTurn();
    }
}

function playerTurn() {
    displayMessage("It is your turn. Roll the dice.");
    // le joueur doit cliquer sur le bouton rollDice()
}

function aiTurn() {
    const aiPlayer = gameState.players[gameState.interrogatingCharacterIndex];
    switch (gameState.currentStep) {
        case 'aiDice':
            setTimeout(() => {
                rollDice();
                gameState.currentStep = 'aiMove';
                aiTurn();
            }, 2000);
            break;
        case 'aiMove':
            setTimeout(() => {
                const isInRoom = aiMoveCharacter(characters[gameState.interrogatingCharacterIndex]);

                if (isInRoom) {
                    gameState.currentStep = 'aiSuggest';
                    updateRoomStayCount(gameState.interrogatingCharacterIndex);
                    aiTurn();
                } else {
                    gameState.currentStep = 'aiDice';
                    nextPlayer();
                }
            }, 2000);
            break;
        case 'aiSuggest':
            const suggestion = aiMakeSuggestion();
            displayMessage(`${aiPlayer} makes a suggestion: ${suggestion}.`);
            gameState.suggestionResponseIndex = 0;
            setTimeout(() => {
                aiCheckSuggestion(suggestion);
                nextPlayer();
            }, 2000);
            break;
        default:
            console.warning('No valid step for AI character.');
            break;
    }
}

// AI MOVE

function initializeAI() {
    gameState.players.forEach((player, index) => {
        if (index !== gameState.humanPlayerIndex) {
            gameState.aiObjectives[player] = getRandomRoom();
            gameState.aiRoomStayCount[player] = 0;
        }
    });
}

function updateRoomStayCount(aiIndex) {
    const currentRoom = characters[aiIndex].getAttribute('room');
    if (currentRoom) {
        gameState.aiRoomStayCount[aiIndex][currentRoom]++;
        if (gameState.aiRoomStayCount[aiIndex][currentRoom] % 3 === 0) {
            const mostVisitedRooms = getMostVisitedRooms(aiIndex);
            const newObjective = findNewObjective(mostVisitedRooms);
            gameState.aiObjectives[aiIndex] = newObjective;
            displayMessage(`${gameState.players[aiIndex]} has stayed in ${currentRoom} for 3 turns, changing objective to ${newObjective.room}.`);
        }
    }
}

function getMostVisitedRooms(aiIndex) {
    const stayCounts = gameState.aiRoomStayCount[aiIndex];

    // Trier les pièces par nombre de visites décroissant
    const sortedRooms = Object.keys(stayCounts).sort((a, b) => stayCounts[b] - stayCounts[a]);

    // Trouver les 3 premières pièces
    const topThreeRooms = sortedRooms.slice(0, 3);

    // Trouver la valeur du nombre de visites de la troisième pièce
    const thresholdCount = stayCounts[topThreeRooms[topThreeRooms.length - 1]];

    // Inclure toutes les pièces ayant au moins ce nombre de visites
    const mostVisitedRooms = sortedRooms.filter(room => stayCounts[room] >= thresholdCount);

    return mostVisitedRooms;
}

function findNewObjective(characterX, characterY, availableRooms) {
    const availableDoors = doors.filter(door => availableRooms.includes(door.room));
    let closestDoor = availableDoors[0];
    let minDistance = Infinity;

    availableDoors.forEach(door => {
        const distance = Math.abs(door.x - characterX) + Math.abs(door.y - characterY);
        if (distance < minDistance) {
            minDistance = distance;
            closestDoor = door;
        }
    });

    return closestDoor;
}

function findClosestDoor(characterX, characterY) {
    const aiIndex = gameState.interrogatingCharacterIndex;
    const mostVisitedRooms = getMostVisitedRooms(aiIndex);
    return findNewObjective(characterX, characterY, mostVisitedRooms);
}

function getAccessibleSquares() {
    return Array.from(document.querySelectorAll('.square.highlight'));
}

function findClosestAccessibleSquare(accessibleSquares, targetDoor) {
    let closestSquare = null;
    let minDistance = Infinity;
    let differentRoomDoors = [];

    const currentRoom = characters[gameState.interrogatingCharacterIndex].getAttribute('room');


    accessibleSquares.forEach(square => {
        const x = parseInt(square.getAttribute('x'), 10);
        const y = parseInt(square.getAttribute('y'), 10);
        const isDoor = square.classList.contains('door');
        const roomAttribute = square.getAttribute('room');
        const isDifferentRoom = roomAttribute && roomAttribute !== currentRoom;

        // Collect doors to different rooms
        if (isDoor && isDifferentRoom) {
            differentRoomDoors.push(square);
        } else {
            // Find the closest square
            const distance = Math.abs(targetDoor.x - x) + Math.abs(targetDoor.y - y);
            if (distance < minDistance) {
                minDistance = distance;
                closestSquare = square;
            }
        }
    });

    // If there are doors to different rooms, choose one randomly
    if (differentRoomDoors.length > 0) {
        const randomIndex = Math.floor(Math.random() * differentRoomDoors.length);
        return differentRoomDoors[randomIndex];
    }

    return closestSquare;
}

function moveCharacterToSquare(character, square) {
    const x = parseInt(square.getAttribute('x'), 10);
    const y = parseInt(square.getAttribute('y'), 10);
    setCharacterPosition(character, x, y);
    return {x, y};
}

function aiMoveCharacter(character) {
    const characterX = parseInt(character.getAttribute('x'), 10);
    const characterY = parseInt(character.getAttribute('y'), 10);
    const doorObjective = findClosestDoor(characterX, characterY);
    const accessibleSquares = getAccessibleSquares();
    const closestSquare = findClosestAccessibleSquare(accessibleSquares, doorObjective);
    const characterName = gameState.players[gameState.interrogatingCharacterIndex];

    if (closestSquare) {
        clearHighlights();
        if (closestSquare.classList.contains('door')) {
            const roomAttribute = closestSquare.getAttribute('room');
            const roomName = roomAttributeToName(roomAttribute);
            character.setAttribute('room', roomAttribute);
            moveToRandomPositionInRoom(character, roomAttribute);

            // gameState.currentStep = "suggest";
            gameState.currentStep = "aiSuggest";
            displayMessage(`${characterName} goes to the ${roomName}.`);
            return true; // in a room
        } else {
            const {x, y} = moveCharacterToSquare(character, closestSquare);
            displayMessage(`${characterName} goes to (${x},${y}).`);
            return false; // not in a room
        }
    }
}

// AI SUGGESTION

// Fonction pour choisir une carte aléatoire d'un deck
function chooseRandomCard(deck) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
}

// Fonction pour faire une suggestion aléatoire
// function aiMakeSuggestion() {
//     const character = chooseRandomCard(gameState.deck.characters);
//     const weapon = chooseRandomCard(gameState.deck.weapons);
//     const roomAttribute = characters[gameState.interrogatingCharacterIndex].getAttribute('room');
//     const room = roomAttributeToName(roomAttribute);
//     return [character, weapon, room];
// }

function aiMakeSuggestion() {
    const aiIndex = gameState.interrogatingCharacterIndex;
    const currentRoom = characters[aiIndex].getAttribute('room');

    if (!currentRoom) {
        displayMessage(`${gameState.players[aiIndex]} cannot make a suggestion as they are not in a room.`);
        return;
    }

    const character = chooseRandomCard(gameState.deck.characters);
    const weapon = chooseRandomCard(gameState.deck.weapons);
    const room = roomAttributeToName(currentRoom);
    return [character, weapon, room];
}

function aiCheckSuggestion(suggestion) {
    const interrogating = gameState.interrogatingCharacterIndex;
    const playerCount = gameState.players.length;
    let interrogated = (interrogating + 1) % playerCount;

    for (let i = 0; i < playerCount; i++) {
        if (interrogated == interrogating) {
            continue;
        }
        const cards = gameState.cards[interrogated];
        const commonCards = [];
        const interrogatedName = gameState.players[interrogated];
        cards.forEach(card => {
            if (suggestion.includes(card)) {
                commonCards.push(card);
            }
        });
        if (commonCards.length == 0) {
            displayMessage(`❌ ${interrogatedName}.(${cards})`);
        } else {
            const shownCard = commonCards[Math.floor(Math.random() * commonCards.length)];
            displayMessage(`✅ ${interrogatedName}.(${cards})`);
            return;
        }

        interrogated = (interrogated + 1) % playerCount;
    }
}

// MESSAGES

// Show game messages
// function showMessage(message) {
//     gameState.messageBox.textContent = message;
// }

// Select a random card
function selectRandomCard(deck) {
    const index = Math.floor(Math.random() * deck.length);
    return deck.splice(index, 1)[0];
}

// BOARD

function setCharacterPosition(character, x, y) {
    const square = document.querySelector(`.square[x="${x}"][y="${y}"]`);
    if (square) {
        character.style.left = `${square.offsetLeft}px`;
        character.style.top = `${square.offsetTop}px`;
        character.setAttribute('x', x);
        character.setAttribute('y', y);
    }
}

function moveToRandomPositionInRoom(character, roomName) {
    
    const room = document.querySelector(`.room.${roomName}`);
    
    if (room) {
        const {left, top, width, height} = roomToPosition.get(roomName);
        
        const randomX = Math.floor(Math.random() * (width - 50)) + left + 10;
        const randomY = Math.floor(Math.random() * (height - 50)) + top + 10;

        const x = Math.floor(randomX / 25);
        const y = Math.floor(randomY / 20);

        character.style.left = `${randomX}px`;
        character.style.top = `${randomY}px`;
    }
}

squares.forEach(square => {
    square.addEventListener('mouseenter', function () {
        this.classList.add('hover');
        const x = this.getAttribute('x');
        const y = this.getAttribute('y');
        tooltip.style.display = 'block';
        tooltip.textContent = `(${x},${y})`;
        tooltip.style.left = (this.offsetLeft + this.offsetWidth) + 'px';
        tooltip.style.top = this.offsetTop + 'px';
    });

    square.addEventListener('mouseleave', function () {
        this.classList.remove('hover');
        tooltip.style.display = 'none';
    });

    // square.addEventListener('click', function () {
    //     const selected = characters[gameState.interrogatingCharacterIndex];
    //     const selectedName = gameState.players[gameState.interrogatingCharacterIndex];
    //     if (selected && this.classList.contains('highlight')) {
    //         clearHighlights();
    //         if (this.classList.contains('door')) {
    //             const roomName = this.getAttribute('room');
    //             selected.setAttribute('room', roomName);
    //             moveToRandomPositionInRoom(selected, roomName);
    //             gameState.currentStep = "suggest";
    //             displayMessage(`${selectedName} goes to the ${roomName}.`);
    //             showMessage('Choose between suggestion and accusation.');
    //         } else {
    //             const x = parseInt(this.getAttribute('x'), 10);
    //             const y = parseInt(this.getAttribute('y'), 10);
    //             setCharacterPosition(selected, x, y);
    //             displayMessage(`${selectedName} goes to (${x},${y}).`);
    //             showMessage('Choose between accusation and pass.');
    //         }
    //     }
    // });
});

// MOVEMENTS

function highlightSquare(x, y) {
    const square = document.querySelector(`.square[x="${x}"][y="${y}"]`);
    if (square) {
        square.classList.add('highlight');
    }
}

function highlightFromDoors(doors, dice) {
    doors.forEach(door => {
        const px = parseInt(door.getAttribute('x'), 10);
        const py = parseInt(door.getAttribute('y'), 10);
        for (let dx = -dice; dx <= dice; dx++) {
            for (let dy = -dice; dy <= dice; dy++) {
                if (Math.abs(dx) + Math.abs(dy) <= dice) {
                    const targetX = px + dx;
                    const targetY = py + dy;
                    const targetSquare = document.querySelector(`.square[x="${targetX}"][y="${targetY}"]`);
                    if (targetSquare) {
                        targetSquare.classList.add('highlight');
                    }
                }
            }
        }
    });
}

function clearHighlights() {
    document.querySelectorAll('.highlight').forEach(square => {
        square.classList.remove('highlight');
    });
}



function rollDice() {
    const dice = Math.ceil(Math.random() * 6);
    clearHighlights();
    const selected = characters[gameState.interrogatingCharacterIndex];
    const selectedName = gameState.players[gameState.interrogatingCharacterIndex];

    displayMessage(`${selectedName} rolls the dice: ${dice}. Move to a square.`);

    const px = parseInt(selected.getAttribute('x'), 10);
    const py = parseInt(selected.getAttribute('y'), 10);
    for (let dx = -dice; dx <= dice; dx++) {
        for (let dy = -dice; dy <= dice; dy++) {
            if (Math.abs(dx) + Math.abs(dy) <= dice) {
                highlightSquare(px + dx, py + dy);
            }
        }
    }

    const currentRoom = selected.getAttribute('room');
    if (currentRoom && roomDoors[currentRoom]) {
        highlightFromDoors(roomDoors[currentRoom], dice);
    } else {
        const px = parseInt(selected.getAttribute('x'), 10);
        const py = parseInt(selected.getAttribute('y'), 10);
        for (let dx = -dice; dx <= dice; dx++) {
            for (let dy = -dice; dy <= dice; dy++) {
                if (Math.abs(dx) + Math.abs(dy) <= dice) {
                    highlightSquare(px + dx, py + dy);
                }
            }
        }
    }
}

function move(x, y) {
    // Trouver la case correspondante aux coordonnées x et y
    const selected = characters[gameState.interrogatingCharacterIndex];
    const selectedName = gameState.players[gameState.interrogatingCharacterIndex];

    const targetSquare = document.querySelector(`.square[x="${x}"][y="${y}"]`);
    
    if (!targetSquare) {
        displayError(`La case (${x}, ${y}) n'existe pas.`);
        return false;
    }

    // Vérifier que la case est en surbrillance (highlight)
    if (!targetSquare.classList.contains('highlight')) {
        displayError(`Vous ne pouvez pas vous déplacer sur la case (${x}, ${y}) car elle n'est pas accessible.`);
        return false;
    }

    // Déplacer le personnage sur la case
    const characterElement = document.getElementById(gameState.playersId[gameState.humanPlayerIndex]);

    if (targetSquare.classList.contains('door')) {
        const roomName = targetSquare.getAttribute('room');
        selected.setAttribute('room', roomName);
        moveToRandomPositionInRoom(selected, roomName);
        gameState.currentStep = "suggest";
        displayMessage(`${selectedName} goes to the ${roomName}.`);
        if(gameState.interrogatingCharacterIndex === gameState.humanPlayerIndex){
            displayMessage(`Suggest, skip or accuse.`)
        }
    } else {
        const x = parseInt(targetSquare.getAttribute('x'), 10);
        const y = parseInt(targetSquare.getAttribute('y'), 10);
        setCharacterPosition(selected, x, y);
        displayMessage(`${selectedName} goes to (${x},${y}).`);
        if(gameState.interrogatingCharacterIndex === gameState.humanPlayerIndex){
            displayMessage(`Skip or accuse.`)
        }
    }

    // Supprimer la surbrillance après le déplacement
    clearHighlights();

    // Afficher un message de confirmation
    // displayMessage(`Colonel Mustard moves to square (${x}, ${y}).`);
    return true;
}

// SKIP TURN (player)
function skip(){
    // TODO replace with playerName; replace his with her
    displayMessage("You skip your turn.");
    nextPlayer();
}

// SUGGESTION


function makeSuggestion(character, weapon, room) {
    const playerIndex = gameState.humanPlayerIndex;
    const currentRoom = roomAttributeToName(characters[playerIndex].getAttribute('room'));

    if (!currentRoom) {
        displayError("You are not in a room. You cannot make a suggestion.");
        return false;
    }

    if (currentRoom.toLowerCase() !== room.toLowerCase()) {
        displayError(`You can only make a suggestion for the room you are currently in: ${roomAttributeToName(currentRoom)}.`);
        return false;
    }

    gameState.suggestion = [character, weapon, room];
    // showMessage(`Your suggestion: ${gameState.suggestion}.`);
    displayMessage(`Your suggestion: ${gameState.suggestion}.`);
    nextPlayer();
    checkSuggestion();
    return true;
}

function checkSuggestion() {
    const human = gameState.humanPlayerIndex;
    const playerCount = gameState.players.length;
    let interrogated = (human + 1) % playerCount;
    const {suggestion} = gameState;

    for (let i = 0; i < playerCount; i++) {
        if (interrogated == human) {
            continue;
        }
        const cards = gameState.cards[interrogated];
        const commonCards = [];
        const interrogatedName = gameState.players[interrogated];
        cards.forEach(card => {
            if (suggestion.includes(card)) {
                commonCards.push(card);
            }
        });
        if (commonCards.length == 0) {
            displayMessage(`❌ ${interrogatedName}: ${suggestion}.(${cards})`);
        } else {
            const shownCard = commonCards[Math.floor(Math.random() * commonCards.length)];
            displayMessage(`✅ ${interrogatedName}: ${suggestion}.(${cards})`);
            return;
        }

        interrogated = (interrogated + 1) % playerCount;
    }
}

// ACCUSATION
function makeAccusation(character, weapon, room) {
    const playerIndex = gameState.humanPlayerIndex;
    const currentRoom = roomAttributeToName(characters[playerIndex].getAttribute('room'));

    if (!currentRoom) {
        displayError("You are not in a room. You cannot make an accusation.");
        return;
    }

    if (currentRoom.toLowerCase() !== room.toLowerCase()) {
        displayError(`You can only make an accusation for the room you are currently in: ${roomAttributeToName(currentRoom)}.`);
        return;
    }

    gameState.accusation = [character, weapon, room];
    const {solution} = gameState;
    if (character == solution.character && weapon == solution.weapon && room == solution.room) {
        displayMessage(`Well done! It was ${solution.character} with the ${solution.weapon} in the ${solution.room}.`);
    } else {
        displayMessage(`Your accusation: ${gameState.accusation} is wrong.  It was ${solution.character} with the ${solution.weapon} in the ${solution.room}.`);
        gameState.isFalseAccusation = true; // Prevent further actions by the player
    }
}

// INITIALISATION DOM

characters.forEach(character => {
    character.addEventListener('click', function () {
        characters.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Fonction pour ajouter des options à un select
function populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}

function populateSelects() {
    // Remplir les select avec les options
    populateSelect("character-select", gameState.deck.characters);
    populateSelect("weapon-select", gameState.deck.weapons);
    populateSelect("room-select", gameState.deck.rooms);
}

// MESSAGE

function displayMessage(message, br = false) {
    if (br) {
        log.innerHTML += message + "<br><br>";
    } else {
        log.innerHTML += message + "<br>"; // Ajoute le message suivi d'un saut de ligne
    }
    log.scrollTop = log.scrollHeight; // Défile vers le bas à chaque nouveau message
}

// Seul le premier mot a une capitale
// function roomAttributeToName(attribute) {
//     const name = attribute.charAt(0).toUpperCase() + attribute.slice(1).replace(/-/g, " ");
//     return name;
// }

// Tous les mots ont une capitale
function roomAttributeToName(attribute) {
    const words = attribute.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const name = capitalizedWords.join(' ');
    return name;
}


// Initialize game setup
// setupGame();

// SHEET
function createSheetTable() {
    const tbody = document.querySelector('#sheet-table tbody');
    tbody.innerHTML = '';

    for (const row in sheet2) {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        // TODO pas mettre "Col." avant tous les noms
        th.textContent = `Col. ${capitalizeFirstLetter(row)}`;
        tr.appendChild(th);

        for (const col in sheet2[row]) {
            const td = document.createElement('td');
            td.id = `cell-${row}-${col}`;
            td.textContent = sheet2[row][col].text;
            td.style.backgroundColor = sheet2[row][col].backgroundColor;
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayError(msg){
    errorElem.textContent = msg;
}


displayMessage('Select a character by clicking on an image.')