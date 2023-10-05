// Code your solution in this file!
const drivers = ['Antonio' , 'Nuru' , 'Amari' ,'Mo']

const  returnFirstTwoDrivers = function(drivers) { 
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4);
}

const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function fareMultiplier(times){
    return function(fare){
        return fare*times;
    }
}

const fareDoubler = createFareMultiplier(2);

const  fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectDrivers){
    if(selectDrivers === returnFirstTwoDrivers){
        return drivers.slice(0,2)

    }else if(selectDrivers === returnLastTwoDrivers){
        return drivers.slice(2,4)

    }else {
        return none 
    }

}
 



