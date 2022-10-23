/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
 let n = 36.6;
 let m = 50;
let progressBar = ""

let pop = Math.round((n/m)*100)

let halfpop=Math.round(pop/2)


progressBar= '|'+ '#'.repeat(halfpop) + ' '.repeat(50-halfpop) + '|' + '\n0 %                     ' + pop + '%'+'                     100%';

console.log(progressBar)