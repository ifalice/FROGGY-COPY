const valueTextInput = document.querySelector('.main-container__input-textarea');
const getInputDoneButton = document.querySelector('.main-container__input-button');
const getStaticSpaceBox = document.querySelector('.flex-space__box-static');
const getDinamicSpaceBox = document.querySelector('.flex-space__box-dinamic');



valueTextInput.oninput = function (){       
        if(typeof(lvlList[0]) === 'object'){
            getDinamicSpaceBox.firstChild.nextSibling.style.cssText = `${valueTextInput.value}`;    
        }else{
            getDinamicSpaceBox.style.cssText = `${valueTextInput.value}`;  
        }
       
           
        let getValueInputText = valueTextInput.value;       
        if(typeof(flexCheckPositionDinamicBlock[0])==='object'){
            checkPluralValueInputText(getValueInputText);
        }else{
            checkValueInputText(getValueInputText);  
        }
    }    
    
    
    function checkValueInputText(inputText){
       
      
            if(inputText.includes(flexCheckPositionDinamicBlock[0])){      
                getInputDoneButton.removeAttribute('disabled');      
            }else if(inputText.slice(-1)!=';'){
                inputText+=";"
                if(inputText.includes(flexCheckPositionDinamicBlock[0])){     
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
        flexCheckPositionDinamicBlock[0].forEach(function(item) {     
        if(inputText.includes(item)){         
            count.push(true); 
            if(count.length === flexCheckPositionDinamicBlock[0].length){
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
                if(count.length === flexCheckPositionDinamicBlock[0].length){
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
    "justify-content - вирівнює елементи по горизонталі та набуває таких значень:",
    [
      "ul",
      "flex-start: Елементи вирівнюються по лівій стороні контейнера",
      "flex-end: Елементи вирівнюються по правій стороні контейнера.",
      "center: Елементи вирівнюються по центру контейнера",
      "space-between: Елементи вирівнюються по центру контейнера",
      "space-around: Елементи буде зображено з рівними відступами навколо них.",
    ],
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
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
  ["box-static_flex-lvl-eleven-js-center-ai-center","box-static_flex-lvl-eleven-as-center"],
 
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
  "align-self:center",
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
    "jc-c",
    "jc-c",
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


let countDoneButtonNextLvl = 1;

if(countDoneButtonNextLvl === 1){
    getStaticSpaceBox.classList.add(lvlList[0]);
    document.querySelector('.main-containter__title-lvl').textContent =  `${lvl[0][0]}`
    document.querySelector('.main-container__explanation-lvl').textContent =  `${lvl[0][1]}`
}




function doneButtonNextLvl(){
    lvl.shift()
    document.querySelector('.main-container__explanation-lvl').textContent =  `${lvl[0][1]}` 
    document.querySelector('.main-containter__title-lvl').textContent =  `${lvl[0][0]}`  
    if(lvl[0][2]){
        if(lvl[0][2].includes('ul')){
            createUlElement(lvl[0][2]);
            console.log('true');
        }  
    }   
    
    console.log(lvl[0][1]);
    flexCheckPositionDinamicBlock.shift()
    const numberLvl = ++countDoneButtonNextLvl;
    console.log(numberLvl);
    getStaticSpaceBox.classList.remove(lvlList[0]);
    lvlList.shift()
    

    if(typeof(lvlList[0])==='object'){          
        getStaticSpaceBox.classList.add(lvlList[0][0]);
        getStaticSpaceBox.firstChild.nextSibling.classList.add(lvlList[0][1]);  
        console.log(getStaticSpaceBox.firstChild);   
    }else{
        getStaticSpaceBox.classList.add(lvlList[0]);
    }

    valueTextInput.value = '';
    console.log(flexPositionDinamicBlock);
    getDinamicSpaceBox.classList.remove(flexPositionDinamicBlock[0]);
    flexPositionDinamicBlock.shift();
    // getDinamicSpaceBox.style.cssText = `${flexPositionDinamicBlock[0]}`
    getDinamicSpaceBox.style.cssText = '';
    getDinamicSpaceBox.classList.add(flexPositionDinamicBlock[0]);
    
    console.log(flexPositionDinamicBlock);

    if(numberLvl === 3){
        creatNewBlocks(2);    
    }
    getInputDoneButton.setAttribute('disabled','disabled');
    if(numberLvl === 11){
        document.querySelector('.main-container').style.cssText = 'display:none;'
        document.querySelector('.congratulations-block__style').removeAttribute('style')
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



function deleteBlocks(numberOfElements, classNameElements){
    const boxStatic = document.querySelectorAll(classNameElements); 
    for(item of boxStatic){
        if(numberOfElements !=0){
            numberOfElements--
            item.remove();
        }else if(numberOfElements ===0){
            break;
        }        
    }
}

function createUlElement(listUlBlock){
    let ulBlock = document.createElement('ul');
    document.querySelector('.main-container__explanation-lvl').append(ulBlock); 
    for(step = 1; step<lvl[0][2].length; step++){
        let liBlock = document.createElement('li');
        liBlock.textContent = `${listUlBlock[step]}`
        liBlock.classList.add('position-text')
        ulBlock.append(liBlock);         
    }
}



// function replaceObjectsClass(object,firstNameObjectClass, secondNameObjectClass){
//     object.classList.remove(firstNameObjectClass);
//     object.classList.add(secondNameObjectClass);
// }

