<template>
    <carousel-3d>
        <slide :index="0">
            <img class="d-block w-100" src="@/assets/carousel1.jpg" alt="first slide">
        </slide>
        <slide :index="1">
            <img class="d-block w-100" src="@/assets/carousel2.jpg" alt="second slide">
        </slide>
        <slide :index="2">
            <img class="d-block w-100" src="@/assets/carousel3.jpg" alt="third slide">
        </slide>
    </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    components: {
        Carousel3d,
        Slide
    },
}
</script>