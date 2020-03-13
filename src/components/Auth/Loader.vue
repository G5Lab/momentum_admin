<template>
  <div class="loader1">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>


<style  scoped>
.loader1 {
  display: inline-block;
  font-size: 0px;
  padding: 0px;
}

.loader1 span {
  vertical-align: middle;
  border-radius: 100%;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 4px 10px;
  -webkit-animation: loader1 1s linear infinite alternate;
  animation: loader1 1s linear infinite alternate;
}

.loader1 span:nth-child(1) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: rgba(255, 255, 255, 0.849);
}

.loader1 span:nth-child(2) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: rgba(255, 255, 255, 0.849);
}

.loader1 span:nth-child(3) {
  -webkit-animation-delay: -0.26666s;
  animation-delay: -0.26666s;
  background: rgba(255, 255, 255, 0.849);
}

.loader1 span:nth-child(4) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: rgba(255, 255, 255, 0.849);
}

.loader1 span:nth-child(5) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: rgba(182, 207, 224, 0.849);
}

.loader1 span:nth-child(6) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: rgba(201, 187, 187, 0.4);
}

.loader1 span:nth-child(7) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: rgba(255, 255, 255, 0.849);
}

@keyframes loader1 {
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
}

@keyframes loader1 {
  from {
    -webkit-transform: scale(0, 0);
  }

  to {
    -webkit-transform: scale(1, 1);
  }
}
</style>