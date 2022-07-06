const app = new Vue(

    {
        el: '#root',
        data: {

            lineThroughText: 0,

            todos: [
                {
                    text: 'Fare i compiti',
                    done: false,
                },
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Fare il bucato',
                    done: false,
                }
            ],

        },

        methods: {

            // Applico classe 'done' ai todo = true
            isDone: function (todo) {
                if (todo.done) {
                    return 'done';
                }
            },

            // Rimuovo l'oggetto selezionato dall'array
            removeTodo: function (todo) {
                this.todos.splice(this.todos.indexOf(todo), 1);
            },

        },


    }

);