<template>
  <div class="loader1">
    <span></span>
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
  width: 30px;
  height: 30px;
  margin: 4px 10px;
  -webkit-animation: loader1 1s linear infinite alternate;
  animation: loader1 1s linear infinite alternate;
}

.loader1 span:nth-child(1) {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.7s;
  background: rgba(21, 65, 129, 0.4);
}

.loader1 span:nth-child(2) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: rgba(22, 70, 97, 0.849);
}

.loader1 span:nth-child(3) {
  -webkit-animation-delay: -1.16666s;
  animation-delay: -0.26666s;
  background: rgba(110, 81, 81, 0.849);
}

.loader1 span:nth-child(4) {
  -webkit-animation-delay: -1.3s;
  animation-delay: -0.8s;
  background: rgba(22, 70, 97, 0.849);
}

.loader1 span:nth-child(5) {
  -webkit-animation-delay: -1.5s;
  animation-delay: -1.5s;
  background: rgba(182, 207, 224, 0.849);
}

.loader1 span:nth-child(6) {
  -webkit-animation-delay: -1.8s;
  animation-delay: -1.8s;
  background: rgba(201, 187, 187, 0.4);
}

.loader1 span:nth-child(7) {
  -webkit-animation-delay: -1.5s;
  animation-delay: -1.5s;
  background: rgba(201, 187, 187, 0.4);
}

.loader1 span:nth-child(8) {
  -webkit-animation-delay: -1.2s;
  animation-delay: -1.2s;
  background: rgba(22, 70, 97, 0.849);
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