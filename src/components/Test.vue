<template lang="html">
    <div>
        thisis test com
        <img
            :class="$style.img"
            src="@/assets/images/test.jpg"
            alt=""
        >
        <img
            :class="$style.img"
            src="@/assets/images/test.png"
            alt=""
        >
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped module>
.img {
    width: 80px;
    height: 80px;
}
</style>
