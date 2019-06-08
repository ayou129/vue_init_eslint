<template lang="html">
    <div :class="$style.test">
        123
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    components: {
    }
}
</script>

<style lang="scss" scoped module>
.test{
    color: red;
    font-size: 700px;
}
</style>
