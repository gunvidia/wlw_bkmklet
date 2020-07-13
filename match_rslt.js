/*
 * @title   .NET 対戦履歴勝率
 * @upddate 2020/01/23
 */

!function(t){
	if(!/^https:\/\/wonderland-wars.net\/matchlog_sub.html$/.test(location.href))return alert("戦績ページで実行してください"),
	!1;

	if(window.jQuery&&jQuery().jquery>"2.2.4")t(jQuery);
	else{
		var n=document.createElement("script");
		n.src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js",n.onload=function(){var n=jQuery.noConflict(!0);
		t(n)},document.body.appendChild(n)
	}
}

(function(t){
	var n=function(n){var a=[];

	return t.each(n,function(){t.merge(a,t("."+this))}),a}(["block_matchlog_match","block_matchlog_ballroom","block_matchlog_astrology2","block_matchlog_concert"]);
	t.each(n,function(){!function(n,a){
	t("<div><div>勝率:"+(a.win_num/a.play_times*100).toFixed(1)+"%</div><input type=button style='color:#fff;background-color:#f06d;-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius: 5px;' value='キャスト別対戦勝率を表示' /></div>").on(
		"click","input",function(){
			t(this).prop("disabled",!0),function(n,a,e,i){
	for(var r=[],o=0;o<i;o++)
		r.push(t.ajax({type:"GET",url:"https://wonderland-wars.net/matchlog.html",data:{date:a,type:e,page:o}}));

		t.when.apply(t,r).done(function(){var a=function(n){var a=void 0,e=void 0,i=void 0,r=void 0;
		switch(n){case"all":e=".block_match_log",i=".match_icon>img",r=".match_my_team > .match_member > img:eq(0)";
		break;
				
		case"ballroom":e=".block_match_log",i=".match_icon>img",r=".ball_my_team > .match_member > img:eq(0)";
		break;				

		case"astrologyv":e=".block_match_log",i=".match_icon>img",r=".match_my_team > .match_member > img:eq(0)";
		break;
				
		case"concert":e=".block_concert_log",i=".concert_icon>img",r=".concert_my_team > .match_member > img:eq(0)";
		break;				

		default:a=function(){
			alert("Error: URLパラメータ(type = "+n+")")}}return a||(a=function(n){var a=t.parseHTML(n),o=[];

			return t(a).find(e).each(function(){o.push({result:t(this).find(i).attr("src"),cast:t(this).find(r).attr("src")})}),o}),a}(e),i=[];
			t(r).each(function(n){t.merge(i,a(this.responseText))});
			var o={};

			t(i).each(function(){this.cast in o||(o[this.cast]={win:0,lose:0}),this.result.match(/win/)?o[this.cast].win++:o[this.cast].lose++});

			var c="<table align='center' border='0'>";
			for(var l in o){var s=o[l].win,h=o[l].lose,m=s+h;
			c+="<tr>",c+="<td width='48px' align='center'><img width=\"48px\" src="+l+"></td>",c+="<td align='right'><b>"+m+"</b>戦</td>",c+="<td align='right'><b><font color='#a50000'>"+s+"</b></font>勝</td>",c+="<td align='right'><b><font color='#007ae1'>"+h+"</b></font>敗</td>",c+="<td align='right'>(勝率:</td><td align='right'>"+(s/m*100).toFixed(1)+"%)</td>",c+="</tr>"}c+="</table>",t(n).append(c)}).fail(function(){alert("取得失敗したページあります。")})}(t(this).parent(),a.date,a.type,a.page_num)}).insertAfter(n)}(this,function(n){var a=function(n){for(var a=t(n).children("a").attr("href").split("?")[1].split("&"),e={},i=0;a[i];i++){var r=a[i].split("=");e[r[0]]=r[1]}return e.type||(e.type="all"),e}(n),e=function(n){return t(n).find(".matchlog_list_total").html()}(n),i=function(n){return t(n).find(".matchlog_list_win").html()}(n),r=Math.ceil(e/10);return{date:a.date,type:a.type,play_times:e,win_num:i,page_num:r}}(this))
})
});
