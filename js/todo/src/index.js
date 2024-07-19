import './style.css';

const main = document.querySelector('main');
const footerAsideP = document.querySelector('footer aside p');

(async function() {
  const { createCardAdder } = await import('./create-card-adder');
  const { yearGenerate } = await import('./year-generate');
  const { createTodoCard } = await import('./create-todo-card');

  yearGenerate(footerAsideP);

  const createBtn = createCardAdder(main);

  createBtn.button.addEventListener('click', () => {
    const values = createBtn.getInputValues();
    createTodoCard(main, values.name, values.activities);
    createBtn.resetForm();
  });
})();
