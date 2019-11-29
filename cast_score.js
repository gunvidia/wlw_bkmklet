/*
 * @title   .NET キャスト別勝率表示
 * @author  gunvidia.t
 * @upddate 2019/09/10
 */
 
var data1 = document.querySelectorAll('.block_playdata_01_text');
var data2 = document.querySelectorAll('.block_playdata_02_text');
 
// キャスト別戦跡詳細ページ以外での起動はエラー
if(!/^https:\/\/wonderland-wars.net\/castdetail.html$/.test(location.href)) {
     return alert("※キャスト別戦跡詳細ページで実行して下さい22※"),!1;
}
 
// 勝利数・敗北数・勝率
var win_cnt  = parseInt(data1[1].innerHTML);
var los_cnt  = 0;
var win_per = 0;
// 撃破数・撤退数・キルレシオ
var kil_cnt = parseInt(data1[2].innerHTML);
var det_cnt = parseInt(data1[3].innerHTML);
var kil_rat = 0;
// 平均撃破数・平均撤退数
var kil_ave = 0;
var det_ave = 0;
// 評価数(計算用)
var ave_pg = parseFloat(data2[0].innerHTML);
var win_pg = parseFloat(data2[1].innerHTML);
var los_pg = parseFloat(data2[2].innerHTML);
 
// 敗北数の算出
if((ave_pg-los_pg)!= 0) {
    los_cnt = parseInt(Math.round((win_pg - ave_pg) * win_cnt / (ave_pg - los_pg)));
}
// 勝率の算出
if((win_cnt+los_cnt)!= 0) {
    win_per = Math.round(win_cnt/(win_cnt+los_cnt)*100*100)/100;
}
// キルレシオの算出
if(det_cnt!=0) {
    kil_rat = Math.round(kil_cnt/det_cnt*100)/100;
}
// 平均撃破・撤退数の算出
if((win_cnt+los_cnt)!= 0) {
    kil_ave = Math.round(kil_cnt/(win_cnt+los_cnt)*100)/100;
    det_ave = Math.round(det_cnt/(win_cnt+los_cnt)*100)/100;
}
 
// 表示項目を追加
var fi = document.querySelector('.frame_inner');
var nfi = fi.cloneNode(true);
nfi.id = "wlw_custom";
var p = nfi.querySelectorAll('.clearfix');
 
insert(2, "敗北数", los_cnt +"<span class=\"font_small\">敗</span>");
insert(2, "勝率", win_per + "%");
insert(4, "撃破数(1試合平均)", kil_ave);
insert(4, "撤退数(1試合平均)", det_ave);
insert(4, "キルレシオ", kil_rat);
 
fi.parentNode.replaceChild(nfi, fi);
 
/* HTML書換処理
 * i :表示位置
 * t1:タイトル
 * t2:表示内容
 */
function insert(i, t1, t2) {
    var e = p[0].cloneNode(true);
    var t = e.getElementsByTagName('div');
    t[0].innerHTML = t1;
    t[1].innerHTML = t2;
    nfi.insertBefore(e, p[i]);
}
