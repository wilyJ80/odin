export function createCardAdder(main) {
  const card = document.createElement('div');
  card.classList.add('card', 'bg-base-100', 'w-fit', 'shadow-xl');

  (function(card) {
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    (function(cardBody) {
      const cardTitle = document.createElement('h2');
      cardTitle.textContent = 'Create a new TODO!';
      cardTitle.classList.add('card-title');

      cardBody.appendChild(cardTitle);
    })(cardBody);

    (function(cardBody) {
      const nameLabel = document.createElement('label');
      nameLabel.textContent = 'Name';
      nameLabel.classList.add('input', 'input-bordered', 'flex', 'items-center', 'gap-2');

      (function(nameLabel) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Your TODO name';

        nameLabel.appendChild(input);
        input.classList.add('grow');
      })(nameLabel);

      const activitiesForm = document.createElement('label');
      activitiesForm.classList.add('form-control');

      (function(activitiesForm) {
        const activitiesLabel = document.createElement('div');
        activitiesLabel.classList.add('label', 'p-0');

        (function(activitiesLabel) {
          const activitiesTextArea = document.createElement('textarea');
          activitiesTextArea.classList.add('textarea', 'textarea-bordered', 'h-24', 'w-full');
          activitiesTextArea.placeholder = 'What do you want to do?';

          activitiesLabel.appendChild(activitiesTextArea);
        })(activitiesLabel);

        activitiesForm.appendChild(activitiesLabel);
      })(activitiesForm);

      cardBody.appendChild(nameLabel);
      cardBody.appendChild(activitiesForm);
    })(cardBody);

    card.appendChild(cardBody);
  })(card);

  main.appendChild(card);
}
