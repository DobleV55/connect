function buttonColor (id) {
    
    var array = [{ id: 'idea-label' , value: [document.getElementById('idea-label'),document.getElementById('idea-text')] },
                { id: 'investor-label' , value: [document.getElementById('investor-label'), document.getElementById('investor-text')] },
                { id: 'runner-label' , value: [document.getElementById('runner-label'),document.getElementById('runner-text')] }];

    array.forEach(element => {
        if (element.id == id){
            element.value[0].style.background = '#1B2F33';
            element.value[1].style.color = '#ffffff';
        }
        else{
            element.value[0].style.background = '#FFFFFF';
            element.value[1].style.color = '#1B2F33';

        } 
    });

}