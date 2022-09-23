import { v4 as uuidv4 } from 'uuid';

export function getTodoItem({ id, name, status, onDelete, onUpdate }) {
  const element = document.createElement('div');

  element.id = uuidv4()
  element.append(getName({name, status}));
  element.append(getCheckbox({ status, onClick: onUpdate }));
  element.append(getDeleteButton({ onClick: onDelete }))

  return element;
}

export function getDeleteButton ({ onClick }) {
  const button = document.createElement('button');
  button.id = uuidv4()
  button.innerHTML = 'Remover';

  button.onclick = () => {
    button.disabled = 'disabled';
    onClick();
  };

  return button;
}

export function getCheckbox({ status, onClick }) {
  const button = document.createElement('button');
  button.id = uuidv4()
  button.innerHTML = status === 'pending' ? 'complete' : 'undo';

  button.onclick = () => {
    onClick();
  };

  return button;
}

export function getName({name, status}) {
  const p = document.createElement('p');
  p.id = uuidv4()
  p.innerHTML = name;

  if(status === 'completed') {
    p.style.setProperty("text-decoration", "line-through");
  }

  return p;
}