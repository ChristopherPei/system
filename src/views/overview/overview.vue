<template>
  <div id='main'>
    <div class="line" style="height: 200px;">
      <span style="position: relative; top:60px; left: 330px; font-size:30px;">登录管理账户</span>
      <span style="position: relative; top:60px; left: 380px; font-size:30px; color:red;">YPQadmin</span>
      <div style="position: relative; top:50px; left: 900px; font-size:50px; width:200px; text-align: justify;text-align-last:justify">概览</div>
      <div style="position: relative ; top:50px; left: 1400px; font-size:30px;">
        <span >备注1，默认显示7天趋势</span>
        <br>
        <span style="">备注2，版面排列为无限下拉,本页面排列仅供参考</span>
      </div>
    </div>
    <div class="line" style="height: 270px;">
      <div id="second">
        <div>
          <span class="top-sentence">86</span>
          <br>
          <span class='red bottom-sentence'>昨日登录用户数</span>
        </div>
        <div>
          <span class="top-sentence" style="position:relative;left:100px;">26</span>
          <br>
          <span class='red bottom-sentence'>昨日发布任务订单数</span>
        </div>
        <div>
          <span class="top-sentence">26</span>
          <br>
          <span class='red bottom-sentence'>昨日付费会员数</span>
        </div>
        <div>
          <i class='el-icon-coin'></i><span class="top-sentence" style="position:relative;left:30px;">268</span>
          <br>
          <span class='red bottom-sentence'>昨日付费金额</span>
        </div>
      </div>
    <div>

    </div>
    </div>
    <div class='third'>
      <div class="block block1">
        <span>用户关注趋势图</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <table width='500px' height="500px" cellspacing='0'>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="block block2">
        <span>用户登录趋势图</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <table width='500px' height="500px" cellspacing='0'>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="block block3">
        <span>任务订单发布趋势图</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <table width='500px' height="500px" cellspacing='0'>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="block block4">
        <span>付费会员趋势图</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <table width='500px' height="500px" cellspacing='0'>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '最近七天趋势'
      }, {
        value: '选项2',
        label: '最近一个月趋势'
      }, {
        value: '选项3',
        label: '最近三个月趋势'
      }
      ],
      value: '选项1'      
    };
  },

  components: {
  },

  computed: {},

  mounted() {},

  methods: {

  }
}

</script>
<style scoped>
  .line {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  #second {
    width: 1500px;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 550px;
    top: 100px;
    font-size: 25px;
  }
  .red {
      color: red;
  }
  .bottom-sentence {
    position: relative;
    top: 30px;
  }
  .top-sentence {
    position: relative;
    left: 70px;
  }

  table, td {
    border: 0.5px solid #ccc;
  }
  .block {
    width: 600px;
    padding: 0 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .third {
    display: flex;
    flex-wrap: wrap;
  }
  .block /deep/ .el-input__inner {
    padding: 25px 30px;
    width: 250px;
    border-radius: 10px;
  }
  .block span {
    color: red;
    font-size: 30px;
    display: inline-block;
    padding-top: 50px;
    padding-bottom: 20px;
  }
  .block table {
    margin-top: 70px;
  }

  
</style>