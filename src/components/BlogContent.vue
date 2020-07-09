<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-display">Here's to the ones who dream.<br /><span class="text-right">Foolish as they may seem.</span></h1>
    <div class="max-w-xs w-full lg:max-w-full lg:flex">
      <div class="shadow-md bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
        <div class="mt-4">
          <div class="text-gray-900 font-bold text-xl mb-2">新手軟體 PM 跟 Issue 的愛恨情仇</div>
          <p class="text-sm text-gray-600">2020/6/29 18:28</p>
          <p class="text-gray-700 text-base">大江東去，浪淘盡千古風流人物。故壘西邊，人道是三國周郎赤壁。亂石崩雲，驚濤裂岸，捲起千堆雪，捲起千堆雪。江山如畫，一時多少豪傑。遙想公瑾當年，小喬出嫁了，雄姿英發，羽扇綸巾談笑間，檣櫓灰飛煙滅。故國神遊，多情應笑我，早生華髮。人生如夢，一杯還酹江月。</p>
        </div>
      </div>
      <img class="shadow-md ml-6 h-48 lg:h-48 lg:w-48 flex-none bg-cover rounded-lg text-center overflow-hidden" src="../assets/img/business-squre.jpeg" alt="project management image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogContent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
