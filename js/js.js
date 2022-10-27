var count = 0;

/* Grupos */
var grupoA = ["Qatar", "Ecuador", "Senegal", "Netherlands"];
	var classificadoAUm = 0;
	var classificadoADois = 0;
var grupoB = ["England", "Iran", "USA", "Wales"];
	var classificadoBUm = 0;
	var classificadoBDois = 0;
var grupoC = ["Argentina", "Saudi Arabia", "Mexico", "Poland"];
	var classificadoCUm = 0;
	var classificadoCDois = 0;
var grupoD = ["France", "Australia", "Denmark", "Tunisia"];
	var classificadoDUm = 0;
	var classificadoDDois = 0;
var grupoE = ["Spain", "Costa Rica", "Germany", "Japan"];
	var classificadoEUm = 0;
	var classificadoEDois = 0;
var grupoF = ["Belgium", "Canada", "Morocco", "Croatia"];
	var classificadoFUm = 0;
	var classificadoFDois = 0;
var grupoG = ["Brazil", "Serbia", "Switzerland", "Cameroon"];
	var classificadoGUm = 0;
	var classificadoGDois = 0;
var grupoH = ["Portugal", "Ghana", "Uruguay", "Korea"];
	var classificadoHUm = 0;
	var classificadoHDois = 0;

var oitavasUm = [];
var oitavasDois = [];
var oitavasTres = [];
var oitavasQuatro = [];
var oitavasCinco = [];
var oitavasSeis = [];
var oitavasSete = [];
var oitavasOito = [];

var quartasUm = [];
var quartasDois = [];
var quartasTres = [];
var quartasQuatro = [];

var semiUm = [];
var semiDois = [];

var final = [];
var ganhador;

$( document ).ready(function() {
  $("#containerOitavas").hide();
  $("#containerQuartas").hide();
  $("#containerSemi").hide();
  $("#containerFinal").hide();
  $("#containerGanhador").hide();
  $("#my-canvas").hide();
});

$( "#btnJogarPrimeiraFase" ).click(function() {
	if(count == 0){
		$("#containerPrimeiraFase").hide("fast");
  	$("#containerOitavas").show("fast");
  	chamarOitavas();
  		count++;
	} else if (count == 1){
		//$("#containerOitavas").hide("fast");
  	$("#containerQuartas").show("fast");
  		chamarQuartas();
  		count++;
	} else if (count == 2){
		//$("#containerQuartas").hide("fast");
		$("#containerOitavas").hide("fast");
  	$("#containerSemi").show("fast");
  		chamarSemi();
  		count++;
	} else if (count == 3){
		// $("#containerSemi").hide("fast");
		$("#containerQuartas").hide("fast");
  	$("#containerFinal").show("fast");
  		ChamarFinal();
  		count++;
	} else if (count == 4){
		$("#containerSemi").hide("fast");
		$("#containerFinal").hide("fast");
  	$("#containerGanhador").show("fast");
		chamarGanhador();
	}
});


