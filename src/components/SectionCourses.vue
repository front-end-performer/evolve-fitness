<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";
import BasicSection from "@/components/BasicSection.vue";
import FontIcon from "@/components/FontIcon.vue";

export default defineComponent({
  components: {
    BasicSection,
    FontIcon,
  },
  setup() {
    const bem = useBem("SectionCourses");

    return { bem };
  },
});
</script>

<template>
  <BasicSection id="courses">
    <div :class="bem()">
      <div :class="bem('header')">
        <h2 :class="bem('title')">Here is what we have for you</h2>
        <p :class="bem('description')">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          perferendis esse itaque saepe libero inventore reiciendis quae,
          numquam laborum nostrum accusantium voluptatibus est voluptate ipsam
          praesentium corporis odio fugiat? Amet!
        </p>
      </div>

      <div :class="bem('cards')">
        <div :class="bem('card')">
          <div :class="bem('content')">
            <h3 :class="bem('cardTitle')">2X WÖCHENTLICH</h3>
            <span :class="bem('category')">HOT PILATES</span>

            <p :class="bem('details')">
              <FontIcon :class="bem('icon')" alias="clock" type="far" /> 45 min
              course
            </p>

            <ul :class="bem('list')">
              <li :class="bem('item')">1x kostenfreies Probetraining</li>
              <li :class="bem('item')">Matte und Handtuch inclusive</li>
              <li :class="bem('item')">
                Verpasste Kurse nachholen solange du die Mitgliedschaft hast
              </li>
            </ul>
          </div>

          <p :class="bem('price')">
            50€
            <span :class="bem('priceDetails')"><i>/ per 3 monathen</i></span>
          </p>
        </div>

        <div :class="bem('card')">
          <div :class="bem('popular')">most popular</div>
          <div :class="bem('content')">
            <h3 :class="bem('cardTitle')">1X WÖCHENTLICH</h3>
            <span :class="bem('category')">HOT PILATES</span>

            <p :class="bem('details')">
              <FontIcon :class="bem('icon')" alias="clock" type="far" /> 45 min
              course
            </p>

            <ul :class="bem('list')">
              <li :class="bem('item')">1x kostenfreies Probetraining</li>
              <li :class="bem('item')">Matte und Handtuch inclusive</li>
              <li :class="bem('item')">
                Verpasste Kurse nachholen solange du die Mitgliedschaft hast
              </li>
            </ul>
          </div>

          <p :class="bem('price')">
            36€
            <span :class="bem('priceDetails')"><i>/ per 3 monathen</i></span>
          </p>
        </div>

        <div :class="bem('card')">
          <div :class="bem('content')">
            <h3 :class="bem('cardTitle')">ONLINE TRAINING</h3>
            <span :class="bem('category')">HOT PILATES</span>

            <p :class="bem('details')">
              <FontIcon :class="bem('icon')" alias="clock" type="far" /> 45 min
              course
            </p>

            <ul :class="bem('list')">
              <li :class="bem('item')">1x kostenfreies Probetraining</li>
              <li :class="bem('item')">2x die Woche</li>
            </ul>
          </div>

          <p :class="bem('price')">
            40€
            <span :class="bem('priceDetails')"><i>/ per 3 monathen</i></span>
          </p>
        </div>

        <div :class="bem('card')">
          <div :class="bem('content')">
            <h3 :class="bem('cardTitle')">PERSONAL TRAINING</h3>
            <span :class="bem('category')">HOT PILATES</span>

            <p :class="bem('details')">
              <FontIcon :class="bem('icon')" alias="clock" type="far" /> 45 min
              session
            </p>

            <ul :class="bem('list')">
              <li :class="bem('item')">10x Stunden Personal Training</li>
            </ul>
          </div>

          <p :class="bem('price')">600€</p>
        </div>

        <div :class="bem('card')">
          <div :class="bem('content')">
            <h3 :class="bem('cardTitle')">VIDEO TRAINING</h3>
            <span :class="bem('category')">HOT PILATES</span>

            <p :class="bem('details')">
              <FontIcon :class="bem('icon')" alias="clock" type="far" /> 45 min
              session
            </p>

            <ul :class="bem('list')">
              <li :class="bem('item')">2x die Woche per link neuen Kurs</li>
              <li :class="bem('item')">
                Videos sind für bis zu drei Wochen verfügbar
              </li>
            </ul>
          </div>

          <p :class="bem('price')">
            600€
            <span :class="bem('priceDetails')"><i>/ per 3 monathen</i></span>
          </p>
        </div>
      </div>
    </div>
  </BasicSection>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables";
@import "@/assets/css/mixins";
@import "@/assets/css/typography";
@import "@/assets/css/mediaQueries";

/* define SectionCourses */

.SectionCourses {
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding: 100px $space-l 48px $space-l;

  &-title {
    @include font-heading-3;

    font-size: 42px;
    margin-bottom: $space-l;
  }

  &-description {
    @include font-default;
  }

  &-cards {
    display: flex;
    flex-direction: column;
    gap: $space-xxl;

    @include from-medium {
      flex-direction: row;
      flex-wrap: wrap;
      gap: $space-xl;
    }
  }

  &-card {
    background-color: $color-white;
    border-radius: $rounded-default-radius;
    box-shadow: 11px 11px 40px rgba(50, 56, 72, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: $space-xl;
    position: relative;
    flex: 0 1 25%;

    &Title {
      @include font-heading-2;
    }
  }

  &-popular {
    @include font-default-bold;

    background-color: $color-main;
    border-radius: 8px;
    color: $color-white;
    padding: 8px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }

  &-category {
    @include font-default-small-semi-bold;

    color: $color-main;
  }

  &-icon {
    font-size: 12px;
  }

  &-details {
    @include font-label-default;

    display: flex;
    gap: $space-s;
    padding-top: $space-s;
  }

  &-list {
    @include font-default;

    list-style: circle;
    padding-top: $space-l;
    padding-left: 24px;
  }

  &-price {
    @include font-heading-2;

    padding-top: $space-3xl;
    text-align: center;
  }

  &-priceDetails {
    @include font-title-regular;

    padding-top: $space-l;
  }
}
</style>
