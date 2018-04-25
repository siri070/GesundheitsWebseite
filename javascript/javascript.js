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
var hatAlter = false;
var hatGeschlecht = false;
var hatBewegung = false;
var hatGewicht = false;
var hatGroesse = false; 
//Validation von den Benutzer eingaben
//Überprüfung ob der Benutzer eine Zahl eingegeben hat
function hatEingabe(eingabe){
	if(eingabe.length >0){
		return true;
	} else {
		return false;
	}
}
function istEingabeZahl(eingabe) {
	if (!isNaN(eingabe)) {
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
	hatGeschlecht = hatEingabe(geschlecht);
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
	hatAlter = hatEingabe(alter);
    alter = parseFloat(alter);
	if (istEingabeZahl(alter)) {
		hatFehler = false;
        return alter;
	} else {

		hatFehler = true;
		var fehler = "Geben Sie bitte eine Zahl für ihr Alter an.";
		fehlerMeldung(fehler);
	}

}
//Auswertung wie viel sich der Benutzer Bewegt
function bewegungBenutzer() {
	var bewegung = document.querySelector('input[name="bewegung"]:checked').value;
	hatBewegung = hatEingabe(bewegung);
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
	var gewicht = document.querySelector("#gewicht").value;
	hatGewicht = hatEingabe(gewicht);
    gewicht = parseFloat(gewicht);
	if (istEingabeZahl(gewicht)) {
		hatFehler = false;
        return gewicht;
	} else {

		hatFehler = true;
		var fehler = "Geben Sie bitte eine Zahl für ihr Gewicht an.";
		fehlerMeldung(fehler);
	}

}
//Auswertung wie gross der Benutzer ist 
function groesseBenutzer() {
    var groesse = document.querySelector("#groesse").value;
	hatGroesse = hatEingabe(groesse);
    groesse = parseFloat(groesse);
	if (istEingabeZahl(groesse)) {
		hatFehler = false;
        return groesse;
	} else {

		hatFehler = true;
		var fehler = "Geben Sie bitte eine Zahl für ihre Grösse an.";
		fehlerMeldung(fehler);
	}
}
//Funktionen 
//BMI Rechner 
function bmiRechner() {
	var gewicht = gewichtBenutzer();
	var groesse = groesseBenutzer();
	if (!hatFehler && hatGewicht && hatGroesse) {
		bmiWert = gewicht / (groesse * groesse);
        //document.write("Ihr BMI-Wert ist:" + bmiWert);
	}  
    	  document.getElementById('bmiWert').innerHTML = "Ihr BMI-Wert ist:" +bmiWert ;	
}

//KalorienBedarfRechner
function kalorienBedarfRechner() {
    geschlechtBenutzer();
    var gewicht = gewichtBenutzer();
    var groesse = groesseBenutzer();
    var alter = alterBenutzer();
    var bewegung = bewegungBenutzer();
    var rmr;
	
	if(hatAlter&&hatBewegung&&hatGeschlecht&&hatGewicht&&hatGroesse){
		groesse = groesse * 100;
		if (istMann) {
			rmr = (10 * gewicht) + (6.25 * groesse) - (5 * alter) + 5;
		}
		else if (istFrau) {
			rmr = (10 * gewicht) + (6.25 * groesse) - (5 * alter) - 161;
		}
		kalorien = rmr * bewegung;
		
        //document.write("Sie haben einen Kalorienbedarf von " + kalorien +".")
	}
	
        document.getElementById("kalorien").innerHTML = "Sie haben einen Kalorienbedarf von " + kalorien +".";
}