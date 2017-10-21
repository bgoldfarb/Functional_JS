var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ]

  var totalAmount = 0;
  for(var i = 0; i < orders.length; i++){
      totalAmount += orders[i].amount
  }

  let c = {
    name:'The c object',
    log: () => {
        let self = this
        console.log(self)

        let setNames = (newName) => {
            self.name = newName;
        }
        setNames('Updated Name!!')
        console.log(self)
    }

  }

  var totalAmountReduced = orders.reduce(function(sum, order){
        console.log("Sum", sum)
        console.log("order", order)
        return sum + order.amount
  }, 20)

console.log(totalAmountReduced)
//Sum is inital value 
//0 in this case is the starting number for sum

c.log()