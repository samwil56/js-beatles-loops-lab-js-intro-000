// add solution here
function theBeatlesPlay(musician, instrument) {
  var str = []
  for (i=0;i<=musician.length;i++ ) {
    player = musician[i]
    inst = instrument[i]
    plays = `{player} plays {inst}.`
    str.push(plays)
  }
  return str
}
