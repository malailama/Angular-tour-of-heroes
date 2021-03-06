import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: `./heroes.component.html`,
  styleUrls: [`./heroes.component.css`]
})

export class HeroesComponent  implements OnInit { 
  //#1 initialisation of Component properties should be inside the class
  heroes: Hero[];
  selectedHero: Hero;

  constructor (
    private heroService: HeroService,
    private router: Router){ }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  //#2 Always check the names of functions. Verify that the same name has been used in template and AppComponent.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {return;}
    this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    })
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() =>{
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {this.selectedHero = null; }
      });
  }
}



