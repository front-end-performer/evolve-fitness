<script setup lang="ts">
import { useBem } from "../utilities/bem";

const bem = useBem("SectionAbout");
</script>

<template>
  <BasicSection id="about">
    <div :class="bem()">
      <div :class="bem('header')">
        <h2 :class="bem('title')">Deshalb vertrauen uns unsere Kunden</h2>
        <p :class="bem('description')">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          perferendis esse itaque saepe libero inventore reiciendis quae,
          numquam laborum nostrum accusantium voluptatibus est voluptate ipsam
          praesentium corporis odio fugiat? Amet!
        </p>
      </div>

      <div :class="bem('cards')">
        <div :class="bem('card')">
          <!-- <FontIcon :class="bem('icon')" alias="dumbbell" type="fa" /> -->
          <h2 :class="bem('cardTitle')">10+ expirience</h2>
          <p :class="bem('cardDescription')">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            consequatur architecto vero similique maiores odit dolores expedita,
            deleniti, iusto assumenda doloremque! Adipisci laboriosam ea vel
            tempore esse possimus minus facilis?
          </p>
        </div>

        <div :class="bem('card')">
          <!-- <FontIcon :class="bem('icon')" alias="dumbbell" type="fa" /> -->
          <h2 :class="bem('cardTitle')">Personal approach</h2>
          <p :class="bem('cardDescription')">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            consequatur architecto vero similique maiores odit dolores expedita,
            deleniti, iusto assumenda doloremque! Adipisci laboriosam ea vel
            tempore esse possimus minus facilis?
          </p>
        </div>

        <div :class="bem('card')">
          <!-- <FontIcon :class="bem('icon')" alias="dumbbell" type="fa" /> -->
          <h2 :class="bem('cardTitle')">Internationaly recognized</h2>
          <p :class="bem('cardDescription')">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
            consequatur architecto vero similique maiores odit dolores expedita,
            deleniti, iusto assumenda doloremque! Adipisci laboriosam ea vel
            tempore esse possimus minus facilis?
          </p>
        </div>
      </div>

      <div :class="bem('aboutPart')">
        <h2 :class="bem('title')">We are ...</h2>

        <div :class="bem('content')">
          <div :class="bem('column', 'left')">
            <div :class="bem('innerBox')">
              <h3 :class="bem('subtitle')">Für die ganze Familie</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus inventore eligendi vero praesentium iusto aliquam
                debitis consequatur alias.
              </p>
            </div>
            <div :class="bem('innerBox')">
              <h3 :class="bem('subtitle')">Gemeinschaft</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus inventore eligendi vero praesentium iusto aliquam
                debitis consequatur alias dignissimos tempore perferendis
                facilis, vitae quod voluptatum suscipit repellendus? Molestias,
                possimus porro!
              </p>
            </div>
            <div :class="bem('innerBox')">
              <h3 :class="bem('subtitle')">Glücklich</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus inventore eligendi vero praesentium iusto aliquam
                debitis consequatur alias dignissimos tempore perferendis
                facilis, vitae quod voluptatum suscipit repellendus? Molestias,
                possimus porro!
              </p>
            </div>
          </div>
          <div :class="bem('image')">
            <img
              width="250"
              src="../static/images/evolve-logo.png"
              alt="evolve fitness logo"
            />
          </div>
          <div :class="bem('column', 'right')">
            <div :class="bem('innerBox')">
              <h3 :class="bem('subtitle')">Kundenfreundlich</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus inventore eligendi vero praesentium iusto aliquam
                debitis consequatur.
              </p>
            </div>
            <div :class="bem('innerBox')">
              <h3 :class="bem('subtitle')">Für dich</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus inventore eligendi vero praesentium iusto aliquam
                debitis consequatur alias dignissimos.
              </p>
            </div>
            <div :class="bem('innerBox')">
              <h3 :class="bem('subtitle')">Mittelpunkt</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus inventore eligendi vero praesentium iusto aliquam
                debitis consequatur alias dignissimos tempore.
              </p>
            </div>
          </div>
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

/* define SectionAbout */

.SectionAbout {
  display: flex;
  flex-direction: column;
  gap: $space-3xl;
  padding: 40px $space-xl 48px $space-xl;

  @include from-medium {
    padding: 100px $space-l 48px $space-l;
  }

  &-header {
    text-align: center;

    @include from-medium {
      text-align: left;
    }
  }

  &-aboutPart {
    background-color: $color-white;
    border-radius: 8px;
    padding: 40px 40px;
  }

  &-title {
    @include font-heading-1;

    font-size: 42px;
    // padding-top: 100px;
    margin-bottom: $space-l;
    text-align: center;
  }

  &-description {
    @include font-title-regular;
  }

  &-cards {
    display: flex;
    flex-direction: column;
    gap: $space-xl;

    @include from-medium {
      flex-direction: row;
    }
  }

  &-card {
    background-color: $color-white;
    border-radius: $rounded-default-radius;
    box-shadow: 11px 11px 40px rgba(50, 56, 72, 0.1);
    padding: $space-xl;

    &Title {
      @include font-heading-3;

      margin-bottom: $space-s;
    }

    &Description {
      @include font-default;
    }
  }

  &-content {
    align-content: center;
    display: flex;
    gap: $space-xl;
    justify-content: center;
    flex-direction: column;

    @include from-medium {
      gap: $space-l;
      flex-direction: row;
    }
  }

  &-column {
    &--left,
    &--right {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    @include from-medium {
      &--left {
        flex: 1;
        text-align: right;
      }
      &--right {
        flex: 1;
        text-align: left;
      }
    }
  }

  &-image {
    display: none;

    @include from-medium {
      align-items: center;
      display: flex;
    }
  }

  &-innerBox {
    @include font-default;

    margin-bottom: $space-xl;

    @include from-medium {
      margin-bottom: $space-s;
    }
  }

  &-innerBox:last-of-type {
    margin-bottom: 0;
  }

  &-subtitle {
    @include font-title-semi-bold;
    margin-bottom: $space-xs;
  }
}
</style>
