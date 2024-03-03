<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "../utilities/bem";
import BasicSection from "@/components/BasicSection.vue";
// import FontIcon from "@/components/FontIcon.vue";

export default defineComponent({
  components: {
    BasicSection,
  },
  setup() {
    const bem = useBem("SectionTestimonials");
    const { isMobile } = useBreakPoints();
    const testimonials = [
      " 1 Wie ich den Kurs von Charlotte finde? Ich finde er ist der Hammer. Besonders mag ich es, wie sie uns immer wieder mit ihrer lockeren Art dazu bringt 100 % zu geben. Und auch wenn ich schon lange dabei bin, ist es nie langweilig da wir immer wieder gefordert werden. Mir macht es einfach riesigen Spaß, immer wieder dabei zu sein Weiter so Charlotte 💪",
      " 2 Wie ich den Kurs von Charlotte finde? Ich finde er ist der Hammer. Besonders mag ich es, wie sie uns immer wieder mit ihrer lockeren Art dazu bringt 100 % zu geben. Und auch wenn ich schon lange dabei bin, ist es nie langweilig da wir immer wieder gefordert werden. Mir macht es einfach riesigen Spaß, immer wieder dabei zu sein Weiter so Charlotte 💪",
      " 3 Wie ich den Kurs von Charlotte finde? Ich finde er ist der Hammer. Besonders mag ich es, wie sie uns immer wieder mit ihrer lockeren Art dazu bringt 100 % zu geben. Und auch wenn ich schon lange dabei bin, ist es nie langweilig da wir immer wieder gefordert werden. Mir macht es einfach riesigen Spaß, immer wieder dabei zu sein Weiter so Charlotte 💪",
      " 4 Wie ich den Kurs von Charlotte finde? Ich finde er ist der Hammer. Besonders mag ich es, wie sie uns immer wieder mit ihrer lockeren Art dazu bringt 100 % zu geben. Und auch wenn ich schon lange dabei bin, ist es nie langweilig da wir immer wieder gefordert werden. Mir macht es einfach riesigen Spaß, immer wieder dabei zu sein Weiter so Charlotte 💪",
      " 5 Wie ich den Kurs von Charlotte finde? Ich finde er ist der Hammer. Besonders mag ich es, wie sie uns immer wieder mit ihrer lockeren Art dazu bringt 100 % zu geben. Und auch wenn ich schon lange dabei bin, ist es nie langweilig da wir immer wieder gefordert werden. Mir macht es einfach riesigen Spaß, immer wieder dabei zu sein Weiter so Charlotte 💪",
    ];

    return { bem, isMobile, testimonials };
  },
});
</script>

<template>
  <BasicSection>
    <div :class="bem()">
      <div :class="bem('header')">
        <h2 :class="bem('title')">What our customers saying about us</h2>
      </div>

      <Carousel
        :items-to-show="isMobile ? 1 : 2.95"
        :wrap-around="!isMobile"
        :transition="500"
      >
        <Slide v-for="(item, index) in testimonials" :key="index">
          <div class="carousel__item">
            <p>{{ item }}</p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </BasicSection>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables";
@import "@/assets/css/mixins";
@import "@/assets/css/typography";
@import "@/assets/css/mediaQueries";

/* define SectionTestimonials */

.SectionTestimonials {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px $space-l 48px $space-l;

  @include from-medium {
    gap: 72px;
    padding: 100px $space-l 100px $space-l;
  }

  &-header {
    text-align: center;

    @include from-medium {
      text-align: left;
    }
  }

  &-title {
    @include font-heading-3;

    font-size: 42px;
    margin-bottom: $space-l;
  }
}

.carousel__slide {
  padding: $space-xl;
}

.carousel__viewport {
  overflow: visible !important;
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  background-color: $color-white;
  border-radius: $rounded-default-radius;
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
