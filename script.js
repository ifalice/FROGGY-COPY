const valueTextInput = document.querySelector('.main-container__input-text')

valueTextInput.oninput = function (){
    console.log(document.querySelector('.main-container__input-text').value);
  
    document.querySelector('.flex-space__box-dinamic').style.cssText = `${document.querySelector(".main-container__input-text").value}`
    
    const inputText = document.querySelector('.main-container__input-text');
    if(inputText.value.slice(-1) !=';'){
        if(inputText.value.split(' ').join('')+';'=== flexPositionDinamicBlock[0]){
            document.querySelector('.main-container__input-button').removeAttribute('disabled');   
            flexPositionDinamicBlock.shift();   
        }else if(inputText.value.slice(-1) ==';'){
            if(inputText.value.split(' ').join('')===flexPositionDinamicBlock[0]){
                document.querySelector('.main-container__input-button').removeAttribute('disabled');   
            }
        }
        else{
            document.querySelector('.main-container__input-button').setAttribute('disabled', 'disabled')
        }
    }
    
}


function lvlTwo(){
    getClassName = document.querySelector('.flex-space__box-static')
    replaceObjectsClass(getClassName,'box-static_flex-lvl-one-jc-center','box-static_flex-lvl-two-jc-flex-end')
    document.querySelector('.main-container__input-text').value = '';
    document.querySelector('.flex-space__box-dinamic').style.cssText = `justify-content:flex-start;`;
}


const lvlList = ['box-static_flex-lvl-one-jc-center','box-static_flex-lvl-two-jc-flex-end','box-static_flex-lvl-three-jc-space-between','box-static_flex-lvl-four-jc-space-around']
const flexPositionDinamicBlock = ['justify-content:center;','justify-content:flex-end;','justify-content:space-between;','justify-content:space-around;']


let countDoneButtonNextLvl = 1;
function doneButtonNextLvl(){ 
    const count_2 = ++countDoneButtonNextLvl;
    console.log(count_2);
    getClassName = document.querySelector('.flex-space__box-static');
    replaceObjectsClass(getClassName,lvlList[0],lvlList[1]) 
    lvlList.shift()
    document.querySelector('.main-container__input-text').value = '';
    document.querySelector('.flex-space__box-dinamic').style.cssText = `justify-content:flex-start;`;
    if(count_2 === 3){
        creatNewBlocks(2);    
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


function replaceObjectsClass(object,firstNameObjectClass, secondNameObjectClass){
    object.classList.remove(firstNameObjectClass);
    object.classList.add(secondNameObjectClass);
}

