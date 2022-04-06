function fibo() {
  const fiboNumber = parseInt(document.getElementById("inputFibo").value);
  let n1 = 0, n2 = 1, nextTerm;

  for (let i = 1; i < fiboNumber; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  const container = document.getElementById("fiboContainer");
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
