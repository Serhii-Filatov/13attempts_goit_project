var e;$(document).ready((function(){$(".benefits__number").spincrement({thousandSeparator:"",duration:1200})})),(()=>{let e=document.querySelector(".headerDiscrBtn"),t=document.querySelector(".headerDiscr");e.addEventListener("click",(()=>{e.classList.toggle("is-open"),t.classList.toggle("is-open")}))})(),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",(()=>{const a="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open")}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtnTab:document.querySelector("[data-modal-open-tab]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.openModalBtnTab.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(e=jQuery).extend(e.easing,{spincrementEasing:function(e,t,a,o,n){return t===n?a+o:o*(1-Math.pow(2,-10*t/n))+a}}),e.fn.spincrement=function(t){function a(e,t){if(e=e.toFixed(t),t>0&&"."!==o.decimalPoint&&(e=e.replace(".",o.decimalPoint)),o.thousandSeparator)for(;n.test(e);)e=e.replace(n,"$1"+o.thousandSeparator+"$2");return e}var o=e.extend({from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},t),n=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each((function(){var t,n=e(this),l=o.from;if(n.attr("data-from")&&(l=parseFloat(n.attr("data-from"))),n.attr("data-to"))t=parseFloat(n.attr("data-to"));else if(null!==o.to)t=o.to;else{var r=e.inArray(o.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+o.thousandSeparator:o.thousandSeparator,c=new RegExp(r,"g");t=parseFloat(n.text().replace(c,""))}var d,s=o.duration;if(o.leeway&&(s+=Math.round(o.duration*(2*Math.random()-1)*o.leeway/100)),n.attr("data-dp"))d=parseInt(n.attr("data-dp"),10);else if(null!==o.decimalPlaces)d=o.decimalPlaces;else{var i=n.text().indexOf(o.decimalPoint);d=i>-1?n.text().length-(i+1):0}n.css("counter",l),o.fade&&n.css("opacity",0),n.animate({counter:t,opacity:1},{easing:o.easing,duration:s,step:function(e){n.html(a(e*t,d))},complete:function(){n.css("counter",null),n.html(a(t,d)),o.complete&&o.complete(n)}})}))};var t=$("#up");$(window).scroll((function(){$(window).scrollTop()>300?t.addClass("show"):t.removeClass("show")})),t.on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"300")})),(()=>{document.querySelector("[data-modal-open]"),document.querySelector("[data-modal-close]"),document.querySelector("[data-modal]");function e(){refs.modal.classList.toggle("about__is-hidden")}refs.openModalBtn.addEventListener("click",e),refs.closeModalBtn.addEventListener("click",e)})();var a=$("#up");$(window).scroll((function(){$(window).scrollTop()>300?a.addClass("show"):a.removeClass("show")})),a.on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"300")}));var o=["North Shore","South Shore","West Shore","East Shore"];window.onload=function(){new Swiper(".swiper-container",{slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'          <div class="box '+t+'">          <div class="bigNumber">'+(e<10?"0"+(e+1):e+1)+'</div>          <div class="text">'+o[e]+"</div>          </div>"}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},(()=>{const e={openFranchiseModalBtn:document.querySelector("[data-contacts_modal-open]"),closeFranchiseModalBtn:document.querySelector("[data-contacts_modal-close]"),modal:document.querySelector("[data-contacts_modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openFranchiseModalBtn.addEventListener("click",t),e.closeFranchiseModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.d797f05c.js.map