<script setup lang="ts">
import img1 from "../assets/slider/1.jpg";
import { useBem } from "../utilities/bem";

const bem = useBem("HomePage");
const { data } = await useFetch("/api/hero");
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
          {{ $t("section.hero.title") }}
        </h1>
        <p :class="bem('heroContentDescription')">
          {{ $t("section.hero.description") }}
        </p>
      </div>
    </div>

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
