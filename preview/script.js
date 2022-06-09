'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'fddf',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
];

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if (!blockObj.id) throw new SyntaxError(`В данних під номером ${i + 1} немає id`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch (e) {
  
    if (e.name === 'SyntaxError') {
        console.log(e.message);
    } else throw e;
}







// const err = new SyntaxError('dsfsdfd');
// console.log(err.name, err.message, err.stack);