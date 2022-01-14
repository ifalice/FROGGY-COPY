// localStorage
const valueTextInput = document.querySelector('.main-container__input-textarea');
const getInputDoneButton = document.querySelector('.main-container__input-button');
const getStaticSpaceBox = document.querySelector('.flex-space__box-static');
const getDinamicSpaceBox = document.querySelector('.flex-space__box-dinamic');

let countLvl = localStorage.getItem("countLvl")


valueTextInput.oninput = function (){       
        if(typeof(lvlList[countLvl]) === 'object'){
            getDinamicSpaceBox.firstChild.nextSibling.style.cssText = `${valueTextInput.value}`;    
        }else{
            getDinamicSpaceBox.style.cssText = `${valueTextInput.value}`;  
        }
       
           
        let getValueInputText = valueTextInput.value;       
        if(typeof(flexCheckPositionDinamicBlock[countLvl])==='object'){
            checkPluralValueInputText(getValueInputText);
        }else{
            checkValueInputText(getValueInputText);  
        }
    }    
    
    
    function checkValueInputText(inputText){
       
      
            if(inputText.includes(flexCheckPositionDinamicBlock[countLvl])){      
                getInputDoneButton.removeAttribute('disabled');      
            }else if(inputText.slice(-1)!=';'){
                inputText+=";"
                if(inputText.includes(flexCheckPositionDinamicBlock[countLvl])){     
                    getInputDoneButton.removeAttribute('disabled');  
                }else{
                    getInputDoneButton.setAttribute('disabled','disabled');
                }
            }
            else{
                getInputDoneButton.setAttribute('disabled','disabled');
            }
        }                    
    

    function checkPluralValueInputText(inputText){           
        let count = [];
        flexCheckPositionDinamicBlock[countLvl].forEach(function(item) {     
        if(inputText.includes(item)){         
            count.push(true); 
            if(count.length === flexCheckPositionDinamicBlock[countLvl].length){
                getInputDoneButton.removeAttribute('disabled');                          
            }else{    
                getInputDoneButton.setAttribute('disabled','disabled');                
            }                     
        }else if(inputText.slice(-1)!=';'){       
            console.log(2);
            inputText+=';';  
            if(inputText.includes(item)){
                count.push(true); 
                console.log(count);            
                if(count.length === flexCheckPositionDinamicBlock[countLvl].length){
                    getInputDoneButton.removeAttribute('disabled');    
                }else{
                    getInputDoneButton.setAttribute('disabled','disabled');                        
                }  
            }
        }else{
            console.log(3);
            getInputDoneButton.setAttribute('disabled','disabled');    
        }
    });
    }




