const valueTextInput = document.querySelector('.main-container__input-text')

valueTextInput.oninput = function (){
        console.log(document.querySelector('.main-container__input-text').value);
        document.querySelector('.flex-space__box-dinamic').style.cssText = `${document.querySelector(".main-container__input-text").value}`;     
       
        if(typeof(flexPositionDinamicBlock[0])==='object'){
            checkPluralValueInputText(document.querySelector('.main-container__input-text').value);
        }else{
            checkValueInputText(document.querySelector('.main-container__input-text').value);  
        }
    }    
    



    function checkValueInputText(inputText){
        console.log(document.querySelector('.main-container__input-text').value);
        flexPositionDinamicBlock.forEach(function(item){
            if(inputText.includes(item)){            
                document.querySelector('.main-container__input-button').removeAttribute('disabled');
            }else if(inputText.slice(-1)!=';'){
                inputText+";"
                if(inputText.includes(item)){
                    
                    document.querySelector('.main-container__input-button').removeAttribute('disabled');  
                }
            }
            else{
                document.querySelector('.main-container__input-button').setAttribute('disabled','disabled');
            }
        })                    
    }

    function checkPluralValueInputText(inputText){
        let count = ''
        flexPositionDinamicBlock[0].forEach(function(item,index) {
        // console.log(item);
    
        if(inputText.includes(item)){  
            count+='1'
            if(count.length === flexPositionDinamicBlock[0].length){
                document.querySelector('.main-container__input-button').removeAttribute('disabled');    
            }                     
        }else if(inputText.slice(-1)!=';'){        
            if(inputText.includes(item.slice(0,-1))){
                count+='1'            
                if(count.length === flexPositionDinamicBlock[0].length){
                    document.querySelector('.main-container__input-button').removeAttribute('disabled');    
                }  
            }
        }
        else{
            document.querySelector('.main-container__input-button').setAttribute('disabled','disabled');
        }

    });
    }







const lvlList = ['box-static_flex-lvl-one-jc-center','box-static_flex-lvl-two-jc-flex-end','box-static_flex-lvl-three-jc-space-between','box-static_flex-lvl-four-jc-space-around','box-static_flex-lvl-five-ai-center','box-static_flex-lvl-six-ai-flex-end-jc-center']


const flexPositionDinamicBlock = ['justify-content:center;','justify-content:flex-end;','justify-content:space-between;','justify-content:space-around;', 'align-items:center;',['align-items:flex-end;','justify-content:center;']]


let countDoneButtonNextLvl = 1;
function doneButtonNextLvl(event){ 
    flexPositionDinamicBlock.shift()
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
    document.querySelector('.main-container__input-button').setAttribute('disabled','disabled');

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


function replaceObjectsClass(object,firstNameObjectClass, secondNameObjectClass){
    object.classList.remove(firstNameObjectClass);
    object.classList.add(secondNameObjectClass);
}

