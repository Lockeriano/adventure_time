var random = function(x) {
  return Math.floor(Math.random() * x + 1);
};

var playerList = [];
function Player(name, sex, race, prof){
  this.name = name;
  this.sex = sex;
  this.race = race;
  this.prof = prof;
  this.str =        this.race === "Human" ? random(7) :
                    this.race === "Orc" ? random(10) :
                    this.race === "Elf" ? random(6) :
                    console.log("Choose either Human, Orc or Elf");

  this.agi =        this.race === "Human" ? random(7) :
                    this.race === "Orc" ? random(6) :
                    this.race === "Elf" ? random(8) :
                    console.log("Choose either Human, Orc or Elf");

  this.int =        this.race === "Human" ? random(8) :
                    this.race === "Orc" ? random(6) :
                    this.race === "Elf" ? random(8) :
                    console.log("Choose either Human, Orc or Elf");

  this.weapon =     this.prof === "Archer" ? "Bow" :
                    this.prof === "Warrior" ? "Sword" :
                    this.prof === "Mage" ? "Staff" :
                    this.prof === "Barbarian" ? "Axe" :
                    console.log("Choose either Archer, Warrior, Mage or Barbarian");

  this.showRace = function (){
    console.log(this.name + " is " + this.race);
  }

  this.showProf = function(){
    console.log(this.name + " is " + this.prof);
  }

  this.showStats = function(){
    console.log(this.name + " strength : " + this.str + "\n" +
                this.name + " agility : " + this.agi + "\n" +
                this.name + " inteligence : " + this.int + "\n");
  }
  this.showWeapon = function(){
    console.log(this.name + " wields a " + this.weapon);
  }
};

var player1 = new Player("Roy", "male", "Human", "Archer");
var player2 = new Player("Goro", "male", "Orc", "Barbarian");
player1.showProf();
player1.showRace();
player1.showStats();
player1.showWeapon();
player2.showStats();
