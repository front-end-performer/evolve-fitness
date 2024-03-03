<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "../../utilities/bem";
import LanguageSelect from "@/components/LanguageSelect.vue";
import FontIcon from "@/components/FontIcon.vue";
import BasicNavigation from "@/components/header/BasicNavigation.vue";

export default defineComponent({
  components: { LanguageSelect, FontIcon, BasicNavigation },
  setup() {
    const bem = useBem("BasicHeader");
    const { isMobile } = useBreakPoints();
    const contacts = [
      {
        icon: "fa-phone-alt",
        type: "https://wa.me/+4915164072188",
        value: "+(49) 151 64072 188",
      },
      {
        icon: "fa-envelope",
        type: "mailto:now-evolve@gmail.com",
        value: "now-evolve@gmail.com",
      },
    ];

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

    return { bem, isMobile, contacts, socials };
  },
});
</script>

<template>
  <div :class="bem()">
    <div :class="bem('headerTop')">
      <div :class="bem('contacts')">
        <a
          v-for="(contact, index) in contacts"
          :key="index"
          :class="bem('contact')"
          :href="contact.type"
        >
          <FontIcon
            :class="bem('contactIcon')"
            :alias="contact.icon"
            type="fa"
          />
          <span v-if="!isMobile">{{ contact.value }}</span></a
        >
      </div>

      <div :class="bem('socials')">
        <a
          v-for="(social, index) in socials"
          :key="index"
          :href="social.value"
          :class="bem('social')"
        >
          <FontIcon :class="bem('icon')" :alias="social.icon" type="fab"
        /></a>

        <LanguageSelect :class="bem('lang')" />
      </div>
    </div>

    <BasicNavigation />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";
@import "@/assets/css/variables";
@import "@/assets/css/typography";

/** define BasicHeader */

.BasicHeader {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  &-headerTop {
    align-items: center;
    background-color: #364d5e;
    color: $color-white;
    display: flex;
    padding: $space-xs $space-xl;
    justify-content: space-between;
  }

  &-contacts {
    @include font-default-small;
    display: flex;
    gap: $space-m;
  }

  &-contact {
    align-items: center;
    color: $color-white;
    display: flex;
    gap: $space-s;

    &Icon {
      @include font-label-default;
    }
  }

  &-socials {
    align-items: center;
    display: flex;
    gap: $space-m;
  }

  &-icon {
    @include font-default;

    color: $color-white;
  }
}
</style>
