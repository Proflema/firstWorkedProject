dom={
    subscribe:function subscribe(){
        if (document.querySelector(".subscribe-button").innerText==="Subscribe"){
            document.querySelector(".subscribe-button").innerHTML="Subscribed"
        }
        else{
            document.querySelector(".subscribe-button").innerHTML="Subscribe"
        }
        
    },
    calculate_button: function calculate(){
        let cost = document.querySelector(".number").innerHTML
        console.log(cost.Value)
        if (cost.value < 40){
            cost.Value += 10;
        }
        else if (cost.value >= 40){
            cost = cost;`
        }
        else{
            alert("Error! Enter number")
        }
        return document.querySelector(".calculate-button").innerHTML=`${cost.Value}`

    }
}