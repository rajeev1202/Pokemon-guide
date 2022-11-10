import { Component, OnInit, HostListener } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  pokemonsData = [];
  isDataLoading = false;

  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event){
      // let e = event.srcElement as HTMLDivElement;
      console.log("calcula",window.pageYOffset,(document.body.scrollHeight - document.body.clientHeight)*0.75)
      if(window.pageYOffset > (document.body.scrollHeight - document.body.clientHeight)*0.75 && !this.isDataLoading){
        this.isDataLoading = true;  
        this.getPokemons();
        console.log("Scroll Event",window.pageYOffset,document.body.scrollHeight,document.body.clientHeight);
      }
      
    }

  constructor( private appService : AppService){

  }
  
  ngOnInit(){
    
    this.getPokemons()
  }


  //  scrollHandler(event) {
  //   let e = event.srcElement as HTMLDivElement;
  //   console.log("calcula",event.srcElement,event.srcElement['scrollTop'] ,event.srcElement.scrollHeight ,event.srcElement.offsetHeight)
  //   if(event.target.scrollTop > (event.target.scrollHeight - event.target.offsetHeight)*0.75)
  //   console.log("Scroll Event");
  // }

  getPokemons(){
    this.isDataLoading = true;
   this.appService.getPokemons((data:any) => {
      this.pokemonsData = this.pokemonsData.concat(data)
      this.isDataLoading = false;
      console.log("succesd",this.pokemonsData)
    },(err:any) => {
      console.log(err)
      alert(err)
      this.isDataLoading = false;
    }) 
  }

  }