function chamarOitavas() {
	/* SORTEANDO PARA AS OITAVAS */

	while(classificadoAUm == classificadoADois){
		classificadoAUm = Math.floor(Math.random() * 4);
		classificadoADois = Math.floor(Math.random() * 4);		
	}
	while(classificadoBUm == classificadoBDois){
		classificadoBUm = Math.floor(Math.random() * 4);
		classificadoBDois = Math.floor(Math.random() * 4);		
	}
	while(classificadoCUm == classificadoCDois){
		classificadoCUm = Math.floor(Math.random() * 4);
		classificadoCDois = Math.floor(Math.random() * 4);		
	}
	while(classificadoDUm == classificadoDDois){
		classificadoDUm = Math.floor(Math.random() * 4);
		classificadoDDois = Math.floor(Math.random() * 4);		
	}
	while(classificadoEUm == classificadoEDois){
		classificadoEUm = Math.floor(Math.random() * 4);
		classificadoEDois = Math.floor(Math.random() * 4);		
	}
	while(classificadoFUm == classificadoFDois){
		classificadoFUm = Math.floor(Math.random() * 4);
		classificadoFDois = Math.floor(Math.random() * 4);		
	}
	while(classificadoGUm == classificadoGDois){
		classificadoGUm = Math.floor(Math.random() * 4);
		classificadoGDois = Math.floor(Math.random() * 4);		
	}
	while(classificadoHUm == classificadoHDois){
		classificadoHUm = Math.floor(Math.random() * 4);
		classificadoHDois = Math.floor(Math.random() * 4);		
	}

	/* LISTANDO OS VENCEDORES DA PRIMEIRA FASE */

	oitavasUm[0] = grupoA[classificadoAUm];
	oitavasUm[1] = grupoB[classificadoBDois];
	$("#oitavasUm").text(oitavasUm[0]);
	document.getElementById("oitavasUmImg").src = "img/" + oitavasUm[0] + ".png";
	$("#oitavasUmS").text(oitavasUm[1]);
	document.getElementById("oitavasUmImgS").src = "img/" + oitavasUm[1] + ".png";

	oitavasDois[0] = grupoA[classificadoADois];
	oitavasDois[1] = grupoB[classificadoBUm];
	$("#oitavasDois").text(oitavasDois[0]);
	document.getElementById("oitavasDoisImg").src = "img/" + oitavasDois[0] + ".png";
	$("#oitavasDoisS").text(oitavasDois[1]);
	document.getElementById("oitavasDoisImgS").src = "img/" + oitavasDois[1] + ".png";

	oitavasTres[0] = grupoC[classificadoCUm];
	oitavasTres[1] = grupoD[classificadoDDois];
	$("#oitavasTres").text(oitavasTres[0]);
	document.getElementById("oitavasTresImg").src = "img/" + oitavasTres[0] + ".png";
	$("#oitavasTresS").text(oitavasTres[1]);
	document.getElementById("oitavasTresImgS").src = "img/" + oitavasTres[1] + ".png";

	oitavasQuatro[0] = grupoC[classificadoCDois];
	oitavasQuatro[1] = grupoD[classificadoDUm];
	$("#oitavasQuatro").text(oitavasQuatro[0]);
	document.getElementById("oitavasQuatroImg").src = "img/" + oitavasQuatro[0] + ".png";
	$("#oitavasQuatroS").text(oitavasQuatro[1]);
	document.getElementById("oitavasQuatroImgS").src = "img/" + oitavasQuatro[1] + ".png";

	oitavasCinco[0] = grupoE[classificadoEUm];
	oitavasCinco[1] = grupoF[classificadoFDois];
	$("#oitavasCinco").text(oitavasCinco[0]);
	document.getElementById("oitavasCincoImg").src = "img/" + oitavasCinco[0] + ".png";
	$("#oitavasCincoS").text(oitavasUm[1]);
	document.getElementById("oitavasCincoImgS").src = "img/" + oitavasCinco[1] + ".png";

	oitavasSeis[0] = grupoE[classificadoEDois];
	oitavasSeis[1] = grupoF[classificadoFUm];
	$("#oitavasSeis").text(oitavasSeis[0]);
	document.getElementById("oitavasSeisImg").src = "img/" + oitavasSeis[0] + ".png";
	$("#oitavasSeisS").text(oitavasSeis[1]);
	document.getElementById("oitavasSeisImgS").src = "img/" + oitavasSeis[1] + ".png";

	oitavasSete[0] = grupoG[classificadoGUm];
	oitavasSete[1] = grupoH[classificadoHDois];
	$("#oitavasSete").text(oitavasSete[0]);
	document.getElementById("oitavasSeteImg").src = "img/" + oitavasSete[0] + ".png";
	$("#oitavasSeteS").text(oitavasSete[1]);
	document.getElementById("oitavasSeteImgS").src = "img/" + oitavasSete[1] + ".png";

	oitavasOito[0] = grupoG[classificadoGDois];
	oitavasOito[1] = grupoH[classificadoHUm];

	$("#oitavasOito").text(oitavasOito[0]);
	document.getElementById("oitavasOitoImg").src = "img/" + oitavasOito[0] + ".png";
	$("#oitavasOitoS").text(oitavasOito[1]);
	document.getElementById("oitavasOitoImgS").src = "img/" + oitavasOito[1] + ".png";

}

