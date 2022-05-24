const cardsWritten = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        cardsWritten.push(message);
    }
    return cardsWritten;
}




function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;

    }
}