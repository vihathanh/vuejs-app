import Vue from 'vue';

import Registration from '@/components/Registration/index';

const RegistrationsComponent = Vue.extend({
  components: {
    appRegistration: Registration,
  },
  props: {
    id: Infinity,
    name: String,
    registered: Boolean,
  },
  methods: {
    userRegistered(user) {
      const date = new Date;
      this.registrations.push({ userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay() });
    },
    userUnregistered(registration) {
      const user = this.users.find(user => {
        return user.id === registration.userId;
      });
      user.registered = false;
      this.registrations.splice(this.registrations.indexOf(registration), 1);
    },
    unregister(registration) {
      this.$emit('userUnregistered', registration);
    },
  },
  computed: {

    total() {
      return this.registrations.length;
    },
  },
  data() {
    return {
      registrations: [],
    };
  },
});

export default RegistrationsComponent;