const lvl = [
  [
    "FLEX-BOX",
    "CSS Flexbox - це технологія для створення складних макетів за рахунок правильного розміщення елементів на сторінці. До прикладу justify-content відповідає за вирівнювання flex-об'єкту по вісі-Х. Зкопіюйте та вставте - justify-content:flex-end;",
  ],
  [
    "JUSTIFY-CONTENT",
    "justify-content - вирівнює елементи по горизонталі та набуває таких значень: ",
    [
      "ul",
      "flex-start: Елементи вирівнюються по лівій стороні контейнера",
      "flex-end: Елементи вирівнюються по правій стороні контейнера.",
      "center: Елементи вирівнюються по центру контейнера",
      "space-between: Елементи буде зображено з рівними відступами поміж них",
      "space-around: Елементи буде зображено з рівними відступами навколо них.",
    ],
  ],
  [
    "JUSTIFY-CONTENT",
    "Перемісти квадрат на задане для нього місце",
    [
        "ul",
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
      ],

  ],
  [
    "JUSTIFY-CONTENT",
    "Перемісти квадрат на задане для нього місце",
    [
        "ul",
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
      ],

  ],
  [
    "ALIGN-ITEMS",
    "align-items - працює з віссю перпендикулярній віссі Х. Перемішає та змінює елементи по вертикалі.",
    [   
        "ul",
        "flex-start: елементи вирівнюються за верхнім краєм контейнеру.",
        "flex-end: елементи вирівнюються за нижнім краєм контейнеру.",
        "center: елементи вирівнюються вертикально по середині контейнера.",
        "baseline: елементи буде розміщено на базовій лінії контейнера.",
        "stretch: елементи розтягуються заповнюючи контейнер."
    ]
  ],
  [
    "ALIGN-ITEMS",
    "Перемісти квадрат на задане для нього місце",
    [   
        "ul",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch"
    ]
  ],
  [
    "ALIGN-ITEMS",
    "Перемісти квадрат на задане для нього місце",
    [   
        "ul",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch"
    ]
  ],
  [
      "FLEX-DIRECTION",
      "flex-direction - дозволяє повернути головну вісь та набуває таких значень:",
      [ "ul",
        "row: елементи розташовані так само, як напрямок тексту.",
        "row-reverse: елементи розташовані протилежно напрямку тексту.",
        "column: елементи розташовані з гори до низу.",
        "column-reverse: елементи розташовані з низу до гори."   
      ]
  ],
  [
    "FLEX-DIRECTION",
    "Перемісти квадрат на задане для нього місце",
    [ "ul",
      "row",
      "row-reverse",
      "column",
      "column-reverse"   
    ]
],
[
    "FLEX-DIRECTION",
    "Перемісти квадрат на задане для нього місце",
    [ "ul",
      "row",
      "row-reverse",
      "column",
      "column-reverse"   
    ]
],
  [
      "ALIGN-SELF",
      "align-self це властивість, яку можна застосувати до окремого елементу. Значеня align-self такі ж як в align-items, а саме:",
      [   
        "ul",
        "flex-start: елементи вирівнюються за верхнім краєм контейнеру.",
        "flex-end: елементи вирівнюються за нижнім краєм контейнеру.",
        "center: елементи вирівнюються вертикально по середині контейнера.",
        "baseline: елементи буде розміщено на базовій лінії контейнера.",
        "stretch: елементи розтягуються заповнюючи контейнер."
    ]
  ],
  [
    "ALIGN-SELF",
    "Перемісти квадрат на задане для нього місце",
    [
        "ul",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch"
        
    ]
  ],
  [
      "FLEX-WRAP",
      "flex-wrap дозволяє перенесити елементи на наступний ряд в тому випадку, якщо вони не поміщаються в одному ряді. Набуває таких значень:",
      [ 
        "ul",
        "nowrap: Кожен елемент буде розташований один за одним в одному рядку. Ширина елементів встановлюється автоматично, щоб вміститись в рядок.",
        "wrap: Елементи переносятся до наступного рядка.",
        "wrap-reverse: Елементи переносятся до наступного рядка у зворотньому порядку.",
      ]
  ],
  [
    "FLEX-WRAP",
    "flex-wrap дозволяє перенесити елементи на наступний ряд в тому випадку, якщо вони не поміщаються в одному ряді. Набуває таких значень:",
    [ 
      "ul",
      "nowrap",
      "wrap",
      "wrap-reverse",
    ]
],
  [
      "FLEX-FLOW",
      'flex-flow це скорочена властивість, яка об\'єднує flex-wrap та flex-direction. Наприклад flex-flow: row-reverse wrap',
      
  ],
  [],
  [],
  [],
  [],
  [],
  [],

];
    


const lvlList = [
  "box-static_flex-lvl-one-jc-flex-end",
  "box-static_flex-lvl-two-jc-center",
  "box-static_flex-lvl-three-jc-space-between",
  "box-static_flex-lvl-four-jc-space-around",
  "box-static_flex-lvl-five-ai-center",
  "box-static_flex-lvl-six-ai-flex-end-jc-center",
  "box-static_flex-lvl-seven-ai-center-jc-center",
  "box-static_flex-lvl-eight-fd-column-jc-flex-end",
  "box-static_flex-lvl-nine-fd-column-jc-flex-end-ai-flex-end",
  "box-static_flex-lvl-ten-fd-row-jc-flex-start-ai-flex-start",
  ["box-static_flex-lvl-eleven-jc-center-ai-center","box-static_flex-lvl-eleven-as-center"],
  ["box-static_flex-lvl-twelve-jc-center","box-static_flex-lvl-twelve-as-flex-end"],
  "box-static_flex-lvl-thirteen-fw-wrap",
  "box-static_flex-lvl-fourteen-fw-wrap-fd-column-ai-center",
  "box-static_flex-lvl-fifteen-ff-column-wrap-ai-center",
];

