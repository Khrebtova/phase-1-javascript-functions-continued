function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun('hike');

function mondayWork(activity= 'go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective(highlight = "*"){
   return function(parametr1 = 'special'){
       return `You are ${highlight}${parametr1}${highlight}!`;
   } 
}
wrapAdjective('||')('a dedicated programmer');
