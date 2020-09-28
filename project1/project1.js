/**
 *   @author Tristan Werden
 *   @version 0.0.1
 *   @summary Dungeons And Dragons Lvl 1 character generator
 *   @todo Skills, every other race and class, and make it work better.
 */

"use strict";
const PROMPT = require('readline-sync');

let name, race, subRace, characterClass, savingThrows;
let str, dex, con, int, wis, cha;
let strMod, dexMod, conMod, intMod, wisMod, chaMod;
let speed, hp, armourClass;
let racialTrait1, racialTrait2, racialTrait3, classFeature1;




main();

function main(){
  console.log('You hear the clatter of dice on the table...')
  setName();
  setStats();
  setRace();
  if (race === 1){
    console.log('You picked Dwarf! Congrats! You drink ale and groom your beard daily!')
    dwarf();
      if(subRace === 'Hill Dwarf'){
        console.log('\nYou picked Hill Dwarf!')
        hillDwarf();
      }
      else if(subRace === 'Mountain Dwarf'){
        console.log('\nYou picked Mountain Dwarf!')
        mountainDwarf();
      }
      else {
        console.log('non-existant. Sorry!')
      }
  }
  else {
    console.log('non-existant. Sorry!');
  }
calcStatMod();
setClass();
if(characterClass === 1){
  console.log('You picked Barbarian! Congrats! You are probably a new player and have no idea whats going on!')
  barbarian();
}
else {
  console.log('non-existant. Sorry!');
}
printTheStuff();

}


function setName(){
  name = PROMPT.question('\nWhat shall the hero be called?');
}

function setStats(){
  str = PROMPT.question('\nWhat is the Heros Strength? \n')*1;
  dex = PROMPT.question('\nWhat is the Heros Dexterity? \n')*1;
  con = PROMPT.question('\nWhat is the Heros Constitution? \n')*1;
  int = PROMPT.question('\nWhat is the Heros Intelligence? \n')*1;
  wis = PROMPT.question('\nWhat is the Heros Wisdom? \n')*1;
  cha = PROMPT.question('\nWhat is the Heros Charisma? \n')*1;
}

function setRace(){
  race = PROMPT.question('\nWhat Race is the Hero? \n 1 = Dwarf \n')*1;
}

function dwarf(){
  let dwarfSub = ['Hill Dwarf', 'Mountain Dwarf'],
  index = PROMPT.keyInSelect(dwarfSub, 'What type of Dwarf is the Hero?');
  con = con + 2;
  console.log('As a dwarf, your CON raises by 2!');
  speed = 25;
  console.log('Your tiny legs move you 25ft per round!');
  racialTrait1 = "Dark vision";
  racialTrait2 = "Dwarven Resilience";
  console.log('You gained Dwarven Resilience and Dark Vision.')
  console.log('You have chosen to be a ' + dwarfSub[index]);
  subRace = dwarfSub[index];
}

function hillDwarf(){
  wis = wis + 1;
  console.log('You got Wise, son. +1 to wisdom.');
  racialTrait3 = "Dwarven Toughness";
  console.log('You have gained Dwarven Toughness.');
}

function mountainDwarf(){
  str = str + 1;
  console.log('You hit the gym. +1 to strength');
  racialTrait3 = "Dwarven Armour Training";
  console.log('You gained Dwarven Armour Training.')
}

function calcStatMod(){
  let modifierArray = [-6, -5, -4, -4 ,-3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
  strMod = modifierArray[str] * 1;
  dexMod = modifierArray[dex] * 1;
  conMod = modifierArray[con] * 1;
  intMod = modifierArray[int] * 1;
  wisMod = modifierArray[wis] * 1;
  chaMod = modifierArray[cha] * 1;
  console.log('your modifiers are ' + strMod + dexMod + conMod + intMod + wisMod + chaMod);
}

function setClass(){
  characterClass = PROMPT.question('\nWhat Class is the Hero? \n 1 = Barbarian \n')*1;
}

function barbarian(){
  hp = 12 + conMod;
  savingThrows = "Strength" + "Constitution";
  armourClass = 10 + conMod + dexMod;
  classFeature1 = "Rage";
}

function printTheStuff(){
let character;
  if (characterClass === 1){
    character = "barbarian";
  }
  else {console.log('no.');}
  console.log('You are ' + name);
  console.log("You are a " + subRace + " " + character);
  console.log("Your stat modifiers are:\n str: " + strMod);
  console.log("\n dex: " + dexMod);
  console.log("\n con: " + conMod);
  console.log("\n int: " + intMod);
  console.log("\n wis: " + wisMod);
  console.log("\n cha: " + chaMod);

  console.log('speed: ' + speed);
  console.log('AC: ' + armourClass);
  console.log("Your skills are: " + racialTrait1 + " " + racialTrait2 + " " + racialTrait3 + " " + classFeature1)
}
