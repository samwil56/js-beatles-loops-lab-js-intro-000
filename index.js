// add solution here
function theBeatlesPlay(musician, instrument) {
  var str = []
  var i = 0
  for (i=0;i<=musician.length;i++ ) {
    var player = musician[i]
    var inst = instrument[i]
    var plays = `${player} plays ${inst}.`
    str.push(plays)
  }
  return str
}
