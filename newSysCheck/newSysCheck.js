;document.querySelector('.input').oninput = function(){
    const inputText = document.querySelector('input').value;
    // console.log(document.querySelector('input').value);
    for(step = 0;step<=1;step++){
        // console.log(list[step])
        if(inputText === list[step]){
            console.log('True');
        }
    }
}

list = ['content;','center;','align;']

document.querySelector('#textar').oninput = function(){
    const inputText = document.querySelector('#textar').value;
    console.log(document.querySelector('#textar').value);
    splitInpText = inputText.split('\n');
    
    console.log(splitInpText,splitInpText.length);
    let lenInpText
    
    let a = ''
    
    for(stepi = 0;stepi<splitInpText.length;stepi++){
        console.log(a);
        
    
        for(stepj = 0; stepj<=list.length; stepj++){
            if(splitInpText[stepi].slice(-1) != ';'){
                if(splitInpText[stepi] + ';' === list[stepj]){
                    console.log('true');
                    a+='1'
                    if(a.length == list.length){
                        alert('conc')
                        break
                    }
                    
                    

                }
            }else if(splitInpText[stepi].slice(-1) == ';'){
                if(splitInpText[stepi] === list[stepj]){
                    console.log('true');    
                }
                
            }else{
                console.log('false');
            }
        }
        
    }
}


document.querySelector('#textartwo').oninput = function(){
    const inputText = document.querySelector('#textartwo').value;
    // console.log(document.querySelector('#textartwo').value);
    console.log(inputText);
    
    
   
    let count = ''
    list.forEach(function(item,index) {
        // console.log(item);
        if(inputText.includes(item)){
            console.log('true');
            count+='1'
            if(count.length === list.length){
                alert('conc')
            }
        }

    });
    console.log(count);
}

