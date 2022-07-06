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

            //se la proprietà done è uguale a true,
            // visualizzare il testo del todo sbarrato.

            isDone: function (todo) {
                if (todo.done) {
                    return 'done';
                }
            },

        },

    }

);