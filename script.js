window.onload = function (){


// classes, races, alignment arrays
var ddClasses = ["Cleric","Fighter","Rogue","Wizard","Barbarian","Bard","Druid","Monk","Paladin","Ranger","Sorcerer","Warlock","Necromancer","Assassin","Shaman","Scout","Berserker","Knight","Crusader","Beast Master","Hunter","Thief","Swashbuckler", "Conjurer","Enchanter","Evoker","Illusionist","Transmuter","Zealot","Arcane archer","Mystic","Psychic"];

var ddRaces = ["Human","Orc","Half-elf","Half-orc","Dwarf","Halfling","Gnome","Elf","Lizard-folk","Hobgoblin","Kobold","Dragonborn","Goblin"];

var ddAlign = ["Chaotic evil","Chaotic good","Chaotic neutral","True evil","True good","True neutral","Lawful evil","Lawful good","Lawful neutral"];

// first part of name, works for both genders- array
var nameA = [
"Ar","Ag","As","At","Al","A","Ae","An","Ai","Ali","Ale","Ab",
"Ber","Bel","Bur","Bil","Bos","Bi","Bor",
"Ce","Cer","Celem","Cel","Cil","Celim","Cal",
"Dem","Dul","De","Don","Dor","Dol",
"E","Eli","Elem","Elim","Eti","Er","Ern","Eu","El","Es","Eb",
"Fin","Fi","Fili","Fae","Ful","For",
"Gul","Grum","Gol","Gulf","Ger","Gar","Grom","Gru","Gra",
"Hel","Her","Har","Heli","Ho","He","Hur","Hum","Hen",
"Isil","Is","Il","Im","I","Ix","Io","Ien","Iru","Iri","Ili","Ilim","Ilum",
"Jur","Jon","Jo","Jarl","Jar","Jol",
"Kor","Kil","Kam","Kal","Kas","Kun",
"Lem","Lai","Le","Lor",
"Mor","Me","Ma","Mas","Man","Mo","Mun","Mul","Mer","Me","Mi",
"Nol","Nel","Nei","Nur","Nor","Nal","Nos",
"O","Or","Ol","Ole","Ore","Ori","Oru","Os","Osi",
"Per","Perse","Pan","Pul","Pum","Pale",
"Qan","Qul","Quin","Qin",
"Re","Rum","Ras","Ro","Rus","Rei","Rai",
"Si","Sel","Sor","Sar","Sep","San","Sur","Sil","Set","Se","Sul","Sol","Sam",
"Tel","Tul","Tor","Tir","Tyr","Ti","Tu","Tar","Ten",
"U","Ul","Urum","Un","Us","Ub","Uni",
"Vil","Ve","Vae","Vi","Van","Vor","Var","Vel","Vun","Von",
"Wel","Wul","Wulf","Wol","Wen","Wi","Wor",
"Xi","Xai","Xel","Xer",
"Y","Yon","Yul","Yen",
"Zul","Ze","Zer","Zel"
];

// second part of name, works for both genders- array
var nameB = [
"a","an","al","at","as",
"bur","bor","bon","bom","be",
"cem","cet","ce",
"dor","dur","dem","dog","du","dum","din","dun",
"e","el","em","ex","ele","ed",
"fin","ful","fem","fal","fan",
"gor","grum","ger","gar",
"hele","hel","he","hu","hul","hot",
"i","ilin","isil","is","in",
"jol","jom","jan","jal",
"kor","kud","ka",
"len","les","leb","lo","lum","land",
"mor","mur","mot","mon","m","mal",
"ner","nel","neh","no","nul","nem",
"o","op","ol","or","ost","ola",
"pot","por","pan","p",
"q","qen","qan",
"ram","ren","rel","ro","ru",
"sin","sul","sun","sol","sem",
"tol","tud","tor","tek","tes",
"u","ulm","ul","us",
"vil","ve","vi","vet","vor","van","vele",
"wul","wol","wal","wor","we","wil",
"xan","xen","xil","xul",
"yil","yar","yem","yol",
"zol","zul","zur","zem",
"´","´","´","´","´","´","´","´","´","´","-","-","-","-","-","-","-","-","-","-"
];

// third part of male name- array 
var nameCm = [
"al","as","ast","alm","at","aius","ais","aer","arg",
"bul","bor","borf","ber","bel","bin","bald","bold",
"cil","cer",
"dur","dor","der","durf","dum","del","dar",
"el","en","eh","es","est","edas","edis",
"fin","fol","fil","fur","fis",
"gor","gurm","gol","gul","gen",
"hur","hul","hel",
"i","is","il","ion","is","in","id","ieb","iel","ien","iek","ies","irg",
"jul","jun",
"kiel","kael","kal","kul","kor",
"lan","lur","leh","lis","leas","luas","lun",
"mor","mer","mur","mun","mund","mear",
"nun","nian","nias","nur",
"o","or","os","om","orm","orn","on","orf","ot","ok","oin","oc","org",
"pur","pas","pis",
"q","qin","qan","qen","qil",
"ras","ren","rin","rold","rai","ros",
"sei","sai","sorn","sar","sul","sol","sil",
"tai","tel","tor","tur","tas","tulm","tear",
"u","ulm","ulf","ur","ul","uras","um","urf","ut","us","uk","un","urg",
"vil","var","vul","vos","vin","ven",
"wur","wurm","wor","wel","wis","wun","win",
"xor","xer","xul",
"yel","yur","yas","y",
"zul","zur","zar"
];

// third part of female name- array 
var nameCf = [
"a","aia","asa","ana","ala","ara","ae","aria","arya",
"bea","bia","ba",
"cia",
"dia","dea","dora",
"ele","ela","elia","esa","ena","eya","eyn","eth","ene","enia","era",
"fia","fula","fa","fae","fei",
"gia","gula","gora",
"hia","huria","ha","hea","hya","hi",
"ia","isa","ina","i","ila","ira","iya","inia","ine","ile","ith","ica","ie",
"ja",
"kia","ka","kya",
"lia","lea","lira","lisa","lua","lora","luna","lya","li","lei","lai",
"mia","ma","mila","misa","mya","me",
"nia","nea","na","nura","nora","nya","ne",
"oa","osa","otra","ota","oma",
"pia","pila","pya",
"qia",
"ria","rua","rila","rula","rea","roa","rya",
"sia","sea","sa","sila","sya","sina",
"tina","tya","tula","tia","tea",
"ula","uma","una","usa","ue","uth",
"via","vya","vila","vira","vera","vie","ve",
"wia","wera","wea",
"xia","xira",
"ya","yth","yta","yl",
"zia","zila"
];   

// title next to male name- array
var nameTm = [
/*A*/"Average","Attention-wench","Ale´s nightmare",
/*B*/"Bug-eyed","Bastard","Bird-legged","Boneless","Bear","Beaver","Bone collector",
/*C*/"Chicken","Chicken´s flight","Children´s nightmare","Child-slayer",
/*D*/"Dragonbane","Demon-hunter","Death-breath","Dull","Dungbeetle","Demon´s bane","Devil´s servant","Dead","Devious","Disgusting","Dreamy","Dreaded","Dragon´s cleaver","Defender of evil","Defeated",
/*E*/"Evoker of nightmares","Evil",
/*F*/"Furious","Fourlegged","Firebreather","Faithless",
/*G*/"Green-thumbed","Godlike","Goat-eye","Glorious","Gifted","Giving","Gruesome",
/*H*/"Headless","Hungry","Horrendeous","Horrible","Honorable","Hand collector","Head collector","Humongous","Hysterical",
/*I*/"Ironheaded","Itchy","Iron mouth","Irresistable","Incredible","Irrelevant","Injured",
/*J*/"Joker","Jester",
/*K*/"Killable","Kissless","Kind","Killer´s judgement","King of nothing",
/*L*/"Lonely","Lovely","Loveable",
/*M*/"Merciless","Moist","Monstrous","Mouth",
/*N*/"Nasty","Nervous","Northerner","Naked",
/*O*/"One-eyed","One-legged",
/*P*/"Purple-eyed","Philosopher","Poisoned","Protector of privileged","Protector of weak","Prince of thieves",
/*Q*/
/*R*/"Rose petal","Restless","Ruthless","Red-headed",
/*S*/"Seducer","Slow","Sweet","Slimy","Sorrow bringer","Sharp","Shield-bearer","Sneaky-sneaky","Serpent","Sneaky","Squishy","Slightly evil","Soulless","Southerner","Silly","Skewered","Sinner","Serious","Succulent","Seduced",
/*T*/"Tender","Tedious","Three-eyed","Twice-boiled","Tiny","Tiny sword","Twice-poisoned","Three-legged",
/*U*/"Unwanted","Unfortunate","Unseemly",
/*V*/"Void traveler","Vicious","Virgin","Virgin´s nightmare","Virginslayer","Velvet","Victorious","Vile",
/*W*/"Wrath of a mountain","Widowmaker",
/*X*/
/*Y*/"Yeller",
/*Z*/"Zealous"
];

// title next to female name- array
var nameTf = [
/*A*/"Average","Avenged",
/*B*/"Bossomed","Bane of thousand meals","Boneless","Bloodless","Bloody","Beautiful","Bear mother","Boring","Breath of Death","Beautiful-inside","Boiled",
/*C*/"Clueless","Cunning","Cute","Crazy","Cat",
/*D*/"Dawn of the desert","Demon huntress","Devil´s mistress","Dead","Dessperate","Deceiving",
/*E*/"Erratic","Enchanting","Eyeless","Elf-slayer",
/*F*/"Frog-eyes","Foam of the river","Fat","Furious","Fulfiller of dreams",
/*G*/"Gentle","Gruesome","Gigantic","Giantess","Glorious",
/*H*/"Humorous","Hasty","Hyena","Horrendeous","Heavy","Hot","Heavy-bossomed",
/*I*/"Irritable","Ill","Idle",
/*J*/"Javelin of the jungle","Just",
/*K*/"Kiss of the dragon","Kiss of the sea","Kind",
/*L*/"Lovely","Listener","Limber","Lord´s bane",
/*M*/"Mad","Merciless","Mindless","Miniature","Master of nothing",
/*N*/"Nagging","Nose","Never-silent","Night Queen","Never-quiet","Nefarious","Never-born","Notorious",
/*O*/"Owl-eyed","Owl","Oily","Orc-maiden",
/*P*/"Princess of nothing",
/*Q*/"Queen of nothing","Queen of the forest","Queen of the average",
/*R*/"Restless","Risen","Red","Ruthless","Round",
/*S*/"Sad","Seductress","Sinful","Serious","Senile","Sparrow","Slow","Sorry","Secret-keeper","Sinless","Sinful",
/*T*/"Tedious","Twilight weaver","Twice-born","Tearful","Tale-teller","Thirsty",
/*U*/"Unfortunate","Unstable","Usurper","Unholly","Unbecoming","Useless",
/*V*/"Vile","Victorious","Vain","Viper",
/*W*/"Wenchiest","Wild","Wretched","Wonderous"
/*X*/
/*Y*/
/*Z*/
];
    

var classArray = [];
var racesArray = [];
var alignArray = [];

// creates array with four random classes from ddClasses and distributes them to four characters, hides the "classes" button
classes.onclick = function () {
    
    for(i=0;i<4;i++){
   classArray.push(ddClasses[Math.floor(Math.random()*ddClasses.length)]);
   }
   classArray.sort();

   $("#class0").html(classArray[0]);
   $("#class1").html(classArray[1]);
   $("#class2").html(classArray[2]);
   $("#class3").html(classArray[3]);
   $("#classes").toggle();
};

// each of these gives a random class to particular character
$("#classB0").click(function() {
  $("#class0").html(ddClasses[Math.floor(Math.random()*ddClasses.length)]);
});

$("#classB1").click(function() {
  $("#class1").html(ddClasses[Math.floor(Math.random()*ddClasses.length)]);
});

$("#classB2").click(function() {
  $("#class2").html(ddClasses[Math.floor(Math.random()*ddClasses.length)]);
});

$("#classB3").click(function() {
  $("#class3").html(ddClasses[Math.floor(Math.random()*ddClasses.length)]);
});

// works similar to classes.onclick
races.onclick = function () {
    for(i=0;i<4;i++){
   
   racesArray.push(ddRaces[Math.floor(Math.random()*ddRaces.length)]);
   }
   racesArray.sort();

   $("#race0").html(racesArray[0]);
   $("#race1").html(racesArray[1]);
   $("#race2").html(racesArray[2]);
   $("#race3").html(racesArray[3]);
   $("#races").toggle();
};

// each of these gives a radnom race to particular character
$("#raceB0").click(function() {
  $("#race0").html(ddRaces[Math.floor(Math.random()*ddRaces.length)]);
});

$("#raceB1").click(function() {
  $("#race1").html(ddRaces[Math.floor(Math.random()*ddRaces.length)]);
});

$("#raceB2").click(function() {
  $("#race2").html(ddRaces[Math.floor(Math.random()*ddRaces.length)]);
});

$("#raceB3").click(function() {
  $("#race3").html(ddRaces[Math.floor(Math.random()*ddRaces.length)]);
});

// works similar to classes.onclick
alignment.onclick = function () {
    
   for(i=0;i<4;i++){
   alignArray.push(ddAlign[Math.floor(Math.random()*ddAlign.length)]);
   }
   alignArray.sort();

   $("#align0").html(alignArray[0]);
   $("#align1").html(alignArray[1]);
   $("#align2").html(alignArray[2]);
   $("#align3").html(alignArray[3]);
   $("#alignment").toggle();
};

// each of these give a random alignment to particular character
$("#alignB0").click(function() {
  $("#align0").html(ddAlign[Math.floor(Math.random()*ddAlign.length)]);
});

$("#alignB1").click(function() {
  $("#align1").html(ddAlign[Math.floor(Math.random()*ddAlign.length)]);
});

$("#alignB2").click(function() {
  $("#align2").html(ddAlign[Math.floor(Math.random()*ddAlign.length)]);
});

$("#alignB3").click(function() {
  $("#align3").html(ddAlign[Math.floor(Math.random()*ddAlign.length)]);
});

/* combines into a name either randoms from "nameA","nameCm" and "nameTm" or randoms from "nameA","nameB","nameCm" and "nameTm", this way we get some shorter and simpler names and some longer ones. Changes this character´s gender into male.
*/
$("#name0M").click(function(){
var rnd = Math.floor(Math.random()*5);
if(rnd < 2){
$("#name0").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+ 
nameTm[Math.floor(Math.random()*nameTm.length)]);
}else{
$("#name0").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+
nameTm[Math.floor(Math.random()*nameTm.length)]);
   }
$("#gender0").html("male");
});

