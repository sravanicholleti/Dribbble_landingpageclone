// h1, p content data
const contentData = {
  Discover: {
    heading: 'Explore the worlds leading design portfolios',
    para: 'Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the worlds best design and creative professionals.',  
  },
  Animation: {
    heading: 'Trending animations, motion graphics, and 3D designs',
    para: 'Discover the finest animation, motion graphics, 3D, and entertaining animated GIFs from popular design portfolios.',
  },
  Branding: {
    heading: 'Trending brand designs, identities, and logos',
    para: 'Explore the unique brand identities and logos for business, marketing, and advertising from popular design portfolios',  
  },
  Illustration:{
    heading: 'Trending illustrations, line art, and sketches',
    para:'Find inspiring illusrations ranging from characters, line art, murals, or sketches from popular design portfolios'
  },
  Mobile: {
    heading: 'Trending mobile designs for iOS, Android, and tablet',
    para: 'Discover trending mobile designs for apps on iOS, Android, tablets from popular design portfolios'
  },
  Print:{
    heading: 'Trending print design for books, magazines, and posters',
    para: 'Explore cutting edge print design for books, magazines, posters from popular design portfolios'
  },
  ["Product Design"]:{
    heading: 'Trending product design for apps, e-commerce, and games',
    para: 'Explore innovative Product Design from including apps, e-commerce or games to inspire your next project from popular design portfolios'
  },
  Typography:{
    heading: 'Trending typography, lettering, and calligraphy',
    para: 'Explore the technique of type design, lettering, and calligraphy from popular design portfolios'
  },
  ["Web Design"]:{
    heading: 'Trending web & landing page designs',
    para: 'Explore trending Web Design, Responsive Design, User Experience and User Interfaces from popular design portfolios'
  }
};
// ul search content data
const contentData1 ={
    Discover:{
        ul:'Trending searches',
        li:'landing page',
        li2:'ios',
        li3:'food',
        li4:'landingpage',
        li5:'uxdesign',
        li6:'app design'
    },
    Animation:{
        ul:'Trending searches',
        li:'after effect',
        li2:'gif',
        li3:'motion',
        li4:'motion graphics',
        li5:'2d',
        li6:'loop'
    },
    Branding:{
        ul:'Trending searches',
        li:'logo',
        li2:'typography',
        li3:'brand identity',
        li4:'vector',
        li5:'identity',
        li6:'icon'
    },
    Illustration:{
        ul:'Trending searches',
        li:'vector',
        li2:'flat',
        li3:'branding',
        li4:'art',
        li5:'icon',
        li6:'typography'
    },
    Mobile:{
        ul:'Trending searches',
        li:'ios',
        li2:'app',
        li3:'iphone',
        li4:'android',
        li5:'ux',
        li6:'interface'
    },
    Print:{
        ul:'Trending searches',
        li:'poster',
        li2:'business card',
        li3:'brochure',
        li4:'stationery',
        li5:'magazine',
        li6:'flyer'
    },
    ["Product Design"]:{
        ul:'Trending searches',
        li:'branding',
        li2:'vector',
        li3:'illustration',
        li4:'typography',
        li5:'minimal',
        li6:'logo'
    },
    Typography:{
        ul:'Trending searches',
        li:'type',
        li2:'lettering',
        li3:'branding',
        li4:'minimal',
        li5:'logo',
        li6:'vector'
    },
    ["Web Design"]:{
        ul:'Trending searches',
        li:'web-development',
        li2:'user-interface',
        li3:'landing-page',
        li4:'web-site',
        li5:'site',
        li6:'e-commerce'
    }
};
// content change display logic
function changeContent(selectedItem) {
  const contentContainer = document.getElementById('content-container')
  const content = contentData[selectedItem];
  const contentContainer1 = document.getElementById('content-container1')
  const content1 = contentData1[selectedItem];
  if (content) {
    contentContainer.innerHTML = `
      <div id="content">
        <h1 id="content-heading">${content.heading}</h1>
        <p>${content.para}</p>     
      </div>
    `;
    contentContainer1.innerHTML= `
      <div id="content1">
        <ul id="ulli">${content1.ul} 
        <li>${content1.li}</li> 
        <li>${content1.li2}</li> 
        <li>${content1.li3}</li> 
        <li>${content1.li4}</li> 
        <li>${content1.li5}</li> 
        <li>${content1.li6}</li> </ul>   
      </div>
    `;
  }
};
// designs data
const media = [
 {type:'image', src:'./new1.jpg', name:'Plantify', description:'Plantify Website Design', popularity:2, timestamp:99},
 {type:'image', src:'./new2.png', name:'Super Paw', description:'Super Paw Web Design', popularity:4, timestamp:89},
 {type:'image', src:'./new3.jpg', name:'Keep Shining', description:'Keep Shining Typography', popularity:6, timestamp:79},
 {type:'image', src:'./new4.png', name:'TraveDreamDestin', description:'TraveDreamDestin Design', popularity:8, timestamp:69},
 {type:'image', src:'./new5.jpg', name:'Cutie', description:'Cutie Print Design', popularity:10, timestamp:59},
 {type:'image', src:'./new6.jpg', name:'Gamer', description:'Gamer Mobile Design', popularity:12, timestamp:49},
 {type:'image', src:'./new7.jpg', name:'Paws', description:'Paws Illustration', popularity:14, timestamp:39},
 {type:'image', src:'./new8.png', name:'Gardening', description:'Gardening Art&Sketche', popularity:16, timestamp:29},
 {type:'image', src:'./new9.jpg', name:'Brainly', description:'Brainly Brand Design', popularity:18, timestamp:19},
 {type:'image', src:'./new10.jpg', name:'Creativefly', description:'Creativefly Brand Logo', popularity:20, timestamp:9},
 {type:'video', src:'./new11.mp4', name:'Elephant', description:'Elephant Animation', popularity:1, timestamp:91},
 {type:'image', src:'./new12.jpg', name:'JustDoIt', description:'JustDoIt Graphics', popularity:3, timestamp:92},
 {type:'video', src:'./new13.mp4', name:'MyTown', description:'MyTown 3D Design', popularity:5, timestamp:93},
 {type:'image', src:'./new14.jpg', name:'Creative', description:'Creative Art', popularity:7, timestamp:94},
 {type:'image', src:'./new15.jpg', name:'Create', description:'Create design', popularity:9, timestamp:95},
 {type:'video', src:'./pop1.mp4', name:'Fox', description:'Fox Animation', popularity:11, timestamp:95},
 {type:'image', src:'./pop2.jpg', name:'Credit Store', description:'Credit Store Design', popularity:13, timestamp:85},
 {type:'image', src:'./pop3.png', name:'Colorfull', description:'Colorfull Animie', popularity:15, timestamp:75},
 {type:'video', src:'./pop4.mp4', name:'Calm Creative', description:'Calm Creative Animation', popularity:17, timestamp:65},
 {type:'image', src:'./pop5.jpg', name:'Fitness', description:'Fitness Brand Design', popularity:19, timestamp:55},
 {type:'image', src:'./pop6.jpg', name:'Orbit', description:'Orbit Logo Design', popularity:25, timestamp:45},
 {type:'image', src:'./pop7.png', name:'Corgi', description:'Corgi Animation', popularity:30, timestamp:35},
 {type:'image', src:'./pop8.png', name:'Android', description:'Android Mobile Design', popularity:35, timestamp:25},
 {type:'image', src:'./pop9.png', name:'Activety', description:'Activety IOS Design', popularity:40, timestamp:15},
 {type:'image', src:'./pop10.png', name:'Lion', description:'Lion Art', popularity:45, timestamp:5},
 {type:'image', src:'./pop11.jpg', name:'Sleeptight', description:'Sleep Tight Poster', popularity:50, timestamp:51},
 {type:'image', src:'./pop12.png', name:'Scribbles&Doodles', description:'Scribbles&Doodles Art', popularity:29, timestamp:52},
 {type:'image', src:'./pop13.jpg', name:'Keep Growing', description:'Keep Growing Typography', popularity:11, timestamp:53},
 {type:'image', src:'./pop14.png', name:'Furniture', description:'Furniture Website Design', popularity:99, timestamp:54},
 {type:'image', src:'./pop15.png', name:'Architecture', description:'All Architecture Design', popularity:90, timestamp:55},
];
// display designs logic
const mediaGrid = document.querySelector('.media-grid');
const sortOption = document.getElementById('sort-option');

