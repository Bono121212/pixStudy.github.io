var frontCommon=frontCommon||{};function frontCommonResize(){window.addEventListener("resize",()=>{var e=document.getElementById("header");document.querySelector(".modal.show")&&e.classList.add("regular")})}function frontCommonScroll(){window.addEventListener("scroll",()=>{})}function lenis(){let s=new Lenis;requestAnimationFrame(function e(t){s.raf(t),requestAnimationFrame(e)});let t=document.getElementById("header"),e=t.querySelector(".site-navi");var o=t.querySelector(".btn.menu-header"),i=document.querySelector('[data-bs-toggle="modal"]');let a=document.querySelectorAll(".modal"),r=(window.addEventListener("scroll",()=>{-1==s.direction?(t.classList.add("up-color"),t.classList.remove("regular"),t.classList.remove("regular-focus"),e.classList.remove("close"),s.animatedScroll<5&&t.classList.remove("up-color")):(e.classList.add("close"),document.activeElement.closest(".depth1-item")||t.classList.contains("hover")?(t.classList.add("regular-focus"),t.classList.remove("regular"),s.animatedScroll<5&&t.classList.remove("regular-focus")):t.classList.contains("open")||(t.classList.add("regular"),t.classList.remove("regular-focus"),s.animatedScroll<5&&(t.classList.remove("up-color"),t.classList.remove("regular"))))}),s.animatedScroll<window.innerHeight?(t.classList.remove("regular"),t.classList.remove("regular-focus")):t.classList.add("regular"),o.addEventListener("click",function(){var e=document.getElementById("wrap");t.classList.contains("open")&&e.removeAttribute("style")}),window.addEventListener("resize",()=>{1024<=window.innerWidth&&s.start()}),i&&i.addEventListener("click",function(){t.style.top="-7.2rem",a.forEach(e=>{e&&e.classList.contains("show")&&s.destroy()})}),a.forEach(e=>{e&&e.querySelector(".modal-close").addEventListener("click",function(){s=new Lenis,t.removeAttribute("style")})}),document.querySelector(".section.media"));if(r){let e=r.querySelector(".press-media"),t=r.querySelector(".sns-media");gsap.to(e,{scrollTrigger:{trigger:t,start:"top bottom",end:"top bottom",onEnter:function(){1024<=window.innerWidth&&(e.style.top=window.innerHeight-e.offsetHeight+"px")},onLeave:function(){1024<=window.innerWidth&&(s.stop(),r.classList.add("active2"),e=r.querySelector(".press-media"),t.style.marginTop=-e.offsetHeight+"px",setTimeout(()=>{s.start()},1e3))},onEnterBack:function(){1024<=window.innerWidth&&(s.stop(),r.classList.remove("active2"),t.style.marginTop="0",e.style.top=window.innerHeight-e.offsetHeight+"px",setTimeout(()=>{s.start()},1e3))}}})}document.addEventListener("keydown",s=>{"Tab"===s.key&&setTimeout(()=>{var e,t=document.activeElement;r&&(e=r.querySelector(".press-media"),t.closest(".press-media")&&window.scrollTo(0,r.offsetTop+e.style.getPropertyValue(top)),t.classList.contains("newest-link"))&&!s.shiftKey&&window.scrollTo(0,e.offsetTop-e.offsetHeight+300)},0)})}function localAnimations(){$header=$("header"),$breadcrumb=$(".data-list.breadcrumb"),$('[data-local-animation="case-1"]').each(function(){($this=$(this)).addClass("active"),$breadcrumb.removeClass("case1").addClass("case2")})}function header(){let a=document.querySelector("body"),r=document.getElementById("header"),l=r.querySelectorAll(".depth1-item"),c=document.querySelectorAll(".depth1"),n=document.querySelectorAll(".depth2-wrap"),d=r.querySelector(".site-navi");if(r){window.addEventListener("resize",()=>{if(1024<=window.innerWidth){r.classList.remove("open"),r.removeAttribute("style");for(var e of c)e.classList.remove("active");for(var t of n)t.removeAttribute("style");a.style.overflow="auto"}}),l.forEach(e=>{e=e.querySelector(".depth2-list");7<e.querySelectorAll(".depth2-item").length&&(e.style.maxWidth="73.6rem",e.style.flexWrap="wrap")}),document.addEventListener("keydown",e=>{"Tab"===e.key&&setTimeout(()=>{var e=document.activeElement,t=(l.forEach(e=>{e.classList.remove("active")}),e.closest(".depth1-item"));t&&(d.classList.remove("close"),t.classList.add("active")),e.closest(".site-navi")||d.classList.add("close")},0)}),r.querySelectorAll("*").forEach(e=>{e.addEventListener("mouseenter",e=>{l.forEach(e=>{e.classList.remove("active")});var t=e.target.closest(".depth1-item");t&&(d.classList.remove("close"),t.classList.add("active")),e.target.closest(".site-navi")||d.classList.add("close")})});var u=document.getElementById("lang"),m=u.querySelector(".selected");let e=u.querySelector(".option-area"),t=(m.addEventListener("click",function(){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}),r.addEventListener("mouseenter",()=>{r.classList.add("hover")}),r.addEventListener("mouseleave",()=>{r.classList.remove("hover")}),document.addEventListener("focusin",function(e){e=e.target;e.closest(".dark")||e.closest(".transparent")?r.classList.add("hover"):r.classList.remove("hover")}),r.querySelector(".site-navi")),s=r.querySelector(".site-util");var v,u=r.querySelector(".btn.menu-header");let o=u.querySelector(".btn-text"),i=1;for(v of l)v.style.animationDelay=.15*i+"s",i++;u.addEventListener("click",function(){r.classList.contains("open")?(a.style.overflow="auto",o.innerHTML="메뉴 열기",r.style.height="5.8rem",setTimeout(()=>{r.classList.remove("open");for(var e of c)e.classList.remove("active");for(var t of n)t.classList.remove("active"),$(".depth2-wrap").slideUp(300)},300)):(a.style.overflow="hidden",o.innerHTML="메뉴 닫기",t.style.display="block",s.style.display="flex",r.style.height="100%",setTimeout(()=>{r.classList.add("open")},300))}),document.addEventListener("click",function(e){e=e.target;e.classList.contains("depth1")&&window.innerWidth<1024&&(e.classList.contains("active")?(e.classList.remove("active"),$(".depth2-wrap").slideUp(300)):($(".depth2-wrap").slideUp(300),c.forEach(e=>{e.classList.remove("active")}),e.classList.add("active"),$(".depth1.active ~.depth2-wrap").slideDown(300)))})}}function Tab(){var e=document.querySelectorAll(".tab-display");e.forEach(e=>{var t=e.querySelector(".tab-item:first-child");t.classList.add("active"),t.querySelector(".tab-text").setAttribute("aria-selected","true"),e.querySelector(".tab-list").addEventListener("keydown",function(e){var t=(e=event||window.event).keyCode||e.which;e.shiftKey||9!==t||(this.querySelectorAll(".tab-item").forEach(e=>{var t;e.classList.contains("active")?((t=e.querySelector(".tab-text")).setAttribute("tabindex","0"),t.setAttribute("aria-selected","true")):((t=e.querySelector(".tab-text")).setAttribute("tabindex","-1"),t.setAttribute("aria-selected","false"))}),document.querySelectorAll(".panel-item.hidden").forEach(e=>{}))});let s=e.querySelectorAll(".tab-text");s.forEach(e=>{e.addEventListener("keydown",function(e){switch((e=event||window.event).keyCode||e.which){case 37:this.closest(".tab-item").previousElementSibling&&(this.setAttribute("tabindex","-1"),this.closest(".tab-item").previousElementSibling.querySelector(".tab-text").setAttribute("tabindex","0"),this.closest(".tab-item").previousElementSibling.querySelector(".tab-text").focus());break;case 39:this.closest(".tab-item").nextElementSibling&&(this.setAttribute("tabindex","-1"),this.closest(".tab-item").nextElementSibling.querySelector(".tab-text").setAttribute("tabindex","0"),this.closest(".tab-item").nextElementSibling.querySelector(".tab-text").focus());break;case 32:case 13:this&&(s.forEach(e=>{e.setAttribute("aria-selected","false")}),this.setAttribute("aria-selected","true"))}})})});let a=document.querySelectorAll(".panel-display");a.forEach(e=>{e.querySelectorAll(".panel-item").forEach((e,t)=>{0!=t&&e.classList.add("hidden")})}),e.forEach((e,o)=>{let i=e.querySelectorAll(".tab-item");i.forEach((e,s)=>{let t=e.querySelector(".tab-text");t.addEventListener("click",()=>{var e=t.closest(".tab-item");i.forEach(e=>{e.classList.remove("active"),e.querySelector(".tab-text").setAttribute("tabindex","-1"),e.querySelector(".tab-text").setAttribute("aria-selected","false")}),e.classList.add("active"),t.setAttribute("tabindex","0"),t.setAttribute("aria-selected","true"),a.forEach((e,t)=>{o==t&&e.querySelectorAll(".panel-item").forEach((e,t)=>{e.classList.add("hidden"),s==t&&e.classList.remove("hidden")})})})})}),new Swiper(".tab-wrap",{slidesPerView:"auto",freeMode:!0})}function input(){document.querySelectorAll(".form").forEach(s=>{if(s.classList.contains("input")||s.classList.contains("search")){let t=s.querySelector(".remove");t&&(s.addEventListener("keyup",()=>{var e=s.querySelector(".input-elem").value;t.style.display=e?"block":"none"}),t.addEventListener("click",()=>{s.querySelector(".input-elem").value=null,t.style.display="none"})),s.classList.contains("disabled")&&s.querySelector(".input-elem").setAttribute("disabled","")}})}function select(){let i=document.querySelectorAll(".form.select.design1");for(let o of i)if(o){let t=o.querySelector("select"),s=o.querySelector(".arrow .blind");t.addEventListener("keydown",function(e){13!==e.keyCode&&(32!=e.keyCode||o.classList.contains("open"))||document.activeElement!==t||o.classList.toggle("open"),o.classList.contains("open")?s.innerHTML="열림":s.innerHTML="닫힘"}),o.addEventListener("click",()=>{o.classList.toggle("open"),o.classList.contains("open")?s.innerHTML="열림":s.innerHTML="닫힘"}),document.addEventListener("click",e=>{e=e.target;if(e.closest(".form.select")){if(e.closest(".form.select.open")){for(let e of i)e.classList.remove("open");e.closest(".form.select").classList.add("open")}}else for(let e of i)e.classList.remove("open");o.classList.contains("open")?s.innerHTML="열림":s.innerHTML="닫힘"})}}function swiperDesign1(){var e=new Swiper(".sync1",{slidesPerView:1,loopAdditionalSlides:1,effect:"fade",a11y:!0,loop:!0,controller:{control:void 0}}),t=new Swiper(".sync2",{slidesPerView:1,loopAdditionalSlides:1,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},controller:{control:e}});(e.controller.control=t).controller.control=e}function Accordion(){let e=document.querySelectorAll(".accordion-display");e.forEach(function(e){var t=e.querySelectorAll(".accordion-item");t.forEach(function(t){var e=t.querySelector(".btn");e&&e.addEventListener("click",function(){var e=this.getAttribute("aria-label");this.setAttribute("aria-label","열림"===e?"닫힘":"열림")}.bind(e)),t.querySelectorAll(".accordion-head").forEach(e=>{e.addEventListener("click",function(){let e=this.nextElementSibling;e&&(t.classList.contains("active")?(t.classList.remove("active"),e.style.height=0,setTimeout(()=>{e.style.overflow="hidden"},100)):(t.classList.add("active"),e.style.height=e.scrollHeight+"px",setTimeout(()=>{e.style.overflow="visible"},100)))})})}),e.classList.contains("collapse")?t.forEach(e=>{e.classList.add("active");e=e.querySelector(".accordion-head + *");e&&(e.style.height=e.scrollHeight+"px",e.style.overflow="visible")}):t.forEach(e=>{e.classList.remove("active");e=e.querySelector(".accordion-head + *");e&&(e.style.height=0,e.style.overflow="hidden")})}),window.addEventListener("resize",function(){e.forEach(function(e){e.querySelectorAll(".accordion-item").forEach(function(e){var t=e.querySelector(".accordion-head + *");e.classList.contains("active")&&(t.style.height="auto",e=t.scrollHeight,t.style.height=e+"px")})})})}function localAnimations_Case01(){function e(){var e=window.scrollY;0<e&&e<200&&gsap.to(".local-util",{y:e,duration:0})}$('[data-local-animation="case-1"]').each(function(){$this=$(this),$breadcrumb=$this.prev(".local-info").find(".data-list.breadcrumb"),setTimeout(function(){$breadcrumb.addClass("active1"),$this.addClass("active1")},500)}),gsap.utils.toArray('[data-local-animation="case-1"]').forEach((t,e)=>{var s=$(t).closest(".main").prev("header"),o=$(t).closest(".main").find(".local-info .data-list.breadcrumb");gsap.to(t,{scrollTrigger:{trigger:t,start:"101% bottom",end:"top bottom",scrub:.001,onEnter:function(e){s.removeClass("light").addClass("transparent"),o.removeClass("dark").addClass("light"),t.classList.add("active2"),gsap.to(".local-util",{opacity:0,duration:.2})},onEnterBack:function(e){gsap.to(".local-util",{opacity:1,duration:.2})}}})}),e(),document.addEventListener("scroll",e),window.addEventListener("resize",e)}function localAnimations_Case02(){let s=$(".data-list.breadcrumb"),o=$(".local-figure"),i=$(".local-subject");var e=$(".local-subject .local-name");let a=$(".local-aside"),r=$(".local-util");gsap.to(e,{duration:1,opacity:1,y:"0%"}),gsap.to(o,{duration:1,delay:.5,opacity:1,y:"0%"}),gsap.utils.toArray('[data-local-animation="case-2"]').forEach((e,t)=>{gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"bottom bottom",scrub:.001}}).fromTo(s,{y:"0vh"},{y:"40vh",opacity:0},0).fromTo(i,{y:"0vh"},{y:"40vh",opacity:0},0).fromTo(o,{width:()=>"90vw",x:"-50%"},{width:()=>"100vw",x:"-50%"},0).to(o,{"background-color":"rgba(0, 0, 0, 0.5)"},0).fromTo(a,{y:"-30vh"},{y:"0%"},0).fromTo(a,{opacity:0},{opacity:1,delay:.5},0).fromTo(r,{opacity:1,y:"0"},{opacity:0,y:"0%"},0)})}frontCommon.Html=(()=>{var e=null;return e=e||{reset:function(){frontCommonResize(),header(),localAnimations(),lenis()}}})();