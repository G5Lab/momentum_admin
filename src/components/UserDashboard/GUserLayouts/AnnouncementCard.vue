<template>
  <div class="card border-left-primary shadow h-100 py-2">
    <div class="card-header">
      <p class>
        <span class="rounded small p-1 bg-light">Sent Date:</span>
        {{sentDate}}
      </p>
      <p class>
        <span class="rounded small p-1 bg-light">Desc:</span>
        {{desc}}
      </p>
      <button class="btn btn-outline-dark" @click="toggleClass()">Read More</button>
    </div>
    <div v-bind:class="[isActive ? 'close' : '']" class="card-body">{{body}}</div>
  </div>
</template>
<script>
export default {
  name: "AnnouncementCard",
  props: ["body", "sentDate", "desc"],
  data: function() {
    return {
      isActive: true
    };
  },
  methods: {
    toggleClass: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
.card {
  transition: all 0.5s;
  margin: 0.45rem;
}
.card:hover {
  transform: translateY(6px);
  box-shadow: 0px 1px 3px 3px rgba(0, 0, 255, 0.493);
}
.close {
  display: none;
}

.div {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
}
</style>