import './style.css';

import createCardAdder from './create-card-adder.js';
import yearGenerate from './year-generate.js';

const footerP = document.querySelector('footer aside p');
yearGenerate(footerP);

createCardAdder();
