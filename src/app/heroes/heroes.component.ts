import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // add hero property
  // hero: Hero = {
  //   id: 1,
  //   name: "babi"
  // };
  // heroes = HEROES;
   
  selectedHero : Hero;
  heroes:Hero[];
  constructor( private heroService:HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }

  addHero(heroName:string):void{
    heroName = heroName.trim();
    if (!heroName) { return; }
    // this.heroService.addHero({ heroName } as Hero)
    // .subscribe(hero => {
    //   this.heroes.push(hero);
    // });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  // for one way binding
  // updateData(e){
  //   this.hero.name =e.target.value;
  // }

}
