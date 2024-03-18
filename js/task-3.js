'use strict';

function checkForSpam(message) { 
    const message = ["Latest technology news", "JavaScript weekly newsletter", "Get best sale offers now!", "Amazing SalE, only tonight!","Trust me, this is not a spam message", "Get rid of sPaM emails. Our book in on sale!", "[SPAM] How to earn fast money?"]
    const spamToFind = 'spam', 'sale';
}

console.log(checkForSpam("Latest technology news")); 
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message")); 
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
console.log(checkForSpam("[SPAM] How to earn fast money?")); 