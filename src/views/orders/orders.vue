<template>
  <div id='orders'>
    <div>
      <span style="position: relative; top:160px; left: 150px; font-size:30px;">登录管理账户</span>
      <span style="position: relative; top:160px; left: 180px; font-size:30px; color:red;">YPQadmin</span>
    </div>
    <div>
      <span style="position: relative; top:260px; left: 150px; font-size:30px;">任务订单————所有订单</span>    
    </div>
    <div id="third">
      <el-select v-model="value_a">
        <el-option
          v-for="item in options_a"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>      
      <el-input v-model="input" placeholder="请输入" style="width: 300px; margin-right: 20px;"></el-input>
      <el-select v-model="value_b" placeholder="任务大类">
        <el-option
          v-for="item in options_b"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value_c" placeholder="任务分类">
        <el-option
          v-for="item in options_c"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> 
      <el-select v-model="value_d" placeholder="服务类型">
        <el-option
          v-for="item in options_d"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> 
      <el-select v-model="value_e" placeholder="任务状态">
        <el-option
          v-for="item in options_e"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> 
      <el-select v-model="value_f" placeholder="省份">
        <el-option
          v-for="item in options_f"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> 
      <el-select v-model="value_g" placeholder="城市">
        <el-option
          v-for="item in options_g"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> 
      <el-select v-model="value_h" placeholder="开始时间">
        <el-option
          v-for="item in options_h"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value_i" placeholder="结束时间">
        <el-option
          v-for="item in options_i"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>  
      <el-button type="primary" round id="button_a" style="">查询</el-button>
    </div>
    <div id='fifth'>
      <el-table
        :data="tableData"
        border
        style="width: 2500px">
        <el-table-column
          prop="number"
          label="订单编号"
          width="250"
          align="center">
        </el-table-column>
        <el-table-column
          prop=""
          label="用户手机"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="用户昵称"
          align="center">
        </el-table-column>
        <el-table-column
          prop="type"
          label="任务大类"
          align="center">
          <template slot-scope="scope"><span style="color: red">{{scope.row.type}}</span></template>
        </el-table-column>
        <el-table-column
          prop="class"
          label="任务分类"
          align="center">
          <template slot-scope="scope"><span style="color: #0E6AAE">{{scope.row.class}}</span></template>
        </el-table-column>
        <el-table-column
          prop="service"
          label="服务类型"
          align="center">
          <template slot-scope="scope"><span style="color: red">{{scope.row.service}}</span></template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="任务状态"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="任务地点"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="开始时间"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="结束时间"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="阅读人数"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="评论留言数"
          align="center">
        </el-table-column>
        <el-table-column
          label="其他详情"
          align="center">
          <template>
            <i class='el-icon-right' style="font-size: 50px;"></i>
          </template>
        </el-table-column>
      </el-table>      
    </div>
    <div id="sixth">
      订单编号规则备注：1，以任务类型前面两字的拼音字母缩写为起始，如：日程管理=RC，订单形成日期是2021年3月9日，则RC210309，当日同类型订单最多为7位数，当日第一个日程管理单=RC2103090000001
    </div>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      options_a: [{
          value: '选项1',
          label: '用户手机'
        }, {
          value: '选项2',
          label: '微信昵称',
        }, ],
      options_b: [{
          value: '选项1',
          label: '设备排期'
        }, {
          value: '选项2',
          label: '住宿排期',
        },{
          value: '选项3',
          label: '餐饮排期',
        },{
          value: '选项4',
          label: '用车排期',
        },{
          value: '选项5',
          label: '租赁排期',
        },{
          value: '选项6',
          label: '账务排期',
        },{
          value: '选项7',
          label: '劳务排期',
        },{
          value: '选项8',
          label: '日程管理',
        }, ],
      options_c: [{
          value: '选项1',
          label: '设备排期'
        }, {
          value: '选项2',
          label: '住宿排期',
        },{
          value: '选项3',
          label: '餐饮排期',
        },{
          value: '选项4',
          label: '用车排期',
        },{
          value: '选项5',
          label: '租赁排期',
        },{
          value: '选项6',
          label: '账务排期',
        },{
          value: '选项7',
          label: '劳务排期',
        },{
          value: '选项8',
          label: '日程管理',
        }, ],
      options_d: [{
          value: '选项1',
          label: '仅供提醒'
        }, {
          value: '选项2',
          label: '免费服务',
        }, {
          value: '选项3',
          label: '收费服务',
        }, ],
      options_e: [{
          value: '选项1',
          label: '任务进行中'
        }, {
          value: '选项2',
          label: '任务已完成',
        }, ],
      options_f: [{
          value: '选项1',
          label: '安徽'
        }, {
          value: '选项2',
          label: '北京',
        }, ],
      options_g: [{
        }, ],
      options_h: [{
        }, ],
      options_i: [{
        }, ],
      value_a: '选项1',
      value_b: '',
      value_c: '',
      value_d: '',
      value_e: '',
      value_f: '',
      value_g: '',
      value_h: '',  
      value_i: '',
      input: "",
      tableData: [{
          number: 'RC210309000001',
          type: '日程管理',
          class: '共管日程',
          service: '仅供提醒',
          others: '',
        },{
          number: 'ZW210430000001',
          type: '账务排期',
          class: '现金账务',
          service: '仅供提醒',
          others: '',
        },{
          number: 'ZW210501000001',
          type: '账务排期',
          class: '商品账务',
          service: '仅供提醒',
          others: '',
        },{
          number: 'LW210601000001',
          type: '劳务排期',
          class: '导游服务',
          service: '收费服务',
          others: '',
        },{
          number: 'LW210701000001',
          type: '劳务排期',
          class: '装修工程',
          service: '收费服务',
          others: '',
        },{
          number: 'YC2108010000001',
          type: '用车排期',
          class: '内部接待',
          service: '免费服务',
          others: '',
        },{
          number: 'CY2108020000001',
          type: '餐饮排期',
          class: '内部接待',
          service: '免费服务',
          others: '',
        },{
          number: 'ZL2109010000001',
          type: '租赁排期',
          class: '物品租赁',
          service: '收费服务',
          others: '',
        },{
          number: 'ZL2109010000002',
          type: '租赁排期',
          class: '场地租赁',
          service: '收费服务',
          others: '',
        },{
          number: 'ZS2109120000001',
          type: '住宿排期',
          class: '内部接待',
          service: '免费服务',
          others: '',
        },{
          number: 'ZS2109120000002',
          type: '住宿排期',
          class: '特色民宿',
          service: '收费服务',
          others: '',
        },]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {

  }
}

</script>
<style scoped>
  #third {
    position: relative;
    left: 150px;
    top: 400px;
    display: flex;
    text-align: center;
    line-height: 50px;
  }
  .el-select {
    width: 200px;
    margin-right: 20px;
  }
  #third /deep/ .el-input__inner {
    border-radius: 10px;
  }
  #fifth {
    position: relative;
    top: 500px;
    left: 150px;
  }
  #sixth {
    color: red;
    position: relative;
    top: 700px;
    left: 150px;
    width: 700px;
    padding: 30px;
    border: 1px solid #ccc;
  }
</style>