export const mixin = {
    created() {
        console.log('created from mixin');
    },
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        increase() {
            this.counter++;
        },
        decrease() {
            this.counter--;
        }
    }
}