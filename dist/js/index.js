"use strict";
const card = document.querySelector(".card__inner");
if (card) {
    card.addEventListener("click", function (e) {
        if (card instanceof HTMLElement) {
            card.classList.toggle('is-flipped');
        }
    });
}
let luka = { nome: "Luka Doncic", time: "Dallas", numero: 77, status: [66, 34.6, 32.4, 10.9, 22.0, 49.6, 2.8, 8.2, 34.2, 7.8, 10.5, 74.2, 0.8, 7.8, 8.6, 8.0, 1.4, 0.5, 3.6, 33.5] };
console.log(luka);
// gp
const gp = document.querySelector(".gp");
if (gp) {
    luka.gp = luka.status[0];
    gp.innerText = "GP: " + luka.gp;
}
else {
    console.error("Elemento nao encontrado");
}
// Min
const min = document.querySelector(".min");
if (min) {
    luka.min = luka.status[1];
    min.innerText = "MIN: " + luka.min;
}
else {
    console.error("Elemento nao encontrado");
}
// pts 
const PTS = document.querySelector(".pts");
if (PTS) {
    luka.pontosPorJogo = luka.status[2];
    PTS.innerText = "PTS: " + luka.pontosPorJogo;
}
else {
    console.error("Elemento não encontrado com a classe 'pts'");
}
// fgm 
const fgm = document.querySelector(".fgm");
if (fgm) {
    luka.fgm = luka.status[3];
    fgm.innerText = "FGM: " + luka.fgm;
}
else {
    console.error("Elemento não encontrado com a classe 'pts'");
}
// fga 
const fga = document.querySelector(".fga");
if (fga) {
    luka.fga = luka.status[4];
    fga.innerText = "FGA: " + luka.fga;
}
else {
    console.error("Elemento não encontrado com a classe 'pts'");
}
// fg %
const FG = document.querySelector(".fg");
if (FG) {
    luka.fgm = luka.status[5];
    FG.innerText = "FG%: " + luka.fgm;
}
else {
    console.error("Elemento não encontrado com a classe 'pts'");
}
// 3pm
const threepm = document.querySelector(".threepm");
if (threepm) {
    luka.threepm = luka.status[6];
    threepm.innerText = "3PM: " + luka.threepm;
}
else {
    console.error("Elemento não encontrado com a classe 'pts'");
}
// 3pa
const ThreePTS = document.querySelector(".threepts");
if (ThreePTS) {
    luka.ThreePTS = luka.status[7];
    ThreePTS.innerText = "3PA: " + luka.ThreePTS;
}
else {
    console.error("Elemento não encontrado com a classe 'pts'");
}
// 3 pts porcentage 
const ThreePorcentage = document.querySelector(".threeporcentage");
if (ThreePorcentage) {
    luka.ThreePorcentage = luka.status[8];
    ThreePorcentage.innerText = "3P%: " + luka.ThreePorcentage;
}
else {
    console.error("Elemento nao encontrado");
}
// ftm 
const ftm = document.querySelector(".ftm");
if (ftm) {
    luka.ftm = luka.status[9];
    ftm.innerText = "FTM: " + luka.ftm;
}
else {
    console.error("Elemento não encontrado com a classe 'pts'");
}
//fta
const fta = document.querySelector(".fta");
if (fta) {
    luka.fta = luka.status[10];
    fta.innerText = "FTA: " + luka.fta;
}
else {
    console.error("Elemento não encontrado com a classe 'pts'");
}
// FT 
const ft = document.querySelector(".ft");
if (ft) {
    luka.ft = luka.status[11];
    ft.innerText = "FT%: " + luka.ft;
}
else {
    console.error("Elemento nao encontrado");
}
//OREB 
const oreb = document.querySelector(".oreb");
if (oreb) {
    luka.oreb = luka.status[12];
    oreb.innerText = "OREB: " + luka.oreb;
}
else {
    console.error("Elemento não encontrado com a classe 'pts'");
}
//DREB
const dreb = document.querySelector(".dreb");
if (dreb) {
    luka.dreb = luka.status[13];
    dreb.innerText = "DREB: " + luka.dreb;
}
else {
    console.error("Elemento não encontrado com a classe 'pts'");
}
// REB
const reb = document.querySelector(".reb");
if (reb) {
    luka.reb = luka.status[14];
    reb.innerText = "REB: " + luka.reb;
}
else {
    console.error("Elemento nao encontrado");
}
// AST
const ast = document.querySelector(".ast");
if (ast) {
    luka.ast = luka.status[15];
    ast.innerText = "AST: " + luka.ast;
}
else {
    console.error("Elemento nao encontrado");
}
// STEEL
const steel = document.querySelector(".stel");
if (steel) {
    luka.steel = luka.status[16];
    steel.innerText = "STL: " + luka.steel;
}
else {
    console.error("Elemento nao encontrado");
}
// TOV
const tov = document.querySelector(".blk");
if (tov) {
    luka.tov = luka.status[17];
    tov.innerText = "TOV: " + luka.tov;
}
else {
    console.error("Elemento nao encontrado");
}
// BLK
const blk = document.querySelector(".blk");
if (blk) {
    luka.blk = luka.status[18];
    blk.innerText = "BLK: " + luka.blk;
}
else {
    console.error("Elemento nao encontrado");
}
