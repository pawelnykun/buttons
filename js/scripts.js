//deklaracja i inicjalizacja zmiennej
var withButtonsClass = document.getElementsByClassName('button');
//wyświetlenie zmiennej w konsoli
console.log(withButtonsClass);
//funkcja wyświetlająca tekst zawarty w elementach tablicy
for ( var i=0; i < withButtonsClass.length; i++ ) {
	console.log( withButtonsClass[i].innerText )
}