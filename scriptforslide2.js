var imgset = [
    "https://github.com/Mi4ulement/kimatsukadai/blob/main/image/toyotaprius.jpg?raw=true",
    "https://github.com/Mi4ulement/kimatsukadai/blob/main/image/toyotaalphard.jpg?raw=true",
    "https://github.com/Mi4ulement/kimatsukadai/blob/main/image/toyotasupra.jpg?raw=true",
    "https://github.com/Mi4ulement/kimatsukadai/blob/main/image/toyota86.jpg?raw=true"
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
      slideid = setInterval(slideimage,1500);   // 1000は切替秒数(ミリ秒)
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
function nazo(){if(document.getElementById('answer').value!='toyota'){
   alert('はずれ、もう一回！');}else{
      alert('正解！下のリンクから次の問題へ進んでください');
 
}}
