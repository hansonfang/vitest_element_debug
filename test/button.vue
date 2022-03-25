<template>
  <div
    class="ot-button-wrapper"
  >
    <el-button
      ref="buttonRef"
      v-bind="$attrs"
      class="ot-button"
    >
      <slot></slot>
    </el-button>
  </div>
</template>

<script lang="ts">

export default defineComponent({
  name: "OtButton",
});
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$default_btn_selector: ":not(.is-circle):not(.el-button--medium):not(.el-button--small):not(.el-button--mini)";

.ot-button-wrapper {
  display: inline-block;
  user-select: none;
  & .el-button#{$default_btn_selector} {
    height: 34px;
    min-height: 34px;
    font-size: 14px;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .el-button--default {
    background: #f9f9f9;
    color: #67c23a;
  }
  .ot-button#{$default_btn_selector} {
    min-width: 108px;
    max-width: 132px;

    :deep([class*="el-icon-"] + span) {
      margin-left: 8px;
      max-width: 84px;
      overflow: hidden;
      line-height: 34px;
    }
  }
  .ot-btn-block_btn {
    min-width: 100% !important;
  }
}
.ot-btn-block_wrapper {
  display: block;
}
</style>