// female version of the above 
$("#name0F").click(function(){
var rnd = Math.floor(Math.random()*4);
if(rnd < 2){
$("#name0").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+ 
nameTf[Math.floor(Math.random()*nameTf.length)]);
}else{
$("#name0").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+
nameTf[Math.floor(Math.random()*nameTf.length)]);
   }
$("#gender0").html("female");
});



$("#name1M").click(function(){
var rnd = Math.floor(Math.random()*4);
if(rnd < 2){
$("#name1").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+ 
nameTm[Math.floor(Math.random()*nameTm.length)]);
}else{
$("#name1").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+
nameTm[Math.floor(Math.random()*nameTm.length)]);
   }
$("#gender1").html("male");
});

$("#name1F").click(function(){
var rnd = Math.floor(Math.random()*4);
if(rnd < 2){
$("#name1").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+ 
nameTf[Math.floor(Math.random()*nameTf.length)]);
}else{
$("#name1").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+
nameTf[Math.floor(Math.random()*nameTf.length)]);
   }
$("#gender1").html("female");
});



$("#name2M").click(function(){
var rnd = Math.floor(Math.random()*4);
if(rnd < 2){
$("#name2").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+ 
nameTm[Math.floor(Math.random()*nameTm.length)]);
}else{
$("#name2").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+
nameTm[Math.floor(Math.random()*nameTm.length)]);
   }
