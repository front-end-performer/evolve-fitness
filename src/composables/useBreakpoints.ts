/**
 * useBreakpoint helper would return current breakpoint information fully accesible from js
 * example : const breakpoints = useBreakpoint()
 * console.log(breakpoints.isMobile.value) // returns true or false if you are on mobile
 */
import {
  computed,
  ComputedRef,
  ref,
  Ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from "vue";
import { isServer } from "@/config/app";

interface BreakPoints {
  xsmall: number;
  small: number;
  medium: number;
  large: number;
}

export const useBreakPoints = (): {
  isLarge: ComputedRef<boolean>;
  isMedium: ComputedRef<boolean>;
  isMobile: ComputedRef<boolean>;
  isExtraSmall: ComputedRef<boolean>;
  breakPoints: BreakPoints;
  windowWidth: Ref<number>;
} => {
  const breakPoints: BreakPoints = {
    xsmall: 640,
    small: 768,
    medium: 769,
    large: 1280,
  };
  const windowWidth = ref<number>(isServer ? 0 : window?.innerWidth);

  const isLarge = computed(() => windowWidth.value >= breakPoints.large);
  const isMedium = computed(
    () =>
      windowWidth.value >= breakPoints.small &&
      windowWidth.value < breakPoints.large,
  );
  const isMobile = computed(() => windowWidth.value < breakPoints.small);
  const isExtraSmall = computed(() => windowWidth.value < breakPoints.xsmall);

  const onResize = (): void => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    nextTick(() => {
      window.addEventListener("resize", onResize);
    });
  });
  onBeforeUnmount(() => {
    nextTick(() => {
      window.removeEventListener("resize", onResize);
    });
  });

  return {
    breakPoints,
    isLarge,
    isMedium,
    isMobile,
    isExtraSmall,
    windowWidth,
  };
};
