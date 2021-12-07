import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice('Mitko', 'Frontend development', 200);

//let invoice: string[] = [];
let invoice: Invoice[] = [];

//if we are sure that the element exists we can place ! at the end so we can avoid ts error
//const form = document.querySelector('.new-item-form')!;

//or we can cast it to type (html element)
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//const children = form.children;
//console.log(children)

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})