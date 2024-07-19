import './style.css';

const footerP = document.querySelector('footer aside p');

const init = (async function() {
  const { createCardAdder } = await import('./create-card-adder');
  const { yearGenerate } = await import('./year-generate');

  yearGenerate(footerP);
  createCardAdder();
})();
