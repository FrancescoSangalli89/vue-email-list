var app = new Vue({
    el: '#app',
    data: {
        emailCasuale: null,
        emailList: []
    },
    mounted() {
        for (let i = 1; i <= 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {

                    this.emailCasuale = response.data.response;
                    this.emailList.push(this.emailCasuale);
                    
            })
        }
    }
})