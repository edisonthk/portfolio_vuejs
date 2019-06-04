<template>
<div>
  <div class="container">
    <h1 class="title">IROZA</h1>
    <p>「色」をテーマにしたアパレルECサイト</p>
    <img class="pic" src="@/assets/iroza_img1.jpg">

    <div class="list">
      <h2>担当箇所</h2>
      <ul>
        <li>モバイル／PCに対応したUI構築・マークアップ</li>
        <li>メールマガジンシステム構築</li>
        <li>決済システム（GMOペイメント）対応</li>
        <li>GAによる計測環境の整備</li>
        <li>月ごとのカラーテーマに沿ったデザインへ自動で衣替えするシステムの構築</li>
      </ul>
    </div>

    <div class="group">
      <img class="pic" src="@/assets/iroza_img2.jpg">
      <p>ECの基本機能（カート機能、サイズ選択、SNSシェアボタン）のシステム構築とマークアップ全般を担当しています。</p>
      <p>個別の商品ページでは似た商品や売れ筋商品をページ下部に表示させ、他商品への回遊を狙った構成にしていました。</p>
    </div>

    <div class="group">
      <img class="pic" src="@/assets/iroza_img3.jpg">
      <img class="pic" src="@/assets/iroza_img4.jpg">
      <p>毎月のカラーテーマに沿ったバナーがトップページで自動で変化。運用コストを抑えたシステムとなっています。</p>
      <p>カラーテーマ例。4月（ピンクとホワイト）、10月（ベージュとホワイト）など、季節やテーマ性のあるカラーテーマが設定され商品がセレクトされるのがIROYA最大の特徴でした。</p>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'IrozaPage',
  data() {
    return {
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';

.title {
  font-size: 38px;
  line-height: 1.5;
  margin-bottom: 170px;
  text-align: center;
}

.pic {
  display: block;
  width: 100%;
  margin-bottom: 55px;
  border-radius: 10px;
  border: 1px solid #E5E5E5;
}

.group {
  margin-bottom: 96px;
}

@media (max-width: $sp-width) {
  .title {
    font-size: 28px;
    margin-bottom: 22px;
  }
  .pic {
    margin-bottom: 22px;
  }
  .group {
    margin-bottom: 60px;
  }
}

.list {
  margin-bottom: 128px;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  li {
    font-size: 18px;
    margin-bottom: 18px;
    font-weight: normal;
  }

  @media (max-width: $sp-width) {
    margin-bottom: 88px;

    li {
      font-size: 16px;
    }
  }
}

.is-dark {
  .list {
    li {
      color: white;
    }
  }
  .group a:hover, .link:hover {
    border-color: white;
  }
}
</style>