$("#gender2").html("male");
});

$("#name2F").click(function(){
var rnd = Math.floor(Math.random()*4);
if(rnd < 2){
$("#name2").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+ 
nameTf[Math.floor(Math.random()*nameTf.length)]);
}else{
$("#name2").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+
nameTf[Math.floor(Math.random()*nameTf.length)]);
   }
$("#gender2").html("female");
});



$("#name3M").click(function(){
var rnd = Math.floor(Math.random()*4);
if(rnd < 2){
$("#name3").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+ 
nameTm[Math.floor(Math.random()*nameTm.length)]);
}else{
$("#name3").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+
nameTm[Math.floor(Math.random()*nameTm.length)]);
   }
$("#gender3").html("male");
});

$("#name3F").click(function(){
var rnd = Math.floor(Math.random()*4);
if(rnd < 2){
$("#name3").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+ 
nameTf[Math.floor(Math.random()*nameTf.length)]);
}else{
$("#name3").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+
nameTf[Math.floor(Math.random()*nameTf.length)]);
   }
$("#gender3").html("female");
});

/* creates four random names for two female and two male characters and changes those characters´ genders to correct ones, hides the "names" button
*/
$("#names").click(function () {

    var rnd0 = Math.floor(Math.random()*4);
    var rnd1 = Math.floor(Math.random()*4);
    var rnd2 = Math.floor(Math.random()*4);
    var rnd3 = Math.floor(Math.random()*4);
    
    if(rnd0 < 2){
$("#name0").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+ 
nameTm[Math.floor(Math.random()*nameTm.length)]);
}else{
$("#name0").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+
nameTm[Math.floor(Math.random()*nameTm.length)]);
   };   
   
