// add solution here
function theBeatlesPlay(musician, instrument) {
  str = ()
  for (i=0,i<=musician.length,i++) {
    plays = `{musician[i]} plays {instument[i]}.`
    str.push(plays)
  }
  return str
}
