function fibo() {
  const fiboNumber = parseInt(document.getElementById("inputFibo").value);
  let n1 = 0, n2 = 1, nextTerm;
  let ns;

  for (let i = 1; i < fiboNumber; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  if(n1<10){
    ns="00"+n1;
  }
  else if(n1<100){
    ns="0"+n1;
  }
  else{
    ns=n1.toString();
  }
  const container = document.getElementById("fiboContainer");
  let foto = document.getElementById("foto1");
  foto.src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+ns+".png"
  container.innerText = n1;
}

function facto() {
  const num = parseInt(document.getElementById("inputFacto").value);
  n1 = Recursive(num);

  const container = document.getElementById("factoContainer");
  container.innerText = n1;
}

function Recursive(n) {
  if (n == 0) {
    return 1;
  }
  return n * Recursive(n - 1);
}