const flexCheckPositionDinamicBlock = [
  "justify-content:flex-end;",
  "justify-content:center;",
  "justify-content:space-between;",
  "justify-content:space-around;",
  "align-items:center;",
  ["align-items:flex-end;", "justify-content:center;"],
  ["align-items:center;","justify-content:center;"],
  ["flex-direction:column;","justify-content:flex-end;"],
  ["flex-direction:column;","justify-content:flex-end;","align-items:flex-end;"],
  ["flex-direction:row;","justify-content:flex-start;","align-items:flex-start;"],
  "align-self:center;",
  "align-self:flex-end;",
  "flex-wrap:wrap;",
  ["flex-wrap:wrap;","flex-direction:column;","align-items:center;"],
  ["flex-flow:wrap column;","align-items:center;"]
];

// const flexPositionDinamicBlock = [
//     "justify-content:flex-start;",
//     "justify-content:center;",
//     "justify-content:flex-start;",
//     "justify-content:flex-start;",

// ]

const flexPositionDinamicBlock = [
    "jc-fs",
    "jc-fs",
    "jc-fs",
    "jc-fs",
    "jc-fs",
    "jc-fs",
    "jc-fs",
    "jc-fs",
    "jc-fs",
    ["fd-c","ai-c","jc-fe"],
    "jc-c",
    "jc-c",
    "jc-fs",
    "ai-fs",
    "ai-fs"

]


// let countDoneButtonNextLvl = 1;
// function doneButtonNextLvl(){ 
//     flexCheckPositionDinamicBlock.shift()
//     const count_2 = ++countDoneButtonNextLvl;
//     console.log(count_2);
//     getClassName = document.querySelector('.flex-space__box-static');
//     replaceObjectsClass(getClassName,lvlList[0],lvlList[1]) 
//     lvlList.shift()
//     document.querySelector('.main-container__input-text').value = '';
//     document.querySelector('.flex-space__box-dinamic').style.cssText = `justify-content:flex-start;`;
//     if(count_2 === 3){
//         creatNewBlocks(2);    
//     }
//     document.querySelector('.main-container__input-button').setAttribute('disabled','disabled');

// }


getStaticSpaceBox.classList.add(lvlList[countLvl]);
document.querySelector('.main-containter__title-lvl').textContent =  `${lvl[countLvl][0]}`
document.querySelector('.main-container__explanation-lvl').textContent =  `${lvl[countLvl][1]}`





function doneButtonNextLvl(){
    countLvl++;
    localStorage.setItem("countLvl", countLvl);
    localCountLvl = localStorage.getItem("countLvl");
  
    document.querySelector('.main-container__explanation-lvl').textContent =  `${lvl[countLvl][1]}` 
    document.querySelector('.main-containter__title-lvl').textContent =  `${lvl[countLvl][0]}`  
    if(lvl[countLvl][2]){
        if(lvl[countLvl][2].includes('ul')){
            createUlElement(lvl[countLvl][2]);
            console.log('true');
        }  
    }   
    


    const numberLvl = ++countDoneButtonNextLvl;


    if(typeof(lvlList[countLvl-1])==='object'){
        getStaticSpaceBox.classList.remove(lvlList[countLvl-1][0]);
        getStaticSpaceBox.firstChild.nextSibling.classList.remove(lvlList[countLvl-1][1]);  
        console.log('this1');
    }else{
        console.log('this');
        getStaticSpaceBox.classList.remove(lvlList[countLvl-1]);
    }
    
 
    

    if(typeof(lvlList[countLvl])==='object'){          
        getStaticSpaceBox.classList.add(lvlList[countLvl][0]);
        getStaticSpaceBox.firstChild.nextSibling.classList.add(lvlList[countLvl][1]); 
        console.log('obj'); 
      
    }else{
        getStaticSpaceBox.classList.add(lvlList[countLvl]);
        console.log('oneitem');
    }
   

    valueTextInput.value = '';
    if(typeof(flexPositionDinamicBlock[countLvl-1])==='object'){
        getDinamicSpaceBox.classList.remove(...flexPositionDinamicBlock[countLvl-1]);    
    }else{
        getDinamicSpaceBox.classList.remove(flexPositionDinamicBlock[countLvl-1]);
    }

    
    if(typeof(flexPositionDinamicBlock[countLvl])==='object'){
        getDinamicSpaceBox.classList.add(...flexPositionDinamicBlock[countLvl]);  
    }else{
        getDinamicSpaceBox.classList.add(flexPositionDinamicBlock[countLvl]);  

        
    }
    
    getDinamicSpaceBox.style.cssText = '';
    
    


    if(numberLvl === 3){
        creatNewBlocks(2);    
    }else if(numberLvl === 13){
        creatNewBlocks(5)
    }

    getInputDoneButton.setAttribute('disabled','disabled');
    if(numberLvl === 16){
        document.querySelector('.main-container').style.cssText = 'display:none;'
        document.querySelector('.congratulations-block__style').removeAttribute('style')
    }

    
    console.log(countLvl);
    console.log(flexCheckPositionDinamicBlock[countLvl]);
    console.log(flexPositionDinamicBlock[countLvl]);
    console.log(lvlList[countLvl][0], lvlList[countLvl][1]);

}

