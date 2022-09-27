let budget= 18000
let billing = 0
let perc = 100

function add(dato) {
    budget-=dato
    perc=parseInt((budget*100)/18000)
    document.getElementById('lastBud').innerHTML=`Hai ancora ${budget} € ancora da spendere`
    document.getElementById('bill').innerHTML=`${billing+=Number(dato)}`
    let elem = document.getElementById('myBar');
    elem.style.width = `${perc}%`;
    while (perc>=50) {
        elem.style.width = `${perc}%`;
        elem.style.backgroundColor = `#00e4a0`;
        document.getElementById('label').innerHTML = `${perc}%`;
        document.getElementById('message').innerHTML = `Hai ancora il ${perc}% del tuo budget da spendere`;
        break
    }
    while (perc<50 && perc>=30) {
        elem.style.width = `${perc}%`;
        elem.style.backgroundColor = `#73c0fc`;
        document.getElementById('label').innerHTML = `${perc}%`;
        document.getElementById('message').innerHTML = `Attenzione il tuo budget è a ${perc}%, misura bene le tue spese`;
        break
    }
    while (perc<30) {
        elem.style.width = `${width}%`;
        elem.style.backgroundColor = `#e599f7`;
        document.getElementById('label').innerHTML = `Sei al ${perc}%.., hai quasi terminato il tuo budget. Fermati!!`;
        break
    }
  }

  function remove(dato) {
    budget+=Number(dato)
    perc=parseInt((budget*100)/18000)
    document.getElementById('lastBud').innerHTML=`Hai ancora ${budget} € ancora da spendere`
    document.getElementById('bill').innerHTML=`${billing-=Number(dato)}`
  }

  function add2(dato) {
    budget-=dato
    perc=parseInt((budget*100)/18000)
    document.getElementById('lastBud').innerHTML=`Hai ancora ${budget} € ancora da spendere`
    document.getElementById('billInas').innerHTML=`${billing+=Number(dato)}`
    let elem = document.getElementById('myBar');
    elem.style.width = `${perc}%`;
    while (perc>=50) {
        elem.style.width = `${perc}%`;
        elem.style.backgroundColor = `#00e4a0`;
        document.getElementById('label').innerHTML = `${perc}%`;
        document.getElementById('message').innerHTML = `Hai ancora il ${perc}% del tuo budget da spendere`;
        break
    }
    while (perc<50 && perc>=30) {
        elem.style.width = `${perc}%`;
        elem.style.backgroundColor = `#73c0fc`;
        document.getElementById('label').innerHTML = `${perc}%`;
        document.getElementById('message').innerHTML = `Attenzione il tuo budget è a ${perc}%, misura bene le tue spese`;
        break
    }
    while (perc<30) {
        elem.style.width = `${width}%`;
        elem.style.backgroundColor = `#e599f7`;
        document.getElementById('label').innerHTML = `Sei al ${perc}%.., hai quasi terminato il tuo budget. Fermati!!`;
        break
    }
  }

  function remove2(dato) {
    budget+=Number(dato)
    perc=parseInt((budget*100)/18000)
    document.getElementById('lastBud').innerHTML=`Hai ancora ${budget} € ancora da spendere`
    document.getElementById('billInas').innerHTML=`${billing-=Number(dato)}`
  }


  
  
