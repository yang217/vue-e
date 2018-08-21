<template>
    <div id="form">

        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
   
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
<el-switch
  v-model="value3"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
<el-switch
  style="display: block"
  v-model="value4"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
<div class="block">
    <span class="demonstration">默认</span>
    <el-slider v-model="value11"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <el-slider v-model="value22"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <el-slider v-model="value33" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <el-slider v-model="value44" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <el-slider v-model="value55" disabled></el-slider>
  </div>
  <el-steps :active="active" finish-status="success">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
</template>

<script>
export default {
data() {
      return {
        num1: 1,
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
         value3: true,
        value4: true,
         value11: 0,
        value22: 50,
        value33: 36,
        value44: 48,
        value55: 42,
         active: 0
      };
},
 methods: {
      handleChange(value) {
        console.log(value);
      },
       formatTooltip(val) {
        return val / 100;
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }

}
</script>

<style scoped>
 #form{
     margin-bottom: 200px;
 }
</style>
