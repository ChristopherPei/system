<template>
  <div id='users'>
    <div id="first">
      <span>积分明细</span>
      <span>
        <span style="margin-right: 100px">备注：会员手机号码=会员ID</span>
      </span>
    </div>
    <div id="third">
      <span>
        昵称： <el-input v-model="input" placeholder="请输入内容" ></el-input>
      </span>
      <span>
        手机号码： <el-input v-model="input" placeholder="请输入内容" ></el-input>
        <el-button type="primary" round id="button_a">搜索</el-button>
        <el-button type="success" round id="button_b">导出</el-button> 
      </span>

      

    </div>
    <div id="fourth">
      <el-table
        :data="tableData"
        border
        style="width: 1154px; border: 2px solid #ccc; margin-left: 550px">      
        <el-table-column
          prop="userID"
          label="会员ID"
          width="180"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="portrait"
          label="头像"
          align='center'
          width="120">
          <template>
            <i class='el-icon-s-check'></i>
          </template>
        </el-table-column>  
        <el-table-column
          prop="name"
          label="昵称"
          width="200"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          sortable
          width="200"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="total_score"
          label="积分"
          sortable
          width="200"
          align='center'>
        </el-table-column>
        <el-table-column
          label="变动时间"
          width="250"
          align='center'>
          <template slot-scope="scope">
            <span>{{scope.row.join_time_first}}</span>
            <br>
            <span>{{scope.row.join_time_second}}</span>
          </template>
        </el-table-column>
      </el-table>  
    </div>
    <div id="fifth">
      <span>共计1056个用户</span>
      <span>《1 2 3 4 5 ...... 10》 前往 <input type="text" style="width: 80px; height: 40px"> 页</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options_a: [{
          value: '选项1',
          label: '最近3个月'
        }, {
          value: '选项2',
          label: '最近一年'
        }, {
          value: '选项3',
          label: '自定义'
        }
        ],
      options_b: [{
          value: '选项1',
          label: '顶部搜索框搜索结果页'
        }, {
          value: '选项2',
          label: '单人聊天会话中的小程序消息卡片'
        }, {
          value: '选项3',
          label: '群聊会话中的小程序消息卡片'
        }, {
          value: '选项4',
          label: '扫码二维码'
        }, {
          value: '选项5',
          label: '长按识别二维码'
        }],
      value_a: '选项1',
      value_b: '',
      shortcuts: [{
        text: '本月',
        onClick(picker) {
          picker.$emit('pick', [new Date(), new Date()]);
        }
      }, {
        text: '今年至今',
        onClick(picker) {
          const end = new Date();
          const start = new Date(new Date().getFullYear(), 0);
          picker.$emit('pick', [start, end]);
        }
      }, {
        text: '最近六个月',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setMonth(start.getMonth() - 6);
          picker.$emit('pick', [start, end]);
        }
      }],
      value1: '',
      value2: '',
      input:'',
      tableData: [{
        userID: '13369896525',
        portrait: '',
        name: 'XXXXXXXXX',
        type: '分享成功',
        source: '群聊会话小程序卡片识别',
        join_time_first: '2020-11-12',
        join_time_second: '13:11:23',
        visit_time_first: '2021-01-27',
        visit_time_second: '15：45：29',
        total_recharge: '53.8',
        total_score: '2',
        rest_coins: '210',
        rest_score: '32',
        options_c: [{
          value: '选项1',
          label: '金币充值'
        }, {
          value: '选项2',
          label: '金币扣除'
        }, {
          value: '选项3',
          label: '积分充值'
        }, {
          value: '选项4',
          label: '积分扣除'
        }, {
          value: '选项5',
          label: '消费明细'
        }, {
          value: '选项6',
          label: '积分明细'
        }],
        value_c: '选项1'        
      },{
        userID: '13569847545',
        portrait: '',
        name: 'XXXXXXXXX',
        type: '管理员赠送',
        source: '长按图片识别小程序码',
        join_time_first: '2020-10-12',
        join_time_second: '15:31:13',
        visit_time_first: '2021-01-20',
        visit_time_second: '15：23：20',
        total_recharge: '46.0',
        total_score: '5',
        rest_coins: '180',
        rest_score: '22',
        options_c: [{
          value: '选项1',
          label: '金币充值'
        }, {
          value: '选项2',
          label: '金币扣除'
        }, {
          value: '选项3',
          label: '积分充值'
        }, {
          value: '选项4',
          label: '积分扣除'
        }, {
          value: '选项5',
          label: '消费明细'
        }, {
          value: '选项6',
          label: '积分明细'
        }],
        value_c: '选项1'          
      },{
        userID: '13952524541',
        portrait: '',
        name: 'XXXXXXXXX',
        type: '管理员扣除',
        source: '其它入口',
        join_time_first: '2020-09-14',
        join_time_second: '12:20:04',
        visit_time_first: '2021-01-05',
        visit_time_second: '15：12：15',
        total_recharge: '19.9',
        total_score: '39',
        rest_coins: '90',
        rest_score: '-5',
        options_c: [{
          value: '选项1',
          label: '金币充值'
        }, {
          value: '选项2',
          label: '金币扣除'
        }, {
          value: '选项3',
          label: '积分充值'
        }, {
          value: '选项4',
          label: '积分扣除'
        }, {
          value: '选项5',
          label: '消费明细'
        }, {
          value: '选项6',
          label: '积分明细'
        }],
        value_c: '选项1'  
      },],        
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
  #first {
    position: relative;
    left: 200px;
    top: 100px;
    font-size: 30px;
    width: 2000px;
    display: flex;
    justify-content: space-between;
  }
  #second {
    position: relative;
    left: 200px;
    top: 200px;
    font-size: 30px;
  }
  #second /deep/ .el-date-editor--monthrange.el-input__inner {
    width: 500px;
  }
  #data-picker {
    margin-left: 50px;
  }
  #third {
    position: relative;
    width: 1400px;
    left: 200px;
    top: 250px;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
  }
  #third /deep/ .el-input {
    width: 300px;
    margin-left: 30px;
  }
  #button_a {
    margin-left: 50px;
  }
  #button_b {
    margin-left: 30px;
  }
  #fourth {
    position: relative;
    top: 450px;
  }
  #fifth {
    position: relative;
    top: 550px;
    left: 200px;
    font-size: 30px;
    width: 2000px;
    display: flex;
    justify-content: space-between;    
  }

  
</style>