"use strict";var valPercent,mySlider=document.getElementById("range_input"),output=document.querySelector("#output_value"),clipBoard=document.querySelector("#clipboard"),btn=document.querySelector(".generate_button"),pwDisplay=document.querySelector("#generated-password-area"),uppercaseInput=document.querySelector(".uppercase"),lowercaseInput=document.querySelector(".lowercase"),numberInput=document.querySelector(".number"),symbolInput=document.querySelector(".symbol"),indicator=document.querySelector(".indicator"),eg=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],lowercaseArray=eg.join("").toLowerCase().split(" "),uppercaseArray=eg.join("").toUpperCase().split(" "),symbolsArray=["~!@#$%&*()_-+=."],numbersArray=["0123456789"],passQuery=!0,generatePassword=function(){pwDisplay.value="";var e=uppercaseInput.checked,t=lowercaseInput.checked,n=symbolInput.checked,r=numberInput.checked,o=mySlider.value,a=[],i="",s=[],l=document.querySelectorAll('input[type="checkbox"]:checked').length?void 0:0;o>=4&&0!==l?function(){e&&a.push(uppercaseArray),t&&a.push(lowercaseArray),n&&a.push(symbolsArray),r&&a.push(numbersArray);for(var l=0;l<a.length;l++)i+=a[l];s=i.split("");var c="";!function(){for(var e=0;e<o;e++)c+=s[(t=s,Math.floor(Math.random()*t.length))],pwDisplay.value=c;var t}();var u=uppercaseArray.join("").split(""),p=lowercaseArray.join("").split(""),d=symbolsArray.join("").split(""),y=numbersArray.join("").split(""),g=c.split(""),h=[];if(e){for(var f=[],v=function(e){f.push(g.find((function(t){return u[e]===t})))},m=0;m<u.length;m++)v(m);f=f.filter((function(e){return void 0!==e})),h.push(f.length)}if(t){for(var b=[],A=function(e){b.push(g.find((function(t){return p[e]===t})))},F=0;F<p.length;F++)A(F);b=b.filter((function(e){return void 0!==e})),h.push(b.length)}if(n){for(var w=[],k=function(e){w.push(g.find((function(t){return d[e]===t})))},S=0;S<d.length;S++)k(S);w=w.filter((function(e){return void 0!==e})),h.push(w.length)}if(r){for(var T=[],x=function(e){T.push(g.find((function(t){return y[e]===t})))},D=0;D<y.length;D++)x(D);T=T.filter((function(e){return void 0!==e})),h.push(T.length)}passQuery=!h.includes(0)}():o<4?Toastify({text:"minimum of 4 characters to be generated 😉",gravity:"top",duration:3e3,position:"right",close:!0,style:{background:"linear-gradient(to right, #A4FFAF, #A4FFAa)",color:"#000",fontWeight:700}}).showToast():0===l&&Toastify({text:"select format for password generation 😒",gravity:"top",duration:3e3,position:"right",close:!0,style:{background:"linear-gradient(to right, #A4FFAF, #A4FFAa)",color:"#000",fontWeight:700}}).showToast();indicator.innerHTML="",o<=7&&""!==pwDisplay.value?indicator.innerHTML+='\n            <p class="text">small</p>\n            <span style="background-color: #d90429;"></span>\n            <span style="background-color: #d90429;"></span>\n            <span></span>\n            <span></span>\n            ':o>7&&o<=10&&""!==pwDisplay.value?indicator.innerHTML+='\n            <p class="text">medium</p>\n            <span style="background-color: #F9CD69;"></span>\n            <span style="background-color: #F9CD69;"></span>\n            <span style="background-color: #F9CD69;"></span>\n            <span></span>\n            ':o>10&&""!==pwDisplay.value?indicator.innerHTML+='\n            <p class="text">strong</p>\n            <span style="background-color: #38b000;"></span>\n            <span style="background-color: #38b000;"></span>\n            <span style="background-color: #38b000;"></span>\n            <span style="background-color: #38b000;"></span>\n            ':indicator.innerHTML+='\n            <img style="position: absolute; width:40px; right:20px;" src="/images/Rolling-1s-200px.svg" alt="">\n            '};function slider(){valPercent=mySlider.value/mySlider.max*100,mySlider.style.background="linear-gradient(to right, #A4FFAF ".concat(valPercent,"%, #000 ").concat(valPercent,"%)"),output.textContent=mySlider.value}btn.addEventListener("click",(function(){generatePassword();for(var e=0;!passQuery;)generatePassword(),e++;0!==pwDisplay.value.length&&0!==e&&Toastify({text:"accurately generated after ".concat(e," trials 😎"),gravity:"bottom",duration:1500,position:"right",close:!0,style:{background:"linear-gradient(to right, #A4FFAF, #A4FFAa)",color:"#000",fontWeight:700}}).showToast()})),clipBoard.addEventListener("click",(function(){var e=pwDisplay.value;""!==pwDisplay.value?navigator.clipboard.writeText(e).then((function(){Toastify({text:"Password copied to clipboard !",gravity:"top",duration:2e3,position:"right",style:{background:"linear-gradient(to right, #A4FFAF, #A4FFAa)",color:"#000",fontWeight:700}}).showToast()})).catch((function(e){alert("Error in copying text: ",e)})):Toastify({text:"Nothing to copy here !",gravity:"top",duration:2e3,position:"right",style:{background:"linear-gradient(to right, #A4FFAF, #A4FFAa)",color:"#000",fontWeight:700}}).showToast()})),slider();
//# sourceMappingURL=script.js.map