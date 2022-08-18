const pianoKeys = document.querySelectorAll('.key')

playSound = (id)=> {
    new Audio(`./sounds/key${id}.mp3`).play()
}

pianoKeys.forEach((pianoKey, id) => {
    const number = id < 9 ? '0' + (id+1): (id+1)
    pianoKey.addEventListener('click', ()=>playSound(number))
});