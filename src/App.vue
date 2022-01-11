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

<style scoped>
main {
  display: flex;
}
</style>
