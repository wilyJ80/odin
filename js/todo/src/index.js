import './style.css';

const main = document.querySelector('main');
const footerAsideP = document.querySelector('footer aside p');

(async function() {
  const { createCardAdder } = await import('./create-card-adder');
  const { yearGenerate } = await import('./year-generate');
  const { createTodoCard } = await import('./create-todo-card');

  yearGenerate(footerAsideP);

  const cardAdder = createCardAdder(main);

  cardAdder.button.addEventListener('click', () => {
    const values = cardAdder.getInputValues();
    cardAdder.resetForm();

    const todoCard = createTodoCard(main, values.name, values.activities);
    todoCard.button.addEventListener('click', () => {
      todoCard.card.remove();
    });
  });
})();
