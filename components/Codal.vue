<template>
  <div class="codal">
    <img class="codal-logo logo-img" width="58">
    <h1 class="codal-title"></h1>
    <input class="codal-code" type="text" value="geen code nodig" readonly>
    <a class="codal-btn btn uppercase" target="_blank"></a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.codal-logo {
  border-radius: 50px;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
}

.codal-title {
  padding-bottom: 15px;
  font-size: 20px;
}

.codal-code {
  font-size: 29px;
  text-align: center;
  border-top: 2px dashed #e8edf0;
  border-bottom: 2px dashed #e8edf0;
  padding-top: 20px;
  padding-bottom: 20px;
  border-left: 0px;
  border-right: 0px;
  font-weight: bolder;
}
</style>
