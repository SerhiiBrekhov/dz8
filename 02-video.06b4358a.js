const e=document.querySelector("iframe"),t=new Vimeo.Player(e);console.log(t),t.on("play",(function(){console.log("played the video!")})),t.on("timeupdate",_.throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));const o=localStorage.getItem("videoplayer-current-time");t.setCurrentTime(o).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.06b4358a.js.map
