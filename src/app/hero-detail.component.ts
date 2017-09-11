import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component ({
    selector:`hero-detail`,
    // `` Symbol is used for enclosing Component properties, not ''
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>Id: </label>{{hero.id}}</div>
        <div>
        <label>Name: </label>
        <input [(ngModel)] = "hero.name" placeholder="name">
        </div>
    </div>
    `
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}