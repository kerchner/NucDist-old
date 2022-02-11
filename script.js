function compute() {
  let dna = document.getElementById('dna').value;
  console.log("dna = ", dna);
  console.log("dna.length = ", dna.length)
  
  // compute counts of letters
  let letterMap = new Map(); // it's going to look like {'A': 5, 'C': 8, ...}
  for(let i = 0; i < dna.length; i++) {
    let letter = dna[i];
    if (letterMap.has(letter)) {
      letterMap.set(letter, letterMap.get(letter) + 1);
    }
    else {
      letterMap.set(letter, 1);
    }
  }
  
  let letters = Array.from(letterMap.keys());
  let counts = Array.from(letterMap.values());
  
  var data = [{
    values: counts,
    labels: letters,
    type: 'pie'
  }];

  var layout = {
    height: 400,
    width: 500
  };

  Plotly.newPlot('plotDiv', data, layout);
}

function reset() {
  document.getElementById('plotDiv').innerHTML = '';
  
  // clear out DNA value
  document.getElementById('dna').value = '';
}
