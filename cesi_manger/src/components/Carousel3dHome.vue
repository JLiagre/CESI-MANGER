<template>
    <carousel-3d class="carousel">
        <slide :index="0">
            <img class="d-block-w-100" src="@/assets/carousel1.jpg" alt="first slide">
        </slide>
        <slide :index="1">
            <img class="d-block-w-100" src="@/assets/carousel2.jpg" alt="second slide">
        </slide>
        <slide :index="2">
            <img class="d-block-w-100" src="@/assets/carousel3.jpg" alt="third slide">
        </slide>
        <slide :index="3">
            <img class="d-block-w-100" src="@/assets/carousel4.jpg" alt="fourth slide">
        </slide>
        <slide :index="4">
            <img class="d-block-w-100" src="@/assets/carousel5.jpg" alt="fifth slide">
        </slide>
        <slide :index="5">
            <img class="d-block-w-100" src="@/assets/carousel6.jpg" alt="sixth slide">
        </slide>
        <slide :index="6">
            <img class="d-block-w-100" src="@/assets/carousel7.jpg" alt="seventh slide">
        </slide>
        <slide :index="7">
            <img class="d-block-w-100" src="@/assets/carousel8.jpg" alt="eighth slide">
        </slide>
    </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    name: 'Carousel3dHome',
    components: {
        Carousel3d,
        Slide
    }
}
</script>

<style>
    .d-block-w-100 {
        width: auto;
        height: 300px;
    }
</style>