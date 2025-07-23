

export class todopage {


    visitar() {

      cy.visit('https://todomvc.com/examples/react/dist/');

    }
  
    

    añadirtareanueva(text) {

      cy.get('.new-todo').type(`${'pasear al perro'}{enter}`);

    
    }

  
    completartarea(text) {
        cy.get('[data-testid="todo-item-toggle"]').click();


    }

    desmarcartareacompletada(text) {
        cy.get('[data-testid="todo-item-toggle"]').click();

    }
    
    editartarea(index = 0, nuevoTexto = 'tarea editada') {
        cy.get('[data-testid="text-input"]').type(`${'pasear al perro'}{enter}`);
        cy.get('[data-testid="text-input"]').type(`${'supermercado'}{enter}`);
        cy.get('[data-testid="text-input"]').type(`${'limpiar horno'}{enter}`);
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').dblclick();
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').clear().type(`${nuevoTexto}{enter}`);

      }

      borrartareascompletadas() {
        cy.get('.clear-completed').click();

      }


    }

