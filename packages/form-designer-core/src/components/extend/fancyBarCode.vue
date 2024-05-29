<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import JsBarcode from 'jsbarcode';
import { getSimpleId } from '@/components/utils/IdGenerate';

/**
 *  后续增补下列属性
 *
 */
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  format: {
    type: String,
    required: false
  },
  lineColor: {
    type: String,
    required: false
  },
  background: {
    type: String,
    required: false
  },
  width: {
    type: Number,
    required: false,
    default: 2
  },
  height: {
    type: Number,
    required: false,
    default: 30
  },
  fontSize: {
    type: Number,
    required: false,
    default: 12
  },
  displayValue: {
    type: Boolean,
    required: false,
    default: true
  }
});

const id = ref('barCode' + getSimpleId());
const generateBarCode = () => {
  const barCodeElement = document.getElementById(id.value);
  JsBarcode(barCodeElement, props.modelValue, {
    format: props.format,
    lineColor: props.lineColor,
    height: props.height,
    displayValue: props.displayValue,
    fontSize: props.fontSize,
    background: props.background
  });
};

onMounted(() => {
  generateBarCode();
});
watch(
  () => props,
  (newValue, oldValue) => {
    generateBarCode();
  },
  { deep: true }
);
</script>

<template>
  <svg :id="id"></svg>
</template>
