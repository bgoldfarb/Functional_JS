 const dragonEvents = [
     {type: "attack", value: 12, target: 'player-dorkman'},
     {type: "yawn", value: 0, target: 'player-dorkman'},
     {type: "eat", value: 0, target: 'horse'},
     {type: "attack", value: 322, target: 'player-dorkman'},
     {type: "attack", value: 12, target: 'player-brian'},
 ]

 const totalDamageOnDorkman = dragonEvents.filter(function(event){
     return event.type === 'attack'
 })
 .filter(function(event){
     return event.target === 'player-dorkman'
 })
 .map(function(event){
     return event.value
 })
 .reduce(function(prev, value){
     return  (prev || 0) + value
 })

 console.log('totalDamage: ', totalDamageOnDorkman)


 const totalDamageOnDorkmanArrow = dragonEvents
    .filter(e => e.type === 'attack')
    .filter(e => e.target === 'player-dorkman')
    .map(e => e.value)
    .reduce((prev, value) =>  (prev || 0) + value)
   
console.log('totalDamage: ', totalDamageOnDorkmanArrow)
    