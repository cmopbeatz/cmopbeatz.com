


//detectWin

function dWin(){


$(document).ready(function () {


var w = $(window).width();



w < 1000 ? $('#HL-link').hide():$('#HL-link').show();
w < 1000 ? $('#HC-link').hide():$('#HC-link').show();
w < 1000 ? $('#HR-link').hide():$('#HR-link').show();
w < 800 ? $('#CMOP-title').hide():$('#CMOP-title').show();

w < 510 ?  $('#cmopbeatz').css('display','none') : $('#cmopbeatz').css('display','block');
w < 501 ? $('#clock-toggle').css('display', 'none') : $('#clock-toggle').css('display', 'block');



$(window).resize(function(){



var w = $(window).width();



w < 1000 ? $('#HL-link').hide():$('#HL-link').show();
w < 1000 ? $('#HC-link').hide():$('#HC-link').show();
w < 1000 ? $('#HR-link').hide():$('#HR-link').show();
w < 800 ? $('#CMOP-title').hide():$('#CMOP-title').show();

w < 510 ?  $('#cmopbeatz').css('display','none') : $('#cmopbeatz').css('display','block');

w < 501 ? $('#audio_player').css('display', 'none') : $('#audio_layer').css('display', 'block');
 w <= 500 ? $('.okBtn').css('display', 'none'):$('.okBtn').css('display', 'none');

w <= 500 ? $('#siteBlocker').css('display','block'): $('#siteBlocker').css('display','none');



if(w <= 500){


swal({ 
  title: "Page width too small!",
   text: "cmopbeatz.com has detected that your page width is too small to view site content correctly. Please resize to a higher width.",
    icon: "warning" ,
	closeOnClickOutside: false,
	button: false
		
	  
			});
					 
	
	
	
	
}else{
	swal.close();
	
	}

});
});

}


// Loading Tips

function wT(){
$(document).ready(function(){
	
	var counter = 0;

	
	
	function showCaption(){
	
		counter++;
		console.log(counter);
		if(counter === 1){
			$('#caption1').show()
				$('#caption2').hide()
				$('#caption3').hide()
				$('#caption4').hide()
		
			$('#tips-body-bkg').attr('src','images/caption1.png');
			
			
			
			}else
			
			if(counter === 2){
				$('#caption1').hide()
				$('#caption2').show()
				$('#caption3').hide()
				$('#caption4').hide()
				
					$('#tips-body-bkg').attr('src','images/caption2.png');
				
				
				
				
			}else
			
			if(counter === 3){
			$('#caption1').hide()
				$('#caption2').hide()
				$('#caption3').show()
				$('#caption4').hide()
			
					$('#tips-body-bkg').attr('src','images/caption3.png');
				
				
				
				
				
			}else
			
			if(counter === 4){
				$('#caption1').hide()
				$('#caption2').hide()
				$('#caption3').hide()
				$('#caption4').show()
			
					$('#tips-body-bkg').attr('src','images/caption5.png');
				
				
				
				
			}
			
			
			
	};
	
	showCaption();
	
	setInterval(function(){
		showCaption();
	},10*1000);
	
		});
			
}

// Audio Player & Page Function(basic)

function aP(){
window.onload = initAudioPlayer;

function initAudioPlayer() {
	
	

    var audio, playbtn, mutebtn, seekslider, volumeslider, seekto, seeking = false, songShare,
        curtimetext, durtimetext, playlist_status, dir, playlist, playlist_index, tBox, track_List, ext, emlBtn, payBtn, pCart, tWindow, abtFooter, abtText, clicked = false,
        pHead, tPanels, APlinks, closeAP, ActP, icon_TB, clockdisp, toggleClock, caldisp, contactbtn, sharebtn, contactCtn, shareCtn, optionbtn, lTAB, sTAB, pTAB, eTAB, ordSelect,ovBtn,sumBtn,lSum,sSum,pSum,eSum,lTable,sTable,pTable,eTable,pLoader,wContainer,apContainer, actPOC, 
        playlist = [];


    playlist_index = 0;

    dir = "CMO_P-Music/Masters/";
    ext = ".mp3"

    //SONG COMPENDIUM//
    //ADD SONG REFERENCES HERE//
    ////////////////////////////////
    //USE "playlist [element number]= [var for song data]"//
    ///////////////////////////////
    playlist[0] = "emptyfile";
    playlist[1] = "After Me(no-hook)";
    playlist[2] = "All In(no-hook)";
    playlist[3] = "Baddest Bitch(no-hook)";
    playlist[4] = "Beach Cruiser(no-hook)";
    playlist[5] = "Bi-Coastal(no-hook)";
    playlist[6] = "Biz_as_usual(no-hook)";
    playlist[7] = "Bottles(no-hook)";
    playlist[8] = "F-n Do It(no-hook)";
    playlist[9] = "Frenchie(no-hook)";
    playlist[10] = "Functional Fyre(no-hook)";
    playlist[11] = "Gyros(no-hook)";
    playlist[12] = "Hands-Up(no-hook)";
    playlist[13] = "HH-e(no-hook)";
    playlist[14] = "Hi-Jinx(no-hook)";
    playlist[15] = "In My Mind(no-hook)";
    playlist[16] = "Justify(no-hook)";
    playlist[17] = "Like Neon(no-hook)";
    playlist[18] = "Make It Count(no-hook)";
    playlist[19] = "Numbers(no-hook)";
	playlist[20] = "Position2(no-hook)";
   


    ////////////////////////////////////////////
    ////TRACK SELECTION ASSIGNMENTS////
    //ASSIGN HYPERLINKS TO PLAYLIST TRACKS using "hyperlinkID = playlist[position].play();"//
    ////////////////////////////////////////////


    // Set object references
	
actPOC = document.getElementById('actPOC');
 apContainer = document.getElementById('actionContainer');
	   clockdisp = document.getElementById('clock');
    toggleClock = document.getElementById('clock-toggle');
    caldisp = document.getElementById('calendar');

    playbtn = document.getElementById('playpausebtn');
    mutebtn = document.getElementById('mutebtn');

    seekslider = document.getElementById('seekslider');
    volumeslider = document.getElementById('volumeslider');

    curtimetext = document.getElementById('curtimetext');
    durtimetext = document.getElementById('durtimetext');
    playlist_status = document.getElementById('playlist_status');

    track_List = document.getElementById('trackbox');
    expandTB = document.getElementById('exp_tracklist');


    icon_TB = document.getElementById('tb_Icon');
    tBox = document.getElementById('textbox');
    emlBtn = document.getElementById('eMail');
    scBtn = document.getElementById('soundCloud');
    payBtn = document.getElementById('addToCart');

    tWindow = document.getElementById('termWindow');


    pHead = document.getElementById('PricingHeader');
   
    tPanels = document.getElementById('pricingPanel');
    abtFooter = document.getElementById('footer');
    abtText = document.getElementById('aboutField');

   
    closeAP = document.getElementById('closeAction');
    ActP = document.getElementById('actionPanel');

    APlinks = document.getElementById('buyLinks');

    contactbtn = document.getElementById('contact');
    sharebtn = document.getElementById('share');
    contactCtn = document.getElementById('contact-options');
    shareCtn = document.getElementById('share-options');

    optionbtn = document.getElementById('options-toggle');
    optionCtn = document.getElementById('options-container');

    lTAB = document.getElementById('limitedTab');
    sTAB = document.getElementById('standardTab');
    pTAB = document.getElementById('proTab');
    eTAB = document.getElementById('exclusiveTab');

    lCont = document.getElementById('limitedContent');
    sCont = document.getElementById('standardContent');
    pCont = document.getElementById('proContent');
    eCont = document.getElementById('exclusiveContent');

    ordSelect = document.getElementsByClassName('order-dropdown');
    option1 = document.createElement('option');
    option2 = document.createElement('option');
    option3 = document.createElement('option');
	
	songshare = document.getElementById('shareSong-container');
	
	ovBtn = document.getElementById('ovBtn');
	sumBtn = document.getElementById('summBtn');
	lSum = document.getElementById('limitedInfo');
	sSum = document.getElementById('standardInfo');
	pSum = document.getElementById('proInfo');
	eSum = document.getElementById('exclusiveInfo');
	lTable  = document.getElementById('lOv');
	sTable = document.getElementById('sOv');
	pTable = document.getElementById('pOv');
	eTable = document.getElementById('eOv');

    //Audio Object//
    audio = new Audio();
    audio.preload = false;
    audio.src = dir + playlist["0"] + ext;
    audio.loop = false;
   // audio.play();


    //order dropdown add options//


  
    //Add Event Handling
    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);

    seekslider.addEventListener("mousedown", function(event) {
        seeking = true;
        seek(event);
    });
    seekslider.addEventListener("mousemove", function(event) {
        seek(event);
    });
    seekslider.addEventListener("mouseup", function() {
        seeking = false;
    });
    volumeslider.addEventListener("mousemove", setVolume);

    audio.addEventListener("timeupdate", function() {
        seektimeupdate();
    });
    audio.addEventListener("ended", function() {
        switchTrack();
    });

    track_List.addEventListener("change", pickTrack);
    track_List.addEventListener("change", switchStatus);

    //Functions//
///preloader ctrl////





  //options panel//
    optionbtn.onclick = function() {
        if (optionCtn.style.display === "") {

            optionCtn.style.display = "block";
        } else {
            optionCtn.style.display = "";


        }



    }


    //contact/Share(HEADER)//
    contactbtn.onclick = function() {
				   		           document.getElementById('tdDisplay').style.width="330px";
		           document.getElementById('ccCont').style.display="none";
        shareCtn.style.display = "none";

        contactCtn.style.display = "block";

    }
    sharebtn.onclick = function() {

		           document.getElementById('ccCont').style.display="none";
				   		           document.getElementById('tdDisplay').style.width="220px";
        contactCtn.style.display = "none";

        shareCtn.style.display = "block";

    }


    ////Display clock////
    toggleClock.onclick = function() {
        startTime();
        startDate();
        if (clockdisp.style.opacity === "") {

         document.getElementById('tdDisplay').style.width="330px";
			shareCtn.style.display="none";
			contactCtn.style.display="none";
           document.getElementById('ccCont').style.display="block";
		   clockdisp.style.display = "block";
            clockdisp.style.opacity = "1";
			caldisp.style.display = "block";
            caldisp.style.opacity = "1";
        } else {
			           document.getElementById('ccCont').style.display="none";
           		   clockdisp.style.display = "none";
            clockdisp.style.opacity = "";
						caldisp.style.display = "none";
            caldisp.style.opacity = "";
        }
    }

    function startDate() {
        var d = new Date();
        var day = d.getDay();
        var month = d.getMonth();
        var date = d.getDate();
        var year = d.getFullYear();
		
		var propday = ["Mo","Tu","Wd","Th","Fr","Sa","Su"];
		var propmonth = ["01","02","03","04","05","06","07","08","09","10","11","12"];

        caldisp.innerHTML = "[" + propday[day] + "]" + "¦" + propmonth[month] + "¦" + date + "¦" + year;
    }

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        clockdisp.innerHTML = h + ":" + m + ":" + s + "|" + "PST";
        var t = setTimeout(startTime, 500);
    }

    function checkTime(i) {

        if (i < 10) {
            i = "0" + i
        }; // add zero in front of numbers < 10
        return i;
    }


