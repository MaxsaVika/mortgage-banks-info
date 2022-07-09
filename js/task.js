const banksList = document.querySelector(".banks");
console.log(banksList);

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

function createMarkupBank({ name }) {
  return `<li class="banks__item">
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

console.log(createBankList(banks, createMarkupBank));

banksList.insertAdjacentHTML(
  "beforeend",
  createBankList(banks, createMarkupBank)
);
