// add solution here
function theBeatlesPlay(musician, instrument) {
  var str = []
  var i = 0
  for (i=0;i<musician.length;i++ ) {
    var player = musician[i]
    var inst = instrument[i]
    var plays = `${player} plays ${inst}`
    str.push(plays)
  }
  return str
}

function johnLennonFacts(facts) {
  var i = 0
  var str = []
  while (i < facts.length) {
    var factoid = `${facts[i]}!!!`
    str.push(factoid)
    i = i+1
  }
  return str
}

function iLoveTheBeatles(input) {
  var str = []
  do {
    str.push('I love the Beatles!')
  }
  while(input<15)
  return str
}
