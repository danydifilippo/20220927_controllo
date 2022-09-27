let budget= 18000
let billing = 0

function add(dato) {
    budget-=dato
    document.getElementById('lastBud').innerHTML=`Hai ancora ${budget} € ancora da spendere`
    document.getElementById('bill').innerHTML=`${billing+=Number(dato)}`
  }


  function remove(dato) {
    document.getElementById('lastBud').innerHTML=`Hai ancora ${budget+=dato} € ancora da spendere`
    document.getElementById('bill').innerHTML=`${billing-=Number(dato)}`
  }

