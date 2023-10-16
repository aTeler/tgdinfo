

//alert("clientes!!!");

const { createApp } = Vue

createApp({
    data() {
        return {
            url: "https://randomuser.me/api/?results=25&nat=es,mx,br",
            error: false,
            datos: [],
            nombre: "Clientes!!!",
            clientes: []
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.clientes = data.results
            })
            .catch(error => alert("Ups... se produjo un error: " + error))
        }
    },
    created(){
        this.fetchData(this.url)
    }

    
}).mount('#app')


//alert("entro en java clientes!");



