nivelDificuldade = Number(window.prompt("Qual a dificuldade do gosto você gostaria de jogar? Responda de 1 a 15."));
var largura = 600; 
var altura = 400; var corTabuleiro = "#1F8340";
var corBolinha = 0; var xBolinha = 300;
var yBolinha = 200; 
var dBolinha = 20; var velocidadeXBolinha = nivelDificuldade;
var velocidadeYBolinha = nivelDificuldade; 
function setup() {
  createCanvas(largura, altura);
} function criarTabuleiro(corTabuleiro){
  background(corTabuleiro);
} function criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha){
  circle(xBolinha, yBolinha, dBolinha);
  fill(corBolinha);
} function movimentarBolinha(){
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
} function verificarColisao(){
  if (xBolinha >= (largura - (dBolinha/2)) || xBolinha < (dBolinha/2)){
    velocidadeXBolinha = -1 * velocidadeXBolinha
  }
  if (yBolinha >= (altura - (dBolinha/2)) || yBolinha < (dBolinha/2)){
    velocidadeYBolinha = -1 * velocidadeYBolinha
  }
  if (xBolinha == (largura - (dBolinha/2)) || xBolinha <= 0 + (dBolinha/2)){
    xBolinha = largura / 2;
    yBolinha = altura / 2;
  }
} function draw() {
  criarTabuleiro(corTabuleiro);
  criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha);
  criarBolinha(150, 350, 10, "00000");
  movimentarBolinha();
  verificarColisao();  
}