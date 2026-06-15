var signal="White"

switch(signal){
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Wait!");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}
