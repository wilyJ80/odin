export function createTodoCard(main, name, activities) {
  let cardRemoveBtn;

  const card = document.createElement('div');
  card.classList.add('card', 'bg-primary', 'w-fit', 'shadow-xl', 'text-primary-content', 'h-auto', 'w-auto');

  (function(card) {
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    (function(cardBody) {
      const cardTitle = document.createElement('h2');
      cardTitle.textContent = name;
      cardTitle.classList.add('card-title');

      cardBody.appendChild(cardTitle);
    })(cardBody);

    (function(cardBody) {
      const cardContent = document.createElement('p');
      cardContent.textContent = activities;

      cardBody.appendChild(cardContent);
    })(cardBody);

    const cardActions = document.createElement('div');
    cardActions.classList.add('card-actions', 'justify-end');

    cardRemoveBtn = (function(cardActions) {
      const removeBtn = document.createElement('button');
      removeBtn.classList.add('btn', 'btn-error');
      removeBtn.textContent = 'Remove';

      cardActions.appendChild(removeBtn);
      return removeBtn;
    })(cardActions);

    cardBody.appendChild(cardActions);

    card.appendChild(cardBody);
  })(card);

  main.appendChild(card);
  return {
    card: card,
    button: cardRemoveBtn
  };
}