function creatNewBlocksSandboxMode(numberOfElemenst){
    let newDinamicBlock = document.createElement('div');
        newDinamicBlock.classList.add('flex-space__item-dinamic');
        document.querySelector('.flex-space__box-dinamic').prepend(newDinamicBlock);
        newDinamicBlock.style.cssText = `
            width:${widthSize}%;
            height:${heightSize}%;
            margin:${marginSize}%;
            ` 
}

function DeleteBlocksSandboxMode(numberOfElemenst){
    for(step=0;step<numberOfElemenst;step++){
        document.querySelector('.flex-space__item-dinamic').remove()
    }  
}

function RemoveAllBlocksSandboxMode(){
    const numbetOfDinamicBlocks= document.getElementsByClassName('flex-space__item-dinamic').length;
    for(step = 1; step<numbetOfDinamicBlocks; step++){
        document.querySelector('.flex-space__item-dinamic').remove()
    }  
}



function creatNewBlocks(numberOfElemenst){  
  
    for(step=0;step<numberOfElemenst;step++){
        let newStaticBlock = document.createElement('div');
        newStaticBlock.classList.add('flex-space__item-static');
        document.querySelector('.flex-space__box-static').prepend(newStaticBlock); 
        
        let newDinamicBlock = document.createElement('div');
        newDinamicBlock.classList.add('flex-space__item-dinamic');
        document.querySelector('.flex-space__box-dinamic').prepend(newDinamicBlock);     
    }  
         
}

document.querySelector('.button-change-size-minus').addEventListener('click', changeSizeDinamicItem);
document.querySelector('.button-change-size-plus').addEventListener('click', changeSizeDinamicItem);





let test = document.getElementsByClassName('flex-space__item-dinamic');



let countSize = 0;
let widthSize = 15;
let heightSize = 15;
let marginSize = 5;

function changeSizeDinamicItem(event){
    console.log(countSize);

    if(event.currentTarget.getAttribute('id')==="buttonSizeMinus"){
        document.querySelector('.button-change-size-plus').removeAttribute("disabled");  
        countSize--;
        if(countSize===-4){
            document.querySelector('.button-change-size-minus').setAttribute("disabled", "disabled");            
        }else{
            let itemDinamic = document.getElementsByClassName('flex-space__item-dinamic');
            widthSize-=2;
            heightSize-=2;
            marginSize--;

            for(elem of itemDinamic){
               
                // console.log(elem);
                elem.style.cssText = `
                width:${widthSize}%;
                height:${heightSize}%;
                margin:${marginSize}%;
                `
                

        }
    
        }
    }else if(event.currentTarget.getAttribute('id')==="buttonSizePlus"){
        countSize++;
        document.querySelector('.button-change-size-minus').removeAttribute("disabled");  
        
        if(countSize===4){
            document.querySelector('.button-change-size-plus').setAttribute("disabled", "disabled");  
        }else{
    
          
            let itemDinamic = document.getElementsByClassName('flex-space__item-dinamic');
            widthSize+=2;
            heightSize+=2;
            marginSize++;

            for(elem of itemDinamic){     
                elem.style.cssText = `
                width:${widthSize}%;
                height:${heightSize}%;
                margin:${marginSize}%;
                `
            
        

        } 

        }
        
   }
}


