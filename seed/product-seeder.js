require('dotenv').config({path: '../.env'});
var mongoose = require('mongoose');
var Product = require('../models/product');
var DBConfig = require('../config/db');
var env = process.env.ENV;

mongoose.connect(DBConfig[env].mongourl);

var products = [
  new Product({
   imagePath: 'https://upload.wikimedia.org/wikipedia/ru/5/5e/Gothiccover.png',
   title: 'Gothic',
   description: 'The main character must complete quests and slay wild animals and monsters to earn skill points.',
   price: 10
  }),
  new Product({
   imagePath: 'http://media.blizzard.com/sc2/media/wallpapers/wall061/wall061-2048x2048-tablet.jpg',
   title: 'StarCraft 2',
   description: 'Wage war across the galaxy with three unique and powerful races. StarCraft II is a real-time strategy game from Blizzard Entertainment.',
   price: 15
  }),
  new Product({
   imagePath: 'http://warcraft3.org.ua/img/Warcraft3RoC.jpg',
   title: 'WarCraft 3',
   description: 'The award-winning real time strategy game from Blizzard Entertainment set in the world of Warcraft.',
   price: 11
  }),
  new Product({
   imagePath: 'https://upload.wikimedia.org/wikipedia/ru/0/05/Diablo_III_cover.jpg',
   title: 'Diablo 3',
   description: 'The demonically-besieged world of Sanctuary needs heroes. Will you heed the call? Diablo III is an action role-playing game from Blizzard Entertainment.',
   price: 17
  }),
  new Product({
   imagePath: 'https://howlongtobeat.com/gameimages/250px-Far-cry-3-box-art-xbox-360.jpg',
   title: 'Far Cry 3',
   description: 'Open-world first-person shooter with an emphasis on exploration and stealth.',
   price: 13
  }),
  new Product({
   imagePath: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/85/Heroes_of_Might_and_Magic_III_Cover_Art.jpg/250px-Heroes_of_Might_and_Magic_III_Cover_Art.jpg',
   title: 'Heroes of Might and Magic III',
   description: 'A turn-based strategy game. Gameplay consists of strategic exploration on the world map and tactical turn-based combat.',
   price: 7
  }),
  new Product({
   imagePath: 'http://www.kritikanstvo.ru/games/s/spacerangers2riseofthedominators/covers/spacerangers2riseofthedominators_pc_459272.jpg',
   title: 'Space Rangers 2',
   description: 'Space Rangers 2 is set in the year 3300. Sentient combat robots known as Dominators are attacking the five civilizations of the Coalition: the humans, the Maloqs, the Pelengs, the Faeyans, and the Gaalians.',
   price: 9
  }),
  new Product({
   imagePath: 'http://sm.ign.com/ign_sl/game/c/civilizati/civilization-6_6ruc.jpg',
   title: 'Civilization VI',
   description: 'There are eighteen civilizations included in the base game at launch. In addition, the Aztec civilization is available exclusively to pre-order customers for the first ninety days after launch.',
   price: 14
  })
];

Product.remove({}).then(function(){ // first remove all old documents
  var done = 0;
  for(var i = 0; i < products.length; i++){
    products[i].save(() => {
      done++;
      if(done === products.length){
        exit();
      }
    });
  }
});

function exit(){
  mongoose.disconnect();
}
