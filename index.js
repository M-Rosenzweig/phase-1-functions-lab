function distanceFromHqInBlocks(x) {

    return Math.abs(x - 42);
}

function distanceFromHqInFeet(pickUp) {

    return distanceFromHqInBlocks(pickUp) * 264;
}


function distanceTravelledInFeet (start,finish){

    return distanceFromHqInFeet(finish) - distanceFromHqInFeet(start);

}

function calculatesFarePrice (start, destination) {
    let feetTraveled = distanceTravelledInFeet (start, destination);
    if ( feetTraveled <= 400) {
        return 0;  
    } else if (feetTraveled >= 400 && feetTraveled <= 2000){
    // console.log (feetTraveled); (This allowed me to confirm that feetTraveled is what I expexcted it to be)

        return (feetTraveled - 400) *.02
    }
    else if (feetTraveled > 2000 && feetTraveled <=2500) {
        return 25;
    }
    else if (feetTraveled > 2500) {
        return "cannot travel that far"
    }

}
    
