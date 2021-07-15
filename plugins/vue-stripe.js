import Vue from 'vue';
import { StripePlugin } from '@vue-stripe/vue-stripe';

// export default () => {
//   Vue.component('StripeCheckout', StripeCheckout);
// };

Vue.use(StripePlugin, {
    pk: "pk_test_51JD79xSBwW0EiKyrvFqggBXyFqc9GeOOqVGnVab06kGxqb8OvaqCApmVNVhpp9kM1rlQLUFgAYNvevP92ByDQJOw00ZB2rchyp"
})

