const valueTextInput = document.querySelector('.main-container__input-text')

valueTextInput.oninput = function (){
    console.log(document.querySelector('.main-container__input-text').value);
    // document.querySelector('.main-container__input-button').setAttribute('disabled', 'disabled')
    
    document.querySelector('.flex-space__box-dinamic').style.cssText = `${document.querySelector(".main-container__input-text").value}`
    
    
    const inputText = document.querySelector('.main-container__input-text')
    if(inputText.value.slice(-1) !=';'){
        if(inputText.value.split(' ').join('')+';'=='justify-content:center;'){
            document.querySelector('.main-container__input-button').removeAttribute('disabled');      
        }else if(inputText.value.slice(-1) ==';'){
            if(inputText.value.split(' ').join('')=='justify-content:center;'){
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


// document.querySelector('.flex-space__box-dinamic').style.cssText = `${document.querySelector(".main-container__input-text").value}`


function replaceObjectsClass(object,firstNameObjectClass, secondNameObjectClass){
    object.classList.remove(firstNameObjectClass);
    object.classList.add(secondNameObjectClass);
}


// function clickButton(){
//     const getMainContainer = document.querySelector('.main-container').style.display = 'none'
    
//     document.querySelector('#congratulations-block').classList.add('congratulations-block__style') 
    
//     document.querySelector('#congratulations-block__text').textContent = 'CONGRATULATIONS' 
// }
