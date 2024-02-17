<script lang="ts">
import { defineComponent } from "vue";
import img1 from "../../public/slider/1.jpg";
import img2 from "../../public/slider/2.jpg";
import img3 from "../../public/slider/3.jpg";
import img4 from "../../public/slider/5.jpg";
import img5 from "../../public/slider/6.jpg";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  setup() {
    const bem = useBem("HomePage");
    const images = [img1, img2, img3, img4, img5];

    return { bem, images };
  },
});
</script>

<template>
  <div :class="bem()">
    <div :class="bem('sliderContainer')">
      <Carousel :items-to-show="1">
        <Slide v-for="(image, index) in images" :key="index">
          <div class="carousel__item">
            <img :class="bem('image')" :src="image" alt="evolve image" />
          </div>

          <div :class="bem('box')">
            <!-- <div :class="bem('boxContent')"> -->
            <h2 :class="bem('boxTitle')">
              Unleash your body potential by stretching your mind and body
            </h2>
            <p :class="bem('boxDescription')">
              Our classes are created to help you shift your energy and build
              internal strength that will last for a lifetime. They are inspired
              by the fundamentals of Pilates and the love of movement.
            </p>
            <!-- </div> -->
          </div>
        </Slide>
      </Carousel>
    </div>

    <div :class="bem('courses')"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";
@import "@/assets/css/variables";
@import "@/assets/css/typography";
@import "@/assets/css/mediaQueries";

/* define HomePage */

.HomePage {
  &-sliderContainer {
    background-color: $color-main;
  }

  .carousel__item {
    height: 100%;
    width: 100%;
  }

  &-image {
    height: 100%;
    width: 100%;
  }

  &-box {
    position: absolute;
    top: auto;
    left: auto;
    display: flex;
    flex-direction: column;
    gap: $space-xxl;
    max-width: 940px;
    padding: $space-xl;
    text-align: left;

    @include from-medium {
      top: 25%;
      left: 10%;
    }

    &Title {
      @include font-heading-1;
      line-height: 120%;

      @include from-medium {
        @include font-heading-hero;
        line-height: 120%;
      }
    }
    &Description {
      @include font-title-regular;
      line-height: 150%;
    }
  }

  &-courses {
    background-color: white;
    height: 500px;
    width: 100%;
  }
}
</style>
