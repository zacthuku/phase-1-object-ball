function gameObject(){
    return{
        home:{
           "teamName":"Brooklyn Nets",
           colors:["Black", "White"],
           players:{
            "Alan Anderson":{
                "number":0,
                "shoe":16,
                "points":22,
                "rebounds":12,
                "assists":12,
                "steals":3,
                "blocks":1,
                "slamDunks":1
            },
            "Reggie Evans":{
                "number":30,
                "shoe":14,
                "points":12,
                "rebounds":12,
                "assists":12,
                "steals":12,
                "blocks":12,
                "slamDunks":7
            },
            "Brook Lopez":{
                "number":11,
                "shoe":17,
                "points":17,
                "rebounds":19,
                "assists":10,
                "steals":3,
                "blocks":1,
                "slamDunks":15
            },
            "Mason Plumlee":{
                "number":1,
                "shoe":19,
                "points":26,
                "rebounds":12,
                "assists":6,
                "steals":3,
                "blocks":8,
                "slamDunks":3
            },
            "Jason Terry":{
                "number":31,
                "shoe":15,
                "points":19,
                "rebounds":2,
                "assists":2,
                "steals":4,
                "blocks":11,
                "slamDunks":1
            }
           }
        },
        away:{
            "teamName":"Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{
             "Jeff Adrien":{
                 "number":4,
                 "shoe":18,
                 "points":10,
                 "rebounds":1,
                 "assists":1,
                 "steals":2,
                 "blocks":7,
                 "slamDunks":2
             },
             "Bismak Biyombo":{
                 "number":1,
                 "shoe":16,
                 "points":12,
                 "rebounds":4,
                 "assists":7,
                 "steals":7,
                 "blocks":15,
                 "slamDunks":10
             },
             "DeSagna Diop":{
                 "number":2,
                 "shoe":14,
                 "points":24,
                 "rebounds":12,
                 "assists":12,
                 "steals":4,
                 "blocks":5,
                 "slamDunks":5
             },
             "Ben Gordon":{
                 "number":8,
                 "shoe":15,
                 "points":33,
                 "rebounds":3,
                 "assists":2,
                 "steals":1,
                 "blocks":1,
                 "slamDunks":0
             },
 
            "Brendan Haywood":{
                 "number":33,
                 "shoe":15,
                 "points":6,
                 "rebounds":12,
                 "assists":12,
                 "steals":22,
                 "blocks":5,
                 "slamDunks":12
             }
            }
         }

    }
}
function numPointsScored(playerName) {
    let object = gameObject();
   for(let team in object){
    if(object[team].players[playerName]){
     return object[team].players[playerName].points;
     

    }
    
   }
   return null;
  }
  console.log(numPointsScored("Alan Anderson"));
 
  function shoeSize(playerName) {
    let object = gameObject();
   for(let team in object){
    if(object[team].players[playerName]){
     return object[team].players[playerName].shoe;
     

    }
    
   }
   return null;
  }
  console.log(shoeSize("Alan Anderson"));

  function teamColors(teamName){
    let object = gameObject();
   for(let team in object){
    if(object[team].teamName ===teamName){
        return object[team].colors;
    }
  }
 return null
}
console.log(teamColors("Charlotte Hornets"))

function teamNames() {
    let object = gameObject();
    let teams = [];
    
    for (let team in object) {
        teams.push(object[team].teamName);
    }
    
    return teams;
}

console.log(teamNames()); 

function playerNumbers(teamName){
    let object= gameObject();
    for(let team in object){
        if (object[team].teamName === teamName) {
            return Object.values(object[team].players).map(player => player.number);
        }
    }
    
    return null;
    
}
console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName) {
    let object = gameObject();
    
    for (let team in object) {
        if (object[team].players[playerName]) {
            return object[team].players[playerName];
        }
    }
    
    return null; 
}

console.log(playerStats("Alan Anderson"));

function bigShoeRebounds() {
    let object = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

    for (let team in object) {
        for (let player in object[team].players) {
            let playerData = object[team].players[player];

            if (playerData.shoe > largestShoeSize) {
                largestShoeSize = playerData.shoe;
                rebounds = playerData.rebounds;
            }
        }
    }

    return rebounds;
}

console.log(bigShoeRebounds()); 

function mostPointsScored() {
    let object = gameObject();
    let maxPoints = 0;
    let topScorer = "";

    for (let team in object) {
        for (let player in object[team].players) {
            let playerData = object[team].players[player];

            if (playerData.points > maxPoints) {
                maxPoints = playerData.points;
                topScorer = player;
            }
        }
    }

    return topScorer;
}

console.log(mostPointsScored()); 

