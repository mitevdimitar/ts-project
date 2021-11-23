"use strict";
//if we are sure that the element exists we can place ! at the end so we can avoid ts error
//const form = document.querySelector('.new-item-form')!;
//or we can cast it to type (html element)
var form = document.querySelector('.new-item-form');
//const children = form.children;
//console.log(children)
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
