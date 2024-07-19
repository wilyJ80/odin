import './style.css';

const main = document.querySelector('main');
const footerP = document.querySelector('footer aside p');

(async function() {
  const { createCardAdder } = await import('./create-card-adder');
  const { yearGenerate } = await import('./year-generate');

  yearGenerate(footerP);

  createCardAdder(main);
})();
