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
    const bem = useBem("SectionTeam");

    return { bem };
  },
});
</script>

<template>
  <div id="team" :class="bem()">
    <BasicSection>
      <div :class="bem('header')">
        <h2 :class="bem('title')">{{ $t("section.team.title") }}</h2>
        <p :class="bem('description')">
          {{ $t("section.team.description") }}
        </p>

        <div :class="bem('cards')">
          <div :class="bem('card')">
            <img
              :class="bem('image')"
              height="220"
              src="../static/images/team-1.jpg"
              alt="Evolve Fitness Coach"
            />

            <h2 :class="bem('cardTitle')">
              {{ $t("section.team.coach1.name") }}
            </h2>
            <p :class="bem('cardDetails')">
              {{ $t("section.team.coach1.qualification") }}
            </p>

            <p :class="bem('cardDescription')">
              {{ $t("section.team.coach1.description") }}
            </p>
          </div>

          <div :class="bem('card')">
            <img
              :class="bem('image')"
              height="220"
              src="../static/images/team-1.jpg"
              alt="Evolve Fitness Coach"
            />

            <h2 :class="bem('cardTitle')">
              {{ $t("section.team.coach2.name") }}
            </h2>
            <p :class="bem('cardDetails')">
              {{ $t("section.team.coach2.qualification") }}
            </p>

            <p :class="bem('cardDescription')">
              {{ $t("section.team.coach2.description") }}
            </p>
          </div>

          <div :class="bem('card')">
            <img
              :class="bem('image')"
              height="220"
              src="../static/images/team-1.jpg"
              alt="Evolve Fitness Coach"
            />

            <h2 :class="bem('cardTitle')">
              {{ $t("section.team.coach3.name") }}
            </h2>
            <p :class="bem('cardDetails')">
              {{ $t("section.team.coach3.qualification") }}
            </p>

            <p :class="bem('cardDescription')">
              {{ $t("section.team.coach3.description") }}
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
