const banksList = document.querySelector(".banks");
const banksInformationEl = document.querySelector(".bank-information");
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
      <button class="banks__edit--button" type="button">
        Edit
      </button>
      <button class="banks__remove--button" type="button">
        x
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
  const bankId = event.target.dataset.id;

  const bank = banks.find((bank) => {
    return Number(bankId) === bank.id;
  });

  banksInformationEl.innerHTML = createMarkupBankInformation(bank);
});






//const openBtn = document.querySelector(".open");
const overlay = document.querySelector(".overlay");
//const closeBtn = document.querySelector(".close");
const startBtn = document.querySelector(".start")

function toggleModal() {
  overlay.classList.toggle("hide");
}

startBtn.addEventListener("click", toggleModal);
//closeBtn.addEventListener("click", toggleModal);
//openBtn.addEventListener("click", toggleModal);



