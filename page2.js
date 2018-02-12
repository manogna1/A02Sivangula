function valid(){
    var h1=prompt("enter first name","Manogna");
    var h2=prompt("enter last name","Sivangula");
    var card=prompt("enter your bearcat card number",564479);
   
let i=validate(card);
document.getElementById("demo").innerHTML= h1+h2 +", your beart number : 919"+card;
funct(card);
}

function validate(card){

    if (card != null && !isNaN(card)){
        var bear=919+card;
        if(card.length===6){
            return true;}
        else{
            return false;}
    }

   // }
}
function funct(card){
    if (card != null && !isNaN(card)){
        var bear=919+card;
        if(bear.length===9){
        $("#demo1").html("bear cat " + bear + " is valid") ;
          }
        else{
            $("#demo1").html("bear cat " + bear + " is invalid") ;
           }
    }
    else{
        document.getElementById("demo1").innerHTML = "bear cat " + card + " is invalid";
    }
}
    function pay(){
        $("#demo2").html("Your fee payment is succesfully done");
    }
