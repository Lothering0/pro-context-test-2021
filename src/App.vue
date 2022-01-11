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
main {
  display: flex;
}

ul {
  margin: 0;
  padding: 0;
}

ul > li {
  list-style: none;
}
</style>
