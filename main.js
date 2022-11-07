function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg"
        alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}">
    </li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>

        <ul>
            ${games}
        </ul>
    </div>
    `
}


document.querySelector("#cards").innerHTML = 
    
    
    createCard("20/11", "sexta", createGame("qatar", "12:00", "ecuador") + 
    createGame("senegal", "12:00", "netherlands")) +
    createCard("21/11", "quinta", createGame("england", "09:00", "iran") + 
    createGame("united-states", "15:00", "wales")) +

    createCard("28/11", "segunda", createGame("brazil", "12:00", "switzerland") +
    createGame("cameroon", "06:00", "serbia"))