const EDAD = 30;

// if(EDAD < 5){
//     mensaje='Es un infante';
// }else if (EDAD > 5 && EDAD < 18){
//     mensaje='Es un adol';
// } 

switch (true){
    case 5:
        mensaje='Es un infante';
        break;
    case 18:
        mensaje='Es un adol';
        break;
    case 30:
        mensaje='Es un abuelo';
        break;
    default:
        mensaje='Es mayor';
}
console.log('Es: ',mensaje)

