function t(id){
	return document.getElementById(id);
}
function audioApp(){
	var audio = new Audio();
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;
	var trackbox = t("playlist");
	var tracks = {
	    "track1":["Cypher pt.4", "BTS (방탄소년단)", "https://a.tumblr.com/tumblr_oeu02al7MF1tqmylco1.mp3", "https://static.tumblr.com/f5a4db715e455b234111e7662f4ca97f/f9md3wj/Ykzo0ak14/tumblr_static_3s348uuhiack44gsk0c4w4scc.gif", "I love I love I love myself <br> I know I know I know myself<br>Ya playa haters you should love yourself brr"],
    "track2":["불타오르네 (FIRE)", "BTS (방탄소년단)", "https://song.cofemuzik.pro/download/d33532303034b2b03037358e3735833000/dec0b92bcbc63ddc8c8e64de5dbaf1e1/Boris%20Brejcha%20-%20Never%20Look%20Back.mp3", "https://verbalcomma.files.wordpress.com/2016/05/bts_fire2.gif?w=660", "니 멋대로 살어 어차피 니 꺼야 <br> 애쓰지 좀 말어 져도 괜찮아 <br> Errbody say La la la la la"],
    "track3":["Bermuda triangle", "Zico (Feat. Crush, Dean)", "https://a.tumblr.com/tumblr_ohbuz90jxa1tqmylco1.mp3", "http://pa1.narvii.com/6295/d5ae3362d16e53830687c1c5ce3557523fb29ab9_hq.gif", "손목에 Rolex 이젠 boring <br> 길거릴 도배해 우리 노랜 <br> 놀이라 보기엔 이건 범죄"],
    "track4":["Lotto", "EXO", "https://dl.dropboxusercontent.com/s/cosuy19cde3rlin/EXO%20-%20Lotto%20%5BFrom%20Repackaged%20Album%202016%5D%20%28FULL%20OFFICIAL%20Audio%29.mp3", "https://66.media.tumblr.com/3520cd2f76682a6218e2a20620de69ef/tumblr_oc2yztglEZ1r9f40do3_r1_500.gif", "Lipstick Chateau 와인빛 Color (Lalalala) <br> 하얀 Champagne 버블에 Shower (Lalalala)"],
    "track5":["Monster", "EXO", "https://a.tumblr.com/tumblr_o8gi0zShmW1uauo10o1.mp3", "http://orig02.deviantart.net/3922/f/2016/161/e/a/monster31_by_omgitsely-da5rile.gif", "I’m creeping in your heart babe <br> 뒤집고 무너트리고 삼켜 <br> 그래 널 훔쳐 탐닉해"],
    "track6":["에라 모르겠다 (FXXK IT)", "BIGBANG", "https://a.tumblr.com/tumblr_oi2vknnVFP1tqmylco1.mp3", "https://3.bp.blogspot.com/-wYQUsZJ6EXo/WFZESW4dleI/AAAAAAAABHQ/Fp5DeStDsewgXHw9Agf-kDOCNdEP05MbwCLcB/s640/tumblr_oi30mfZEmO1r0nqnso2_500.gif", "술 취했으니 <br> 눈 좀 붙여 잠깐만 <br> 어디 가서 쉴까 <br> baby 난 손만 잡고 자"],
    "track7":["뱅뱅뱅 (BANG BANG BANG)", "BIGBANG", "https://a.tumblr.com/tumblr_nptikgeQ9F1tqmylco1.mp3", "https://68.media.tumblr.com/55ed7d94b1b697398b317131680a1286/tumblr_o62ljdurMq1v194kso7_500.gif", "난 불을 질러 네 심장을 워 <br> 널 미치게 하고 싶어 <br> B.I.G Yea we bang like this 모두 다 같이"],
    "track8":["Toy", "Block B", "https://a.tumblr.com/tumblr_o5fofy9EK11tqmylco1.mp3", "http://cdn.playbuzz.com/cdn/77c1048d-f6bf-4814-82d0-0f51e891165a/2179fe6c-d6c4-4bbe-9298-258e4bd5d763.gif", "아무 말도 해줄 수 없는 나 <br> 침묵하는 내 입술은 벌써 <br> 몇 장의 편지를 써냈어"]
	};
	for(var track in tracks){
		var tb = document.createElement("div");
    var pb = document.createElement("div");
    var tn = document.createElement("div");
    var ta = document.createElement("div");
    var tg = document.createElement("div");
    var tq = document.createElement("div");
    var ti = document.createElement("div");
    
		tb.id = "play_item";
	  pb.className = "item_play fa fa-play";
	  tn.className = "item_name";
	  ta.className = "item_artist";
	  tg.className = "item_gif";
    tq.className = "item_quote";
    ti.className = "item_icons";
    ti.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i> <i class='fa fa-share-alt' aria-hidden='true'></i> <i class='fa fa-heart-o' aria-hidden='true'></i> <i class='fa fa-ellipsis-h' aria-hidden='true'></i> ";
    
		tn.innerHTML = tracks[track][0];
    ta.innerHTML = tracks[track][1];
    pb.id = tracks[track][2];
    tg.innerHTML = "<div style='background: url("+tracks[track][3]+") center center; background-size: cover;'></div>";
    tq.innerHTML = tracks[track][4];
    pb.addEventListener("click", switchTrack);
    
    tb.appendChild(pb);
    tb.appendChild(tn);
    tb.appendChild(ta);
    tb.appendChild(tg);
    tb.appendChild(tq);
    tb.appendChild(ti);
    trackbox.appendChild(tb);
    
		audio_index++;
	}
	audio.addEventListener("ended",function(){
	    t(playingtrack).className = "item_play fa fa-play";
		playingtrack = "";
		is_playing = false;
	});
	function switchTrack(event){
		if(is_playing){
		    if(playingtrack != event.target.id){
			    is_playing = true;
				t(playingtrack).className = "item_play fa fa-play";
          t(playingtrack).parentElement.className = "no";
			    event.target.className = "item_play fa fa-pause";
          event.target.parentElement.className = "active";
			    audio.src = event.target.id;
	            audio.play();
			} else {
			    audio.pause();
			    is_playing = false;
				event.target.className = "item_play fa fa-play";
        event.target.parentElement.className = "no";
			}
		} else {
			is_playing = true;
			event.target.className = "item_play fa fa-pause";
      event.target.parentElement.className = "active";
			if(playingtrack != event.target.id){
				audio.src = event.target.id;
        event.target.parentElement.className = "no";
			}
	        audio.play();
      event.target.parentElement.className = "active";
		}
		playingtrack = event.target.id;
	}
}
window.addEventListener("load", audioApp);