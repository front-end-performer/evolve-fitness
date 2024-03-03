<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useBem } from "../../utilities/bem";
import BasicSideMenu from "@/components/BasicSideMenu.vue";

export default defineComponent({
  components: { BasicSideMenu },
  setup() {
    const bem = useBem("BasicNewHeader");
    const { isMobile } = useBreakPoints();
    const open = ref(false);

    onMounted(() => {
      useGsap.to(".BasicNewHeader", {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        duration: 0.5,
        transition: "all 200ms ease",
        scrollTrigger: {
          trigger: ".BasicNewHeader-logoContainer",
          start: "24px 24px",
          end: "24px 24px",
          scrub: 0,
          // markers: true,
        },
      });
      useGsap.to([".BasicNewHeader", ".BasicNewHeader-logo"], {
        height: "120px",
        duration: 0.5,
        scrollTrigger: {
          trigger: [".BasicNewHeader-logoContainer", ".BasicNewHeader-logo"],
          start: "24px 24px",
          end: "24px 24px",
          scrub: 0,
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
      <a :class="bem('navLeft')" href=""> {{ $t("components.nav.home") }}</a>
      <a :class="bem('navLeft')" href=""> {{ $t("components.nav.about") }}</a>
      <a :class="bem('navLeft')" href=""> {{ $t("components.nav.courses") }}</a>
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

.BasicNewHeader {
  display: flex;
  justify-content: space-between;
  padding: $space-xl;
  padding-left: $space-3xl;
  padding-right: $space-3xl;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  &-navLeft,
  &-navRight {
    @include font-default-bold;

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
    gap: $space-3xl;

    @include medium {
      gap: $space-xl;
    }
  }

  &-logoContainer {
    // background-color: $color-gold;
    border-radius: 50%;
    height: 92px;
    // box-shadow: 0 0 20px 4px $color-gold;
  }

  &-logo {
    height: 92px;
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
