<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  setup() {
    const bem = useBem("LanguageSelect");
    const { locale, defaultLocale } = useI18n();
    const cookie = useCookie("lang");
    const options = ref(["de", "en"]);
    const open = ref<boolean>(false);

    const updatedLocale = computed({
      get: () => locale.value,
      set: (value) => {
        cookie.value = value;
        locale.value = value;
      },
    });

    onMounted(() => {
      if (cookie.value) {
        locale.value = cookie.value;
        return;
      }

      locale.value = defaultLocale;
    });

    return { bem, open, cookie, locale, options, updatedLocale };
  },
});
</script>

<template>
  <div :class="bem()" @blur="open = false">
    <div :class="bem('selected', { open: open })" @click="open = !open">
      {{ updatedLocale }}
    </div>
    <div :class="bem('items', { selectHide: !open })">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          updatedLocale = option;
          open = false;
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables";
@import "@/assets/css/mixins";
@import "@/assets/css/typography";

/* define LanguageSelect */

.LanguageSelect {
  align-items: center;
  display: flex;
  position: relative;
  height: 44px;
  outline: none;

  &-select {
    @include input;

    cursor: pointer;
    outline: none;
    padding: 0;

    &--primaryBlue {
      background-color: $color-white;
    }

    &--primaryWhite {
      background-color: $color-white;
    }

    &--primaryBlue,
    &--primaryWhite {
      &:hover {
        background-color: $color-white;
        border-color: $color-white;
      }
    }
  }

  &-selected {
    background-color: #0a0a0a;
    border-radius: 6px;
    border: 1px solid #666666;
    color: #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;

    &::after {
      position: absolute;
      content: "";
      top: 22px;
      right: 1em;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-color: #fff transparent transparent transparent;
    }

    &--open {
      border: 1px solid #ad8225;
      border-radius: 6px 6px 0px 0px;
    }
  }

  &-items {
    color: #fff;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #ad8225;
    border-left: 1px solid #ad8225;
    border-bottom: 1px solid #ad8225;
    position: absolute;
    background-color: #0a0a0a;
    left: 0;
    right: 0;
    z-index: 1;

    &div {
      color: #fff;
      padding-left: 1em;
      cursor: pointer;
      user-select: none;
    }

    &--selectHide {
      display: none;
    }
  }
}
</style>
