<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";
import LanguageSelect from "@/components/LanguageSelect.vue";
import FontIcon from "@/components/FontIcon.vue";

export default defineComponent({
  components: { LanguageSelect, FontIcon },
  setup() {
    const bem = useBem("PageHeaderTop");
    const { isMobile } = useBreakPoints();

    return { bem, isMobile };
  },
});
</script>

<template>
  <div :class="bem()">
    <div :class="bem('container')">
      <div :class="bem('contacts')">
        <FontIcon alias="envelope" label="email@email.com" />
      </div>

      <div :class="bem('topHeaderTitle')">
        <h1>{{ $t("globals.greeting") }}</h1>
      </div>

      <div :class="bem('socialLang')">
        <div :class="bem('socialContainer')">
          <span v-if="!isMobile" :class="bem('social')"
            >{{ $t("components.topHeader.follow") }}:
          </span>
          <FontIcon alias="facebook" type="fab" />
        </div>

        <LanguageSelect />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";
@import "@/assets/css/variables";
@import "@/assets/css/typography";

/** define PageHeaderTop */

.PageHeaderTop {
  background-color: $color-black;
  border-bottom: 2px solid gold;
  padding: 0 $space-l;

  &-container {
    display: flex;
    justify-content: space-between;
  }

  &-socialLang,
  &-socialContainer,
  &-topHeaderTitle,
  &-contacts {
    color: $color-white;
    display: flex;
  }

  &-social {
    @include font-default-small;

    align-items: center;
    display: flex;
    padding-right: $space-m;
  }

  &-languageSelector {
    padding-left: $space-m;
  }
}
</style>