if(rnd1 < 2){
$("#name1").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+ 
nameTf[Math.floor(Math.random()*nameTf.length)]);
}else{
$("#name1").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+
nameTf[Math.floor(Math.random()*nameTf.length)]);
   };      
   
   if(rnd2 < 2){
$("#name2").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+ 
nameTm[Math.floor(Math.random()*nameTm.length)]);
}else{
$("#name2").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCm[Math.floor(Math.random()*nameCm.length)]+
" the "+
nameTm[Math.floor(Math.random()*nameTm.length)]);
   };  
    
if(rnd3 < 2){
$("#name3").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+ 
nameTf[Math.floor(Math.random()*nameTf.length)]);
}else{
$("#name3").html(
nameA[Math.floor(Math.random()*nameA.length)]+
nameB[Math.floor(Math.random()*nameB.length)]+
nameCf[Math.floor(Math.random()*nameCf.length)]+
" the "+
nameTf[Math.floor(Math.random()*nameTf.length)]);
   };       
    
$("#gender0").html("male");
$("#gender1").html("female");
$("#gender2").html("male");
$("#gender3").html("female");

$("#names").toggle();
})

/* resets things to original state, checks if buttons are visible and makes them visible, erases the text in paragraphs, empties arrays
*/
$("#refresh").click(function(){

    var queryClasses = $("#classes");
    var isVisibleClasses = queryClasses.is(":visible");
    var queryRaces = $("#races");
    var isVisibleRaces = queryRaces.is(":visible");
    var queryAlign = $("#alignment");
    var isVisibleAlign = queryAlign.is(":visible");
    var queryNames = $("#names");
    var isVisibleNames = queryNames.is(":visible");
    
    if(isVisibleClasses === false){
        $("#classes").toggle()
    }
    if(isVisibleRaces === false){
        $("#races").toggle()
    }
    if(isVisibleAlign === false){
        $("#alignment").toggle()
    }
    if(isVisibleNames === false){
        $("#names").toggle()
    }
    
    $("p[id^='class']").html("_");
    $("p[id^='race']").html("_");
    $("p[id^='gender']").html("_");
    $("p[id^='name']").html("_");
    $("p[id^='align']").html("_");

    classArray = [];
    racesArray = [];
    alignArray = [];
})    

};