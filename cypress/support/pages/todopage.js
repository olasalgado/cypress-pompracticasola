

export class todopage {


    visitar() {

      cy.visit('https://todomvc.com/examples/react/dist/');

    }
  
    

    añadirtareanueva(text) {

      cy.get('.new-todo').type(`${'pasear al perro'}{enter}`);

    
    }
  

  
    completartarea(index = 0) {
      cy.get(cy.get('[data-testid="todo-item-toggle"]')).click 
    }
    
    

}