// console.log('Js Connected');

// Get All Customize Value 
function addExtraMemory(memorySize, memoryName){
    document.getElementById(memorySize).addEventListener('click', function(){
        const memory_price = document.getElementById(memoryName);
        // Check the customize value
        if(memorySize == 'memory-8gb'){
            memory_price.innerText = 0;
        }else if(memorySize == 'memory-16gb'){
            memory_price.innerText = 180;
        }
        else if(memorySize == 'storage-256gb'){
            memory_price.innerText = 0;
        }
        else if(memorySize == 'storage-512gb'){
            memory_price.innerText = 100;
        }
        else if(memorySize == 'storage-1tb'){
            memory_price.innerText = 180;
        }
        else if(memorySize == 'free-delivery'){
            memory_price.innerText = 0;
        }
        else if(memorySize == 'paid-delivery'){
            memory_price.innerText = 20;
        }
        // Call the calculation function
        calculateTotal();
    })  
}
// Calculate all extra price
function calculateTotal(){
    const base_cost = document.getElementById('base-cost').innerText;
    const memory_cost = document.getElementById('memory-cost').innerText;
    const storage_cost = document.getElementById('storage-cost').innerText;
    const delivery_cost = document.getElementById('delivery-cost').innerText;
    const subTotal = parseInt(base_cost) +  parseInt(memory_cost)+  parseInt(storage_cost) +  parseInt(delivery_cost);

    document.getElementById('sub-total-cost').innerText = subTotal;
    
    document.getElementById('total-price').innerText = subTotal;
    
}
// call addExtraMemory function for all customize section

addExtraMemory('memory-8gb', 'memory-cost');
addExtraMemory('memory-16gb', 'memory-cost');

addExtraMemory('storage-256gb', 'storage-cost');
addExtraMemory('storage-512gb', 'storage-cost');
addExtraMemory('storage-1tb', 'storage-cost');

addExtraMemory('free-delivery', 'delivery-cost');
addExtraMemory('paid-delivery', 'delivery-cost');

// check Coupon code and calculate
function checkCouponCode(couponName){
    document.getElementById(couponName).addEventListener('click', function(){
        const discount_code_text = document.getElementById('copon-code-text');
        const discount_code = discount_code_text.value
        const subTotalPrice =  document.getElementById('sub-total-cost').innerText;
       if(discount_code.toLowerCase() == 'stevekaku'){
            const afterDiscountTotalPrice = subTotalPrice / 20 ;
            const finalPrice = subTotalPrice - afterDiscountTotalPrice;
            console.log(finalPrice);  
            document.getElementById('total-price').innerText = finalPrice;
       }
       discount_code_text.value = '';
    }) 
}

// call Coupon code function
checkCouponCode('discount-apply');

 
