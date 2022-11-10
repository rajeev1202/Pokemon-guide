import {Component, Input} from '@angular/core';


@Component({
    selector: 'pokemon-card',
    templateUrl:'./pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.css']
})

export class PokemoncardComponent{
    @Input() imgSrc:string;
    @Input() pokeTypes:any;
    @Input() name:string;
    @Input() id:number;
}