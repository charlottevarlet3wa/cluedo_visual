// GAME
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
    aiCurrentRooms: [null, null, null, null, null]
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

const sheet = {
    mustard: {mustard: {text: "", backgroundColor: ""}, green: {text: "", backgroundColor: ""}, peacock: {text: "", backgroundColor: ""}, scarlet: {text: "", backgroundColor: ""}, white: {text: "", backgroundColor: ""}},
    green: {mustard: {text: "", backgroundColor: ""}, green: {text: "", backgroundColor: ""}, peacock: {text: "", backgroundColor: ""}, scarlet: {text: "", backgroundColor: ""}, white: {text: "", backgroundColor: ""}},
    peacock: {mustard: {text: "", backgroundColor: ""}, green: {text: "", backgroundColor: ""}, peacock: {text: "", backgroundColor: ""}, scarlet: {text: "", backgroundColor: ""}, white: {text: "", backgroundColor: ""}},
    scarlet: {mustard: {text: "", backgroundColor: ""}, green: {text: "", backgroundColor: ""}, peacock: {text: "", backgroundColor: ""}, scarlet: {text: "", backgroundColor: ""}, white: {text: "", backgroundColor: ""}},
    white: {mustard: {text: "", backgroundColor: ""}, green: {text: "", backgroundColor: ""}, peacock: {text: "", backgroundColor: ""}, scarlet: {text: "", backgroundColor: ""}, white: {text: "", backgroundColor: ""}}
};

