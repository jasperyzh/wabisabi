import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        title: 'Vue is enabled!',
        // defaultUrl: 'https://www.google.com',
        // getTarget: "_blank",
        /* name: 'Jasper',
        counter: 31,
        x: 0,
        y: 0,
        keydowning: '',
        keyEnter: '', */
        value: 0,
        // result: '',
        // result: 0,
        color: '',
    },
    computed: {
        result: function(){
            if (this.value >= 37){
                return "done";
            } else {
                return "not there yet";
            }
        }
    },
    watch: {
        value: function(){
            var that = this;
            setTimeout(function(){
                that.value = 0;
            }, 3000);
        }
    },
    methods: {
        /* increase: function (num, event) {
            console.log(event);
            return this.counter += num;
        },
        updateCoordinate: function(event){
            console.log(event);
            this.x = event.clientX;
            this.y = event.clientY;
        },
        eStopPropagation: function(event){
            event.stopPropagation();
        },
        alertMe: function(event){
            alert('oh no');
        },

        showAlert: function(event){
            alert("Alert shown");
        },
        keydowningFunc: function(event){
            return this.keydowning = event.target.value;
        },
        keyEnterFunc: function(event){
            return this.keyEnter = event.target.value;
        } */
    }
});
