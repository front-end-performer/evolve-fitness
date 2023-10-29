<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  setup() {
    const bem = useBem("LanguageSelect");
    const { locale, defaultLocale } = useI18n();
    const open = ref<boolean>(false);
    const cookie = useCookie("lang");
    const options = ref([
      {
        type: "de",
        icon: "icons/deutschland-48.png",
      },
      {
        type: "en",
        icon: "icons/united-kingdom-48.png",
      },
    ]);

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

    <div v-if="open" :class="bem('items', { selectHide: !open })">
      <div
        v-for="option of options"
        :key="option.type"
        :class="bem('item')"
        @click="
          updatedLocale = option.type;
          open = false;
        "
      >
        {{ option.type }}
        <nuxt-img
          :class="bem('itemiconFlag')"
          :src="option.icon"
          :alt="`${option.type} hi-tab intensive training`"
        />
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
  outline: none;

  &-select {
    @include input;
  }

  &-selected {
    @include font-default-small;

    border-radius: $rounded-small-radius;
    border: 1px solid $color-bg;
    padding-left: $space-s;
    cursor: pointer;
    user-select: none;

    &::after {
      position: relative;
      content: "";
      top: $space-l - 2;
      right: 0;
      width: 0;
      height: 0;
      margin: 0 $space-s;
      border: $space-xs solid transparent;
      border-color: $color-white transparent transparent transparent;
    }

    &--open {
      border: 1px solid $color-gold;
      border-radius: $rounded-small-radius $rounded-small-radius 0 0;
    }
  }

  &-items {
    border-radius: 0 0 $rounded-small-radius $rounded-small-radius;
    overflow: hidden;
    border-right: 1px solid $color-gold;
    border-left: 1px solid $color-gold;
    border-bottom: 1px solid $color-gold;
    position: absolute;
    background-color: $color-black;
    left: 0;
    right: 0;
    top: 100%;
    z-index: 1;

    &--selectHide {
      display: none;
    }
  }

  &-item {
    @include font-default-small;

    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: $space-s;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: $color-gold;
    }

    &iconFlag {
      width: $space-l;
    }
  }
}
</style>
