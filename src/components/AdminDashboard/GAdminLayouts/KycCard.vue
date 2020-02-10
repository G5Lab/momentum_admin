<template>
  <div class="items">
    <i>{{Uname}}</i>

    <p>{{desc}}</p>
    <div class="project-name">
      <p>{{Ukyc}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "KycCard",
  props: {
    Uname: {
      type: String
    },
    desc: {
      type: String
    },
    Ukyc: {
      type: String
    }
  }
};
</script>
<style scoped>
body {
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}

.items {
  border-radius: 5px;
  display: grid;
  grid-gap: 3px;
  cursor: pointer;
  border: 3px solid black;
  transition: all 1.6s;
  max-width: 20rem;
  padding: 0 0.2rem;
  margin: 0.2rem 0;
}
.project-name {
  display: flex;
  align-items: center;
  justify-content: center;
}
i {
  font-size: 2rem;
  color: #2d2d30;
  transform: translateY(0px);
  transition: all 0.6s;
}

.icon-wrapper {
  align-self: end;
}

.project-name p {
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #2c2c2e;
  transform: translateY(0px);
  transition: all 0.5s;
}

.items:hover {
  border: 3px dotted black;
}
.project-name p:hover {
  transform: translateY(-10px);
}
i:hover {
  transform: translateY(5px);
}
</style>