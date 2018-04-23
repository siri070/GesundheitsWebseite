//Variablem deklaration; 
var bmiWert = 0;
var kalorien = 0;

var groesse;
var gewicht;

var istMann = false;
var istFrau = false;

var bewegtWenig = 1.2;
var bewegtMittel = 1.55;
var bewgegtViel = 1.9;
var hatFehler = false;

//Validation von den Benutzer eingaben
//Überprüfung ob der Benutzer eine Zahl eingegeben hat
function istEingabeZahl(eingabe) {
	if (Number.isInteger(eingabe)) {
		return true;
	} else {
		return false;
	}
}
//Fehlermeldungen 
function fehlerMeldung(fehlermeldung) {
	document.getElementById("fehler").innerHTML = fehlermeldung;
}


//Hier Beginnt die Auswertung der Benutzereingaben
//Bestimmung welches Geschlecht der Benutzer hat
function geschlechtBenutzer() {
    var geschlecht = document.querySelector('input[name="geschlecht"]:checked').value;
    if (geschlecht === "mann") {
		istMann = true;
	}
	if (geschlecht === "frau") {
		istFrau = true;
	}
	
}
//Auswertung des Alters 
function alterBenutzer() {
	var alter = document.querySelector("#alter").value;
    alter = parseFloat(alter);
	if (istEingabeZahl(alter)) {
		hatFehler = false;
	} else {

		hatFehler = true;
		var fehler = "Geben Sie bitte eine Zahl für ihr Alter an.";
		fehlerMeldung(fehler);
	}

}
//Auswertung wie viel sich der Benutzer Bewegt
function bewegungBenutzer() {
	var bewegung = document.querySelector('input[name="bewegung"]:checked').value;
	if (bewegung === "wenig") {
        return bewegtWenig;
	}
    if (bewegung === "mittel") {
        return bewegtMittel;
    }
    if (bewegung === "viel") {
        return bewgegtViel;
    }
}
//Auswerten wie viel der Benutzer wiegt
function gewichtBenutzer() {
	gewicht = document.querySelector("#gewicht").value;
    gewicht = parseFloat(gewicht);
	if (istEingabeZahl(gewicht)) {
		hatFehler = false;
	} else {

		hatFehler = true;
		var fehler = "Geben Sie bitte eine Zahl für ihr Gewicht an.";
		fehlerMeldung(fehler);
	}

}
//Auswertung wie gross der Benutzer ist 
function groesseBenutzer() {
    groesse = document.querySelector("#groesse").value;
    groesse = parseFloat(groesse);
	if (istEingabeZahl(groesse)) {
		hatFehler = false;
	} else {

		hatFehler = true;
		var fehler = "Geben Sie bitte eine Zahl für ihre Grösse an.";
		fehlerMeldung(fehler);
	}
}
//Männer: RMR = (10 × Gewicht in kg) + (6,25 × Größe in cm) – (5 × Alter) + 5
//Frauen: RMR = (10 × Gewicht in kg) + (6,25 × Größe in cm) – (5 × Alter) – 161
//Funktionen 
//BMI Rechner 
function bmiRechner() {
	gewichtBenutzer();
	groesseBenutzer();
	if (!hatFehler) {
		bmiWert = gewicht / (groesse * groesse);
		document.getElementById("bmiWert").innerHTML = "Ihr BMI-Wert ist:" + bmiWert;
	}
}
//KalorienBedarfRechner
function kalorienBedarfRechner() {
    geschlechtBenutzer();
    var gewicht = gewichtBenutzer();
    var groesse = groesseBenutzer();
    var alter = alterBenutzer();
    var bewegung = bewegungBenutzer();
    var rmr;
	
	groesse = groesse * 100;
	if (istMann) {
		rmr = (10 * gewicht) + (6.25 * groesse) - (5 * alter) + 5;
	}
	if (istFrau) {
		rmr = (10 * gewicht) + (6.25 * groesse) - (5 * alter) - 161;

	}
	kalorien = rmr * bewegung;
    document.getElementById("kalorien").innerHTML = "Sie haben einen Kalorienbedarf von " + kalorien + ".";

}