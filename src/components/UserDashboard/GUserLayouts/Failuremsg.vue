<template>
  <div>
    <div
      v-if="msg"
      class="alert text-center alert-danger alert-dismissible mt-2 fade show"
      role="alert"
    >
      <span class="text-center d-inline-block font-weight-bolder">{{msg}}</span>
      <button
        type="button"
        @click="$emit('closeMsg')"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Failuremsg",
  props: ["msg"]
};
</script>