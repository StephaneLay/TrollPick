document.addEventListener("DOMContentLoaded",function(){

let top = ["Aatrox","Ambessa","Camille","Cho'Gath","Darius","Dr.Mundo","Fiora","Gangplank","Garen","Gnar","Gragas","Gwen",
"Illaoi","Irelia","Jax","Jayce","K'Sante","Kayle","Kennen","Kled","Malphite","Maokai","Mordekaiser","Nasus","Olaf",
"Ornn","Pantheon","Poppy","Quinn","Renekton","Riven","Rumble","Shen","Singed","Sion","Tahm Kench","Teemo","Trundle",
"Tryndamere","Urgot","Volibear","Wukong","Yorick"];

let mid = ["Ahri","Akali","Akshan","Anivia","Annie","Aurelion","Aurora","Azir","Cassiopeia","Corki","Diana","Ekko","Fizz",
"Galio","Heimerdinger","Hwei","Kassadin","Katarina","Leblanc","Lissandra","Lux","Malzahar","Mel","Naafiri","Neeko","Orianna","Qiyana",
"Ryze","Sylas","Syndra","Taliyah","Talon","Twisted Fate","Veigar","Vel'Koz","Vex","Viktor","Vladimir","Xerath","Yasuo","Yone",
"Zed","Ziggs","Zoe"];

let bot = ["Aphelios","Ashe","Caitlyn","Draven","Ezreal","Jhin","Jinx","Kai'sa","Kalista","Kog'maw","Lucian","Miss Fortune"
,"Nilah","Samira","Sivir","Smolder","Tristana","Twitch","Varus","Vayne","Xayah","Zeri"];

let sup = ["Alistar","Bard","Blitzcrank","Brand","Braum","Janna","Karma","Leona","Lulu","Lux","Milio","Morgana","Nami"
,"Nautilus","Neeko","Pyke","Rakan","Rell","Renata","Sona","Soraka","Swain","Seraphine","Taric","Tresh","Vel'koz","Yuumi",
"Zilean","Zyra"];

let jungle = ["Amumu","Bel'Veth","Briar","Ekko","Elise","Evelynn","FiddleSticks","Graves","Hecarim","Ivern","Jarvan","Karthus",
"Kayn","Kha'zix","Kindred","Lee Sin","Lilia","Maitre Yi","Nidalee","Nocturne","Nunu","Rammus","Rek'sai","Rengar","Shyvana",
"Skarner","Talon","Udyr","Vi","Viego","Volibear","Warwick","Xin zhao","Zac"];

const card_container = document.getElementById("cardcontainer");
    
function Randomize(_role){
    switch (_role){
        case _top:
            DisplayRole(top);
            break;
        case _mid:
            DisplayRole(mid);
            break;
        case _sup:
            DisplayRole(sup);
            break;
        case _bot:
            DisplayRole(bot);
            break;
        case _jungle:
            DisplayRole(jungle);
            break;
    }
}
   

function DisplayRole(arr){
    for (let i = 0; i < 3; i++) {
        let champ = arr[Math.floor(Math.random()*arr.length)];
        card_container.innerHTML = `<img src="assets/${champ}.JPG" >`;
}


    window.Randomize = Randomize;

}
})
