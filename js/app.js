
//global vars
let homeContent="Warner Bros. Movie World is a theme park on the Gold Coast in Queensland, Australia. Owned and operated by Village Roadshow's Theme Parks division, the park opened on 3 June 1991 after a star-studded opening ceremony the previous day. Many park attractions are based on Warner Bros. and related DC Comics properties, including thrill rides such as Batwing Spaceshot and Superman Escape, family attractions such as Justice League: Alien Invasion 3D and Wild West Falls Adventure Ride, entertainment at the Roxy Theatre and the Hollywood Stunt Driver live show. Film characters regularly roam the grounds to interact and take photos with guests. Each afternoon, characters participate in a parade along Main Street.";
let aboutContent="Wikipedia's main navigation subsystems (overviews, outlines, lists, portals, glossaries, categories, and indices) are each divided into the following subject classifications:Reference works – compendiums of information, usually of a specific type, compiled in a book for ease of reference. That is, the information is intended to be quickly found when needed.";
let contactContent="Overview articles summarize in prose a broad topic like biology, and also have illustrations and links to subtopics like cell biology, biographies like Carl Linnaeus, and other related articles like Human Genome Project.";
let feedbackContent=" very good website ";
let icons=["Home","About","Contact Us","Feedback"];
let navFragment=document.createDocumentFragment();
let contentFragment=document.createDocumentFragment();
let body=document.getElementsByTagName('body')[0];
let container=document.getElementById("container");
let nav=document.getElementById("navUl");
let content=document.getElementById("contentDiv");
let sectionsList=document.getElementsByClassName("sec");
let navBarItems=[];




//project instructions
//create nav menue
icons.forEach(createUlElements);
nav.appendChild(navFragment);
//create content
content.appendChild(contentFragment);





//functions
function createUlElements(item){
    let li =document.createElement("li");
    let textnode;
    let anchor=document.createElement("a"); 
    let sec=document.createElement("section");
    sec.id=item;
    sec.classList.add("sec");
    let sectionTitle=document.createElement('h2');
    let hr=document.createElement('hr');
    anchor.style="width:20%; text-decoration:none;padding:10px;border: solid #ffccff 2px ;border-radius:50px;margin:3px;color:black";    
    hr.style="border-width:2px;margin:50px auto;";

     switch(item){
         case "Home":
         textnode=document.createTextNode(homeContent);
         break;
  
         case "About":
         textnode=document.createTextNode(aboutContent);        
         break;
  
         case "Contact Us":
         textnode=document.createTextNode(contactContent);        
         break;

         case "Feedback":
         textnode=document.createTextNode(feedbackContent);        
         break;
     }
    //create nav menue
    anchor.innerText=item;
    anchor.href=document.getElementById(item);
    li.appendChild(anchor);
    navFragment.appendChild(li);
    
    //create section content    
    sectionTitle.innerText=item;
    sec.appendChild(sectionTitle);    
    sec.appendChild(textnode);
    sec.appendChild(hr);
    contentFragment.appendChild(sec);
    navBarItems.push(anchor);

    //set href attribute
    anchor.href="#"+item;

    //click listener
    anchor.addEventListener("click",getMySection);
    
  }
  function getMySection(){

        for(const item of navBarItems) {
        item.classList.remove('active-btn');
        }
        
        for(const sect of sectionsList){
        sect.classList.remove('active');
        }

        this.classList.add('active-btn');

      let mySection=document.getElementById(this.innerText);
      mySection.classList.add('active');
      mySection.scrollIntoView({behavior: "smooth"});


      
      
  } 

  function showMyMenue()
  {
      let navBar=document.getElementById("navDiv");
      navBar.classList.toggle('show');
  }




//style
nav.style="list-style-type:none;float:right;font-size: larger";
container.style="margin:50px 50px;background-color:white;padding:25px;border-radius:25px;";
body.style='background: antiquewhite';
document.getElementsByClassName("active").style="font-size:larger"









