const banksList = document.querySelector(".banks");
const banksInformationEl = document.querySelector(".bank-information");
const backdropRef = document.querySelector("[data-modal]");
const createNewBankBtnRef = document.querySelector(".create_new_bank");
const modalCloseBtnRef = document.querySelector("[data-modal-close]");
// console.log(banksList);

const banks = [
  {
    id: 1,
    name: "Mono",
    interestRate: 5,
    maxLoan: 500000,
    minPayment: 1000,
    loanTerm: 12,
  },
  {
    id: 2,
    name: "Privat",
    interestRate: 7,
    maxLoan: 1000000,
    minPayment: 5000,
    loanTerm: 50,
  },
];

function createMarkupBank({ name, id }) {
  return `<li class="banks__item" data-id='${id}'>
        <p>${name}</p>
      <button class="banks__edit--button banks-btn" type="button">
      <svg class="form-btn-icon" width="24" height="24">
      <use href="./img/symbol-defs.svg#icon-edit"></use>
  </svg>
      </button>
      
      <button class="banks__remove--button banks-btn" type="button">
      <svg class="form-btn-icon" width="24" height="24">
      <use href="./img/symbol-defs.svg#icon-x"></use>
  </svg>
      </button>
    </li>`;
}
function createBankList(banks, callback) {
  return banks.map((bank) => callback(bank)).join("");
}

// console.log(createBankList(banks, createMarkupBank));

banksList.insertAdjacentHTML(
  "beforeend",
  createBankList(banks, createMarkupBank)
);

function createMarkupBankInformation({
  name,
  interestRate,
  maxLoan,
  minPayment,
  loanTerm,
}) {
  return `<li>Bank: ${name}</li>
    <li>Mortgage Size, $: ${maxLoan}</li>
    <li>Minimum down payment, $: ${minPayment}</li>
    <li>Loan period, month: ${loanTerm}</li>
    <li>Interest rate, %: ${interestRate}</li>`;
}

banksList.addEventListener("click", (event) => {
  if (event.target.nodeName !== "LI") {
    return;
  }

  const bankId = event.target.dataset.id;

  const bank = banks.find((bank) => {
    return Number(bankId) === bank.id;
  });

  banksInformationEl.innerHTML = createMarkupBankInformation(bank);
});

//const openBtn = document.querySelector(".open");
const overlay = document.querySelector(".overlay");
//const closeBtn = document.querySelector(".close");
const startBtn = document.querySelector(".start");

function toggleModal() {
  overlay.classList.toggle("hide");
}

startBtn.addEventListener("click", toggleModal);
//closeBtn.addEventListener("click", toggleModal);
//openBtn.addEventListener("click", toggleModal);

createNewBankBtnRef.addEventListener("click", onModalOpenBtn);

function onModalOpenBtn() {
  backdropRef.classList.remove("is-hidden");
}

modalCloseBtnRef.addEventListener("click", onModalCloseBtn);

function onModalCloseBtn() {
  backdropRef.classList.add("is-hidden");
}

backdropRef.addEventListener("click", onBackdropClick);

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onModalCloseBtn();
  }
}

document.addEventListener("keydown", onPushEsc);

function onPushEsc(event) {
  if (event.code === "Escape") {
    onModalCloseBtn();
  }
}