/////expand hot-to-Contact///



    ////Expand / Close Footer////
    abtFooter.onclick = function() {
        if (abtText.style.display === "") {

            abtText.style.display = "block";
        } else {
            abtText.style.display = "";


        }



    }



   
		//////toggle Overview/Summary//////
		ovBtn.onclick = function(){
		ovBtn.style.backgroundColor="#999";
		sumBtn.style.backgroundColor="#333";
		ovBtn.style.color ="#333";
		sumBtn.style.color ="#999";
			
		lTable.style.display = "block";
		lSum.style.display = "none";

		sTable.style.display = "block";
		sSum.style.display = "none";

		pTable.style.display = "block";
		pSum.style.display = "none";

		eTable.style.display = "block";
		eSum.style.display = "none";
				
		}
		summBtn.onclick = function(){
		ovBtn.style.backgroundColor="#333";
		sumBtn.style.backgroundColor="#999"	
		ovBtn.style.color ="#999";
		sumBtn.style.color ="#333";	
			
		lTable.style.display = "none";
		lSum.style.display = "block";
	
		sTable.style.display = "none";
		sSum.style.display = "block";

		pTable.style.display = "none";
		pSum.style.display = "block";

		eTable.style.display = "none";
		eSum.style.display = "block";
				

		}
		
        ////Display Pricing////
    lTAB.onclick = function() {
        lCont.style.display = "block";
        sCont.style.display = "none";
        pCont.style.display = "none";
        eCont.style.display = "none";

    }
    sTAB.onclick = function() {
        lCont.style.display = "none";
        sCont.style.display = "block";
        pCont.style.display = "none";
        eCont.style.display = "none";
    }
    pTAB.onclick = function() {
        lCont.style.display = "none";
        sCont.style.display = "none";
        pCont.style.display = "block";
        eCont.style.display = "none";
    }
    eTAB.onclick = function() {
        lCont.style.display = "none";
        sCont.style.display = "none";
        pCont.style.display = "none";
        eCont.style.display = "block";
    }




    pHead.onclick = function() {

        if (tPanels.style.display === "") {
            pHead.innerHTML = "X";
            pHead.style.textIndent = "0.25px";
            tPanels.style.display = "block";
            tPanels.style.width = "330px";
            tWindow.style.display = "none";
        } else {
            pHead.innerHTML = "$";
            pHead.style.textIndent = "2px";
            tPanels.style.display = "";
            tPanels.style.width = "1px";


        }
    }

    ////Expand/Close Textbox////
    icon_TB.onclick = function() {
            if (tBox.style.opacity === "") {
                tBox.style.width = "auto";
                tBox.style.opacity = "1";


            } else {
                tBox.style.width = "0px";
                tBox.style.opacity = "";
            }


        }
        /////Expand/Close Trackbox/////

    expandTB.onclick = function() {
            if (track_List.style.opacity === ""
               ) {
                expandTB.style.borderRadius = "8px  8px 1px 1px";
                track_List.style.opacity = "1";
				  track_List.style.display = "block";
                track_List.style.height = "190px";
				expandTB.innerHTML = "COLLAPSE";




            } else {
                track_List.style.opacity = "";
				
								  track_List.style.display = "none";
                track_List.style.height = "0px";
				expandTB.style.borderRadius = "8px";
                expandTB.innerHTML = "EXPAND";

            }
        }
        //Clear Action Panel//////

  closeAP.onclick = function() {
	   if (ActP.style.display === "") {
		   actPOC.src="images/cmop-openactionbtn.png";
		 
            ActP.style.display = "none";
			ActP.style.opacity="0";
        } else {
			actPOC.src="images/cmop-closeactionbtn.png";
		   
            ActP.style.display = "";
			ActP.style.opacity = "1";
        }

    }

    
        

  


    ////eMail Display///////
    emlBtn.onclick = function() {
        document.getElementById('emailPanel')
            .style.display = 'block';
        document.getElementById('soundCloudPanel')
            .style.display = 'none';
        document.getElementById('paypalPanel')
            .style.display = 'none';

    }

    ////SoundCloud Display////////
    scBtn.onclick = function() {
        document.getElementById('soundCloudPanel')
            .style.display = 'block';
        document.getElementById('emailPanel')
            .style.display = 'none';
        document.getElementById('paypalPanel')
            .style.display = 'none';

    }

    ////Pay-Pal Display///////
    payBtn.onclick = function() {
        document.getElementById('soundCloudPanel')
            .style.display = 'none';
        document.getElementById('emailPanel')
            .style.display = 'none';
        document.getElementById('paypalPanel')
            .style.display = 'block';

    }



    /////Expand PanelOne/////

    ////Pick Track//////
    function pickTrack(event) {
        audio.src = dir + event.target.value;
        audio.play();
	

		}



    ////Switch Status////

    function switchStatus() {
        var selected_Track = track_List.options[track_List.selectedIndex].value;


        if (selected_Track === "emptyfile.mp3") {
            playlist_status.innerHTML = "Select a Track";

           	}else if (selected_Track === "After Me(no-hook).mp3") {
            playlist_status.innerHTML = "AfterMe";

        } else if (selected_Track === "All In(no-hook).mp3") {
            playlist_status.innerHTML = "All In";
        } else if (selected_Track === "Baddest Bitch(no-hook).mp3") {
            playlist_status.innerHTML = "Baddest Bitch";
        } else if (selected_Track === "Beach Cruiser(no-hook).mp3") {
            playlist_status.innerHTML = "Beach Cruiser";
        } else if (selected_Track === "Bi-Coastal(no-hook).mp3") {
            playlist_status.innerHTML = "Bi-Coastal";
        } else if (selected_Track === "Biz_as_usual(no-hook).mp3") {
            playlist_status.innerHTML = "Biz_as_usual";
        } else if (selected_Track === "Bottles(no-hook).mp3") {
            playlist_status.innerHTML = "Bottles";
        } else if (selected_Track === "Destined(no-hook).mp3") {
            playlist_status.innerHTML = "Destined";
			        }
	 else if (selected_Track === "F-n Do It(no-hook).mp3") {
            playlist_status.innerHTML = "F-n Do It";
			}
			else if(selected_Track === "Frenchie(no-hook).mp3")			      				{playlist_status.innerHTML = "Frenchie";}
			
			 else if (selected_Track === "Functional Fyre(no-hook).mp3") {
            playlist_status.innerHTML = "Functional Fyre";
		}
			else if (selected_Track === "Gyros(no-hook).mp3") {
            playlist_status.innerHTML = "Gyros";
        } else if (selected_Track === "Hands-Up(no-hook).mp3") {
            playlist_status.innerHTML = "Hands-Up";
			        } else if (selected_Track === "HH-e(no-hook).mp3") {
            playlist_status.innerHTML = "HH-e";
        } else if (selected_Track === "Hi-Jinx(no-hook).mp3") {
            playlist_status.innerHTML = "Hi-Jinx";
        } else if (selected_Track === "In My Mind(no-hook).mp3") {
            playlist_status.innerHTML = "In My Mind";
        } else if (selected_Track === "Justify(no-hook).mp3") {
            playlist_status.innerHTML = "Justify";
        } else if (selected_Track === "Like Neon(no-hook).mp3") {
            playlist_status.innerHTML = "Like Neon";
        } else if (selected_Track === "Make It Count(no-hook).mp3") {
            playlist_status.innerHTML = "Make It Count";
        } else if (selected_Track === "Numbers(no-hook).mp3") {
            playlist_status.innerHTML = "Numbers";
        } else if (selected_Track === "Position2(no-hook).mp3") {
            playlist_status.innerHTML = "Position2";

    }

	}


    /////Switch Track/////////

    function switchTrack() {

        if (playlist_index === (playlist.length - 1)) {
            playlist_index = 0;
        } else {
            playlist_index++;
        }
        playlist_status.innerHTML = playlist[playlist_index];
        audio.src = dir + playlist[playlist_index] + ext;
        audio.play();
    }

    /////play or pause/////////


    function playPause() {

        if (audio.paused) {

            audio.play();
            playbtn.style.background = "url(images/cmop-pausebtn.png) no-repeat";
        } else {
            audio.pause();
            playbtn.style.background = "url(images/cmop-playbtn.png) no-repeat";
        }


    }

    ///////mute////////
    function mute() {
        if (audio.muted) {
            audio.muted = false;
            mutebtn.style.background = "url(images/cmop-mute.png) no-repeat";
        } else {
            audio.muted = true;
            mutebtn.style.background = "url(images/cmop-unmute.png) no-repeat";
        }
    }
    ////////////seek slider/////
    function seek(event) {
        if (seeking) {
            seekslider.value = event.clientX - seekslider.offsetLeft;
            seekto = audio.duration * (seekslider.value / 500);
            audio.currentTime = seekto;
        }
    }

    ///////////vol slider//////
    function setVolume() {
        audio.volume = volumeslider.value / 100;
    }

    ///////time update///////
    function seektimeupdate() {
        var nt = audio.currentTime * (500 / audio.duration);
        seekslider.value = nt;

        var curmins = Math.floor(audio.currentTime / 60);
        var cursecs = Math.floor(audio.currentTime - curmins * 60);
        var durmins = Math.floor(audio.duration / 60);
        var dursecs = Math.floor(audio.duration - durmins * 60);

        if (cursecs < 10) {
            cursecs = "0" + cursecs;
        }
        if (dursecs < 10) {
            dursecs = "0" + dursecs;
        }
        if (curmins < 10) {
            curmins = "0" + curmins;
        }
        if (durmins < 10) {
            durmins = "0" + durmins;
        }

        curtimetext.innerHTML = curmins + "." + cursecs;
        durtimetext.innerHTML = durmins + "." + dursecs;
    }


}


}

