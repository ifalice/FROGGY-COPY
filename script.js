const valueTextInput = document.querySelector('.main-container__input-text')

valueTextInput.oninput = function (){
    document.querySelector('.flex-space__box-dinamic').style.cssText = `${document.querySelector(".main-container__input-text").value}`
    const coordElem = document.querySelector('.flex-space__item-dinamic')
    if(coordElem.offsetLeft == 450 && coordElem.offsetTop == 5){
        document.querySelector('.main-container__input-button').removeAttribute('disabled')
        
    }     
}

function clickButton(){
    const getMainContainer = document.querySelector('.main-container').style.display = 'none'
    
    document.querySelector('#congratulations-block').classList.add('congratulations-block__style') 
    
    document.querySelector('#congratulations-block__text').textContent = 'CONGRATULATIONS' 
}
const coordElem = document.querySelector('.flex-space__item-dinamic').offsetLeft

console.log(coordElem);