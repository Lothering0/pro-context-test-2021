<template>
  <main>
    <LeftPanel />
    <RightPanel />
  </main>
</template>

<script>
import LeftPanel from '@/components/LeftPanel'
import RightPanel from '@/components/RightPanel'

export default {
  name: 'App',
  components: {
    LeftPanel,
    RightPanel
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Ubuntu;
  margin: 0;
}

main {
  display: flex;
  justify-content: space-between;

  margin: 20px;
}

ul {
  margin: 0;
  padding: 0;
}

ul > li {
  list-style: none;
  margin: 0;
}

.panel {
  width: 40%;
  height: 92vh;

  border: 1px solid black;

  padding: 40px 20px;

  overflow-x: auto;
}

label {
  cursor: pointer;
}
</style>
