function fibo(){
  const fiboNumber = parseInt(document.getElementById("inputFibo").value);
  let n1 = 0, n2 = 1, nextTerm;

  for (let i = 1; i < fiboNumber; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  const container = document.getElementById("fiboContainer");
  const praragraph = document.createElement("p");
  praragraph.innerText = n1;
  container.appendChild(praragraph);
}

