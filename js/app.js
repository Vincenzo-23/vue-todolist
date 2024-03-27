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
      }
    },
    methods: {
        doneToggle() {
			
            if (this.todos.done === false) {
				this.todos.done = true
			} else {
				this.todos.done = false
			}
            console.log(this.done)
        }
        
    },
    mounted(){
    }
  }).mount('#app')















