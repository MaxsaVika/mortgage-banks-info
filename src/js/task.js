import { save, load } from './localstorage.js';
const banksList = document.querySelector('.banks');
const banksInformationEl = document.querySelector('.bank-information');
const backdropRef = document.querySelector('[data-modal]');
const createNewBankBtnRef = document.querySelector('.create_new_bank');
const modalCloseBtnRef = document.querySelector('[data-modal-close]');
const overlay = document.querySelector('.overlay');
const startBtn = document.querySelector('.start');
const modalBtnCreateBank = document.querySelector(
  '.create_new_bank-from-modal'
);
const contactForm = document.querySelector('.contact-form');
const onBtnBankList = document.querySelectorAll('.banks__remove--button');
const LOCALSTORAGE_KEY = 'bank-list';

let isEdit = false;

import sprite from '../img/symbol-defs.svg';
console.log(sprite);

let banks = [
  // {
  //   id: 1,
  //   name: 'Mono',
  //   interestRate: 5,
  //   maxLoan: 500000,
  //   minPayment: 1000,
  //   loanTerm: 12,
  // },
  // {
  //   id: 2,
  //   name: 'Privat',
  //   interestRate: 7,
  //   maxLoan: 1000000,
  //   minPayment: 5000,
  //   loanTerm: 50,
  // },
];

// console.log(save(LOCALSTORAGE_KEY, JSON.stringify(banks)));
function createMarkupBank({ name, id }) {
  return `<li class="banks__item" data-id='${id}'>
  <p>${name}</p>
  <div class="btn-wrapper" >
  <button class="banks__edit--button banks-btn" name="edit-bank" type="button">
              <svg width="20" height="20">
              <use href="${sprite}#icon-pencil"></use>
              </svg>
  </button>
   <button  name="delete-bank" class="banks__remove--button banks-btn" type="button">
              <svg width="20" height="20">
              <use href="${sprite}#icon-x"></use>
              </svg>
      </button>
      </div>
      </li>`;
}
function createBankList(banks, callback) {
  return banks.map(bank => callback(bank)).join('');
}

function createMarkupBankInformation({
  name,
  interestRate,
  maxLoan,
  minPayment,
  loanTerm,
}) {
  return `<li class="bank-keys">Bank: <span class="bank_description">${name}</span></li>
      <li class="bank-keys">Mortgage Size, $: <span class="bank_description">${maxLoan}</span></li>
      <li class="bank-keys">Minimum down payment, $: <span class="bank_description">${minPayment}</span></li>
      <li class="bank-keys">Loan period, month: <span class="bank_description">${loanTerm}</span></li>
      <li class="bank-keys">Interest rate, %: <span class="bank_description">${interestRate}</span></li>`;
}

let currentBank;

banksList.addEventListener('click', event => {
  const bankId = event.target.closest('.banks__item').dataset.id;
  currentBank = findBankById(bankId);
  if (event.target.nodeName === 'OL') {
    return;
  }

  if (event.target.closest('.banks__edit--button')) {
    isEdit = true;
    onModalCreateNewBank();
    console.dir(contactForm.elements);

    Object.keys(currentBank).filter(key => key !== 'id').forEach(key => contactForm.elements[key].value = currentBank[key]);
    return
  }

  if (event.target.closest('.banks__remove--button')) {
    banks =  banks.filter(bank => {
      return bank.id !== +bankId})
      
    checkBankList();
  }

  // console.log(currentBank);
  banksInformationEl.innerHTML = createMarkupBankInformation(currentBank);
});

function findBankById(id) {

    return banks.find(bank => {
    return Number(id) === bank.id;
    });
  
}
createBankListFromLocal();

function checkBankList() {
  if (banks.length) {
    overlay.classList.add('hide');
    banksList.innerHTML = '';
    banksList.insertAdjacentHTML(
      'beforeend',
      createBankList(banks, createMarkupBank)
    );
  }
}

createNewBankBtnRef.addEventListener('click', onModalCreateNewBank);
modalBtnCreateBank.addEventListener('click', onModalCreateNewBank);

function onModalCreateNewBank() {
  overlay.classList.add('hide');
  backdropRef.classList.remove('is-hidden');
}

modalCloseBtnRef.addEventListener('click', onModalCloseBtn);

function onModalCloseBtn() {
  backdropRef.classList.add('is-hidden');
}

backdropRef.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onModalCloseBtn();
  }
}

document.addEventListener('keydown', onPushEsc);

function onPushEsc(event) {
  if (event.code === 'Escape') {
    onModalCloseBtn();
  }
}

contactForm.addEventListener('submit', onAddNewBank);

function onAddNewBank(event) {
  event.preventDefault();
  const newBank = {};

  const formData = new FormData(event.target);

  formData.forEach((value, name) => (newBank[name] = value));
  newBank.id = Date.now();

  if (isEdit) {
    banks = banks.map(el => el.id === currentBank.id ? newBank : el);
  } else banks.push(newBank);

  event.target.reset();
  onModalCloseBtn();
  checkBankList();
  onSetLocalStorage();
}

function onSetLocalStorage() {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(banks));
}

function createBankListFromLocal() {
  let savedData = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedData) {
    banks = JSON.parse(savedData);
    checkBankList();
  } else checkBankList();
}

