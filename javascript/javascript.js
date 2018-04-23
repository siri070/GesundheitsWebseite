
var istMann = false;
var istFrau = false;

var alter; 

var bewegtWenig = false;
var bewegtMittel = false;
var bewgegtViel = false;

var gewicht;

var groesse;

//Funktionen 
//BMI Rechner 
function bmiRechner(){


}
//KalorienBedarfRechner
function kalorienBedarfRechner(){

}
//Hier Beginnt die Auswertung der Benutzereingaben
//Bestimmung welches Geschlecht der Benutzer hat
function geschlecht(){
	if
}
//Auswertung des Alters 
function alter(){

}
//Auswertung wie viel sich der Benutzer Bewegt
function bewegung(){

}
//
function gewicht(){
	if(IstEingabeZahl(gewicht)){

	}
	else{
		var fehler ="Geben Sie bitte eine Zahl für ihr Gewicht an."
		fehler(fehler);
	}

}
function groesse(){

	if(IstEingabeZahl(groesse)){

	}
	else{
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
	else{
		return false;
	}
}
//Fehlermeldungen 
function fehler(fehlermeldung){
	document.getElementById("fehler").innerHTML= fehlermeldung;
}

