/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area
 * Wynik zapisz do zmiennej łańuchowej radius z dwoma miejscami po przecinku.
 */
let area = 1;




let radius = '';

function getRadius(area) {
if(area<=0){radius=0}else{
    radius=(Math.sqrt(area/Math.PI )).toFixed(2);
    
}
 return radius;
}
getRadius(area);

console.log(radius);









