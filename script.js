document.addEventListener("DOMContentLoaded",function(){


const top = ["Aatrox","Ambessa","Camille","Cho'Gath","Darius","Dr.Mundo","Fiora","Gangplank","Garen","Gnar","Gragas","Gwen",
"Illaoi","Irelia","Jax","Jayce","K'Sante","Kayle","Kennen","Kled","Malphite","Maokai","Mordekaiser","Nasus","Olaf",
"Ornn","Pantheon","Poppy","Quinn","Renekton","Riven","Rumble","Shen","Singed","Sion","Tahm Kench","Teemo","Trundle",
"Tryndamere","Urgot","Volibear","Wukong","Yorick"];

let mid = ["Ahri","Akali","Akshan","Anivia","Annie","Aurelion","Aurora","Azir","Cassiopeia","Corki","Diana","Ekko","Fizz",
"Galio","Heimerdinger","Hwei","Kassadin","Katarina","Leblanc","Lissandra","Lux","Malzahar","Mel","Naafiri","Neeko","Orianna","Qiyana",
"Ryze","Sylas","Syndra","Taliyah","Talon","Twisted Fate","Veigar","Vel'Koz","Vex","Viktor","Vladimir","Xerath","Yasuo","Yone",
"Zed","Zoe"];

let bot = ["Aphelios","Ashe","Caitlyn","Draven","Ezreal","Jhin","Jinx","Kai'sa","Kalista","Kog'maw","Lucian","Miss Fortune"
,"Nilah","Samira","Sivir","Smolder","Tristana","Twitch","Varus","Vayne","Xayah","Zeri","Ziggs"];

let sup = ["Alistar","Bard","Blitzcrank","Brand","Braum","Janna","Karma","Leona","Lulu","Lux","Milio","Morgana","Nami"
,"Nautilus","Neeko","Pyke","Rakan","Rell","Renata","Sona","Soraka","Swain","Seraphine","Taric","Thresh","Vel'Koz","Yuumi",
"Zilean","Zyra"];

let jungle = ["Amumu","Ambessa","Bel'Veth","Briar","Ekko","Elise","Evelynn","Fiddlesticks","Graves","Hecarim","Ivern","Jarvan","Karthus",
"Kayn","Kha'zix","Kindred","Lee Sin","Lilia","Maitre Yi","Nidalee","Nocturne","Nunu","Rammus","Rek'sai","Rengar","Shyvana",
"Skarner","Talon","Udyr","Vi","Viego","Volibear","Warwick","Xin zhao","Zac","Zed"];

let temp_arr = [];
let limit = 5;
let lastPickedRole;

const card_container = document.getElementById("cardcontainer");
const button_container = document.getElementById("buttoncontainer");
const addcard_container = document.getElementById("addcardcontainer");
const reset_container = document.getElementById("reset");






function Randomize(_role){
    switch (_role){
        case '_top':
            DisplayRole(top,"top");
            break;
        case '_mid':
            DisplayRole(mid,"mid");
            break;
        case '_sup':
            DisplayRole(sup,"support");
            break;
        case '_bot':
            DisplayRole(bot,"adc");
            break;
        case '_jungle':
            DisplayRole(jungle,"jungle");
            break;
    }
}
   

function DisplayRole(arr,role){
    temp_arr = arr.slice();
    lastPickedRole=role;
    
    button_container.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        PickChamp();
        
}
    addcard_container.innerHTML += '<button id="addbutton" onclick="AddPick()"> + </button>';
    reset_container.innerHTML += `<button id="resetbutton" onclick="Reset()">Reset</button>`;

}

function AddPick(){
    if (limit>=2) {
        PickChamp();
    }else{
        PickChamp();
        addcard_container.innerHTML = "";
    }
    
}

function PickChamp(){
    let index = Math.floor(Math.random()*temp_arr.length);
        let champ = temp_arr[index];
        card_container.innerHTML += `<a target="_blank" href="https://u.gg/lol/champions/${champ}/build/${lastPickedRole}"><img src="assets/${champ}.JPG" alt="${champ}"/></a>`;
        temp_arr.splice(index,1);
        limit --;
}

function Reset(){
    button_container.innerHTML = `<button class="rolebutton" onclick="Randomize('_top')">Top</button>
        <button class="rolebutton" onclick="Randomize('_jungle')">Jungle</button>
        <button class="rolebutton" onclick="Randomize('_mid')">Mid</button>
        <button class="rolebutton" onclick="Randomize('_bot')">Bot</button>
        <button class="rolebutton" onclick="Randomize('_sup')">Support</button>`;
    
    card_container.innerHTML = "";
    addcard_container.innerHTML = "";
    reset_container.innerHTML = "";
    limit = 5;
}


window.Reset = Reset;
window.Randomize = Randomize;
window.AddPick = AddPick;
})
