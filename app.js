const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const expenseBody = document.getElementById('expense-body');
const totalDisplay = document.getElementById('total');

let total = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  if (!description || !amount || !category) return;

  addExpense(description, amount, category);
  updateTotal(amount);
  form.reset();
});

function addExpense(description, amount, category) {
  const tr = document.createElement('tr');

  const tdDesc = document.createElement('td');
  tdDesc.textContent = description;

  const tdAmount = document.createElement('td');
  tdAmount.textContent = amount.toFixed(2);

  const tdCategory = document.createElement('td');
  tdCategory.textContent = category;
  tdCategory.classList.add(`category-${category}`);

  const tdActions = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', function () {
    tr.remove();
    updateTotal(-amount);
  });
  tdActions.appendChild(deleteBtn);

  tr.appendChild(tdDesc);
  tr.appendChild(tdAmount);
  tr.appendChild(tdCategory);
  tr.appendChild(tdActions);

  expenseBody.appendChild(tr);
}

function updateTotal(change) {
  total += change;
  totalDisplay.textContent = total.toFixed(2);
}