// paypal-checkout-flow
function pcf(){

var indexURL = "index.html";


var dlLinks = [];


dlLinks[0] = "http://www.mediafire.com/file/g3jk4kdf3y33h0b/After_ME_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[1] = "http://www.mediafire.com/file/ifswgxrxax94ojv/All_In_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[2] = "http://www.mediafire.com/file/5bnkpbcsi4bbx7g/Baddest_Bitch_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[3] = "http://www.mediafire.com/file/wwlba5bwyvvhvn5/Beach_Cruiser_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[4] = "http://www.mediafire.com/file/nquzqj6b64p58d1/Bi-Coastal_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.zip";
dlLinks[5] = "http://www.mediafire.com/file/kib9xw3054v654o/Bottles_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[6] = "http://www.mediafire.com/file/jfrscaedyzw6f5t/Destined_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[7] = "http://www.mediafire.com/file/88lviflrv79fsdx/F-n_Do_It_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[8] = "http://www.mediafire.com/file/x52gy5acpjn2hqj/Frenchie_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[9] = "http://www.mediafire.com/file/ay2dhmt7p8h4zv7/Functional_Fyre_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[10] = "http://www.mediafire.com/file/nd5fajbz3mddf2g/Gyros_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[11] = "http://www.mediafire.com/file/sc1ol6vupbcc7l2/Hands-Up_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[12] = "http://www.mediafire.com/file/f7sg47i47352bl4/HH-e_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[13] = "http://www.mediafire.com/file/z8p72szgqm769bj/Hi-Jinx_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[14] = "http://www.mediafire.com/file/kthcr3b2jrh4b3o/In_My_Mind_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[15] = "http://www.mediafire.com/file/7vjldy6wlscxcg4/Justify_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[16] = "http://www.mediafire.com/file/ipvzka180p3iwsy/Like_Neon_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[17] = "http://www.mediafire.com/file/5926it051m4wao6/Make_It_Count_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[18] = "http://www.mediafire.com/file/4u46ejjb668padc/Numbers_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[19] = "http://www.mediafire.com/file/niaov7jhd7ozs0e/Position2_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";

dlLinks[20] = "http://www.mediafire.com/file/hvoq5f2llz7mbjz/After_ME%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[21] = "http://www.mediafire.com/file/kd81azohmmoe1ze/All_In%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[22] = "http://www.mediafire.com/file/dbhfd7jd12hv7ad/Baddest_Bitch%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[23] = "http://www.mediafire.com/file/p22ad45d5bc1210/Beach_Cruiser%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[24] = "http://www.mediafire.com/file/nfrb1flly01pnzl/Bi-Coastal%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[25] = "http://www.mediafire.com/file/8w603saow8af1j4/Bottles%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[26] = "http://www.mediafire.com/file/02esk55tmgc6fga/Destined%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[27] = "http://www.mediafire.com/file/bd6beizw4bntl6p/F-n_Do_It%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[28] = "http://www.mediafire.com/file/5kqtbo1bh8f65ra/Frenchie%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[29] = "http://www.mediafire.com/file/usabrs1cx6vxi6z/Functional_Fyre%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[30] = "http://www.mediafire.com/file/7n2j4ba4a9ayf3j/Gyros%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[31] = "http://www.mediafire.com/file/9n4yzdtz3m647ny/Hands-Up%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[32] = "http://www.mediafire.com/file/s1opx6ep1d2rm47/HH-e%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[33] = "http://www.mediafire.com/file/57rq4kxi50oj542/Hi-Jinx%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com_.zip";
dlLinks[34] = "http://www.mediafire.com/file/hhatfqmh9ttz8nk/In_My_Mind%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[35] = "http://www.mediafire.com/file/86tby6bbd7cdkan/Justify%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[36] = "http://www.mediafire.com/file/v0mbt2fbz1svk3d/Like_Neon%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[37] = "http://www.mediafire.com/file/e5g6u25tnuu56ie/Make_It_Count%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[38] = "http://www.mediafire.com/file/62xed6333ny96j3/Numbers%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[39] = "http://www.mediafire.com/file/2zi6c8oh129x773/Position2%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";

dlLinks[40] = "http://www.mediafire.com/file/3ecqvrxos3128or/After_ME%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[41] = "http://www.mediafire.com/file/kd81azohmmoe1ze/All_In%28Tagged%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[42] = "http://www.mediafire.com/file/sc38jg3ikad2to3/Baddest_Bitch%28No_Tag%29-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[43] = "http://www.mediafire.com/file/a5ide5mphbb5xov/Beach_Cruiser%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[44] = "http://www.mediafire.com/file/hp92xysqhxb3hx5/Bi-Coastal%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[45] = "http://www.mediafire.com/file/ba7hyph58ou15z2/Bottles%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[46] = "http://www.mediafire.com/file/rq4m5ajzwtvob5m/Destined%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[47] = "http://www.mediafire.com/file/kfpe2o299ffyx84/F-n_Do_It%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[48] = "http://www.mediafire.com/file/42zdve4tq4ey3io/Frenchie%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[49] = "http://www.mediafire.com/file/ohr2hw4vcjrne02/Functional_Fyre%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[50] = "http://www.mediafire.com/file/iomtbz3iq1gak1j/Gyros%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[51] = "http://www.mediafire.com/file/a2cfts2w9qvd29w/Hands-Up%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[52] = "http://www.mediafire.com/file/aw5c4ce540znxiw/HH-e%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[53] = "http://www.mediafire.com/file/aw5c4ce540znxiw/HH-e%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[54] = "http://www.mediafire.com/file/2dxrcc1ijzxf0nq/In_My_Mind%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[55] = "http://www.mediafire.com/file/emtumnn2tbw1hnc/Justify%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[56] = "http://www.mediafire.com/file/utanwup6ajt5ha9/Like_Neon%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[57] = "http://www.mediafire.com/file/974yda7h425al1a/Make_It_Count%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[58] = "http://www.mediafire.com/file/b6bpt11e3zapzb6/Numbers%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";
dlLinks[59] = "http://www.mediafire.com/file/g49jro8o0n1k14w/Position2%28No_Tag%29_-_prod._by_%5Bd1nero%5D_-_cmo_p%40outlook.com.zip";

//LIM
//00100
paypal.Button.render({

        // Set your environment

        env: 'sandbox', // sandbox | production

        // Specify the style of the button

        style: {
			tagline: false,tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked
payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00100',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer
        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
   
				 $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}
  	
				 
	  
			});
			 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[0]);
		});



	
		});
	
					
			
				
            });
        }

    }, '#lim0');
	
	//00101
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00101',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                 $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[1]);
		});
		});
	

				
            });
        }

    }, '#lim1');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00102',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[2]);
		});
		});
	
            });
        }

    }, '#lim2');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00103',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                 $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[3]);
		});
		});
	
            });
        }

    }, '#lim3');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00104',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[4]);
		});
		});
	
				
            });
        }

    }, '#lim4');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00105',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[5]);
		});
		});
	

				 });
           
        }

    }, '#lim5');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00106',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[6]);
		});
	
	

				 });
            });
        }

    }, '#lim6');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00107',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[7]);
		});
		});
	
            });
        }

    }, '#lim7');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'sandbox', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00108',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[8]);
		});
		});
	
            });
        }

    }, '#lim8');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00109',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[9]);
		});
		});
	
            });
        }

    }, '#lim9');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00110',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[10]);
		});
		});
	
            });
        }

    }, '#lim10');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00111',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[11]);
		});
		});
	
            });
        }

    }, '#lim11');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00112',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[12]);
		});
		});
	
            });
        }

    }, '#lim12');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

      payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00113',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[13]);
		});
		});
	
            });
        }

    }, '#lim13');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00114',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[14]);
		});
		});
	
            });
        }

    }, '#lim14');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00115',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[15]);
		});
		});
	
            });
        }

    }, '#lim15');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00116',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[16]);
		});
		});
	
            });
        }

    }, '#lim16');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00117',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },
        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                             $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[17]);
		});
		});
	
            });
        }

    }, '#lim17');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00118',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[18]);
		});
		});
	
            });
        }

    }, '#lim18');
	
	//00100
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '9.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00119',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[19]);
		});
		});
	
            });
        }

    }, '#lim19');
	
	
	
	
	
	
	

