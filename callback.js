'use strict';

let resultado = 'nook';

const onSuccess = () => 'SUCCESS';

const onError = () => 'ERROR';

const message = (result) => {
   return (result === 'ok') ? onSuccess() : onError();
}

const notify = callback => callback(resultado);


//console.log(notify(onSuccess));
//console.log(notify(onError));
console.log(notify(message));