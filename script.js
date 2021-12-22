const valueTextInput = document.querySelector('.main-container__input-textarea');
const getInputDoneButton = document.querySelector('.main-container__input-button');
const getStaticSpaceBox = document.querySelector('.flex-space__box-static');
const getDinamicSpaceBox = document.querySelector('.flex-space__box-dinamic');



valueTextInput.oninput = function (){       
        getDinamicSpaceBox.style.cssText = `${valueTextInput.value}`;     
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
        let getInputDoneButton = document.querySelector('.main-container__input-button');
        
        let count = ''
        flexCheckPositionDinamicBlock[0].forEach(function(item) {     
        if(inputText.includes(item)){         
            count+='1'  
            if(count.length === flexCheckPositionDinamicBlock[0].length){
                getInputDoneButton.removeAttribute('disabled');                          
            }else{    
                getInputDoneButton.setAttribute('disabled','disabled');                
            }                     
        }else if(inputText.slice(-1)!=';'){       
            console.log(2);
            inputText+=';';  
            if(inputText.includes(item)){
                count+='1'            
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







const lvlList = [
  "box-static_flex-lvl-one-jc-center",
  "box-static_flex-lvl-two-jc-flex-end",
  "box-static_flex-lvl-three-jc-space-between",
  "box-static_flex-lvl-four-jc-space-around",
  "box-static_flex-lvl-five-ai-center",
  "box-static_flex-lvl-six-ai-flex-end-jc-center",
  "box-static_flex-lvl-seven-ai-center-jc-center",
  "box-static_flex-lvl-eight-fd-column-jc-flex-end",
  "box-static_flex-lvl-nine-fd-column-jc-flex-end-ai-flex-end",
  "box-static_flex-lvl-one-jc-center",
];

const flexCheckPositionDinamicBlock = [
  "justify-content:center;",
  "justify-content:flex-end;",
  "justify-content:space-between;",
  "justify-content:space-around;",
  "align-items:center;",
  ["align-items:flex-end;", "justify-content:center;"],
  ["align-items:center;","justify-content:center;"],
  ["flex-direction:column;","justify-content:flex-end;"],
  ["flex-direction:column;","justify-content:flex-end;","align-items:flex-end;"],
  "justify-content:center;",
  [],
];

// const flexPositionDinamicBlock = [
//     "justify-content:flex-start;",
//     "justify-content:center;",
//     "justify-content:flex-start;",
//     "justify-content:flex-start;",

// ]

const flexPositionDinamicBlock = [
    "jc-c",
    "jc-c",
    "jc-c",
    "jc-c",
    "jc-c",
    "jc-c",
    "jc-c",
    "jc-c",
    "jc-c",
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
function doneButtonNextLvl(){   
    
    flexCheckPositionDinamicBlock.shift()
    const numberLvl = ++countDoneButtonNextLvl;
    console.log(numberLvl);
    getStaticSpaceBox.classList.remove(lvlList[0]);
    lvlList.shift()
    getStaticSpaceBox.classList.add(lvlList[0]);
     
    
    valueTextInput.value = '';
    console.log(flexPositionDinamicBlock);
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


// function replaceObjectsClass(object,firstNameObjectClass, secondNameObjectClass){
//     object.classList.remove(firstNameObjectClass);
//     object.classList.add(secondNameObjectClass);
// }

