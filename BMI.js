var btn=document.getElementById('btn')

btn.addEventListener('click',function(e){
    e.preventDefault();
    var height=document.getElementById('height')
    var weight=document.getElementById('weight')

    if(height.value==''||weight.value==''){
        alert('Please fill all the blanks!')
    }
    else{

        
        var BMI=weight.value/((height.value*height.value)/100);
        BMI=BMI.toFixed(2)

        var value=document.getElementById('value')

        value.innerHTML=BMI;
        console.log(BMI)
    }
    var status;

    if(BMI<18.5){
        status='Underweight'
    }
    else if(BMI>=18.5 && BMI<25){
        status='Heathy';
    }
    else if(BMI>=30 ){
        status='Obese';
    }

    var comment=document.querySelector('#class1')

    comment.innerHTML='Comment: you are <span id="class1">'+status+'</span>';
    
    
})