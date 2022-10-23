/**
 * Napisz skrypt, który na podstawie zmiennych rectWidth i rectHeight stworzy łańcuch rectString zawierający pustą rankę o podanych wymiarach.
 * Ramka ma być zbudowana ze znaków w zmienej rectBorderSymbol.
 * Dodaj kod, który sprawdzi poprawność wszystkich zmiennych:
 * rectWidth i rectHeight - większe od -1 i mniejsze od 81
 * rectBorderSymbol - jeden dowolny znak oprócz znaków białych (spacja, tabulator, nowy wiersz itd.)
 * Dla przykładowych danych wyświetlenie rectString na konsoli powinno dać poniższy efekt:
 * #######
 * #     #
 * #     #
 * #     #
 * #######  
 */
let rectWidth = 7;
let rectHeight = 5;
let rectBorderSymbol = '#';
let rectString = '';
let midRowsString = '\n'+rectBorderSymbol+ ' '.repeat(rectWidth-2)+rectBorderSymbol;
let firstLastString = rectBorderSymbol.repeat(rectWidth);


if(rectWidth,rectHeight<81 && rectHeight,rectWidth>-1 && !(rectBorderSymbol.includes(' '))){
    
rectString= firstLastString +midRowsString.repeat(rectHeight-2)+'\n'+rectBorderSymbol.repeat(rectWidth);
}
else
{
    console.log('złe zmienne')
}

console.log(rectString);