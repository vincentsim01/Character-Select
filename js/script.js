var container=document.getElementById("container");
var desc=document.getElementById("description");

var characters=[
    {
        name:"Shalini",
        id:"01",
        power:"Supreme Leader",
        description:"Shalini or also known as Supreme Leader Shalini is the rightful ruler of earth and its inhabitants. Shalini has the power to manifest destiny into reality",
        imgSrc:"https://www.igus.sg/contentData/Corporate_Files/address/img/SG/DEVADAS_Shalini_2017%20270270.jpg"
    },
    {
        name:"Brian",
        id:"02",
        power:"Marketing",
        description:"Brian Lau or Brian the breaker is the toughest man in igus. Despite his brute overwhelming strength, Deep down he has a gentle heart",
        imgSrc:"https://www.igus.sg/contentData/Corporate_Files/address/img/SG/LAU_Brian%202021%20270x270.png"
    }
];

console.log(characters[0].name);

//container.innerHTML=`<img src="${characters[0].imgSrc}">`;

characters.forEach(thecharacter => {
    let newCharacter = document.createElement('button')
    newCharacter.classList='character';
    newCharacter.id=thecharacter.id;
    newCharacter.rel=thecharacter.name;
    newCharacter.description=thecharacter.description;
    newCharacter.innerHTML=`<img class="character__img" src="${thecharacter.imgSrc}"/> <br>
                            <p class="character__name">${thecharacter.name}</p><br>
                            <p class="character__power">${thecharacter.power}</p>`;

    document.getElementById('character-list').appendChild(newCharacter);

    newCharacter.onclick=function(){
        if(document.querySelector('.character.active')){
            document.querySelector('.character.active').classList.remove('active');
        }
        newCharacter.classList.add('active');

        
        desc.innerHTML=`<p id="thedesc">${newCharacter.description}</p>`;

    }



})