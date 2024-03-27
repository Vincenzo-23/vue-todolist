const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: [
            {
                text: "Fare la spesa",
                done: false,
            },
            {
                text: "Fare i compiti",
                done: false,
            },
            {
                text: "Lavare la macchina",
                done: false,
            },
            {
                text: "Sistemare camera",
                done: false,
            },
            {
                text: "Cucinare",
                done: false,
            },
          ],
          inputValue: "",
      }
    },
    methods: {
        removeTodo(i){
            this.todos.splice(i,1)
        },
        addTodo(){
            if(this.inputValue !== "") {

                this.todos.push(
                    {
                        text: this.inputValue,
                        done: false,
                    }
                )
            }

            this.inputValue = ""
        },
        doneToggle(i){
            if (this.todos[i].done === false) {
				this.todos[i].done = true
			} else {
				this.todos[i].done = false
			}
        }
        
    },
    
  }).mount('#app')






  








