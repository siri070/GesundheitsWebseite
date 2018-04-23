//Variablem deklaration; 
var bmiWert;
var kaloren;

var geschlecht;
var istMann = false;
var istFrau = false;

var alter; 

var bewegung;
var bewegtWenig = false;
var bewegtMittel = false;
var bewgegtViel = false;

var gewicht;

var groesse;

var hatFehler= false;

//Funktionen 
//BMI Rechner 
function bmiRechner(){
	gewicht();
	groesse(); 
	if(!hatFehler){
		bmiWert= gewicht/(groesse*groesse);
		document.getElementById("bmiWert").innerHTML = bmiWert;
	}
	

}
//KalorienBedarfRechner
function kalorienBedarfRechner(){

}
//Hier Beginnt die Auswertung der Benutzereingaben
//Bestimmung welches Geschlecht der Benutzer hat
function geschlecht(){
	geschlecht = document.querySelector('input[name="geschlecht"]:checked').value;
	
}
//Auswertung des Alters 
function alter(){
	alter = document.querySelector("#alter").value;
	if(istEingabeZahl(alter)){
		hatFehler=false;
	}
	else{

		hatFehler=true;
		var fehler ="Geben Sie bitte eine Zahl für ihr Alter an."
		fehler(fehler);
	}

}
//Auswertung wie viel sich der Benutzer Bewegt
function bewegung(){
	bewegung = document.querySelector('input[name="bewegung"]:checked').value;
}
//Auswerten wie viel der Benutzer wiegt
function gewicht(){
	gewicht = document.querySelector("#gewicht_BMI").value;
	if(istEingabeZahl(gewicht)){
		hatFehler=false;
	}
	else{

		hatFehler=true;
		var fehler ="Geben Sie bitte eine Zahl für ihr Gewicht an."
		fehler(fehler);
	}

}
//Auswerten wie gross der Benutzer 
function groesse(){
	groesse = document.querySelector("#groesse_BMI").value;
	if(istEingabeZahl(groesse)){
		hatFehler=false;
	}
	else{

		hatFehler=true;
		var fehler ="Geben Sie bitte eine Zahl für ihre Grösse an."
		fehler(fehler);
	}
}
//Validation von den Benutzer eingaben
//Überprüfung ob der Benutzer eine Zahl eingegeben hat
function istEingabeZahl(eingabe){
	if(isInt(eingabe)){
		return true;
	}
	else{ss
		return false;
	}
}
//Fehlermeldungen 
function fehler(fehlermeldung){
	document.getElementById("fehler").innerHTML= fehlermeldung;
}

