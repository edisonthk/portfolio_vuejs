<template>
<div>
  <div class="container">
    <div class="s1">
      <h1 class="s1-text1">ヘンリーウィー</h1>
      <h2 class="s1-text2">web engineer</h2>
      <p>マレーシア出身のシステムエンジニアです。大学進学をきっかけに来日し10年が経ちました。 今は東京でお仕事をしております。</p>
    </div>
    <div class="s2">
      <h2>得意分野</h2>
      <ul>
        <li>ホームページ・LPの製作およびマークアップ</li>
        <li>Webサービスの開発および運用</li>
        <li>Androidアプリの開発</li>
      </ul>
    </div>
    <div class="s3">
      <div class="group">
        <h3 class="headline1">PROJECT</h3>
        <h2 class="headline2">webサービスの開発および運用</h2>
        <img class="pic" src="@/assets/bg_tabiraku.jpg">
        <p>理系学生に特化した就活サービスや、海外レストラン予約、セレクトショップECサイトなど、フロントエンドからバックエンド、インフラ運用など幅広く担当し、多くのサービスを手がけてきました。
    サービスローンチ前後などの不確実性が高いフェーズでも、技術領域の広さで柔軟にお手伝いすることが可能です。</p>
        <p>主な実績：<br>
    <a href="https://labbase.jp" target="_blank">LabBase</a> / たびらく / <a href="#">IROYA</a> / FLATBUSH</p>
      </div>
      <div class="group">
        <h2 class="headline2">webマークアップ</h2>
        <img class="pic" src="@/assets/bg_eidea.jpg">
        <p>コーポレートサイト、ランディングページ、PRページ、アニメーション、パソコンからiPhone、Androidへの対応の実績があります。サイトのマークアップからサーバーへの契約およびドメイン設定などから、リリースまでの対応も可能です。</p>
        <p>主な実績：<br>
  <a href="https://ao-ao.design/" target="_blank">ao-ao様企業サイト</a> / <a target="_blank" href="https://eidea.co.jp">Eidea様企業サイト</a> / AI MDサービスサイト</p>
      </div>
      <div class="group">
        <h2 class="headline2">システム開発・運用</h2>
        <img class="pic" src="@/assets/bg_pleco.jpg">
        <p>アイディアのご提案から、システム開発のスケジュール策定など、ITを利用した業務効率化の計画から実施についてワンストップで対応することが可能です。</p>
        <p>主な実績：<br>
  プレコファクトリー様 配車システム</p>
      </div>
    </div>
    <div class="s4">
      <h3 class="headline1">SKILLS</h3>
      <p class="s4-text1">HTML / CSS / JQuery /
Rails / webpacker / asset pipeline / php / Laravel /
AWS Elastic Beanstalk / gulp / git / MySQL / MailChimp / WordPress</p>
<p class="s4-text2">環境に応じて柔軟に対応いたします。</p>
<img class="s4-profile" src="@/assets/profile.png">
<a href="mailto:edisonthk@gmail.com" class="s4-href">お問い合わせ</a>
    </div>
  </div>
  <hr>
  <div class="s5">
    <div class="s5-sns-group">
      <a class="s5-sns" target="_blank" href="https://stackoverflow.com/users/1799322/edisonthk">
        <img src="@/assets/sns_stackoverflow.svg">
      </a>
      <a class="s5-sns" target="_blank" href="https://github.com/edisonthk">
        <img src="@/assets/sns_github.svg">
      </a>
      <a class="s5-sns" target="_blank" href="https://www.facebook.com/heng.likwee">
        <img src="@/assets/sns_fb.svg">
      </a>
      <a class="s5-sns" target="_blank" href="https://qiita.com/edisonthk">
        <img src="@/assets/sns_qiita.svg">
      </a>
      <a class="s5-sns" target="_blank" href="https://www.codeproject.com/Members/EdisonHeng">
        <img src="@/assets/sns_codeproject.svg">
      </a>
    </div>
    <p class="s5-copyright">©LIKWEE 2015-2019 / <a class="link" target="_blank" href="https://github.com/edisonthk/portfolio_vuejs">Source and Licenses</a></p>
  </div>
</div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';

.is-dark {
  .s5 {
    &-copyright {
      color: white;
    }
  }

  .s2 {
    li {
      color: white;
    }
  }
  .s4-href {
    border-color: #919191;
    color: white;
  }
}

.s5 {
  padding: 95px 0 48px;
  text-align: center;

  &-sns {
    display: inline-block;
    margin-right: 50px;
    margin-bottom: 64px;

    > img {
      display: block;
      width: auto;
      height: 48px;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &-copyright {
    display: block;
    font-size: 14px;
    color: $black;
    font-weight: normal;
  }

  @media (max-width: $sp-width) {

    padding-top: 60px;

    &-sns {
      margin-right: 32px;
      margin-bottom: 50px;

      > img {
        height: 36px;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    &-copyright {
      font-size: 12px;
    }
  }
}

.s4 {
&-text1 {
  max-width: 600px;
  margin: 0 auto 48px;
}
&-text2 {
  text-align: center;
  margin-bottom: 88px;
}
&-profile {
  width: 160px;
  height: 160px;
  margin: 0 auto 50px;
  display: block;
}
&-href {
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 2px;
  width: 220px;
  font-size: 18px;
  line-height: 1;
  padding: 18px 0;
  text-align: center;
  margin: 0 auto;
  display: block;
  color: $black;
  text-decoration: none;
}

  @media (max-width: $sp-width) {
    margin-bottom: 60px;
  }
}
.s1 {
  margin-bottom: 72px;
}
.s1-text1 {
  font-size: 38px;
  line-height: 1.6;
  margin-bottom: 6px;
  font-weight: bold;
  text-align: center;
}
.s1-text2 {
  font-size: 28px;
  margin-bottom: 176px;
  font-weight: normal;
  text-align: center;
}

.headline1 {
  font-size: 36px;
  line-height: 1;
  margin-bottom: 60px;
  font-weight: bold;
  text-align: center;
}
.headline2 {
  font-size: 26px;
  line-height: 1.6;
  text-align: center;

}

p {
  font-size: 18px;
  line-height: 1.6;
}

.s2 {
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

.s3 {
  margin-bottom: 128px;
}

.group {
  margin-bottom: 96px;
}

.group a:hover, .link:hover {
  padding-bottom: 3px;
  border-bottom: 2px solid $black;
}

.pic {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 56px;
}

hr {
  border: 0.5px solid #E5E5E5;
}
a {
  text-decoration: none;
}
@media (max-width: $sp-width) {
  .headline1 {
    font-size: 24px;
    margin-bottom: 30px;
  }
  .headline2 {
    font-size: 16px;
  }
  .group {
    margin-bottom: 70px;
  }
  .s1-text1 {
    font-size: 28px;
    margin-bottom: 6px;
  }
  .s1-text2 {
    font-size: 20px;
    margin-bottom: 95px;
  }
  p {
  font-size: 16px;
  margin-bottom: 26px;

  }
  .pic {
    margin-bottom: 30px;
  }
}

</style>
