<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";
import BasicSection from "@/components/BasicSection.vue";
// import FontIcon from "@/components/FontIcon.vue";

export default defineComponent({
  components: {
    BasicSection,
  },
  setup() {
    const bem = useBem("SectionTeam");

    return { bem };
  },
});
</script>

<template>
  <div id="team" :class="bem()">
    <BasicSection>
      <div :class="bem('header')">
        <h2 :class="bem('title')">Our the best instructors for You</h2>
        <p :class="bem('description')">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          perferendis esse itaque saepe libero inventore reiciendis quae,
          numquam laborum nostrum accusantium voluptatibus est voluptate ipsam
          praesentium corporis odio fugiat? Amet!
        </p>

        <div :class="bem('cards')">
          <div :class="bem('card')">
            <img
              :class="bem('image')"
              height="220"
              src="../static/images/team-1.jpg"
              alt="Evolve Fitness Coach"
            />

            <h2 :class="bem('cardTitle')">Charlotte Höfer</h2>
            <p :class="bem('cardDetails')">Lead Coach / Inhaberin</p>

            <p :class="bem('cardDescription')">
              Master in NLP, Time Line Therapy und ist Master in Hypnose. Mit
              diesen beeindruckenden Werkzeugen hilft sie ihren Kunden wieder
              Licht am Ende des Tunnels zu sehen, zu spüren wie es weiter geht
              und wieder der eigene Stimme folgen zu können.
            </p>
          </div>

          <div :class="bem('card')">
            <img
              :class="bem('image')"
              height="220"
              src="../static/images/team-1.jpg"
              alt="Evolve Fitness Coach"
            />

            <h2 :class="bem('cardTitle')">Elisabeth ....</h2>
            <p :class="bem('cardDetails')">Coach</p>

            <p :class="bem('cardDescription')">
              Master in NLP, Time Line Therapy und ist Master in Hypnose. Mit
              diesen beeindruckenden Werkzeugen hilft sie ihren Kunden wieder
              Licht am Ende des Tunnels zu sehen, zu spüren wie es weiter geht
              und wieder der eigene Stimme folgen zu können.
            </p>
          </div>

          <div :class="bem('card')">
            <img
              :class="bem('image')"
              height="220"
              src="../static/images/team-1.jpg"
              alt="Evolve Fitness Coach"
            />

            <h2 :class="bem('cardTitle')">Anna ....</h2>
            <p :class="bem('cardDetails')">Coach</p>

            <p :class="bem('cardDescription')">
              Master in NLP, Time Line Therapy und ist Master in Hypnose. Mit
              diesen beeindruckenden Werkzeugen hilft sie ihren Kunden wieder
              Licht am Ende des Tunnels zu sehen, zu spüren wie es weiter geht
              und wieder der eigene Stimme folgen zu können.
            </p>
          </div>
        </div>
      </div>
    </BasicSection>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables";
@import "@/assets/css/mixins";
@import "@/assets/css/typography";
@import "@/assets/css/mediaQueries";

/* define SectionTeam */

.SectionTeam {
  background-color: $color-white;
  display: flex;
  flex-direction: column;
  gap: $space-3xl;
  padding: 40px $space-xl 48px $space-xl;

  @include from-medium {
    padding: 100px $space-l 48px $space-l;
  }

  &-header {
    text-align: center;

    @include from-medium {
      text-align: left;
    }
  }

  &-title {
    @include font-heading-1;

    font-size: 42px;
    margin-bottom: $space-l;
  }

  &-description {
    @include font-title-regular;
  }

  &-cards {
    display: flex;
    flex-direction: column;
    gap: $space-xl;

    @include from-medium {
      flex-direction: row;
    }
  }

  &-card {
    // background-color: $color-white;
    // border-radius: $rounded-default-radius;
    // box-shadow: 11px 11px 40px rgba(50, 56, 72, 0.1);
    padding: $space-xl;
    text-align: center;
    padding-top: 72px;

    &Title {
      @include font-heading-3;
    }

    &Details {
      @include font-default;

      margin-bottom: $space-s;
    }

    &Descriptions {
      @include font-default;
    }
  }

  &-image {
    border-radius: 50%;
  }

  // &-cards {
  //   display: flex;
  //   flex-direction: column;
  //   gap: $space-xl;

  //   @include from-medium {
  //     flex-direction: row;
  //   }
  // }

  // &-card {
  //   background-color: $color-white;
  //   border-radius: $rounded-default-radius;
  //   box-shadow: 11px 11px 40px rgba(50, 56, 72, 0.1);
  //   padding: $space-xl;
  // }

  //   &-content {
  //     align-content: center;
  //     display: flex;
  //     gap: $space-xl;
  //     justify-content: center;
  //     flex-direction: column;

  //     @include from-medium {
  //       gap: $space-l;
  //       flex-direction: row;
  //     }
  //   }

  //   &-column {
  //     &--left,
  //     &--right {
  //       display: flex;
  //       justify-content: center;
  //       flex-direction: column;
  //       text-align: center;
  //     }

  //     @include from-medium {
  //       &--left {
  //         flex: 1;
  //         text-align: right;
  //       }
  //       &--right {
  //         flex: 1;
  //         text-align: left;
  //       }
  //     }
  //   }

  //   &-image {
  //     display: none;

  //     @include from-medium {
  //       align-items: center;
  //       display: flex;
  //     }
  //   }

  //   &-innerBox {
  //     @include font-default;

  //     margin-bottom: $space-xl;

  //     @include from-medium {
  //       margin-bottom: $space-s;
  //     }
  //   }

  //   &-innerBox:last-of-type {
  //     margin-bottom: 0;
  //   }

  //   &-subtitle {
  //     @include font-title-semi-bold;
  //     margin-bottom: $space-xs;
  //   }
}
</style>