//STA
//
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

       payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '19.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00200',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                            $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[20]);
		});
		});
	
            });
        }

    }, '#sta0');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

         payment: function(data, actions) {
        return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '19.95', currency: 'USD' },
                            
                             item_list:{

	items:[
	{
		sku:'cmo00201',
		name:'Tagged MP3 prod. by [d1nero]',
		description:'Lease Type' +':'+'LIMITED',	
		quantity:'1',
		price: '9.95',
		currency:'USD'
	}
	]
	
},


                        }
                    ]
                },
                
                experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

               
                
                
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[21]);
		});
		});
	
            });
        }

    }, '#sta1');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
               payment:{ 
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00202',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
			   },
			     experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }

            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[22]);
		});
		});
	
            });
        }

    }, '#sta2');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00203',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
			},
			experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[23]);
		});
		});
	
            });
        }

    }, '#sta3');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00204',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
$('#redir').attr('href',dlLinks[24]);
		});
		});
	
            });
        }

    }, '#sta4');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        

 
                        item_list:{

	items:[
	{
		sku:'cmo00205',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[25]);
		});
		});
	
            });
        }

    }, '#sta5');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00206',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[26]);
		});
		});
	
            });
        }

    }, '#sta6');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00207',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[27]);
		});
		});
	
            });
        }

    }, '#sta7');

paypal.Button.render({

        // Set your environment

        env: 'sandbox', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00208',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[28]);
		});
		});
	
            });
        }

    }, '#sta8');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00209',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[29]);
		});
		});
	
            });
        }

    }, '#sta9');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00210',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                         $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[30]);
		});
		});
	
            });
        }

    }, '#sta10');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00211',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[31]);
		});
		});
	
            });
        }

    }, '#sta11');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00212',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
			},
			experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[32]);
		});
		});
	
            });
        }

    }, '#sta12');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00213',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                             $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[33]);
		});
		});
	
            });
        }

    }, '#sta13');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00214',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[34]);
		});
		});
	
            });
        }

    }, '#sta14');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00215',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[35]);
		});
		});
	
            });
        }

    }, '#sta15');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black                          tagline: false
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00216',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[36]);
		});
		});
	
            });
        }

    }, '#sta16');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00217',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[37]);
		});
		});
	
            });
        }

    }, '#sta17');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00218',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[38]);
		});
		});
	
            });
        }

    }, '#sta18');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '19.95', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00219',
		name:'Tagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'STANDARD',	
		quantity:'1',
		price: '19.95',
		currency:'USD'
	}
	]
},


 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[39]);
		});
		});
	
            });
        }

    }, '#sta19');




//PRO
//
paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00300',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[40]);
		});
		});
	
            });
        }

    }, '#pro0');

paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00301',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                 $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[41]);
		});
		});
	
            });
        }

    }, '#pro1');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00302',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[42]);
		});
		});
	
            });
        }

    }, '#pro2');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00303',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},


 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[43]);
		});
		});
	
            });
        }

    }, '#pro3');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00304',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[44]);
		});
		});
	
            });
        }

    }, '#pro4');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00305',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[45]);
		});
		});
	
            });
        }

    }, '#pro5');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00306',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				}, 
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[46]);
		});
		});
	
            });
        }

    }, '#pro6');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00307',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				}, 
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                              $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[47]);
		});
		});
	
            });
        }

    }, '#pro7');
	
	paypal.Button.render({

        // Set your environment

        env: 'sandbox', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00308',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[48]);
		});
		});
	
            });
        }

    }, '#pro8');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00309',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[49]);
		});
		});
	
            });
        }

    }, '#pro9');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00310',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	d$('#redir').attr('href',dlLinks[50]);
		});
		});
	
            });
        }

    }, '#pro10');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00311',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[51]);
		});
		});
	
            });
        }

    }, '#pro11');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00312',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                           $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[52]);
		});
		});
	
            });
        }

    }, '#pro12');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00313',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[53]);
		});
		});
	
            });
        }

    }, '#pro13');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00314',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[54]);
		});
		});
	
            });
        }

    }, '#pro14');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00315',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[55]);
		});
		});
	
            });
        }

    }, '#pro15');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
					transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00316',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                               $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[56]);
		});
		});
	
            });
        }

    }, '#pro16');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00317',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[57]);
		});
		});
	
            });
        }

    }, '#pro17');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00318',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[58]);
		});
		});
	
            });
        }

    }, '#pro18');
	
	paypal.Button.render({

        // Set your environment

        env: 'production', // sandbox | production

        // Specify the style of the button

        style: {tagline: false,
            label: 'buynow',
            fundingicons: false, // optional
            branding: true, // optional
            size:  'responsive', // small | medium | large | medium
            shape: 'rect',   // pill | rect
            color: 'silver'   // gold | blue | silve | black
        },
		
		   // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AV8ieJnrwyYLnUG28visMnKKC_JchAmJhzh4Iv3i3-6Lm96GyYplRMulHPX726hyr6H7FejKGnotah0-',
            production: 'AfRr5tIPmp9dA7mWOgxHsQOaTRBaTRqn4SgnUW5o5f-Fq3BN3gQ81JLdcBqeDDCSTx4nCozHW_fcZDh3'
        },
		
		 // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment:{
				transactions: [
                    {
                        amount: { total: '30.00', currency: 'USD' },
                        
 
                        item_list:{

	items:[
	{
		sku:'cmo00319',
		name:'Untagged WAV prod. by [d1nero]',
		description:'Lease Type' +':'+'PRO',	
		quantity:'1',
		price: '30.00',
		currency:'USD'
	}
	]
},

 				

 }
                ]
				},
				experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                                $(document).ready(function() {
swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{
		className:"goBtn",
		text: "Go!",
		
		}	
});
 $('.goBtn').click(function(){
	$('#redir').attr('href',dlLinks[59]);
		});
		});
	
            });
        }

    }, '#pro19');
}

// actionPanel - paypal