function renderMedia(sortedMedia){
  mediaGrid.innerHTML='';

  sortedMedia.forEach(mediaItem=>{
    const mediaContainer =document.createElement('div');
    mediaContainer.classList.add('media-item');

    if(mediaItem.type==='image'){
      mediaContainer.innerHTML =`
      <img src="${mediaItem.src}" alt="${mediaItem.description}" class="media image"> 
      <div class="name">${mediaItem.name}<span><i class="fa-regular fa-heart"></i><i class="fa-regular fa-bookmark"></i></span></div>
      <p class="description"><img src="./mini1.png">${mediaItem.description}<span>Pro</span><i class="fa-solid fa-heart"></i></i><i class="fa-solid fa-eye"></i></p>
      `;
    } else if (mediaItem.type==='video'){
      mediaContainer.innerHTML=`
      <video src="${mediaItem.src}" class="media video" muted preload="auto" loop>
      Your browser does not support the video tag.
      </video>
      <div class="name">${mediaItem.name}<span><i class="fa-regular fa-heart"></i><i class="fa-regular fa-bookmark"></i></span></div>
      <p class="description"><img src="./mini2.png">${mediaItem.description}<span>Team</span><i class="fa-solid fa-heart"></i><i class="fa-solid fa-eye"></i></p>
      `;
    }
    
    mediaGrid.appendChild(mediaContainer);

  });
  attachHoverBehavior();
}
// adding eventlistener for video designs to autoplay only when hovered
function attachHoverBehavior(){
  const mediaItems = document.querySelectorAll('.media');

  mediaItems.forEach(mediaItem=>{
    mediaItem.addEventListener('mouseover', ()=>{
      if(mediaItem.tagName==='VIDEO'){
        mediaItem.play();
      }
    });
    mediaItem.addEventListener('mouseout', ()=>{
      if(mediaItem.tagName==='VIDEO'){
        mediaItem.pause();
        mediaItem.currentTime=0; //to reset the video to beginning
      }
    });
  });

}
// adding eventlistener for sortoption to change designs based on selected option
sortOption.addEventListener('change', ()=>{
  const selectedOption= sortOption.value;

  if(selectedOption==='New&Networthy'){
    const sortedbyNew = media.slice().sort((a,b)=>b.timestamp - a.timestamp);
    renderMedia(sortedbyNew);
  }
  else if (selectedOption==='Popular'){
    const sortedbyPop = media.slice().sort((a,b)=>b.popularity - a.popularity);
    renderMedia(sortedbyPop);
  }

});
// initial display of designs is the order we added them
renderMedia(media);

