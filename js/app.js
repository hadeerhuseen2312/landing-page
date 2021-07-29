
//global vars
let Paragraphs=[];
let icons=[];
let navFragment=document.createDocumentFragment();
let contentFragment=document.createDocumentFragment();
let body=document.getElementsByTagName('body')[0];
let container=document.getElementById("container");
let nav=document.getElementById("navUl");
let content=document.getElementById("contentDiv");
//let sectionsList=document.getElementsByClassName("sec");
let navBarItems=[];
let sectionsList=content.children;




//project instructions
//create nav menue
for(const section of content.children)
{
    icons.push(section.children[0].innerText)
    Paragraphs.push(section.children[1].innerText);
}
icons.forEach(createUlElements);
nav.appendChild(navFragment);
//create content
content.appendChild(contentFragment);





//functions
function createUlElements(item,index){
    let li =document.createElement("li");
    let textnode;
    let anchor=document.createElement("a"); 
    let hr=document.createElement('hr');
    anchor.style="width:20%; text-decoration:none;padding:10px;border: solid #ffccff 2px ;border-radius:50px;margin:3px;color:black";    
    hr.style="border-width:2px;margin:50px auto;";

    //create a textnode with the content of section.
    textnode=document.createTextNode(Paragraphs[index]);

    //create nav menue
    anchor.innerText=item;
    anchor.href=document.getElementById(item);
    li.appendChild(anchor);
    navBarItems.push(anchor);
    navFragment.appendChild(li);
    
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









