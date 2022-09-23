import { listenSubmit, loadTodoList, sortList } from './handlers';

function initialize() {
  loadTodoList();
  listenSubmit();
  sortList();
}

initialize();