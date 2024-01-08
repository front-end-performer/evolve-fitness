<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  emits: ["close"],
  setup() {
    const bem = useBem("BasicSideMenu");
    const { isMobile } = useBreakPoints();
    const socials = [
      {
        icon: "fa-instagram",
        value: "...",
      },
      {
        icon: "fa-youtube",
        value: "...",
      },
    ];

    return { bem, isMobile, socials };
  },
});
</script>

<template>
  <div :class="bem()">
    <div :class="bem('closeContainer')">
      <FontIcon
        :class="bem('icon', 'close')"
        alias="fa-xmark"
        type="fas"
        @click="$emit('close')"
      />
    </div>

    <div :class="bem('conatiner')">
      <img
        :class="bem('logo')"
        src="../static/images/evolve-logo.png"
        alt="Evolve Fitness"
      />
    </div>

    <ul :class="bem('navList')">
      <li :class="bem('list')">
        <a :class="bem('listLink')" href=""> {{ $t("components.nav.home") }}</a>
      </li>
      <li :class="bem('list')">
        <a :class="bem('listLink')" href="">
          {{ $t("components.nav.about") }}</a
        >
      </li>
      <li :class="bem('list')">
        <a :class="bem('listLink')" href="">
          {{ $t("components.nav.courses") }}</a
        >
      </li>
      <li :class="bem('list')">
        <a :class="bem('listLink')" href="">
          {{ $t("components.nav.prices") }}</a
        >
      </li>
      <li :class="bem('list')">
        <a :class="bem('listLink')" href="">
          {{ $t("components.nav.events") }}</a
        >
      </li>
      <li :class="bem('list')">
        <a :class="bem('listLink')" href="">
          {{ $t("components.nav.contacts") }}</a
        >
      </li>
    </ul>

    <div :class="bem('socials')">
      <a
        v-for="(social, index) in socials"
        :key="index"
        :href="social.value"
        :class="bem('social')"
      >
        <FontIcon :class="bem('icon')" :alias="social.icon" type="fab"
      /></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";
@import "@/assets/css/variables";
@import "@/assets/css/typography";
@import "@/assets/css/_mediaQueries";

/** define BasicSideMenu */

.BasicSideMenu {
  background-color: $color-white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  right: 0;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  &-conatiner {
    text-align: center;
    padding: $space-xxl 0;
  }

  &-logo {
    height: 175px;
    width: auto;
  }

  &-navList {
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    list-style: none;
  }

  &-list {
    padding: $space-xl 0;
  }

  &-listLink:hover {
    color: $color-main;
  }

  &-closeContainer {
    background-color: $color-secondary;
    border: 1px solid $color-main;
    cursor: pointer;
    display: flex;
    font-size: 20px;
    justify-content: center;
    height: 42px;
    position: absolute;
    right: 0;
    line-height: 40px;
    text-align: center;
    width: 46px;
  }

  &-icon {
    @include font-heading-2;

    color: $color-black;

    &--close {
      color: inherit;
      font-size: $space-xl;
    }
  }

  &-socials {
    align-items: center;
    display: flex;
    gap: $space-xxl;
    justify-content: center;
    padding: $space-xxl 0;
  }
}
</style>
