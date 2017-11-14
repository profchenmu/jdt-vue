<template>
  <div id="demo">
  <div class="insure with-fixed-bottom-panel">
    <div class="row-title">
      <p>投保人信息</p>
    </div>
    <info />
    <div class="insured">
      <div class="list-block">
        <div class="item-content">
          <div class="item-inner ">
            <div class="item-title label">是被保人的</div>
            <div class="item-input">
              <select
                name="relaCode"
                ref='relationSelect'
              >
                <option value="00">本人</option>
                <option value="01">父母</option>
                <option value="02">配偶</option>
                <option value="03">子女</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row-title"><p>被保人信息</p></div>
      <div class="insured-content">
        <div class="list-block">
        </div>
      </div>
    </div>
    <div class="row-title"><p>保险计划</p></div>

    <div class="row-title"><p>受益人信息</p></div>

    <div class="fixed-bottom-panel commit-panel grid-row no-gutters">
      <div class="col-6 commit-info">
        <span class="mr5">每期保费</span>
        <span class="color-orange">0.00</span>
        <span class="color-orange">元</span>

      </div>
      <div
        class="col-2 savebtn"
        onClick={this.saveInfos.bind(this)}
      >
        <div>暂存</div>
      </div>
      <button type="button" class='col-4'>立即投保</button>
    </div>
    <!--
    <div class="Sign-page">
      <div class="modal" id="modal-sign">
        <span class="modal-close">×</span>
        <div  class="sign-title" >
          投保人签名
          <a  type="button" class="clear-sign-btn">清 屏</a>
        </div>
        <div class="frame-con">
          <iframe name="myFrameApplicant"></iframe>
        </div>
        <div  class="sign-title insurant" >
          被保人签名
          <a  type="button" class="clear-sign-btn">清 屏</a>
        </div>
        <div class="frame-con">
          <iframe name="myFrameInsurant" ref="myFrameInsurant" frameBorder="no" ></iframe>
        </div>
        <div class=" sign-save-button" ref="saveSignBtn">
          保存签名
        </div>
      </div>
    </div>
    -->
  </div>
    <router-view/>
  </div>
</template>

<script>
import Info from '@/Demo/Info'
export default {
  name: 'demo',
  components: {
    Info
  }
}
</script>
<style lang='scss' rel="stylesheet/scss">
  @import '~@/Demo/insure.scss';
</style>
