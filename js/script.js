const { createApp } = Vue;

createApp({
    data(){
        return{
            apiUrl: 'server.php'
        }
    },
    methods:{
        getTodoList(){
            axios.get(this.apiUrl).then((result) => {
                console.log(result.data);
            });
        }
    },
    mounted(){
        this.getTodoList();

    }
}).mount('#app');