<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useBem } from "../../utilities/bem";
import BasicSideMenu from "@/components/BasicSideMenu.vue";

export default defineComponent({
  components: { BasicSideMenu },
  setup() {
    const bem = useBem("Navigation");
    const { isMobile } = useBreakPoints();
    const open = ref(false);

    onMounted(() => {
      useGsap.to(".Navigation", {
        backgroundColor: "rgba(255, 255, 255)",
        duration: 0.5,
        transition: "all 200ms ease",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        scrollTrigger: {
          trigger: ".Navigation",
          start: "32px 32px",
          end: "32px 32px",
          scrub: 0,
          // markers: true,
        },
      });
      useGsap.to(".Navigation-logo", {
        duration: 0.5,
        transition: "all 500ms ease",
        height: "96px",
        width: "96px",
        position: "absolute",
        left: "24px",
        scrollTrigger: {
          trigger: ".Navigation-logo",
          start: "32px 32px",
          end: "32px 32px",
          scrub: 0,
          // markers: true,
        },
      });
    });

    return { bem, isMobile, open };
  },
});
</script>

<template>
  <div id="nav" :class="bem()">
    <div :class="bem('logoContainer')">
      <img
        :class="bem('logo')"
        src="../../static/images/evolve-logo.png"
        alt="Evolve Fitness"
      />
    </div>

    <div v-if="!isMobile" :class="bem('navigationRight')">
      <router-link :class="bem('navLeft')" to="/">
        {{ $t("components.nav.home") }}</router-link
      >
      <router-link :class="bem('navLeft')" to="/#about">
        {{ $t("components.nav.about") }}</router-link
      >
      <router-link :class="bem('navLeft')" to="/#courses">
        {{ $t("components.nav.courses") }}</router-link
      >
      <router-link :class="bem('navRight')" to="/#team">
        {{ $t("components.nav.team") }}</router-link
      >
      <!-- <router-link :class="bem('navRight')" to="/#events"> {{ $t("components.nav.events") }}</router-link> -->
      <router-link :class="bem('navRight')" to="/#contacts">
        {{ $t("components.nav.contacts") }}</router-link
      >
    </div>

    <div v-if="isMobile" :class="bem('mobileMenu')" @click="open = true">
      <FontIcon :class="bem('icon')" alias="fa-bars" type="fas" />
    </div>

    <Teleport to="body">
      <BasicSideMenu v-if="open" @close="open = false" />
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";
@import "@/assets/css/variables";
@import "@/assets/css/typography";
@import "@/assets/css/_mediaQueries";

/** define Navigation */

.Navigation {
  display: flex;
  justify-content: space-between;
  padding: $space-l $space-xl;
  position: relative;
  // height: auto;

  &-navLeft,
  &-navRight {
    @include font-default;

    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 30px;
  }

  &-navLeft:hover,
  &-navRight:hover {
    color: $color-main;
    font-weight: 400;
    text-decoration: underline;
  }

  &-navigationRight {
    align-items: center;
    background-color: rgba($color: #fff, $alpha: 0.6);
    border-radius: 8px;
    display: flex;
    gap: $space-xl;
    padding: $space-l;
    height: fit-content;

    @include large {
      gap: $space-3xl;
    }
  }

  &-logo {
    height: 120px;
    width: 120px;
  }

  // &-logo:hover {
  //   border-radius: 50%;
  //   box-shadow: 2px 3px 18px #fcf8f3;
  // }

  &-mobileMenu {
    background-color: $color-secondary;
    border: 1px solid $color-main;
    cursor: pointer;
    display: flex;
    font-size: 20px;
    justify-content: center;
    height: 42px;
    position: absolute;
    right: $space-xl;
    line-height: 40px;
    top: 25%;
    text-align: center;
    width: 46px;
  }
}
</style>
