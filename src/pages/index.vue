<script lang="ts">
import { defineComponent } from "vue";
import img1 from "../../public/slider/1.jpg";
import img2 from "../../public/slider/2.jpg";
import img3 from "../../public/slider/3.jpg";
import img4 from "../../public/slider/5.jpg";
import img5 from "../../public/slider/6.jpg";
import { useBem } from "@/utilities/bem";
import SectionAbout from "@/components/SectionAbout.vue";
import SectionCourses from "@/components/SectionCourses.vue";
import SectionTeam from "@/components/SectionTeam.vue";
import SectionTestimonials from "@/components/SectionTestimonials.vue";

export default defineComponent({
  components: {
    SectionAbout,
    SectionCourses,
    SectionTeam,
    SectionTestimonials,
  },
  setup() {
    const bem = useBem("HomePage");
    const images = [img1, img2, img3, img4, img5];

    return { bem, images, img1 };
  },
});
</script>

<template>
  <div :class="bem()">
    <div
      :class="bem('hero')"
      :style="{
        backgroundImage: `linear-gradient(100deg, rgba(50, 56, 72, .68) 4%, rgba(0, 0, 0, 0)), url(${img1})`,
      }"
    >
      <div :class="bem('heroContent')">
        <h1 :class="bem('heroContentTitle')">
          Unleash your body potential by stretching your mind and body
        </h1>
        <p :class="bem('heroContentDescription')">
          Our classes are created to help you shift your energy and build
          internal strength that will last for a lifetime. They are inspired by
          the fundamentals of Pilates and the love of movement.
        </p>
      </div>
    </div>
    <!-- <section :class="bem('sliderContainer')"> -->
    <!-- <Carousel :items-to-show="1">
        <Slide v-for="(image, index) in images" :key="index">
          <div class="carousel__item">
            <img :class="bem('image')" :src="image" alt="evolve image" />
          </div> -->

    <!-- <div :class="bem('box')">
            <h2 :class="bem('boxTitle')">
              Unleash your body potential by stretching your mind and body
            </h2>
            <p :class="bem('boxDescription')">
              Our classes are created to help you shift your energy and build
              internal strength that will last for a lifetime. They are inspired
              by the fundamentals of Pilates and the love of movement.
            </p>
          </div> -->
    <!-- </Slide>
      </Carousel> -->
    <!-- </section> -->

    <SectionAbout />
    <SectionCourses />
    <SectionTeam />
    <SectionTestimonials />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";
@import "@/assets/css/variables";
@import "@/assets/css/typography";
@import "@/assets/css/mediaQueries";

/* define HomePage */

.HomePage {
  background-color: #fcf8f3;
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

  &-hero {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 90%;
    position: relative;
    height: 100vh;
    width: 100%;

    @include from-medium {
      background-position: center;
    }

    &Content {
      color: $color-white;
      left: 25%;
      max-width: 768px;
      position: absolute;
      top: 45%;
      transform: translate(-25%, -50%);

      &Title {
        @include font-heading-1;

        margin-bottom: $space-l;
      }

      &Description {
        @include font-title-regular;
      }
    }
  }
}
</style>
