<template lang="html">
    <!-- <div :class="$style.app"> -->
    <div :class="$style.app">
        this is content!
        <Test />
    </div>
</template>

<script>
import Test from './components/Test.vue'
export default {
    components: {
        Test
    }
}
</script>

<style lang="scss" scoped module>
.app {
    color: green;
}
</style>
