document.querySelector('.input').oninput = function(){
    const inputText = document.querySelector('input').value;
    // console.log(document.querySelector('input').value);
    for(step = 0;step<=1;step++){
        // console.log(list[step])
        if(inputText === list[step]){
            console.log('True');
        }
    }
}

list = ['content;','center;']

document.querySelector('#textar').oninput = function(){
    const inputText = document.querySelector('#textar').value;
    console.log(document.querySelector('#textar').value);
    splitInpText = inputText.split('\n');
    
    console.log(splitInpText,splitInpText.length);
    let lenInpText
    
    for(stepi = 0;stepi<splitInpText.length;stepi++){
    
        for(stepj = 0; stepj<=list.length; stepj++){
            if(splitInpText[stepi] == list[stepj]){
                console.log('true');
            }    
        }
        
    }
}
    