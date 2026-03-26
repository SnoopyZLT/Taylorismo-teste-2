let dinheiro = 0;
let eficiencia = 30;
let saude = 80;
let satisfacao = 60;
let fabrica = 10;
let cargoExp = 10;
let dia = 1;

// ================= UI =================
function atualizarUI() {
  document.getElementById("money").innerText = "💰 R$ " + dinheiro;

  document.getElementById("eficiencia").style.width = eficiencia + "%";
  document.getElementById("saude").style.width = saude + "%";
  document.getElementById("satisfacao").style.width = satisfacao + "%";
  document.getElementById("fabrica").style.width = fabrica + "%";
  document.getElementById("cargoBar").style.width = cargoExp + "%";
}

function log(texto) {
  document.getElementById("report").innerHTML = "📋 " + texto;
}

// ================= AÇÕES =================
function trabalhar() {
  dinheiro += 5;
  eficiencia += 5;
  cargoExp += 5;
  saude -= 3;

  log("Você trabalhou e evoluiu no cargo.");
  atualizarUI();
}

function descansar() {
  saude += 8;
  satisfacao += 5;

  log("Você descansou.");
  atualizarUI();
}

function arriscar() {
  if (Math.random() < 0.5) {
    dinheiro += 20;
    log("Você ganhou dinheiro arriscando!");
  } else {
    saude -= 10;
    log("Deu ruim! Você se machucou.");
  }
  atualizarUI();
}

function gerenciar() {
  fabrica += 5;
  dinheiro -= 5;

  log("Você melhorou a fábrica.");
  atualizarUI();
}

function proximoDia() {
  dia++;
  log("📅 Dia " + dia + " começou.");
}

// ================= EFEITO 3D =================
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  document.body.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// ================= MOBILE (TOQUE) =================
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];

  const x = (window.innerWidth / 2 - touch.clientX) / 25;
  const y = (window.innerHeight / 2 - touch.clientY) / 25;

  document.body.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// ================= LIMITES =================
function limitarStatus() {
  eficiencia = Math.max(0, Math.min(100, eficiencia));
  saude = Math.max(0, Math.min(100, saude));
  satisfacao = Math.max(0, Math.min(100, satisfacao));
  fabrica = Math.max(0, Math.min(100, fabrica));
  cargoExp = Math.max(0, Math.min(100, cargoExp));
}

// Atualiza sempre
setInterval(() => {
  limitarStatus();
  atualizarUI();
}, 200);

// Inicializa
atualizarUI();
