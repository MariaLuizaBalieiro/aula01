'use strict'

//3-var
//2-let
//1-const 
        function trocarTitulo (){

const tituloAtual = document.getElementById('titulo')
const tituloNovo = prompt ('digite um titulo')
tituloAtual.textContent = tituloNovo}

const botaoTrocarTitulo = document.getElementById('Trocar-titulo')
botaoTrocarTitulo.addEventListener ('click' , trocarTitulo)