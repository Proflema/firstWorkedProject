function randomChoice(choices){
    const choice=Math.floor(Math.random()*choices.length)
    return choices[choice]
}