function chamarQuartas(){

	quartasUm[0] = oitavasUm[Math.floor(Math.random() * 2)];
	quartasUm[1] = oitavasDois[Math.floor(Math.random() * 2)];
	$("#quartasUm").text(quartasUm[0]);
	document.getElementById("quartasUmImg").src = "img/" + quartasUm[0] + ".png";
	$("#quartasUmS").text(quartasUm[1]);
	document.getElementById("quartasUmImgS").src = "img/" + quartasUm[1] + ".png";


	quartasDois[0] = oitavasTres[Math.floor(Math.random() * 2)];
	quartasDois[1] = oitavasQuatro[Math.floor(Math.random() * 2)];
	$("#quartasDois").text(quartasDois[0]);
	document.getElementById("quartasDoisImg").src = "img/" + quartasDois[0] + ".png";
	$("#quartasDoisS").text(quartasDois[1]);
	document.getElementById("quartasDoisImgS").src = "img/" + quartasDois[1] + ".png";


	quartasTres[0] = oitavasCinco[Math.floor(Math.random() * 2)];
	quartasTres[1] = oitavasSeis[Math.floor(Math.random() * 2)];
	$("#quartasTres").text(quartasTres[0]);
	document.getElementById("quartasTresImg").src = "img/" + quartasTres[0] + ".png";
	$("#quartasTresS").text(quartasTres[1]);
	document.getElementById("quartasTresImgS").src = "img/" + quartasTres[1] + ".png";


	quartasQuatro[0] = oitavasSete[Math.floor(Math.random() * 2)];
	quartasQuatro[1] = oitavasOito[Math.floor(Math.random() * 2)];
	$("#quartasQuatro").text(quartasQuatro[0]);
	document.getElementById("quartasQuatroImg").src = "img/" + quartasQuatro[0] + ".png";
	$("#quartasQuatroS").text(quartasQuatro[1]);
	document.getElementById("quartasQuatroImgS").src = "img/" + quartasQuatro[1] + ".png";


	/* CONTINUAR IMPLEMENTANDO AS QUARTAS DE FINAL AQUI!!! */
}

function chamarSemi(){

	semiUm[0] = quartasUm[Math.floor(Math.random() * 2)];
	semiUm[1] = quartasDois[Math.floor(Math.random() * 2)];

	$("#semiUm").text(semiUm[0]);
	document.getElementById("semiUmImg").src = "img/" + semiUm[0] + ".png";
	$("#semiUmS").text(semiUm[1]);
	document.getElementById("semiUmImgS").src = "img/" + semiUm[1] + ".png";

	semiDois[0] = quartasTres[Math.floor(Math.random() * 2)];
	semiDois[1] = quartasQuatro[Math.floor(Math.random() * 2)];

	$("#semiDois").text(semiDois[0]);
	document.getElementById("semiDoisImg").src = "img/" + semiDois[0] + ".png";
	$("#semiDoisS").text(semiDois[1]);
	document.getElementById("semiDoisImgS").src = "img/" + semiDois[1] + ".png";
}

function ChamarFinal(){

	final[0] = semiUm[Math.floor(Math.random() * 2)];
	final[1] = semiDois[Math.floor(Math.random() * 2)];
	$("#final").text(final[0]);
	document.getElementById("finalImg").src = "img/" + final[0] + ".png";
	$("#finalS").text(final[1]);
	document.getElementById("finalImgS").src = "img/" + final[1] + ".png";
}

function chamarGanhador(){	

	ganhador = final[Math.floor(Math.random() * 2)];
	
	document.getElementById("ganhadorImg").src = "img/" + ganhador + ".png";

	$("#btnJogarPrimeiraFase").hide("fast");
  $("#my-canvas").show();


}