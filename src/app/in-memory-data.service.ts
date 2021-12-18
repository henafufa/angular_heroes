import { Injectable } from '@angular/core';
import {InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  constructor() { }

  createDb(){

    const heroes=[
      {
        id:11,
        name:'abdi'
    },
    {
        id:22,
        name:'bekan'
    },
    {
        id:33,
        name:'walin'
    },
    {
        id:44,
        name:'kali'
    },
    {
        id:55,
        name:'lidu'
    },
    {
        id:66,
        name:'melkam'
    },
    {
        id:77,
        name:'helen'
    },
    {
        id:98,
        name:'abebe'
    },
    {
        id:100,
        name:'tihun'
    }
    ]

    return {heroes};

  }

  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
