const phoneIncrease = document.getElementById('phone-increase');
phoneIncrease.addEventListener('click',function(){
    const phoneCountString = document.getElementById('phone-count').value; 
    increaseCart("phone-count",phoneCountString);
    
})

const phoneDecrease = document.getElementById('phone-decrease');
phoneDecrease.addEventListener('click',function(){
    const decreaseString = document.getElementById('phone-count').value; 
    decreaseCart('phone-count', decreaseString);
})
const caseIncrease = document.getElementById('case-increase');
caseIncrease.addEventListener('click',function(){
    const caseIncreaseString = document.getElementById('case-count').value; 
    increaseCart("case-count",caseIncreaseString);
    
})

const caseDecrease = document.getElementById('case-decrease');
caseDecrease.addEventListener('click',function(){
    const caseDecreaseString = document.getElementById('case-count').value; 
    decreaseCart('case-count', caseDecreaseString);
})













document.getElementById('sub-total').innerText;





// function
function increaseCart(id, String){
    const phoneCountNumber = parseInt(String);
    const newValue = phoneCountNumber+1;
    document.getElementById(id).value= newValue;
    
    if(id==='phone-count'){
        
        const initialPhoneTotal = 1216 * newValue;
        document.getElementById('initial-phone-price').innerText=initialPhoneTotal;
        
    }
    else if(id==='case-count'){
        
        const initialCaseTotal = 59 * newValue;
        document.getElementById('initial-case-price').innerText=initialCaseTotal;
        
    }
    const initialPhoneStr= document.getElementById('initial-phone-price').innerText;
    const initialPhoneTotal= parseInt(initialPhoneStr); 
    const initialCaseStr = document.getElementById('initial-case-price').innerText;
    const initialCaseTotal=  parseInt(initialCaseStr);
    const subTotal =initialPhoneTotal+initialCaseTotal;
    document.getElementById('sub-total').innerText= subTotal;
    const tax = subTotal* (15/100);
    const taxFixed=tax.toFixed(2);
    document.getElementById('tax').innerText= taxFixed;
    const totalLast = parseFloat(subTotal) + parseFloat(taxFixed);
    document.getElementById('total-last').innerText= totalLast;
}
function decreaseCart(id, String){
    const decreaseNumber = parseInt(String);
    if(decreaseNumber>0){
        const decreaseValue =decreaseNumber - 1;
        document.getElementById(id).value= decreaseValue;
        if(id==='phone-count'){
        
            const initialTotal = 1216 * decreaseValue;
            document.getElementById('initial-phone-price').innerText=initialTotal;
        }
        else if(id==='case-count'){
            
            const initialTotal = 59 * decreaseValue;
            document.getElementById('initial-case-price').innerText=initialTotal;
        }
        const initialPhoneStr= document.getElementById('initial-phone-price').innerText;
        const initialPhoneTotal= parseInt(initialPhoneStr); 
        const initialCaseStr = document.getElementById('initial-case-price').innerText;
        const initialCaseTotal=  parseInt(initialCaseStr);
        const subTotal =initialPhoneTotal+initialCaseTotal;
        document.getElementById('sub-total').innerText= subTotal;
        const tax = subTotal* (15/100);
        const taxFixed=tax.toFixed(2);
        document.getElementById('tax').innerText= taxFixed;

        const totalLast = parseFloat(subTotal) + parseFloat(taxFixed);
        document.getElementById('total-last').innerText= totalLast;

        
    }else{
        document.getElementById(id).value= 0;
    }
    
}

// function 
