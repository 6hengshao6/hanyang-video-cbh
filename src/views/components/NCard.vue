<template>
  <div class="section">
    <div class="section-header">
      <div class="section-header-left">
        <span class="title">{{ title }}</span>
      </div>
      <div class="section-header-right" />
    </div>
    <div class="section-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
// 每一块区域的头部标题和更多按钮
.section {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  .section-header {
    color: $--color-text-primary;
    border-bottom: 1px solid rgba(29, 157, 206, 0.4);
    padding-bottom: 9px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::before {
      content: '';
      width: 42px;
      height: 43px;
      background-image: url('~@/assets/images/common/section_title_icon.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      left: -12px;
      bottom: -3px;
    }
    &::after {
      content: '';
      width: 7px;
      height: 2px;
      background: #1d9dce;
      position: absolute;
      left: 0;
      bottom: -1px;
    }
    .section-header-left {
      padding-left: 30px;
      .title {
        font-family: pangmenzhengdao;
        font-size: 20px;
      }
    }
    .section-header-right {
      // width: 100px;
      // height: 20px;
      &::after {
        content: '';
        width: 129px;
        height: 10px;
        background: url('~@/assets/images/common/section_header_right_bg.png') no-repeat 0 0;
        background-size: 100% 100%;
        position: absolute;
        right: 0;
        top: 7px;
      }
      .more-btn {
        font-size: 14px;
        line-height: 30px;
        border: 1px solid $--border-color-base;
        padding: 0 5px;
        cursor: pointer;
        .svg-icon {
          font-size: 16px;
        }
      }
    }
  }
  .section-body {
    margin-top: 15px;
    color: $--color-text-regular;
    font-size: $font-size-primary;
    overflow: auto;
    background: rgba(9, 33, 65, 0.5);
  }
}
</style>