function apf(){


var leaseC = [];


var payC = [];

var leaseSel = [];

var bPay1 = [];

var bPay2 = [];

var bPay3 = [];



var bType1 = [];

var bType2 = [];

var bType3 = [];

var closeL = [];
 var closeP = [];

var paycontainer1;

var paycontainer2;

var paycontainer3;
 
//Assign array elements:

//[LC1]
leaseC[0] = $('#lease-cont0');
leaseC[1] = $('#lease-cont1');
leaseC[2] = $('#lease-cont2');
leaseC[3] = $('#lease-cont3');
leaseC[4] = $('#lease-cont4');
leaseC[5] = $('#lease-cont5');
leaseC[6] = $('#lease-cont6');
leaseC[7] = $('#lease-cont7');
leaseC[8] = $('#lease-cont8');
leaseC[9] = $('#lease-cont9');
leaseC[10] = $('#lease-cont10');
leaseC[11] = $('#lease-cont11');
leaseC[12] = $('#lease-cont12');
leaseC[13] = $('#lease-cont13');
leaseC[14] = $('#lease-cont14');
leaseC[15] = $('#lease-cont15');
leaseC[16] = $('#lease-cont16');
leaseC[17] = $('#lease-cont17');
leaseC[18] = $('#lease-cont18');
leaseC[19] = $('#lease-cont19');

//[PC1]
payC[0] = $('#payCont-0');
payC[1] = $('#payCont-1');
payC[2] = $('#payCont-2');
payC[3] = $('#payCont-3');
payC[4] = $('#payCont-4');
payC[5] = $('#payCont-5');
payC[6] = $('#payCont-6');
payC[7] = $('#payCont-7');
payC[8] = $('#payCont-8');
payC[9] = $('#payCont-9');
payC[10] = $('#payCont-10');
payC[11] = $('#payCont-11');
payC[12] = $('#payCont-12');
payC[13] = $('#payCont-13');
payC[14] = $('#payCont-14');
payC[15] = $('#payCont-15');
payC[16] = $('#payCont-16');
payC[17] = $('#payCont-17');
payC[18] = $('#payCont-18');
payC[19] = $('#payCont-19');


//[PCa]
bPay1[0] = payC[0].find('.pay1');
bPay1[1] = payC[1].find('.pay1');
bPay1[2] = payC[2].find('.pay1');
bPay1[3] = payC[3].find('.pay1');
bPay1[4] = payC[4].find('.pay1');
bPay1[5] = payC[5].find('.pay1');
bPay1[6] = payC[6].find('.pay1');
bPay1[7] = payC[7].find('.pay1');
bPay1[8] = payC[8].find('.pay1');
bPay1[9] = payC[9].find('.pay1');
bPay1[10] = payC[10].find('.pay1');
bPay1[11] = payC[11].find('.pay1');
bPay1[12] = payC[12].find('.pay1');
bPay1[13] = payC[13].find('.pay1');
bPay1[14] = payC[14].find('.pay1');
bPay1[15] = payC[15].find('.pay1');
bPay1[16] = payC[16].find('.pay1');
bPay1[17] = payC[17].find('.pay1');
bPay1[18] = payC[18].find('.pay1');
bPay1[19] = payC[19].find('.pay1');

//[PCb]
bPay2[0] = payC[0].find('.pay2');
bPay2[1] = payC[1].find('.pay2');
bPay2[2] = payC[2].find('.pay2');
bPay2[3] = payC[3].find('.pay2');
bPay2[4] = payC[4].find('.pay2');
bPay2[5] = payC[5].find('.pay2');
bPay2[6] = payC[6].find('.pay2');
bPay2[7] = payC[7].find('.pay2');
bPay2[8] = payC[8].find('.pay2');
bPay2[9] = payC[9].find('.pay2');
bPay2[10] = payC[10].find('.pay2');
bPay2[11] = payC[11].find('.pay2');
bPay2[12] = payC[12].find('.pay2');
bPay2[13] = payC[13].find('.pay2');
bPay2[14] = payC[14].find('.pay2');
bPay2[15] = payC[15].find('.pay2');
bPay2[16] = payC[16].find('.pay2');
bPay2[17] = payC[17].find('.pay2');
bPay2[18] = payC[18].find('.pay2');
bPay2[19] = payC[19].find('.pay2');


//[PCc]
bPay3[0] = payC[0].find('.pay3');
bPay3[1] = payC[1].find('.pay3');
bPay3[2] = payC[2].find('.pay3');
bPay3[3] = payC[3].find('.pay3');
bPay3[4] = payC[4].find('.pay3');
bPay3[5] = payC[5].find('.pay3');
bPay3[6] = payC[6].find('.pay3');
bPay3[7] = payC[7].find('.pay3');
bPay3[8] = payC[8].find('.pay3');
bPay3[9] = payC[9].find('.pay3');
bPay3[10] = payC[10].find('.pay3');
bPay3[11] = payC[11].find('.pay3');
bPay3[12] = payC[12].find('.pay3');
bPay3[13] = payC[13].find('.pay3');
bPay3[14] = payC[14].find('.pay3');
bPay3[15] = payC[15].find('.pay3');
bPay3[16] = payC[16].find('.pay3');
bPay3[17] = payC[17].find('.pay3');
bPay3[18] = payC[18].find('.pay3');
bPay3[19] = payC[19].find('.pay3');

//[LCa]
bType1[0] = leaseC[0].find('.types1');
bType1[1] = leaseC[1].find('.types1');
bType1[2] = leaseC[2].find('.types1');
bType1[3] = leaseC[3].find('.types1');
bType1[4] = leaseC[4].find('.types1');
bType1[5] = leaseC[5].find('.types1');
bType1[6] = leaseC[6].find('.types1');
bType1[7] = leaseC[7].find('.types1');
bType1[8] = leaseC[8].find('.types1');
bType1[9] = leaseC[9].find('.types1');
bType1[10] = leaseC[10].find('.types1');
bType1[11] = leaseC[11].find('.types1');
bType1[12] = leaseC[12].find('.types1');
bType1[13] = leaseC[13].find('.types1');
bType1[14] = leaseC[14].find('.types1');
bType1[15] = leaseC[15].find('.types1');
bType1[16] = leaseC[16].find('.types1');
bType1[17] = leaseC[17].find('.types1');
bType1[18] = leaseC[18].find('.types1');
bType1[19] = leaseC[19].find('.types1');


//[LCb]
bType2[0] = leaseC[0].find('.types2');
bType2[1] = leaseC[1].find('.types2');
bType2[2] = leaseC[2].find('.types2');
bType2[3] = leaseC[3].find('.types2');
bType2[4] = leaseC[4].find('.types2');
bType2[5] = leaseC[5].find('.types2');
bType2[6] = leaseC[6].find('.types2');
bType2[7] = leaseC[7].find('.types2');
bType2[8] = leaseC[8].find('.types2');
bType2[9] = leaseC[9].find('.types2');
bType2[10] = leaseC[10].find('.types2');
bType2[11] = leaseC[11].find('.types2');
bType2[12] = leaseC[12].find('.types2');
bType2[13] = leaseC[13].find('.types2');
bType2[14] = leaseC[14].find('.types2');
bType2[15] = leaseC[15].find('.types2');
bType2[16] = leaseC[16].find('.types2');
bType2[17] = leaseC[17].find('.types2');
bType2[18] = leaseC[18].find('.types2');
bType2[19] = leaseC[19].find('.types2');


//[LCc]
bType3[0] = leaseC[0].find('.types3');
bType3[1] = leaseC[1].find('.types3');
bType3[2] = leaseC[2].find('.types3');
bType3[3] = leaseC[3].find('.types3');
bType3[4] = leaseC[4].find('.types3');
bType3[5] = leaseC[5].find('.types3');
bType3[6] = leaseC[6].find('.types3');
bType3[7] = leaseC[7].find('.types3');
bType3[8] = leaseC[8].find('.types3');
bType3[9] = leaseC[9].find('.types3');
bType3[10] = leaseC[10].find('.types3');
bType3[11] = leaseC[11].find('.types3');
bType3[12] = leaseC[12].find('.types3');
bType3[13] = leaseC[13].find('.types3');
bType3[14] = leaseC[14].find('.types3');
bType3[15] = leaseC[15].find('.types3');
bType3[16] = leaseC[16].find('.types3');
bType3[17] = leaseC[17].find('.types3');
bType3[18] = leaseC[18].find('.types3');
bType3[19] = leaseC[19].find('.types3');

//[SL1] 'select a lease...'
leaseSel[0] = $('#leaseType0');
leaseSel[1] = $('#leaseType1');
leaseSel[2] = $('#leaseType2');
leaseSel[3] = $('#leaseType3');
leaseSel[4] = $('#leaseType4');
leaseSel[5] = $('#leaseType5');
leaseSel[6] = $('#leaseType6');
leaseSel[7] = $('#leaseType7');
leaseSel[8] = $('#leaseType8');
leaseSel[9] = $('#leaseType9');
leaseSel[10] = $('#leaseType10');
leaseSel[11] = $('#leaseType11');
leaseSel[12] = $('#leaseType12');
leaseSel[13] = $('#leaseType13');
leaseSel[14] = $('#leaseType14');
leaseSel[15] = $('#leaseType15');
leaseSel[16] = $('#leaseType16');
leaseSel[17] = $('#leaseType17');
leaseSel[18] = $('#leaseType18');
leaseSel[19] = $('#leaseType19');


//[CLP]
//CL0/CP0
closeP[0] = payC[0].find('.closePay');
closeL[0] = leaseC[0].find('.closeLease');

//CL1/CP1
closeP[1] = payC[1].find('.closePay');
closeL[1] = leaseC[1].find('.closeLease');

//CL2/CP2
closeP[2] = payC[2].find('.closePay');
closeL[2] = leaseC[2].find('.closeLease');

//CL3/CP3
closeP[3] = payC[3].find('.closePay');
closeL[3] = leaseC[3].find('.closeLease');

//CL4/CP4
closeP[4] = payC[4].find('.closePay');
closeL[4] = leaseC[4].find('.closeLease');

//CL5/CP5
closeP[5] = payC[5].find('.closePay');
closeL[5] = leaseC[5].find('.closeLease');

//CL6/CP6
closeP[6] = payC[6].find('.closePay');
closeL[6] = leaseC[6].find('.closeLease');

//CL7/CP7
closeP[7] = payC[7].find('.closePay');
closeL[7] = leaseC[7].find('.closeLease');

//CL8/CP8
closeP[8] = payC[8].find('.closePay');
closeL[8] = leaseC[8].find('.closeLease');

//CL9/CP9
closeP[9] = payC[9].find('.closePay');
closeL[9] = leaseC[9].find('.closeLease');

//CL10/CP10
closeP[10] = payC[10].find('.closePay');
closeL[10] = leaseC[10].find('.closeLease');

//CL11/CP11
closeP[11] = payC[11].find('.closePay');
closeL[11] = leaseC[11].find('.closeLease');

//CL12/CP12
closeP[12] = payC[12].find('.closePay');
closeL[12] = leaseC[12].find('.closeLease');

//CL13/CP13
closeP[13] = payC[13].find('.closePay');
closeL[13] = leaseC[13].find('.closeLease');

//CL14/CP14
closeP[14] = payC[14].find('.closePay');
closeL[14] = leaseC[14].find('.closeLease');

//CL15/CP15
closeP[15] = payC[15].find('.closePay');
closeL[15] = leaseC[15].find('.closeLease');

//CL16/CP16
closeP[16] = payC[16].find('.closePay');
closeL[16] = leaseC[16].find('.closeLease');

//CL17/CP17
closeP[17] = payC[17].find('.closePay');
closeL[17] = leaseC[17].find('.closeLease');

//CL18/CP18
closeP[18] = payC[18].find('.closePay');
closeL[18] = leaseC[18].find('.closeLease');

//CL19/CP19
closeP[19] = payC[19].find('.closePay');
closeL[19] = leaseC[19].find('.closeLease');







//Assign functions:

//[SL2] 'initialize lease selection process'

//[ls0]
leaseSel[0].click(function(){
	leaseSel[0].hide();
	leaseC[0].show();
	});
	
	//[ls1]
leaseSel[1].click(function(){
	leaseSel[1].hide();
	leaseC[1].show();
	});
	
	//[ls2]
leaseSel[2].click(function(){
	leaseSel[2].hide();
	leaseC[2].show();
	});
	
	//[ls3]
leaseSel[3].click(function(){
	leaseSel[3].hide();
	leaseC[3].show();
	});
	
	//[ls4]
leaseSel[4].click(function(){
	leaseSel[4].hide();
	leaseC[4].show();
	});
	
	//[ls5]
leaseSel[5].click(function(){
	leaseSel[5].hide();
	leaseC[5].show();
	});
	
	//[ls6]
leaseSel[6].click(function(){
	leaseSel[6].hide();
	leaseC[6].show();
	});
	
	//[ls7]
leaseSel[7].click(function(){
	leaseSel[7].hide();
	leaseC[7].show();
	});
	
	//[ls8]
leaseSel[8].click(function(){
	leaseSel[8].hide();
	leaseC[8].show();
	});
	
	//[ls9]
leaseSel[9].click(function(){
	leaseSel[9].hide();
	leaseC[9].show();
	});
	
	//[ls10]
leaseSel[10].click(function(){
	leaseSel[10].hide();
	leaseC[10].show();
	});
	
	//[ls11]
leaseSel[11].click(function(){
	leaseSel[11].hide();
	leaseC[11].show();
	});
	
	//[ls12]
leaseSel[12].click(function(){
	leaseSel[12].hide();
	leaseC[12].show();
	});
	
	//[ls13]
leaseSel[13].click(function(){
	leaseSel[13].hide();
	leaseC[13].show();
	});
	
	//[ls14]
leaseSel[14].click(function(){
	leaseSel[14].hide();
	leaseC[14].show();
	});
	
	//[ls15]
leaseSel[15].click(function(){
	leaseSel[15].hide();
	leaseC[15].show();
	});
	
	//[ls16]
leaseSel[16].click(function(){
	leaseSel[16].hide();
	leaseC[16].show();
	});
	
	//[ls17]
leaseSel[17].click(function(){
	leaseSel[17].hide();
	leaseC[17].show();
	});
	
	//[ls18]
leaseSel[18].click(function(){
	leaseSel[18].hide();
	leaseC[18].show();
	});
	
	//[ls19]
leaseSel[19].click(function(){
	leaseSel[19].hide();
	leaseC[19].show();
	});
	
//[LC2]
	//[lc0]
	bType1[0].click(function(){
		leaseC[0].hide();
		payC[0].show();
		bPay1[0].show();
		bPay2[0].hide();
		bPay3[0].hide();
		
		});
		bType2[0].click(function(){
		leaseC[0].hide();
		payC[0].show();
		bPay1[0].hide();
		bPay2[0].show();
		bPay3[0].hide();
		
		});
		bType3[0].click(function(){
		leaseC[0].hide();
		payC[0].show();
		bPay1[0].hide();
		bPay2[0].hide();
		bPay3[0].show();
		
		});
		
		//[lc1]
	bType1[1].click(function(){
		leaseC[1].hide();
		payC[1].show();
		bPay1[1].show();
		bPay2[1].hide();
		bPay3[1].hide();
		
		});
		bType2[1].click(function(){
		leaseC[1].hide();
		payC[1].show();
		bPay1[1].hide();
		bPay2[1].show();
		bPay3[1].hide();
		});
		bType3[1].click(function(){
		leaseC[1].hide();
		payC[1].show();
		bPay1[1].hide();
		bPay2[1].hide();
		bPay3[1].show();
		
		});
		
		//[lc2]
	bType1[2].click(function(){
		leaseC[2].hide();
		payC[2].show();
		bPay1[2].show();
		bPay2[2].hide();
		bPay3[2].hide();
		
		});
		bType2[2].click(function(){
		leaseC[2].hide();
		payC[2].show();
		bPay1[2].hide();
		bPay2[2].show();
		bPay3[2].hide();
		
		});
		bType3[2].click(function(){
		leaseC[2].hide();
		payC[2].show();
		bPay1[2].hide();
		bPay2[2].hide();
		bPay3[2].show();
		
		});
		
		//[lc3]
	bType1[3].click(function(){
		leaseC[3].hide();
		payC[3].show();
		bPay1[3].show();
		bPay2[2].hide();
		bPay3[2].hide();
		
		});
		bType2[3].click(function(){
		leaseC[3].hide();
		payC[3].show();
		bPay1[3].hide();
		bPay2[3].show();
		bPay3[3].hide();
		
		});
		bType3[3].click(function(){
		leaseC[3].hide();
		payC[3].show();
		bPay1[3].hide();
		bPay2[3].hide();
		bPay3[3].show();
		
		});
		
		//[lc4]
	bType1[4].click(function(){
		leaseC[4].hide();
		payC[4].show();
		bPay1[4].show();
		bPay2[4].hide();
		bPay3[4].hide();
		
		});
		bType2[4].click(function(){
		leaseC[4].hide();
		payC[4].show();
		bPay1[4].hide();
		bPay2[4].show();
		bPay3[4].hide();
		
		});
		bType3[4].click(function(){
		leaseC[4].hide();
		payC[4].show();
		bPay1[4].hide();
		bPay2[4].hide();
		bPay3[4].show();
		
		});
		
		//[lc5]
	bType1[5].click(function(){
		leaseC[5].hide();
		payC[5].show();
		bPay1[5].show();
		bPay2[5].hide();
		bPay3[5].hide();
		
		});
		bType2[5].click(function(){
		leaseC[5].hide();
		payC[5].show();
		bPay1[5].hide();
		bPay2[5].show();
		bPay3[5].hide();
		
		});
		bType3[5].click(function(){
		leaseC[5].hide();
		payC[5].show();
		bPay1[5].hide();
		bPay2[5].hide();
		bPay3[5].show();
		
		});
		
		//[lc6]
	bType1[6].click(function(){
		leaseC[6].hide();
		payC[6].show();
		bPay1[6].show();
		bPay2[6].hide();
		bPay3[6].hide();
		
		});
		bType2[6].click(function(){
		leaseC[6].hide();
		payC[6].show();
		bPay1[6].hide();
		bPay2[6].show();
		bPay3[6].hide();
		
		});
		bType3[6].click(function(){
		leaseC[6].hide();
		payC[6].show();
		bPay1[6].hide();
		bPay2[6].hide();
		bPay3[6].show();
		
		});
		
		//[lc7]
	bType1[7].click(function(){
		leaseC[7].hide();
		payC[7].show();
		bPay1[7].show();
		bPay2[7].hide();
		bPay3[7].hide();
		
		});
		bType2[7].click(function(){
		leaseC[7].hide();
		payC[7].show();
		bPay1[7].hide();
		bPay2[7].show();
		bPay3[7].hide();
		
		});
		bType3[7].click(function(){
		leaseC[7].hide();
		payC[7].show();
		bPay1[7].hide();
		bPay2[7].hide();
		bPay3[7].show();
		
		});
		
		//[lc8]
	bType1[8].click(function(){
		leaseC[8].hide();
		payC[8].show();
		bPay1[8].show();
		bPay2[8].hide();
		bPay3[8].hide();
		
		});
		bType2[8].click(function(){
		leaseC[8].hide();
		payC[8].show();
		bPay1[8].hide();
		bPay2[8].show();
		bPay3[8].hide();
		
		});
		bType3[8].click(function(){
		leaseC[8].hide();
		payC[8].show();
		bPay1[8].hide();
		bPay2[8].hide();
		bPay3[8].show();
		
		});
		
		//[lc9]
	bType1[9].click(function(){
		leaseC[9].hide();
		payC[9].show();
		bPay1[9].show();
		bPay2[9].hide();
		bPay3[9].hide();
		
		});
		bType2[9].click(function(){
		leaseC[9].hide();
		payC[9].show();
		bPay1[9].hide();
		bPay2[9].show();
		bPay3[9].hide();
		
		});
		bType3[9].click(function(){
		leaseC[9].hide();
		payC[9].show();
		bPay1[9].hide();
		bPay2[9].hide();
		bPay3[9].show();
		
		});
		
		//[lc10]
	bType1[10].click(function(){
		leaseC[10].hide();
		payC[10].show();
		bPay1[10].show();
		bPay2[10].hide();
		bPay3[10].hide();
		
		});
		bType2[10].click(function(){
		leaseC[10].hide();
		payC[10].show();
		bPay1[10].hide();
		bPay2[10].show();
		bPay3[10].hide();
		
		});
		bType3[10].click(function(){
		leaseC[10].hide();
		payC[10].show();
		bPay1[10].hide();
		bPay2[10].hide();
		bPay3[10].show();
		
		});
		
		//[lc11]
	bType1[11].click(function(){
		leaseC[11].hide();
		payC[11].show();
		bPay1[11].show();
		bPay2[11].hide();
		bPay3[11].hide();
		
		});
		bType2[11].click(function(){
		leaseC[11].hide();
		payC[11].show();
		bPay1[11].hide();
		bPay2[11].show();
		bPay3[11].hide();
		
		});
		bType3[11].click(function(){
		leaseC[11].hide();
		payC[11].show();
		bPay1[11].hide();
		bPay2[11].hide();
		bPay3[11].show();
		
		});
		
		//[lc12]
	bType1[12].click(function(){
		leaseC[12].hide();
		payC[12].show();
		bPay1[12].show();
		bPay2[12].hide();
		bPay3[12].hide();
		
		});
		bType2[12].click(function(){
		leaseC[12].hide();
		payC[12].show();
		bPay1[12].hide();
		bPay2[12].show();
		bPay3[12].hide();
		
		});
		bType3[12].click(function(){
		leaseC[12].hide();
		payC[12].show();
		bPay1[12].hide();
		bPay2[12].hide();
		bPay3[12].show();
		
		});
		
		//[lc13]
	bType1[13].click(function(){
		leaseC[13].hide();
		payC[13].show();
		bPay1[13].show();
		bPay2[13].hide();
		bPay3[13].hide();
		
		});
		bType2[13].click(function(){
		leaseC[13].hide();
		payC[13].show();
		bPay1[13].hide();
		bPay2[13].show();
		bPay3[13].hide();
		
		});
		bType3[13].click(function(){
		leaseC[13].hide();
		payC[13].show();
		bPay1[13].hide();
		bPay2[13].hide();
		bPay3[13].show();
		
		});
		
		//[lc14]
	bType1[14].click(function(){
		leaseC[14].hide();
		payC[14].show();
		bPay1[14].show();
		bPay2[14].hide();
		bPa31[14].hide();
		
		});
		bType2[14].click(function(){
		leaseC[14].hide();
		payC[14].show();
		bPay1[14].hide();
		bPay2[14].show();
		bPay3[14].hide();
		
		});
		bType3[14].click(function(){
		leaseC[14].hide();
		payC[14].show();
		bPay1[14].hide();
		bPay2[14].hide();
		bPay3[14].show();
		
		});
		
		//[lc15]
	bType1[15].click(function(){
		leaseC[15].hide();
		payC[15].show();
		bPay1[15].show();
		bPay2[15].hide();
		bPay3[15].hide();
		
		});
		bType2[15].click(function(){
		leaseC[15].hide();
		payC[15].show();
		bPay1[15].hide();
		bPay2[15].show();
		bPay3[15].hide();
		
		});
		bType3[15].click(function(){
		leaseC[15].hide();
		payC[15].show();
		bPay1[15].hide();
		bPay2[15].hide();
		bPay3[15].show();
		
		});
		
		//[lc16]
	bType1[16].click(function(){
		leaseC[16].hide();
		payC[16].show();
		bPay1[16].show();
		bPay2[16].hide();
		bPay3[16].hide();
		
		});
		bType2[16].click(function(){
		leaseC[16].hide();
		payC[16].show();
		bPay1[16].hide();
		bPay2[16].show();
		bPay3[16].hide();
		
		});
		bType3[16].click(function(){
		leaseC[16].hide();
		payC[16].show();
		bPay1[16].hide();
		bPay2[16].hide();
		bPay3[16].show();
		
		});
		
		//[lc17]
	bType1[17].click(function(){
		leaseC[17].hide();
		payC[17].show();
		bPay1[17].show();
		bPay2[17].hide();
		bPay3[17].hide();
	
		});
		bType2[17].click(function(){
		leaseC[17].hide();
		payC[17].show();
		bPay1[17].hide();
		bPay2[17].show();
		bPay3[17].hide();
		
		});
		bType3[17].click(function(){
		leaseC[17].hide();
		payC[17].show();
		bPay1[17].hide();
		bPay2[17].hide();
		bPay3[17].show();
		
		});
		
		//[lc18]
	bType1[18].click(function(){
		leaseC[18].hide();
		payC[18].show();
		bPay1[18].show();
		bPay2[18].hide();
		bPay3[18].hide();
		
		
		});
		bType2[18].click(function(){
		leaseC[18].hide();
		payC[18].show();
		bPay1[18].hide();
		bPay2[18].show();
		bPay3[18].hide();
		
		});
		bType3[18].click(function(){
		leaseC[18].hide();
		payC[18].show();
		bPay1[18].hide();
		bPay2[18].hide();
		bPay3[18].show();
		
		});
		
		//[lc19]
	bType1[19].click(function(){
		leaseC[19].hide();
		payC[19].show();
		bPay1[19].show();
		bPay2[19].hide();
		bPay3[19].hide();
		
		});
		bType2[19].click(function(){
		leaseC[19].hide();
		payC[19].show();
		bPay1[19].hide();
		bPay2[19].show();
		bPay3[19].hide();
		
		});
		bType3[19].click(function(){
		leaseC[19].hide();
		payC[19].show();
		bPay1[19].hide();
		bPay2[19].hide();
		bPay3[19].show();
		
		});
		
	
//[CP1]
//close-pay0
closeP[0].click(function(){
	payC[0].hide();
	leaseC[0].show();
});

//close-pay0
closeP[1].click(function(){
	payC[1].hide();
	leaseC[1].show();
});

//close-pay2
closeP[2].click(function(){
	payC[2].hide();
	leaseC[2].show();
});

//close-pay3
closeP[3].click(function(){
	payC[3].hide();
	leaseC[3].show();
});

//close-pay4
closeP[4].click(function(){
	payC[4].hide();
	leaseC[4].show();
});

//close-pay5
closeP[5].click(function(){
	payC[5].hide();
	leaseC[5].show();
});

//close-pay6
closeP[6].click(function(){
	payC[6].hide();
	leaseC[6].show();
});

//close-pay7
closeP[7].click(function(){
	payC[7].hide();
	leaseC[7].show();
});

//close-pay8
closeP[8].click(function(){
	payC[8].hide();
	leaseC[8].show();
});

//close-pay9
closeP[9].click(function(){
	payC[9].hide();
	leaseC[9].show();
});

//close-pay910
closeP[10].click(function(){
	payC[10].hide();
	leaseC[10].show();
});

//close-pay11
closeP[11].click(function(){
	payC[11].hide();
	leaseC[11].show();
});

//close-pay12
closeP[12].click(function(){
	payC[12].hide();
	leaseC[12].show();
});

//close-pay13
closeP[13].click(function(){
	payC[13].hide();
	leaseC[13].show();
});

//close-pay14
closeP[14].click(function(){
	payC[14].hide();
	leaseC[14].show();
});

//close-pay15
closeP[15].click(function(){
	payC[15].hide();
	leaseC[15].show();
});

//close-pay16
closeP[16].click(function(){
	payC[16].hide();
	leaseC[16].show();
});

//close-pay17
closeP[17].click(function(){
	payC[17].hide();
	leaseC[17].show();
});

//close-pay18
closeP[18].click(function(){
	payC[18].hide();
	leaseC[18].show();
});

//close-pay19
closeP[19].click(function(){
	payC[19].hide();
	leaseC[19].show();
});



//[CL1]	
//close-lease0
closeL[0].click(function(){
	leaseC[0].hide();
	leaseSel[0].show();
});

//close-lease1
closeL[1].click(function(){
	leaseC[1].hide();
	leaseSel[1].show();
});

//close-lease2
closeL[2].click(function(){
	leaseC[2].hide();
	leaseSel[2].show();
});

//close-lease3
closeL[3].click(function(){
	leaseC[3].hide();
	leaseSel[3].show();
});

//close-lease4
closeL[4].click(function(){
	leaseC[4].hide();
	leaseSel[4].show();
});

//close-lease5
closeL[5].click(function(){
	leaseC[5].hide();
	leaseSel[5].show();
});

//close-lease6
closeL[6].click(function(){
	leaseC[6].hide();
	leaseSel[6].show();
});

//close-lease7
closeL[7].click(function(){
	leaseC[7].hide();
	leaseSel[7].show();
});

//close-lease8
closeL[8].click(function(){
	leaseC[8].hide();
	leaseSel[8].show();
});

//close-lease9
closeL[9].click(function(){
	leaseC[9].hide();
	leaseSel[9].show();
});

//close-lease10
closeL[10].click(function(){
	leaseC[10].hide();
	leaseSel[10].show();
});

//close-lease11
closeL[11].click(function(){
	leaseC[11].hide();
	leaseSel[11].show();
});

//close-lease12
closeL[12].click(function(){
	leaseC[12].hide();
	leaseSel[12].show();
});

//close-lease13
closeL[13].click(function(){
	leaseC[13].hide();
	leaseSel[13].show();
});

//close-lease14
closeL[14].click(function(){
	leaseC[14].hide();
	leaseSel[14].show();
});

//close-lease15
closeL[15].click(function(){
	leaseC[15].hide();
	leaseSel[15].show();
});

//close-lease16
closeL[16].click(function(){
	leaseC[16].hide();
	leaseSel[16].show();
});

//close-lease17
closeL[17].click(function(){
	leaseC[17].hide();
	leaseSel[17].show();
});

//close-lease18
closeL[18].click(function(){
	leaseC[18].hide();
	leaseSel[18].show();
});

//close-lease19
closeL[19].click(function(){
	leaseC[19].hide();
	leaseSel[19].show();
});


}