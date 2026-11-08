let cliques = 0;

document.getElementById("btn").addEventListener("click", () => {
  cliques++;
  document.getElementById("msg").textContent = "Funcionou! Cliques: " + cliques;
});
