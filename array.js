let ProjectBTN = document.querySelector(".page7 .ProjAndLess #proBTN")
let LessonBTN = document.querySelector(".page7 .ProjAndLess #lessBTN")
 

//infoScreen Lesson List 2)
let array = [
    { Lnum : "Lesson 01" , Lname : "Web designing on Mobile" , Ldes : "Latest premium version Acode.apk" , Lsrc : "https://drive.google.com/file/d/1jwtFf7OWyDcwOxBfXvAm4iL3Oo4K4dEK/view?usp=drivesdk"},
    { Lnum : "Lesson 02" , Lname : "Multiple Page Switch" , Ldes : "Using JavaScript Doms and addEventListener" , Lsrc : "https://drive.google.com/file/d/1jzN3ap_5lcDoIt8bGEx483qivri3U1S8/view?usp=drivesdk"},
    { Lnum : "Lesson 03" , Lname : "Page hide and show" , Ldes : "Using Dom And Event" , Lsrc : "https://drive.google.com/file/d/1nOqlhiBSkqACsq7tznLn1F-Y5EFxHySU/view?usp=drivesdk"},
    
   ]
//projectScreen PROJECT LIST 1)
 let arr = [
      { img : "src/project01.webp",  Pnum : "Project 01", Pname : "LoginPage-V2 ", Preview : "https://mukhtaransarii.github.io/LoginPage-V2/", SourceCode : "https://drive.google.com/file/d/1aX7EV_JppozK6w9GLKzoarEqxwiTEK96/view?usp=drivesdk"},
      { img : "src/project02.webp",  Pnum : "Project 02", Pname : "Google Search Clone", Preview : "https://mukhtaransarii.github.io/google-clone/", SourceCode : "https://drive.google.com/file/d/1booFa8RGNCCiN0q-V6h3wcHgIfsjxCTi/view?usp=drivesdk"},
      { img : "src/project03.webp",  Pnum : "Project 03", Pname : "Dark Gradient Calculator v1", Preview : "https://mukhtaransarii.github.io/Calculator-V1/", SourceCode : "https://drive.google.com/file/d/1bkQ1v_K5k9YFTnVAtHiLL6n6_XtQDqWl/view?usp=drivesdk"},
      { img : "src/project04.webp",  Pnum : "Project 04", Pname : "LoginPage-V1", Preview : "https://mukhtaransarii.github.io/LoginPage-V1", SourceCode : "https://drive.google.com/file/d/1blep9PPPzYWOFDFcYu8EUoOztQTM5f1O/view?usp=drivesdk"},
      { img : "src/project06.webp",  Pnum : "Project 06", Pname : "Portfolio Website Responsive++", Preview : "https://mukhtaransarii.github.io/Portfolio-v1/", SourceCode : "https://drive.google.com/file/d/1bzQW1dAYxjKC5H1jhzqWrU3ZhAfZsxQ1/view?usp=drivesdk"},
      { img : "src/project07.webp",  Pnum : "Project 07", Pname : "Google Store Clone", Preview : "https://mukhtaransarii.github.io/GoogleStore-clone/", SourceCode : "https://t.me/webdesign_bbs/3" , paid : "src/paid.png"},
      { img : "src/project08.webp",  Pnum : "Project 08", Pname : "Responsive Nav Bar", Preview : "", SourceCode : "https://drive.google.com/file/d/1dTq8leF6K4_P34pR-z-pKgiHF6TLPt7Y/view?usp=drivesdk"},
      { img : "src/project09.webp",  Pnum : "Project 09", Pname : "Instagram Profile Clone V1", Preview : "https://mukhtaransarii.github.io/insta.clone", SourceCode : "https://drive.google.com/file/d/1dMFpUacqusLhk60khF_dCz-fUonX-GK0/view?usp=drivesdk"},
      { img : "src/project10.webp",  Pnum : "Project 10", Pname : "Instagram Completed Clone V2", Preview : "https://mukhtaransarii.github.io/insta.clonev2", SourceCode : "https://t.me/webdesign_bbs/3" , paid : "src/paid.png"},
      { img : "src/project11.webp",  Pnum : "Project 11", Pname : "Digital Clock", Preview : "https://mukhtaransarii.github.io/digital.clock/", SourceCode : "https://drive.google.com/file/d/1ewB9WZbj_3IyJIQYfjeD_l94_75AVb1A/view?usp=drivesdk"},
      { img : "src/project12.webp",  Pnum : "Project 12", Pname : "Todo List", Preview : "https://mukhtaransarii.github.io/todo.list/", SourceCode : "https://drive.google.com/file/d/1fNBCXMM8QuWbkX0m26LIn9HPmeoi1Izk/view?usp=drivesdk"},
      { img : "src/project13.webp",  Pnum : "Project 13", Pname : "Nike Store Redesign", Preview : "https://mukhtaransarii.github.io/nike.store/", SourceCode : "https://drive.google.com/file/d/1gXGcVCuydzDJenZlb_JNwoMSSW388697/view?usp=drivesdk"},
      { img : "src/project14.webp",  Pnum : "Project 14", Pname : "WhatsApp Redesign", Preview : "https://mukhtaransarii.github.io/whatsapp.clone/", SourceCode : "https://t.me/webdesign_bbs/3" , paid : "src/paid.png"},
      { img : "src/project15.webp",  Pnum : "Project 15", Pname : "Restaurant Menu List with Search", Preview : "https://mukhtaransarii.github.io/restaurant.menulist/", SourceCode : "https://drive.google.com/file/d/1iB6mrd2JAsaX-o-8_VACHOIwtcyyMxqi/view?usp=drivesdk"},
      { img : "src/project16.webp",  Pnum : "Project 16", Pname : "BBS.COM", Preview : "https://mukhtaransarii.github.io/bbs.com/", SourceCode : "https://t.me/webdesign_bbs/3" , paid : "src/paid.png"},
      { img : "src/project17.webp",  Pnum : "Project 17", Pname : "Fee Management", Preview : "https://mukhtaransarii.github.io/fee.managment/", SourceCode : "https://drive.google.com/file/d/1kTd8v8Wgvzu10d1j8fuS8stQ3A221lCW/view?usp=drivesdk"},
      { img : "src/project18.webp",  Pnum : "Project 18", Pname : "Tic Tac Toe", Preview : "https://mukhtaransarii.github.io/tictactoe/", SourceCode : "https://drive.google.com/file/d/1lbs35h3VgUjSkWOgZ3g1zArBLI0fJOMA/view?usp=drivesdk"},
      { img : "src/project19.webp",  Pnum : "Project 19", Pname : "Fan Speed", Preview : "https://mukhtaransarii.github.io/fan.speed/", SourceCode : "https://drive.google.com/file/d/1loSuJEV72xl9AsvV_Br3BKxPDnkDIm9g/view?usp=drivesdk"},
      { img : "src/project20.webp",  Pnum : "Project 20", Pname : "LoginPage-V3", Preview : "https://mukhtaransarii.github.io/LoginPage-V3/", SourceCode : "https://drive.google.com/file/d/1ly7oSI8-aoWkpjzldU5bZjw3ItHcUw09/view?usp=drivesdk"},
      { img : "src/project21.webp",  Pnum : "Project 21", Pname : "Analog Clock", Preview : "https://mukhtaransarii.github.io/analog.clock/", SourceCode : "https://drive.google.com/file/d/1mpxUlBWMoAdH2HRFsCp9uRkWjmBcTDVt/view?usp=drivesdk"},
      { img : "src/project22.webp",  Pnum : "Project 22", Pname : "LoginPage-V4", Preview : "https://mukhtaransarii.github.io/LoginPage-V4/", SourceCode : "https://drive.google.com/file/d/1oaNiWSz1pEk3TJtKFI_11x3rwQcgJYWt/view?usp=drivesdk"},
      { img : "src/project23.webp",  Pnum : "Project 23", Pname : "BBS.COM V2", Preview : "https://mukhtaransarii.github.io/bbs/", SourceCode : "https://t.me/webdesign_bbs/3", paid : "src/paid.png"},
      { img : "src/project24.webp",  Pnum : "Project 24", Pname : "BUBBLE GAME", Preview : "https://mukhtaransarii.github.io/bubble.game/", SourceCode : "https://drive.google.com/file/d/1sR_GJa2Pm8U36mtBU8Qy__u_4sha624X/view?usp=drivesdk"},
      { img : "src/project25.webp",  Pnum : "Project 25", Pname : "BBS.COM V3", Preview : "https://mukhtaransarii.github.io/bbs-v3/", SourceCode : "https://t.me/webdesign_bbs/3" , paid : "src/paid.png"},
 ]
 arr.reverse();
 
 // Lesson List infoScreen FUNCTION 2)
