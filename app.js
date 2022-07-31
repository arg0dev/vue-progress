new Vue({
    el: '#app',
    data() {
        return {
            progressWidth: 0,
            percent: '%',
            timer: null,
            title: "Progress Bar with VueJS",
            start: 'Start Process',
            reset: 'Restart',
            styleObject: {
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                margin: 'auto',
                padding: '2em',
            },
            vueGrad: {
                background: 'rgb(238,174,202)',
                background: 'radial-gradient(circle, rgba(255,174,252,1) 0%, rgba(178,150,233,1) 100%)',
            },
        }
    },
    methods: {
        startProgress: function () {
            var vm = this;
            vm.timer = setInterval(() => {
                vm.progressWidth += 1
                if (vm.progressWidth >= 100) {
                    clearInterval(vm.timer)
                    return vm.progressWidth = 'OK', vm.percent = '';
                } else {

                }
            }, 70);
        },
        resetProgress: function () {
            window.location.reload();
        }
    },
});
