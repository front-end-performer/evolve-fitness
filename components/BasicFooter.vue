<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "../utilities/bem";
import BasicSection from "@/components/BasicSection.vue";
import FontIcon from "@/components/FontIcon.vue";

export default defineComponent({
  components: {
    BasicSection,
    FontIcon,
  },
  setup() {
    const bem = useBem("Footer");

    return { bem };
  },
});
</script>

<template>
  <div id="contacts" :class="bem()">
    <BasicSection :class="bem('section')">
      <div :class="bem('column')">
        <div :class="bem('innerBox', 'about')">
          <div :class="bem('titleContainer')">
            <img
              height="72"
              src="../static//images//evolve-logo.png"
              alt="evolve fitness"
            />
            <p :class="bem('subtitle')">{{ $t("section.footer.title") }}</p>
          </div>
          <p :class="bem('description')">
            {{ $t("section.footer.description") }}
          </p>
        </div>
        <div :class="bem('innerBox', 'contacts')">
          <h2 :class="bem('title')">{{ $t("section.footer.contact") }}</h2>
          <p :class="bem('info', 'address')">
            Spiegelstr. 11, 32361 Preußisch Oldendorf
          </p>
          <div :class="bem('important')">
            <p>
              <a
                :class="bem('info', 'phone')"
                href="https://wa.me/+4915164072188"
                >+(49)151 640 72188</a
              >
            </p>

            <p>
              <a :class="bem('info', 'email')" href="mailto:evolve@gmail.com"
                >now-evolve@gmail.com</a
              >
            </p>
          </div>
        </div>

        <div :class="bem('innerBox', 'social')">
          <FontIcon :class="bem('icon')" alias="instagram" type="fab" />
          <FontIcon :class="bem('icon')" alias="youtube" type="fab" />
        </div>
      </div>
      <div :class="bem('divider')" />
      <div :class="bem('coopyrights')">
        {{
          $t("section.footer.copyrights", {
            date: new Date().getFullYear(),
          })
        }}
      </div>
    </BasicSection>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables";
@import "@/assets/css/mixins";
@import "@/assets/css/typography";

/* define Footer */

.Footer {
  background-color: #364d5e;
  color: #fcf8f3;
  padding: 60px 40px 40px;

  &-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &-column {
    display: flex;
    gap: $space-xl;
    padding-bottom: 32px;
  }

  &-innerBox {
    &--about {
      flex-basis: 45%;
    }

    &--social {
      align-items: flex-start;
      display: flex;
      gap: $space-l;
    }
  }

  &-titleContainer {
    align-items: center;
    display: flex;
    gap: $space-l;
  }

  &-icon {
    cursor: pointer;
    font-size: 24px;
    color: #fcf8f3;
  }

  &-contacts {
    display: flex;
    flex-direction: column;
  }

  &-title {
    @include font-heading-2;

    margin-bottom: $space-s;
  }

  &-subtitle {
    @include font-label-default-semi-bold;
  }

  &-description {
    margin-top: $space-m;
  }

  &-description,
  &-info,
  &-coopyrights {
    @include font-default;
  }

  &-info {
    margin-bottom: 4px;

    &--phone,
    &--email {
      @include font-title-semi-bold;

      color: #364d5e;
    }
  }

  &-important {
    background-color: #fcf8f3;
    border-radius: $rounded-default-radius;
    padding: 8px;
    margin-top: $space-m;
  }

  &-divider {
    border: 1px solid #fcf8f3;
    width: 100%;
  }

  &-coopyrights {
    @include font-label-default-semi-bold;
  }
}
</style>
