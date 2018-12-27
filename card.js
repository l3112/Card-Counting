// gamblin' 

var count = 0
// a score that inc or dec

//function changes count val and returns total
function cc(card){

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++; // plus one
            break;
        case 10:
        case "J":
        case "K":
        case "Q":
        case "A":
            count --; // minus one
            break
            
    }

    var holdbet = 'Hold'
    if (count > 0){
        holdbet = 'Bet'
    }
    return count + " " + holdbet;

}




// change these values
cc(2); cc(3); cc(10); cc('K'); cc('A');
console.log(cc(2));