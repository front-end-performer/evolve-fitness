<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useBem } from "@/utilities/bem";
import BasicSideMenu from "@/components/BasicSideMenu.vue";

export default defineComponent({
  components: { BasicSideMenu },
  setup() {
    const bem = useBem("Navigation");
    const { isMobile } = useBreakPoints();
    const open = ref(false);

    onMounted(() => {
      useGsap.to(".Navigation", {
        backgroundColor: "#f5f7f4",
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
    });

    return { bem, isMobile, open };
  },
});
</script>

<template>
  <div id="nav" :class="bem()">
    <div v-if="!isMobile" :class="bem('navigationLeft')">
      <a :class="bem('navLeft')" href=""> {{ $t("components.nav.home") }}</a>
      <a :class="bem('navLeft')" href=""> {{ $t("components.nav.about") }}</a>
      <a :class="bem('navLeft')" href=""> {{ $t("components.nav.courses") }}</a>
    </div>

    <div :class="bem('logoContainer')">
      <img
        :class="bem('logo')"
        src="../../static/images/evolve-logo.png"
        alt="Evolve Fitness"
      />
    </div>

    <div v-if="!isMobile" :class="bem('navigationRight')">
      <a :class="bem('navRight')" href=""> {{ $t("components.nav.prices") }}</a>
      <a :class="bem('navRight')" href=""> {{ $t("components.nav.events") }}</a>
      <a :class="bem('navRight')" href="">
        {{ $t("components.nav.contacts") }}</a
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
  position: relative;
  height: 92px;

  &-navigationLeft {
    align-items: center;
    display: flex;
    gap: $space-xl;
    flex-basis: 40%;
    justify-content: flex-end;
  }

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
  }

  &-navigationRight {
    align-items: center;
    display: flex;
    gap: $space-xl;
    flex-basis: 40%;
    justify-content: flex-start;
  }

  &-logoContainer {
    padding-left: $space-xl - 4;
    position: absolute;

    @include from-medium {
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  &-logo {
    height: 120px;
    width: 100%;
  }

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
