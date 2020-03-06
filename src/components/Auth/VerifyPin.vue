<template>
  <form class="border p-3" v-on:submit.prevent="$emit('verifyPin', pin)">
    <p class="text-center font-weight-bold">Enter Your 4 Digit Pin To Proceed</p>
    <div class="form-group">
      <input
        required
        class="form-control"
        v-model="pin"
        type="password"
        placeholder="Enter Four Digit Pin"
        maxlength="4"
      />
    </div>
    <button
      type="submit"
      :disabled="pin<1"
      class="btn d-block btn-primary text-center mx-auto"
    >Enter Pin</button>
  </form>
</template>

<script>
export default {
  name: "Verify",
  data() {
    return {
      pin: ""
    };
  }
};
</script>