// function changeSizeDinamicItem(event){
//     if(event.currentTarget.getAttribute('id')==="buttonSizeMinus"){
//         countSize--;
//         document.querySelector('.flex-space__item-dinamic').style.cssText = `
//         width:${widthSize};
//         height:${heightSize};
//         margin:${marginSize};
//         `


//     }else if(event.currentTarget.getAttribute('id')==="buttonSizePlus"){

//     } 
//    }



// function deleteBlocks(numberOfElements, classNameElements){
//     const boxStatic = document.querySelectorAll(classNameElements); 
//     for(item of boxStatic){
//         if(numberOfElements !=0){
//             numberOfElements--
//             item.remove();
//         }else if(numberOfElements ===0){
//             break;
//         }        
//     }
// }

function createUlElement(listUlBlock){
    let ulBlock = document.createElement('ul');
    document.querySelector('.main-container__explanation-lvl').append(ulBlock); 
    for(step = 1; step<lvl[countLvl][2].length; step++){
        let liBlock = document.createElement('li');
        liBlock.textContent = `${listUlBlock[step]}`
        if(listUlBlock[step].length > 30){
            ulBlock.classList.add('position-text__start')
        }else{
            ulBlock.classList.add('position-text__center')
        }
        
        ulBlock.append(liBlock);         
    }
}






const navbarItemLvlMode = document.querySelector('.navbar__item-lvl-mode');
const navbarItemSandboxMode = document.querySelector('.navbar__item-sandbox-mode');
const getExplanationLvl = document.querySelector('.main-container__explanation-lvl');
const getButtonMenu = document.querySelector('.main-container__button-menu');
const ButtonCreatBlock = document.querySelector('#ButtonCreatBlock')
const ButtonDeleteBlock = document.querySelector('#ButtonDeleteBlock')
const ButtonRemoveAllBlock = document.querySelector('#ButtonRemoveAllBlock');
const getFlexSpaceBoxStatic = document.querySelector('.flex-space__box-static');

ButtonCreatBlock.addEventListener("click", creatNewBlocksSandboxMode.bind(1,1))
ButtonDeleteBlock.addEventListener("click",DeleteBlocksSandboxMode.bind(1,1))
ButtonRemoveAllBlock.addEventListener("click",RemoveAllBlocksSandboxMode)


navbarItemLvlMode.classList.add('navbar__item-select');
function listener(event){
    if(event.currentTarget.getAttribute('id') === "button__lvl-mode"){
        
        navbarItemSandboxMode.addEventListener("click", listener)
        navbarItemSandboxMode.classList.remove('navbar__item-select');
        navbarItemLvlMode.classList.add('navbar__item-select');

        getExplanationLvl.removeAttribute('style');
        getInputDoneButton.removeAttribute('style');
        getButtonMenu.style.cssText = "display:none;";
        getFlexSpaceBoxStatic.removeAttribute('style');

        console.log(1);
        navbarItemLvlMode.removeEventListener("click", listener)

        
    }else if(event.currentTarget.getAttribute('id') === "button__sandbox-mode"){
        navbarItemLvlMode.addEventListener("click", listener)
        navbarItemLvlMode.classList.remove('navbar__item-select');
        navbarItemSandboxMode.classList.add('navbar__item-select');

        getExplanationLvl.style.cssText = "display:none;";
        getInputDoneButton.style.cssText = "display:none;";
        getButtonMenu.style.cssText = "display:flex;";
        getFlexSpaceBoxStatic.style.cssText = "display:none";
        
        console.log(2);
        navbarItemSandboxMode.removeEventListener("click", listener)

    }
    


}
navbarItemLvlMode.addEventListener("click", listener)
navbarItemSandboxMode.addEventListener("click", listener)


// function replaceObjectsClass(object,firstNameObjectClass, secondNameObjectClass){
//     object.classList.remove(firstNameObjectClass);
//     object.classList.add(secondNameObjectClass);
// }

