var imgset = [
    "/image/hondajade.jpg",
    "/image/hondastepwgn.jpg",
    "/image/hondacivic.jpg",
    "/image/hondacrz.jpg"
 ];
 // -----------------------------------------------
// ▼関数A：指定画像を順に表示させる
// -----------------------------------------------
var counter = 0;
function slideimage() {
   if( counter >= imgset.length ) {
      // カウンタが画像数よりも大きくなったら0番に戻す
      counter = 0;
   }
   // 対象要素の画像URLを次の画像のURLに切り替える
   document.getElementById('slideshow').src = imgset[counter];
   // カウンタを1増やす
   counter++;
}

// -----------------------------------------------
// ▼関数B：スライドショーを制御
// -----------------------------------------------
var slideid = 0;
function startstopshow() {
   if( slideid == 0 ) {
      // 始まっていなければ始める
      slideid = setInterval(slideimage,1000);   // 1000は切替秒数(ミリ秒)
   }
   else {
      // IDがあれば止める
      clearInterval(slideid);
      slideid = 0;
   }
}

// ▼ボタンクリックに関数を割り当てる
document.getElementById('startstopbutton').onclick = startstopshow;
// ▼回答ボタン
function nazo(){if(document.getElementById('answer').value!='honda'){
   alert('はずれ、もう一回！');}else{
      var result = confirm('正解！次の問題へ進みますか？');
 
if( result ) {
 
    console.log('ログインしました');
 
}
else {alert('問題へ戻ります');}
 
}}