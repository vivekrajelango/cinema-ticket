let adultTicketPrice = 20;
let childTicketPrice = 10;
let infantTicketPrice = 0;

let adultNumber = document.getElementById('adultNumber');
let childNumber = document.getElementById('childNumber');
let infantNumber = document.getElementById('infantNumber');
let totalTicket = document.getElementById('totalTicket');
let incrementButton = document.querySelectorAll('.increment');
let childIncButton = document.querySelectorAll('.childInc');
let confirmButton = document.getElementById('confirm');

const increment=(ticketType, count)=>{
    ticketType.value++
    count.innerHTML = ticketType.value;
};
const decrement=(ticketType)=>{
    ticketType.value<1 ? 
        ticketType.value = 0 : 
            ticketType.value--
};
const updateCount=()=>{
    totalTicket.innerHTML = parseInt(adultNumber.value) + parseInt(childNumber.value) + parseInt(infantNumber.value);

    adultTotal.innerHTML = parseInt(adultNumber.value) * adultTicketPrice;
    childTotal.innerHTML = parseInt(childNumber.value) * childTicketPrice;
    infantTotal.innerHTML = parseInt(infantNumber.value) * infantTicketPrice;

    totalAmount.innerHTML = (parseInt(adultNumber.value) * adultTicketPrice) + (parseInt(childNumber.value) * childTicketPrice + (infantTicketPrice));
  
    if((parseInt(adultNumber.value) + parseInt(childNumber.value) + parseInt(infantNumber.value))>=20){
        incrementButton.forEach((item)=>item.disabled = true);
        errorMsg.innerHTML = "Only 20 ticket allowed at a time";
    } 
    else {
        incrementButton.forEach((item)=>item.disabled = false);
        errorMsg.innerHTML = "";
        confirmButton.disabled = false;
    }
    
    if(parseInt(adultNumber.value)<1){
        errorMsg.innerHTML = "Bookings not allowed without Adults";
        childNumber.value = 0;
        infantNumber.value = 0;
        childIncButton.forEach((item)=>item.disabled = true)
        confirmButton.disabled = true;
    } 
};


const incrementAdut=()=>{
    increment(adultNumber, adultCount);
    updateCount();
}
const decrementAdult=()=>{
    decrement(adultNumber);
    updateCount();
}


const incrementChild=()=>{
    increment(childNumber, childCount);
    updateCount();
}
const decrementChild=()=>{
    decrement(childNumber);
    updateCount();
}

const incrementInfant=()=>{
    increment(infantNumber, infantCount);
    updateCount();
}
const decrementInfant=()=>{
    decrement(infantNumber);
    updateCount();
}


