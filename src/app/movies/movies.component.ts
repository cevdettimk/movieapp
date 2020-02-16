import { Component } from '@angular/core';
import {Movie} from '../movie';

//@Component({
    //selector :'movies' ,// <movies></movies>
    //selector :'.movies' // <div class ="movies"></movies> nokta başına konulduğunda class şeklinde tanımlanır
    //selector :'#movies' // <div id ="movies"></movies> # olduğunda id olduğunu belirtir
    //template: '<h2>Movies</h2>'
    //templateUrl: './movies.component.html',
    //styleUrls: ['./movies.component.css']

//})

@Component({
    selector: 'movies',
    // template:`
    // <h2>  {{ "Title" + getTitle() }}</h2> 
    // <div> {{movie.id}} </div>
    // <div> {{movie.name}} </div>
    // `
    templateUrl: './movies.component.html',
    //styleUrls: ['./movies.component.css']
  })

export class MoviesComponent{
  title ='Movies List'
movie:Movie ={
id : 1,
name :'Movie List'
}
  getTitle()
  {
    return this.title;
  }
}