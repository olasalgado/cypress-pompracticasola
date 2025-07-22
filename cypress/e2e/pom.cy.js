import { todopage } from '../support/pages/todopage';

const todo = new todopage();

describe('ToDoMVC - Tests básicos con POM', () => {

  beforeEach(() => {

    todo.visitar();
  });


  it('añadir tarea nueva ', () => {
    todo.añadirtareanueva('pasear al perro');
    
  });

  it('completar tarea', () => {
    todo.añadirtareanueva('pasear al perro'); 
    todo.completartarea('pasear al perro ');  
  });
    
  });
