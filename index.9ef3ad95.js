const e=["agh","no","yes","hohoho","hangup","pickup"],t={};for(const n of e){const e=document.createElement("video");e.classList.add("hidden"),e.setAttribute("preload","auto");const s=document.createElement("source");s.src=`${n}.mp4`,e.appendChild(s),document.body.appendChild(e),t[n]=e}let n=0,s=!1;const c=document.createElement("div");c.classList.add("phone-container");const i=document.createElement("img");i.src="pickup.png",i.onclick=()=>{d("pickup"),recognition.start(),i.classList.add("hidden"),o.classList.remove("hidden"),s=!0,n=0};const o=document.createElement("img");function d(e){Object.values(t).forEach((e=>{e.classList.add("hidden"),e.pause(),e.currentTime=0})),t[e].classList.remove("hidden"),t[e].play()}o.src="hangup.png",o.classList.add("hidden"),o.onclick=()=>{d("hangup"),recognition.stop(),o.classList.add("hidden"),i.classList.remove("hidden"),s=!1},c.appendChild(i),c.appendChild(o),document.body.append(c),t.pickup.classList.remove("hidden");try{const t=new(window.SpeechRecognition||window.webkitSpeechRecognition);t.interimResults=!0,t.addEventListener("result",(t=>{const s=t.results[0].isFinal,c=Array.from(t.results).map((e=>e[0])).map((e=>e.transcript)).join("");if(console.log(c),s){n=0;const t=(i=0,o=e.length-3,Math.floor(Math.random()*(o-i+1)+i));d(e[t])}var i,o})),t.addEventListener("end",(()=>{if(s){if(2===n)return o.click();t.start(),n++}}))}catch(e){alert("This browser doesn't support SpeechRecognition API")}
//# sourceMappingURL=index.9ef3ad95.js.map