// Setup game
function setupGame() {
    populateSelects();
    initializeDeck();
    selectSolution();
    distributeCards();

    // SHEET
    createSheetTable();

    // Initialisation des positions des personnages
    setCharacterPosition(document.getElementById('miss-scarlet'), 7, 3);
    setCharacterPosition(document.getElementById('colonel-mustard'), 7, 20);
    setCharacterPosition(document.getElementById('mrs-white'), 10, 9);
    setCharacterPosition(document.getElementById('mr-green'), 19, 5);
    setCharacterPosition(document.getElementById('mrs-peacock'), 20, 19);

    characters.forEach((character, index) => {
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

    gameState.humanPlayerIndex = 0; // Par exemple, Miss Scarlet est le joueur humain // test
    document.getElementById('my-name').textContent = gameState.players[gameState.humanPlayerIndex];
    document.getElementById('my-cards').textContent = "My cards: " + gameState.cards[gameState.humanPlayerIndex];
    nextPlayer();
}

// Initialize deck
function initializeDeck() {
    // Définir les cartes de personnages, d'armes et de pièces
    gameState.deck.characters = ["Colonel Mustard", "Mr. Green", "Mrs. Peacock", "Miss Scarlet", "Mrs. White"]; // 5
    gameState.deck.weapons = ["Dagger", "Candlestick", "Revolver", "Rope", "Lead Pipe", "Wrench"]; // 6
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
    gameState.interrogatingCharacterIndex = (gameState.interrogatingCharacterIndex + 1) % gameState.players.length;
    gameState.currentStep = "dice";
    displayMessage('', true);
    if (gameState.interrogatingCharacterIndex === gameState.humanPlayerIndex) {
        gameState.isPlayerTurn = true;
        playerTurn();
    } else {
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
        case 'dice':
            setTimeout(() => {
                rollDice();
                gameState.currentStep = 'move';
                aiTurn();
            }, 2000);
            break;
        case 'move':
            setTimeout(() => {
                const isInRoom = aiMoveCharacter(characters[gameState.interrogatingCharacterIndex]);

                if (isInRoom) {
                    gameState.currentStep = 'suggest';
                    updateRoomStayCount(gameState.interrogatingCharacterIndex);
                    aiTurn();
                } else {
                    gameState.currentStep = 'dice';
                    nextPlayer();
                }
            }, 2000);
            break;
        case 'suggest':
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
    console.log("stayCounts: ", stayCounts);

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

    console.log("find closest square:");
    const currentRoom = characters[gameState.interrogatingCharacterIndex].getAttribute('room');
    console.log("current room: ", currentRoom);

    console.log("accessible squares: ", accessibleSquares);
    console.log("target door: ", targetDoor);

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
    console.log("door objective (ai move): ", doorObjective);
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

            gameState.currentStep = "suggest";
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
function aiMakeSuggestion() {
    const character = chooseRandomCard(gameState.deck.characters);
    const weapon = chooseRandomCard(gameState.deck.weapons);
    const roomAttribute = characters[gameState.interrogatingCharacterIndex].getAttribute('room');
    const room = roomAttributeToName(roomAttribute);
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
            displayMessage(`❌ ${interrogatedName}: ${suggestion}.(${cards})`);
        } else {
            const shownCard = commonCards[Math.floor(Math.random() * commonCards.length)];
            displayMessage(`✅ ${interrogatedName}: ${suggestion}.(${cards})`);
            return;
        }

        interrogated = (interrogated + 1) % playerCount;
    }
}

// MESSAGES

// Show game messages
function showMessage(message) {
    gameState.messageBox.textContent = message;
}

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

    square.addEventListener('click', function () {
        const selected = characters[gameState.interrogatingCharacterIndex];
        const selectedName = gameState.players[gameState.interrogatingCharacterIndex];
        if (selected && this.classList.contains('highlight')) {
            clearHighlights();
            if (this.classList.contains('door')) {
                const roomName = this.getAttribute('room');
                selected.setAttribute('room', roomName);
                moveToRandomPositionInRoom(selected, roomName);
                gameState.currentStep = "suggest";
                displayMessage(`${selectedName} goes to the ${roomName}.`);
                showMessage('Choose between suggestion and accusation.');
            } else {
                const x = parseInt(this.getAttribute('x'), 10);
                const y = parseInt(this.getAttribute('y'), 10);
                setCharacterPosition(selected, x, y);
                displayMessage(`${selectedName} goes to (${x},${y}).`);
                showMessage('Choose between accusation and pass.');
            }
        }
    });
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

    displayMessage(`${selectedName} rolls the dice: ${dice}.`);

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

// SUGGESTION

function chooseSuggestion() {
    showMessage("Make a suggestion.");
}

function makeSuggestion() {
    const character = document.getElementById('character-select').value;
    const weapon = document.getElementById('weapon-select').value;
    const room = document.getElementById('room-select').value;
    gameState.suggestion = [character, weapon, room];
    showMessage(`Your suggestion: ${gameState.suggestion}.`);
    displayMessage(`Your suggestion: ${gameState.suggestion}.`);
    nextPlayer();
    checkSuggestion();
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

function chooseAccusation() {
    showMessage("Make an accusation.");
}

function makeAccusation() {
    const character = document.getElementById('character-select').value;
    const weapon = document.getElementById('weapon-select').value;
    const room = document.getElementById('room-select').value;
    gameState.accusation = [character, weapon, room];
    const {solution} = gameState;
    if (character == solution.character && weapon == solution.weapon && room == solution.room) {
        showMessage(`Well done! It was ${solution}.`);
    } else {
        showMessage(`Your accusation: ${gameState.accusation} is wrong.`);
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

function roomAttributeToName(attribute) {
    const name = attribute.charAt(0).toUpperCase() + attribute.slice(1).replace(/-/g, " ");
    return name;
}

// Initialize game setup
setupGame();

// SHEET
function createSheetTable() {
    const tbody = document.querySelector('#sheet-table tbody');
    tbody.innerHTML = '';

    for (const row in sheet) {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = `Col. ${capitalizeFirstLetter(row)}`;
        tr.appendChild(th);

        for (const col in sheet[row]) {
            const td = document.createElement('td');
            td.id = `cell-${row}-${col}`;
            td.textContent = sheet[row][col].text;
            td.style.backgroundColor = sheet[row][col].backgroundColor;
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function executeCommand() {
    const command = document.getElementById('command-input').value.trim();

    if (command.startsWith('sheet.') && command.includes('=')) {
        const [key, value] = command.split('=').map(s => s.trim());
        const keys = key.split('.').slice(1); // Remove 'sheet'
        const [color, character, attribute] = keys;

        if (sheet[color] && sheet[color][character] !== undefined) {
            if (attribute === 'text' || attribute === 'backgroundColor') {
                sheet[color][character][attribute] = value.replace(/['"]+/g, ''); // Remove quotes if any
                const cell = document.getElementById(`cell-${color}-${character}`);
                if (attribute === 'text') {
                    cell.textContent = sheet[color][character][attribute];
                } else if (attribute === 'backgroundColor') {
                    cell.style.backgroundColor = sheet[color][character][attribute];
                }
            } else {
                alert('Invalid attribute');
            }
        } else {
            alert('Invalid command or cell reference');
        }
    } else {
        alert('Invalid command format');
    }
}
