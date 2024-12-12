
jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //================================
  // ハンバーガーボタンとドロワー
  // ==================================
  //JavaScriptでは要素取得が長いので、大抵使いそうなものは最初に定数に代入しておきます。
  // DOM要素を取得
  const jsHamburger = document.getElementById("js-hamburger");
  const body = document.body;
  const spHeaderMenu = document.getElementById("js-global-menu");

  // ハンバーガーメニューのクリックイベント
  jsHamburger.addEventListener("click", function () {
    // メニューの開閉状態を切り替える
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded); // 状態を反転させる
    spHeaderMenu.setAttribute("aria-hidden", isExpanded);
    body.classList.toggle("is-drawerActive", !isExpanded);
    spHeaderMenu.style.visibility = isExpanded ? "hidden" : "visible";
  });

  // ドロワーメニュー内リンクのクリックイベント
  document.querySelectorAll("#js-global-menu a").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // ドロワーメニュー背景のクリックイベント
  spHeaderMenu.addEventListener("click", function (e) {
    if (e.target === this) {
      closeDrawer();
    }
  });

  // メニューを閉じる共通処理
  function closeDrawer() {
    body.classList.remove("is-drawerActive");
    jsHamburger.setAttribute("aria-expanded", "false");
    spHeaderMenu.setAttribute("aria-hidden", "true");
    spHeaderMenu.style.visibility = "hidden";
  }

  //================================
  // ビューポートの高さを1vh単位で計算
  // ==================================
  let vh = window.innerHeight * 0.01; // ビューポートの高さを1vh単位で計算
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  //ウィンドウサイズ変更時に更新
  window.addEventListener("resize", () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  //================================
  // 遷移した時、タイトルが、headerに隠れないように
  // ==================================
});
