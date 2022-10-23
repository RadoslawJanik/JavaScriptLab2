/**
 * Napisz skrypt, który w łańcuchu triangle zawiera ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości 
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierzy powinna odpowiadać 
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * ##### 
 */
let height = 5;
let triangle = '';


let i=0

if(height>0){
for(; i < height ;i++){


    triangle = triangle + '#'
console.log(triangle)

}
}else{
        console.log('height cannot be lower than 0')
}

