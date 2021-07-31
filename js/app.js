
//global vars
let Paragraphs=[];//paragraphs of sections
let icons=[];     //links of nav menue
let navFragment=document.createDocumentFragment();//collect teh nav menue links
let contentFragment=document.createDocumentFragment();//collect sections content 
let nav=document.getElementById("navUl"); //nav menue unordered list 
let content=document.getElementById("contentDiv");//sections content div
let navBarItems=[]; //list of nav menue icons as nodes 
let sectionsList=content.children;//list of sectoins 




//project instructions

//put sections header in icons list to create the nav menue with it, and sections body in [paragraphs] list to collect them. 
for(const section of content.children)
{
    icons.push(section.children[0].innerText)
    Paragraphs.push(section.children[1].innerText);
}

//create nav menue
icons.forEach(createUlElements);

//append the nav fragment to the nav div 
nav.appendChild(navFragment);

//create content
content.appendChild(contentFragment);





//functions
function createUlElements(item,index){
    let li =document.createElement("li");//li of nav ul
    let textnode;
    let anchor=document.createElement("a"); //link 
    anchor.classList.add("anch");//add class to links    
    
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

  //call back function that invoked when any of nav menue link is clicked.
  function getMySection()
  {
    let mySection=document.getElementById(this.innerText);

    //remove the active class from any link
    for(const item of navBarItems) 
    {
     item.classList.remove('active-btn');
    }

    //remove active class from any section.
    for(const sect of sectionsList)
    {
     sect.classList.remove('active');
    }

    //add active-btn class to clicked link
    this.classList.add('active-btn');

    //add active class to the section has been refered by clicked link  
    mySection.classList.add('active');

    //when link been clicked scroll to its section smoothly.
    mySection.scrollIntoView({behavior: "smooth"});   
} 

//a call back funtion that invoked in mobile/ tablet view to handel click event on (three line icon)that collect teh nav menue.
  function showMyMenue()
  {
    let navBar=document.getElementById("navDiv");
    navBar.classList.toggle('show');
  }



