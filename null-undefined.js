"use strict";

const createVisitor = (name, age, ticketId) => {
    const visitor = {
        name,
        age, 
        ticketId
    };
    return visitor;
}

let verena = createVisitor('Verena Nardi', 45, 'H32AZ123');
console.log(verena);
// => { name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' }

const removeTicket = (obj) => {
    obj.ticketId = null;
    return obj;
}

verena = removeTicket(verena);
console.log(verena);

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };

const ticketStatus = (ticketObj, ticketId) => {
    
    if (ticketObj[ticketId] === null) {
        console.log('not sold');
    } else if (ticketObj[ticketId] === undefined) {
        console.log('unknown ticket id');
    } else {
        console.log(`sold to ${ticketObj[ticketId]}`);
    }
}

    ticketStatus(tickets, 'RE90VAW7');
    // => 'unknown ticket id'
    
    ticketStatus(tickets, '0H2AZ123');
    // => 'not sold'
    
    ticketStatus(tickets, '23LA9T41');
    // => 'sold to Verena Nardi'