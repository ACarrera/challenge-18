
const options = ['stone', 'paper', 'scissors'];
function computerMove(){
  const random = Math.round(Math.random()*2);
  return options[random];
}
function endGame (player) {
    let machine = computerMove();
  switch(true){
    case player==machine:
          Swal.fire(`Computer plays ${machine}.\n Tie`);
    break;
    case player=='stone' && machine=='paper':
      Swal.fire(`Computer plays ${machine}.`+' \n Computer wins');
    break;
    case player=='stone' && machine=='scissors':
      Swal.fire(`Computer plays ${machine}.`+'\n Player wins!!');
    break;
    case player=='paper' && machine=='stone':
      Swal.fire(`Computer plays ${machine}.`+'\n Player wins!!');
    break;
    case player=='paper' && machine=='scissors':
      Swal.fire(`Computer plays ${machine}.`+'\n Player wins!!');
    break;
    case player=='scissors' && machine=='stone':
      Swal.fire(`Computer plays ${machine}.`+'\n Computer wins');
    break;
    case player=='scissors' && machine=='paper':
      Swal.fire(`Computer plays ${machine}.`+'\n Player wins!!');
    break;
  }
}