var plutter = ""
  array.forEach(function(elem,idx){
	   plutter += `<li>
	            <div id="des">
              <h2 id="Pnum">${elem.Lnum}</h2>
              <h2 id="Pname">${elem.Lname}</h2>
              <span>${elem.Ldes}</h2>
              <a href="${elem.Lsrc}"><i class="ri-folder-6-fill"></i> Resources</a> 
             </div>
            </li>`
})
 
// Project List projectScreen FUNCTION 1)
var clutter = ""
arr.forEach(function(elem,idx){
	   clutter += `<li>
	            <img src="${elem.paid}" alt="" id="paid">
	            <img src="${elem.img}">
              <div id="des">
              <h2 id="Pnum">${elem.Pnum}</h2>
              <h2 id="Pname">${elem.Pname}</h2>
           
              <a href="${elem.Preview}"><i class="ri-window-fill"></i> Preview website</a> 
              <span>and</span>
              <a href="${elem.SourceCode}"><i class="ri-folder-6-fill"></i> Source Code</a> 
              </div>
            </li>`
})

document.querySelector(".page7 ul").innerHTML = clutter

ProjectBTN.addEventListener("click", function(){
  document.querySelector(".page7 ul").innerHTML = clutter
  ProjectBTN.style.backgroundColor = "#FFBF2D"
  LessonBTN.style.backgroundColor = "#F4F4F6"
})

LessonBTN.addEventListener("click", function(){
  document.querySelector(".page7 ul").innerHTML = plutter
  LessonBTN.style.backgroundColor = "#FFBF2D"
  ProjectBTN.style.backgroundColor = "#F4F4F6"
})



