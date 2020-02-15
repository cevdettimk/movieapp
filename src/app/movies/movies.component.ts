import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';


@Component({
    selector :'movies' ,// <movies></movies>
    //selector :'.movies' // <div class ="movies"></movies> nokta başına konulduğunda class şeklinde tanımlanır
    //selector :'#movies' // <div id ="movies"></movies> # olduğunda id olduğunu belirtir
    //template: '<h2>Movies</h2>'
    templateUrl: 'movies.component.html'
})
export class MoviesComponent{

}