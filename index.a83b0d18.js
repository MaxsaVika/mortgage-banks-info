!function(){var e,n=document.querySelector(".banks"),t=document.querySelector(".bank-information"),a=document.querySelector("[data-modal]"),s=document.querySelector(".create_new_bank"),i=document.querySelector("[data-modal-close]"),o=document.querySelector(".overlay"),c=(document.querySelector(".start"),document.querySelector(".create_new_bank-from-modal")),r=document.querySelector(".contact-form"),d=(document.querySelectorAll(".banks__remove--button"),"bank-list"),l=[{id:1,name:"Mono",interestRate:5,maxLoan:5e5,minPayment:1e3,loanTerm:12},{id:2,name:"Privat",interestRate:7,maxLoan:1e6,minPayment:5e3,loanTerm:50}];function u(e){var n=e.name,t=e.id;return'<li class="banks__item" data-id=\''.concat(t,"'>\n  <p>").concat(n,'</p>\n  <div class="btn-wrapper" >\n  <button class="banks__edit--button banks-btn" name="edit-bank" type="button">\n  <svg width="20" height="20">\n              <use href="/src/img/symbol-defs.svg#icon-pencil"></use>\n            </svg>\n  </button>\n   <button  name="delete-bank" class="banks__remove--button banks-btn" type="button">\n\n      </button>\n      </div>\n      </li>')}function m(){var e;l.length&&(o.classList.add("hide"),n.innerHTML="",n.insertAdjacentHTML("beforeend",(e=u,l.map((function(n){return e(n)})).join(""))))}function b(){o.classList.add("hide"),a.classList.remove("is-hidden")}function k(){a.classList.add("is-hidden")}n.addEventListener("click",(function(e){if("OL"!==e.target.nodeName){if(e.target.closest(".banks__edit--button"))return b(),void console.dir(e.target.closest(".banks__item").dataset.id);var n,a,s,i,o,c,r=e.target.closest(".banks__item").dataset.id,d=l.find((function(e){return Number(r)===e.id}));t.innerHTML=(a=(n=d).name,s=n.interestRate,i=n.maxLoan,o=n.minPayment,c=n.loanTerm,'<li class="bank-keys">Bank: <span class="bank_description">'.concat(a,'</span></li>\n      <li class="bank-keys">Mortgage Size, $: <span class="bank_description">').concat(i,'</span></li>\n      <li class="bank-keys">Minimum down payment, $: <span class="bank_description">').concat(o,'</span></li>\n      <li class="bank-keys">Loan period, month: <span class="bank_description">').concat(c,'</span></li>\n      <li class="bank-keys">Interest rate, %: <span class="bank_description">').concat(s,"</span></li>"))}})),(e=localStorage.getItem(d))?(l=JSON.parse(e),m()):m(),s.addEventListener("click",b),c.addEventListener("click",b),i.addEventListener("click",k),a.addEventListener("click",(function(e){e.target===e.currentTarget&&k()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&k()})),r.addEventListener("submit",(function(e){e.preventDefault();var n={};new FormData(e.target).forEach((function(e,t){return n[t]=e})),n.id=Date.now(),l.push(n),e.target.reset(),k(),m(),localStorage.setItem(d,JSON.stringify(l))}))}();
//# sourceMappingURL=index.a83b0d18.js.map
