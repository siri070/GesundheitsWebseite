//Variablem deklaration; 
var bmiWert = 0;
var rmr = 0;
var kalorien = 0;
var geschlecht="";
var istMann = false;
var istFrau = false;

var gewicht;

var groesse;

var hatFehler = false;
//Männer: RMR = (10 × Gewicht in kg) + (6,25 × Größe in cm) – (5 × Alter) + 5
//Frauen: RMR = (10 × Gewicht in kg) + (6,25 × Größe in cm) – (5 × Alter) – 161
//Funktionen 
//BMI Rechner 
function bmiRechner() {
	gewicht();
	groesse();
	if (!hatFehler) {
		bmiWert = gewicht / (groesse * groesse);
		document.getElementById("bmiWert").innerHTML = bmiWert;
	}
	

}
//KalorienBedarfRechner
function kalorienBedarfRechner() {
    geschlecht();
    var gewicht = gewicht();
    var groesse = groesse();
    var alter = alter();
    var bewegung = bewegung();
    
	groesse = groesse * 100;
	if (istMann) {
		rmr = (10 * gewicht) + (6.25 * groesse) - (5 * alter) + 5;
	}
	if (istFrau) {
		rmr = (10 * gewicht) + (6.25 * groesse) - (5 * alter) - 161;

	}
	kalorien = rmr * bewegung;
    document.getElementById("kalorien").innerHTML= kalorien;

}
//Hier Beginnt die Auswertung der Benutzereingaben
//Bestimmung welches Geschlecht der Benutzer hat
function geschlechtBenutzer() {
	geschlecht = document.querySelector('input[name="geschlecht"]:checked').value;
	if ( geschlecht == "mann"){
		istMann = true;
	}
	if( geschlech == "frau"){
		istFrau = true;
	}
	
}
//Auswertung des Alters 
function alterBenutzer() {
	var alter = document.querySelector("#alter").value;
	if(istEingabeZahl(alter)){
		hatFehler = false;
	}
	else{

		hatFehler = true;
		var fehler ="Geben Sie bitte eine Zahl für ihr Alter an."
		fehler(fehler);
	}

}
//Auswertung wie viel sich der Benutzer Bewegt
function bewegungBenutzer() {
    var bewegtWenig = 1.2;
    var bewegtMittel = 1.55;
    var bewgegtViel = 1.9;
	var bewegung = document.querySelector('input[name="bewegung"]:checked').value;
	if(bewegung=="wenig"){
        return bewegtWenig;
	}
    if( bewegung === "mittel"){
        return bewegtMittel;
    }
    if( bewegung === "viel"){
        return bewgegtViel;
    }
}
//Auswerten wie viel der Benutzer wiegt
function gewichtBenutzer() {
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
function groesseBenutzer() {
	groesse = document.querySelector("#groesse_BMI").value;
	if(istEingabeZahl(groesse)){
		hatFehler=false;
	}
	else{

		hatFehler=true;
		var fehler ="Geben Sie bitte eine Zahl für ihre Grösse an."
		fehlerMeldung(fehler);
	}
}
//Validation von den Benutzer eingaben
//Überprüfung ob der Benutzer eine Zahl eingegeben hat
function istEingabeZahl(eingabe) {
	if(isInt(eingabe)){
		return true;
	}
	else{
		return false;
	}
}
//Fehlermeldungen 
function fehlerMeldung(fehlermeldung) {
	document.getElementById("fehler").innerHTML= fehlermeldung;
}

