


// let mybutton = document.getElementById("myBtn");

const nav = document.getElementById('myNav');
const btn = document.getElementById('button');
window.onscroll = function () {
  if (window.scrollY > 50 ) {
    nav.classList.add("nav-scroll");
    btn.classList.add('show');
  }
  else {
    nav.classList.remove("nav-scroll");
    btn.classList.remove('show');
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


var animRequestID,
    settingsStr = document.getElementById('smooth-scroll').dataset.scrollSettings,
    settings = parseSettings(settingsStr);

function parseSettings(str) {
    var r = {};
    str.split(' ').forEach(s => {
        var t = s.split(':');
        r[t[0]] = t[1];
    });
    return r;
}

function addListeners(element, events, callback) {
    events.split(' ').forEach(e => element.addEventListener(e, callback, false));
}

function handleResize() {
    var bodyHeight = document.getElementById('smooth-scroll').offsetHeight;
    gsap.set('body', { height: bodyHeight });
    cancelAnimationFrame(animRequestID);
}

function handleScroll() {
    scrollTo(window.scrollY);
}

function scrollTo(y) {
    cancelAnimationFrame(animRequestID);
    animRequestID = requestAnimationFrame(function() {
        gsap.to('#smooth-scroll', {
            duration: settings.duration,
            y: -y,
            ease: settings.ease
        });
    });
}

gsap.set('#smooth-scroll', {
    force3D: true
});

if (settings.smoother == 'on') {
    gsap.set('#smooth-scroll', {
        rotation: .005
    });
}

addListeners(window, 'load resize', handleResize);
addListeners(window, 'scroll', handleScroll);

// Add event listener for Bootstrap 5 tab change
var tabElements = document.querySelectorAll('button[data-bs-toggle="tab"]');
tabElements.forEach(tab => {
    tab.addEventListener('shown.bs.tab', handleResize);
});





// Spider Moving Effect

const path = document.querySelector('.pathing .path');
        const circle = document.querySelector('.pathing .circles');
        const rightLeg = document.querySelector('.right-leg');
        const leftLeg = document.querySelector('.left-leg');
        let pathPosition = path.getBoundingClientRect();
        const pathTotalLength = path.getTotalLength();
        const endPercentage = 0.4; // Circle stops at 40% of the path length (adjust as needed)
        let startPercentage = 0.2; // Define start percentage globally
        let accumulatedScroll = 0; // Track accumulated scroll amount
        let scrollSpeedFactor = 0.5; // Adjust this value for slower or faster movement

        function positionElements() {
            if (window.innerWidth <= 991) {
                startPercentage = 0.16;
            } else {
                startPercentage = 0.2;
            }

                        const relativePageOffset = -pathPosition.top + (accumulatedScroll + window.innerHeight * 0.5);
                        const pointPercentage = relativePageOffset / pathPosition.height * scrollSpeedFactor; // Multiply by scrollSpeedFactor
            // Update accumulatedScroll with the scroll amount

            if (pointPercentage >= startPercentage && pointPercentage <= endPercentage) {
                rightLeg.classList.add("animation");
                leftLeg.classList.add("animation2");
            } else {
                rightLeg.classList.remove("animation");
                leftLeg.classList.remove("animation2");
            }

            accumulatedScroll += window.pageYOffset - accumulatedScroll;

            const clampedPercentage = Math.min(Math.max(pointPercentage, startPercentage), endPercentage);
          
            const pointOnPath = clampedPercentage * pathTotalLength

            circle.style.transform = `translate(${-50}%, ${pointOnPath}px)`;

        }

        window.addEventListener('scroll', () => {
            positionElements();
        });

        window.addEventListener('resize', () => {
            pathPosition = path.getBoundingClientRect();
            positionElements();
        });

        positionElements();

        var paths = document.querySelector('.path-vert');
        var length = paths.getTotalLength();

// Spider Moving Effect End






import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.124.0/examples/jsm/controls/OrbitControls.js";



const setup = () => {
  const canvas = document.querySelector("#canvas");
  const leftZoomBtn = document.querySelector(".left-box-btn");
  const originalBtn = document.querySelector(".original-btn");
  const rightZoomBtn = document.querySelector(".right-box-btn");


  let scene, camera, renderer;

  let rotateAroundGroup = true;

  scene = new THREE.Scene();
  scene.background = null;

  camera = new THREE.PerspectiveCamera(
    65,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 15);

  const light = new THREE.HemisphereLight(0xffffff, "cornflowerblue", 1);
  scene.add(light);

  const group = new THREE.Group();

 

  // Load textures for boxes
  const textureLoader = new THREE.TextureLoader();
  const texture1 = textureLoader.load('assets/images/laptop.png');
  texture1.encoding = THREE.sRGBEncoding;
  // texture1.map.minFilter = THREE.LinearFilter;
  // const texture_new = textureLoader.load('../assets/images/screen.png');
  // texture_new.encoding = THREE.sRGBEncoding;

  const texture2 = textureLoader.load("assets/images/controler.png");
  texture2.encoding = THREE.sRGBEncoding;
  const texture3 = textureLoader.load("assets/images/reels.png");
  texture3.encoding = THREE.sRGBEncoding;
  const texture4 = textureLoader.load('assets/images/arrow.png');
  texture4.encoding = THREE.sRGBEncoding;
  const texture5 = textureLoader.load('assets/images/mobile.png');
  texture5.encoding = THREE.sRGBEncoding;

  const texture6 = textureLoader.load("assets/images/nest.png");

  const texture7 = textureLoader.load("assets/images/insect.png");
  texture7.encoding = THREE.sRGBEncoding;

  const texture8 = textureLoader.load("assets/images/mic.png");
  texture8.encoding = THREE.sRGBEncoding;

  const texture9 = textureLoader.load("assets/images/shapes.png");
  texture9.encoding = THREE.sRGBEncoding;

  const texture10 = textureLoader.load("assets/images/dollar.png");
  texture10.encoding = THREE.sRGBEncoding;

  const texture11 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;

  const texture12 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;

  const texture13 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;

  const texture14 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;

  const texture15 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;

  const texture16 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;

  const texture17 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;

  const texture18 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;

  const texture19 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;

  const texture20 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;

  const texture21 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;


  const texture22 = textureLoader.load("assets/images/stars.png");
  texture11.encoding = THREE.sRGBEncoding;



let geometry1 = new THREE.PlaneBufferGeometry(3, 3);
// let geometry_screen = new THREE.PlaneBufferGeometry(3, 3);
let geometry2 = new THREE.PlaneBufferGeometry(2, 2);
let geometry3 = new THREE.PlaneBufferGeometry(2.5, 2.5);
let geometry4 = new THREE.PlaneBufferGeometry(3, 3);
let geometry5 = new THREE.PlaneBufferGeometry(1, 1.5);
let geometry6 = new THREE.PlaneBufferGeometry(25, 20);

let geometry7 = new THREE.PlaneBufferGeometry(5, 5);
let geometry8 = new THREE.PlaneBufferGeometry(1.5, 1.5);
let geometry9 = new THREE.PlaneBufferGeometry(1.5, 1.5);
let geometry10 = new THREE.PlaneBufferGeometry(1.5, 1.5);
let geometry11 = new THREE.PlaneBufferGeometry(0.5, 0.5);
let geometry12 = new THREE.PlaneBufferGeometry(0.5, 0.5);
let geometry13 = new THREE.PlaneBufferGeometry(0.5, 0.5);
let geometry14 = new THREE.PlaneBufferGeometry(0.5, 0.5);
let geometry15 = new THREE.PlaneBufferGeometry(0.5, 0.5);
let geometry16 = new THREE.PlaneBufferGeometry(0.5, 0.5);
let geometry17 = new THREE.PlaneBufferGeometry(0.5, 0.5);
let geometry18 = new THREE.PlaneBufferGeometry(0.5, 0.5);
let geometry19 = new THREE.PlaneBufferGeometry(0.5, 0.5);

let geometry20 = new THREE.PlaneBufferGeometry(0.5, 0.5);
let geometry21 = new THREE.PlaneBufferGeometry(0.5, 0.5);
let geometry22 = new THREE.PlaneBufferGeometry(0.5, 0.5);




const material = new THREE.MeshPhongMaterial();

function updateGeometriesAndPositions() {
  
  if (window.innerWidth <= 320) {
    geometry1 = new THREE.PlaneBufferGeometry(2, 2);
    geometry2 = new THREE.PlaneBufferGeometry(1, 1);
    geometry3 = new THREE.PlaneBufferGeometry(1, 1);
    geometry4 = new THREE.PlaneBufferGeometry(2, 2);
    geometry5 = new THREE.PlaneBufferGeometry(1, 1.2);
    geometry7 = new THREE.PlaneBufferGeometry(2.5, 2.5);

    box1.position.set(0, -2, 4);
    box2.position.set(2, -1.2, 3);
    box3.position.set(2.2, 2, 2);
    box4.position.set(-0.5, 3, 2);
    box5.position.set(-2, 0, 2);
    box8.visible = false;
    box9.visible = false;
    box10.visible = false;
  } else if (window.innerWidth <= 360) {
    geometry1 = new THREE.PlaneBufferGeometry(2, 2);
    geometry2 = new THREE.PlaneBufferGeometry(1, 1);
    geometry3 = new THREE.PlaneBufferGeometry(1, 1);
    geometry4 = new THREE.PlaneBufferGeometry(2, 2);
    geometry5 = new THREE.PlaneBufferGeometry(1, 1.2);
    geometry7 = new THREE.PlaneBufferGeometry(3, 3);

    box1.position.set(0, -2, 4);
    box2.position.set(2.3, -1.2, 3);
    box3.position.set(2.2, 2, 2);
    box4.position.set(-0.5, 3, 2);
    box5.position.set(-2.3, -0.6, 2);
    box8.visible = false;
    box9.visible = false;
    box10.visible = false;
  } else if (window.innerWidth <= 430) {
    geometry1 = new THREE.PlaneBufferGeometry(2, 2);
    geometry2 = new THREE.PlaneBufferGeometry(1, 1);
    geometry3 = new THREE.PlaneBufferGeometry(1, 1);
    geometry4 = new THREE.PlaneBufferGeometry(2, 2);
    geometry5 = new THREE.PlaneBufferGeometry(1, 1.2);
    geometry7 = new THREE.PlaneBufferGeometry(3, 3);

    box1.position.set(0, -2, 4);
    box2.position.set(2.5, -1.5, 3);
    box3.position.set(2, 1.5, 2);
    box4.position.set(-0.5, 3.5, 2);
    box5.position.set(-2.2, 1, 2);
    box7.position.set(0, 7, 0);

    box8.visible = false;
    box9.visible = false;
    box10.visible = false;
  } else if (window.innerWidth <= 575) {
    geometry1 = new THREE.PlaneBufferGeometry(2, 2);
    geometry2 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry3 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry4 = new THREE.PlaneBufferGeometry(2, 2);
    geometry5 = new THREE.PlaneBufferGeometry(1, 1.5);
    geometry7 = new THREE.PlaneBufferGeometry(3, 3);

    box1.position.set(0, -1, 4);
    box2.position.set(3, -1, 3);
    box3.position.set(2, 2.5, 2);
    box4.position.set(-1.5, 3, 2);
    box5.position.set(-3, 0, 2);
    box8.visible = false;
    box9.visible = false;
    box10.visible = false;
  } else if (window.innerWidth <= 530) {
    geometry1 = new THREE.PlaneBufferGeometry(2, 2);
    geometry2 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry3 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry4 = new THREE.PlaneBufferGeometry(2, 2);
    geometry5 = new THREE.PlaneBufferGeometry(1.5, 2);
    geometry7 = new THREE.PlaneBufferGeometry(3, 3);

    box1.position.set(0, -1, 4);
    box2.position.set(3, -1, 3);
    box3.position.set(2, 2.5, 2);
    box4.position.set(-1, 3, 2);
    box5.position.set(-3, 0, 2);
    box8.visible = false;
    box9.visible = false;
    box10.visible = false;
  } else if (window.innerWidth <= 768) {
    geometry1 = new THREE.PlaneBufferGeometry(3, 3);
    geometry2 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry3 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry4 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry5 = new THREE.PlaneBufferGeometry(1, 1.5);
    geometry7 = new THREE.PlaneBufferGeometry(4, 4);

    box1.position.set(0, -1, 2);
    box2.position.set(3.5, -1, 3);
    box3.position.set(2, 3, 2);
    box4.position.set(-2, 3.5, 2);
    box5.position.set(-3.5  , 0, 2);
    box8.visible = false;
    box9.visible = false;
    box10.visible = false;

        
    if (window.innerHeight >= 1024) {
      geometry1 = new THREE.PlaneBufferGeometry(3, 3);
      geometry2 = new THREE.PlaneBufferGeometry(1.5, 1.5);
      geometry3 = new THREE.PlaneBufferGeometry(1.5, 1.5);
      geometry4 = new THREE.PlaneBufferGeometry(1.5, 1.5);
      geometry5 = new THREE.PlaneBufferGeometry(1, 1.5);
      geometry7 = new THREE.PlaneBufferGeometry(4.5, 4.5);
  
      box1.position.set(0, -1, 2);
      box2.position.set(3 , -1, 3);
      box3.position.set(2, 3, 2);
      box4.position.set(-2, 3.2, 2);
      box5.position.set(-2.5, -0, 2);
      box8.visible = false;
      box9.visible = false;
      box10.visible = false;
    }
  } 


else if (window.innerWidth <= 820) {
    geometry1 = new THREE.PlaneBufferGeometry(3, 3);
    geometry2 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry3 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry4 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry5 = new THREE.PlaneBufferGeometry(1, 1.5);
    geometry7 = new THREE.PlaneBufferGeometry(4.5, 4.5);

    box1.position.set(0, -1, 2);
    box2.position.set(4, -1, 3);
    box3.position.set(3, 3, 2);
    box4.position.set(-3, 3.5, 2);
    box5.position.set(-4, -1, 2);
    box8.visible = false;
    box9.visible = false;
    box10.visible = false;

    
    if (window.innerHeight >= 1180) {
      geometry1 = new THREE.PlaneBufferGeometry(3, 3);
      geometry2 = new THREE.PlaneBufferGeometry(1.5, 1.5);
      geometry3 = new THREE.PlaneBufferGeometry(1.5, 1.5);
      geometry4 = new THREE.PlaneBufferGeometry(1.5, 1.5);
      geometry5 = new THREE.PlaneBufferGeometry(1, 1.5);
      geometry7 = new THREE.PlaneBufferGeometry(4.5, 4.5);
  
      box1.position.set(0, -1, 2);
      box2.position.set(3 , -1, 3);
      box3.position.set(2, 3, 2);
      box4.position.set(-2, 3.2, 2);
      box5.position.set(-2.5, -1, 2);
      box8.visible = false;
      box9.visible = false;
      box10.visible = false;
    }
  }


  else if (window.innerWidth <= 991) {
    geometry1 = new THREE.PlaneBufferGeometry(3, 3);
    geometry2 = new THREE.PlaneBufferGeometry(2, 2);
    geometry3 = new THREE.PlaneBufferGeometry(2, 2);
    geometry4 = new THREE.PlaneBufferGeometry(2, 2);
    geometry5 = new THREE.PlaneBufferGeometry(2, 2.5);
    geometry7 = new THREE.PlaneBufferGeometry(4, 4);

    box1.position.set(0, -1, 2);
    box2.position.set(5, -3, 3);
    box3.position.set(4, 3, 2);
    box4.position.set(-4, 3, 2);
    box5.position.set(-5, -3, 2);
    box8.visible = false;
    box9.visible = false;
    box10.visible = false;

     if (window.innerHeight > 768) {
      geometry1 = new THREE.PlaneBufferGeometry(2, 2);
      geometry2 = new THREE.PlaneBufferGeometry(1.5, 1.5);
      geometry3 = new THREE.PlaneBufferGeometry(1.5, 1.5);
      geometry4 = new THREE.PlaneBufferGeometry(1.5, 1.5);
      geometry5 = new THREE.PlaneBufferGeometry(1, 1.5);
      geometry7 = new THREE.PlaneBufferGeometry(4.5, 4.5);
    
      box1.position.set(0, -1, 2);
      box2.position.set(3, -3.5 , 3);
      box3.position.set(2, 2.5, 2);
      box4.position.set(-2, 2.7, 2);
      box5.position.set(-2.5, -3.5, 2);
      box8.visible = false;
      box9.visible = false;
      box10.visible = false;
    }

  }
  else if (window.innerHeight >= 1366 && window.innerHeight <=1500) {
    geometry1 = new THREE.PlaneBufferGeometry(2, 2);
    geometry2 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry3 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry4 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    geometry5 = new THREE.PlaneBufferGeometry(1, 1.5);
    geometry7 = new THREE.PlaneBufferGeometry(5, 5);
  
    box1.position.set(0, -1, 2);
    box2.position.set(3.5, -3.5, 3);
    box3.position.set(3, 3, 2);
    box4.position.set(-4, 3.5, 2);
    box5.position.set(-3.5, -3.5, 2);
    box8.visible = false;
    box9.visible = false;
    box10.visible = false;
  }
     else {
    geometry1 = new THREE.PlaneBufferGeometry(3, 3);
    // geometry_screen = new THREE.PlaneBufferGeometry(3, 3);
    geometry2 = new THREE.PlaneBufferGeometry(2, 2);
    geometry3 = new THREE.PlaneBufferGeometry(2.5, 2.5);
    geometry4 = new THREE.PlaneBufferGeometry(3, 3);
    geometry5 = new THREE.PlaneBufferGeometry(1.6, 1.9);
    geometry7 = new THREE.PlaneBufferGeometry(5, 5);
    geometry8 = new THREE.PlaneBufferGeometry(2, 2);
    geometry9 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    // geometry11 = new THREE.PlaneBufferGeometry(1.5, 1.5);
    box1.position.set(0, -1, 2);
    box2.position.set(6, -3, 3);
    box3.position.set(5, 3, 2);
    box4.position.set(-7, 4, 2);
    box5.position.set(-6, -3, 2);
    box7.position.set(0, 6.5, 0);
    box8.visible = true;
    box9.visible = true;
    box10.visible = true;
    // box1screen.visible = false
  }

  // Update box geometries
  box1.geometry.dispose();
  box1.geometry = geometry1.clone();
  // box1screen.geometry.dispose();
  // box1screen.geometry = geometry_screen.clone();
  box2.geometry.dispose();
  box2.geometry = geometry2.clone();
  box3.geometry.dispose();
  box3.geometry = geometry3.clone();
  box4.geometry.dispose();
  box4.geometry = geometry4.clone();
  box5.geometry.dispose();
  box5.geometry = geometry5.clone();
  box7.geometry.dispose();
  box7.geometry = geometry7.clone();
  box8.geometry.dispose();
  box8.geometry = geometry8.clone();
  box9.geometry.dispose();
  box9.geometry = geometry9.clone();
  box10.geometry.dispose();
  box10.geometry = geometry10.clone();
  box11.geometry.dispose();
  box11.geometry = geometry11.clone();
  box12.geometry.dispose();
  box12.geometry = geometry12.clone();
  box13.geometry.dispose();
  box13.geometry = geometry13.clone();
  box14.geometry.dispose();
  box14.geometry = geometry14.clone();
  box15.geometry.dispose();
  box15.geometry = geometry15.clone();
  box16.geometry.dispose();
  box16.geometry = geometry16.clone();
  box17.geometry.dispose();
  box17.geometry = geometry17.clone();
  box18.geometry.dispose();
  box18.geometry = geometry18.clone();
  box19.geometry.dispose();
  box19.geometry = geometry19.clone();
  box20.geometry.dispose();
  box20.geometry = geometry20.clone();
  box21.geometry.dispose();
  box21.geometry = geometry21.clone();
  box22.geometry.dispose();
  box22.geometry = geometry22.clone();
}

// Call the function when the page is loaded to set initial sizes and positions
window.addEventListener('load', updateGeometriesAndPositions);

// Also call the function when the window resizes
window.addEventListener('resize', updateGeometriesAndPositions);

  

  const box1 = new THREE.Mesh(geometry1, material.clone());
  box1.material.map = texture1;
  box1.material.transparent = true;
  box1.position.set(0, -1, 4);
  box1.userData.originalPosition = box1.position.clone(); // Set original position
  group.add(box1);
  
  // const box1screen = new THREE.Mesh(geometry_screen, material.clone());
  // box1screen.material.map = texture_new;
  // box1screen.material.transparent = true;
  // box1screen.position.set(0, -1, 4); // Adjust position as needed
  // box1screen.userData.originalPosition = box1screen.position.clone(); // Set original position
  // group.add(box1screen);


  const box2 = new THREE.Mesh(geometry2, material.clone());
  box2.material.map = texture2;
  box2.material.transparent = true;
  box2.position.set(6, -3, 3);
  box2.userData.originalPosition = box2.position.clone(); // Set original position
  group.add(box2);

  const box3 = new THREE.Mesh(geometry3, material.clone());
  box3.material.map = texture3;
  box3.material.transparent = true;
  box3.position.set(4, 3, 2);
  box3.userData.originalPosition = box3.position.clone(); // Set original position
  group.add(box3);

  const box4 = new THREE.Mesh(geometry4, material.clone());
  box4.material.map = texture4;
  box4.material.transparent = true;
  box4.position.set(-7, 4, 2);
  box4.userData.originalPosition = box4.position.clone(); // Set original position
  group.add(box4);

  const box5 = new THREE.Mesh(geometry5, material.clone());
  box5.material.map = texture5;
  box5.material.transparent = true;
  box5.position.set(-6, -4, 3);
  box5.userData.originalPosition = box5.position.clone(); // Set original position
  group.add(box5);

  const box6 = new THREE.Mesh(geometry6, material.clone());
  box6.material.map = texture6;
  box6.material.transparent = true;
  box6.position.set(1, -0.5, 0);
  box6.userData.originalPosition = box6.position.clone();
 
  group.add(box6);

  const box7 = new THREE.Mesh(geometry7, material.clone());
  box7.material.map = texture7;
  box7.material.transparent = true;
  box7.position.set(0, 6, 0);
  box7.userData.originalPosition = box7.position.clone(); // Set original position
  box7.material.alphaTest = 0.1;
  group.add(box7);

  const box8 = new THREE.Mesh(geometry8, material.clone());
  box8.material.map = texture8;
  box8.material.transparent = true;
  box8.position.set(-3, 3, 0);
  box8.userData.originalPosition = box8.position.clone(); // Set original position
  group.add(box8);

  const box9 = new THREE.Mesh(geometry9, material.clone());
  box9.material.map = texture9;
  box9.material.transparent = true;
  box9.position.set(11, 4, 0);
  box9.userData.originalPosition = box9.position.clone(); // Set original position
  group.add(box9);

  const box10 = new THREE.Mesh(geometry10, material.clone());
  box10.material.map = texture10;
  box10.material.transparent = true;
  box10.position.set(-7, 0, 2);
  box10.userData.originalPosition = box10.position.clone(); // Set original position
  group.add(box10);

  const box11 = new THREE.Mesh(geometry11, material.clone());
  box11.material.map = texture11;
  box11.material.transparent = true;
  box11.position.set(-3, 0, 1);
  box11.userData.originalPosition = box11.position.clone(); // Set original position
  group.add(box11);

  const box12 = new THREE.Mesh(geometry12, material.clone());
  box12.material.map = texture12;
  box12.material.transparent = true;
  box12.position.set(-9, 5, 2);
  box12.userData.originalPosition = box12.position.clone(); // Set original position
  group.add(box12);


  const box13 = new THREE.Mesh(geometry13, material.clone());
  box13.material.map = texture13;
  box13.material.transparent = true;
  box13.position.set(6, -5, 2);
  box13.userData.originalPosition = box13.position.clone(); // Set original position
  group.add(box13);


  const box14 = new THREE.Mesh(geometry14, material.clone());
  box14.material.map = texture14;
  box14.material.transparent = true;
  box14.position.set(-4, 7, 2); 
  box14.userData.originalPosition = box14.position.clone(); // Set original position
  group.add(box14);


  const box15 = new THREE.Mesh(geometry15, material.clone());
  box15.material.map = texture15;
  box15.material.transparent = true;
  box15.position.set(-3, -9, 2);
  box15.userData.originalPosition = box15.position.clone(); // Set original position
  group.add(box15);


  const box16 = new THREE.Mesh(geometry16, material.clone());
  box16.material.map = texture16;
  box16.material.transparent = true;
  box16.position.set(5, 2, 2);
  box16.userData.originalPosition = box11.position.clone(); // Set original position
  group.add(box16);


  const box17 = new THREE.Mesh(geometry17, material.clone());
  box17.material.map = texture17;
  box17.material.transparent = true;
  box17.position.set(-6, 0, 2);
  box17.userData.originalPosition = box17.position.clone(); // Set original position
  group.add(box17);

  const box18 = new THREE.Mesh(geometry18, material.clone());
  box18.material.map = texture18;
  box18.material.transparent = true;
  box18.position.set(-5, 5, 2);
  box18.userData.originalPosition = box18.position.clone(); // Set original position
  group.add(box18);

  const box19 = new THREE.Mesh(geometry19, material.clone());
  box19.material.map = texture19;
  box19.material.transparent = true;
  box19.position.set(7, 4, 2);
  box19.userData.originalPosition = box19.position.clone(); // Set original position
  group.add(box19);

  const box20 = new THREE.Mesh(geometry20, material.clone());
  box20.material.map = texture20;
  box20.material.transparent = true;
  box20.position.set(6, -1, 2);
  box20.userData.originalPosition = box20.position.clone(); // Set original position
  group.add(box20);

  const box21 = new THREE.Mesh(geometry21, material.clone());
  box21.material.map = texture21;
  box21.material.transparent = true;
  box21.position.set(4, 0, 2);
  box21.userData.originalPosition = box21.position.clone(); // Set original position
  group.add(box21);

  const box22 = new THREE.Mesh(geometry22, material.clone());
  box22.material.map = texture22;
  box22.material.transparent = true;
  box22.position.set(0, 3, 2);
  box22.userData.originalPosition = box22.position.clone(); // Set original position
  group.add(box22);



  scene.add(group);



  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputEncoding = THREE.sRGBEncoding;
  canvas.appendChild(renderer.domElement);

  const zoomInTimeline = (x, y, z, zoomOutFactor = 1) => {
    let tl = gsap
      .timeline({ defaults: { duration: 2.5, ease: "expo.out" } })
      .to(controls.target, { x, y, z })
      .to(camera.position, { x, y, z: z + zoomOutFactor }, 0)
      .to(group.rotation, { x: 0, y: 0 }, 0);
  };



  let currentZoomedBoxIndex = 0; 
  let isZoomedIn = false; 


  let content1=  document.getElementById('content1')
  let content2= document.getElementById('content2')
  let content3= document.getElementById('content3')
  let content4= document.getElementById('content4')
  let content5= document.getElementById('content5')
  let heading = document.getElementById('heading')
  // let detail = document.getElementById('detail').style.display="none"
  heading.classList.add('headshot');



  
  let plates = document.querySelectorAll('.plate');
  
    // Function to hide all plates slightly
    function hideAllPlates() {
      plates.forEach(plate => {
        plate.classList.add('hidden-slightly');
      });
    }
  
    // Function to show all plates slightly
    function showAllPlates() {
      plates.forEach(plate => {
        plate.classList.remove('hidden-slightly');
      });
    }
  
  box1.userData.isClickable = true;
  box2.userData.isClickable = true;
  box3.userData.isClickable = true;
  box4.userData.isClickable = true;
  box5.userData.isClickable = true;

  const headingElement = ["Web Developer" , "Game Development" , "Reels Development" , "Trading Developments" , "App Development"]
 

  const boxes = [box1, box2, box3, box4, box5]; // Assuming you have defined these boxes somewhere in your code
 
const contents = [content1, content2, content3, content4, content5]; // Assuming you have defined these content elements
  

canvas.addEventListener("mousemove", (event) => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Calculate mouse position relative to the canvas
    mouse.x = (event.clientX / canvas.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / canvas.clientHeight) * 2 + 1;

    // Update the raycaster with the mouse position and camera
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting with the raycaster
    const intersects = raycaster.intersectObjects(boxes, true);

    if (intersects.length > 0) {
        // Change cursor style to pointer if mouse is over a box
        document.body.style.cursor = "pointer";
    } else {
        // Revert cursor style back to default if not over a box
        document.body.style.cursor = "auto";
    }
});



canvas.addEventListener("click", (event) => {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // Calculate mouse position relative to the canvas
  mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
  mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

  // Update the raycaster with the mouse position and camera
  raycaster.setFromCamera(mouse, camera);

  // Calculate objects intersecting with the raycaster
  const intersects = raycaster.intersectObjects(boxes, true);

  if (intersects.length > 0) {
      // Get the first intersected object
      const intersectedObj = intersects[0].object;

      // Check if the intersected object is clickable
      if (intersectedObj.userData.isClickable) {
          // Perform zoom-in action
          zoomInTimeline(intersectedObj.position.x, intersectedObj.position.y, intersectedObj.position.z, 3);
          rotateAroundGroup = false;
     
          // Update the zoom direction and currently zoomed box index
          isZoomedIn = true;
          currentZoomedBoxIndex = boxes.indexOf(intersectedObj); // Update current box index
          // Show the corresponding content for the clicked box
          gsap.to(box8.position, {
            duration: 2,
            y:  10,
          });

          gsap.to(box7.position, {
            duration: 1,
            y: 10,
          });


          hideAllPlates();
          hideAllContents();
          if (contents[currentZoomedBoxIndex]) {
              contents[currentZoomedBoxIndex].style.display = "block"; // Show the clicked box's content
              leftZoomBtn.style.display = "block";
              rightZoomBtn.style.display = "block";
              originalBtn.style.display = "block";
         
              // Show heading for the clicked box
              if (headingElement[currentZoomedBoxIndex]) {
                  heading.textContent = headingElement[currentZoomedBoxIndex];                 
              }
              if (currentZoomedBoxIndex === contents.indexOf(content1)) {
                // Apply longer time interval (2000ms) for content1
                contents[currentZoomedBoxIndex].style.opacity = "0";
                setTimeout(() => {
                    contents[currentZoomedBoxIndex].style.opacity = "1"; // Increase opacity
                }, 2000);
            } else {
                // Apply shorter time interval (800ms) for other content elements
                contents[currentZoomedBoxIndex].style.opacity = "0";
                setTimeout(() => {
                    contents[currentZoomedBoxIndex].style.opacity = "1"; // Increase opacity
                }, 800);
            }
            

              
          } else {
              console.error("Content element not found for box:", currentZoomedBoxIndex);            
          }
      }
  }
});

 
 
  function hideAllContents() {
      contents.forEach(content => {
          if (content) {
              content.style.display = "none";
          }
      });
  }
 

leftZoomBtn.style.display = "none";
rightZoomBtn.style.display = "none";
originalBtn.style.display = "none";

originalBtn.addEventListener("click", () => {
    zoomInTimeline(0, 0, 0, 15);
    rotateAroundGroup = true;
    leftZoomBtn.style.display = "none";
    rightZoomBtn.style.display = "none";
    originalBtn.style.display = "none";
    showAllPlates()
    hideAllContents();
    heading.textContent = "";

    gsap.to(box8.position, {
      duration: 1,
      y: 3,
    });

    gsap.to(box7.position, {
      duration: 1,
      y: 6,
    });

});

rightZoomBtn.addEventListener("click", () => {
    let targetBox;
    // Zoom out if at the last box, else zoom in to the next box
    if (isZoomedIn) {
        if (currentZoomedBoxIndex === boxes.length - 1) {
            // If at the last box, zoom out
            zoomInTimeline(0, 0, 0, 15);
            rotateAroundGroup = true;
            isZoomedIn = false;
            leftZoomBtn.style.display = "none";
            rightZoomBtn.style.display = "none";
            originalBtn.style.display = "none";
            // showDetailWithTransition();
            gsap.to(box8.position, {
              duration: 1,
              y: 3,
            });

            gsap.to(box7.position, {
              duration: 1,
              y: 6,
            });


            showAllPlates()
            
              hideAllContents();
         
          
            // Remove the heading element
            heading.textContent = "";
        } else {
            // Zoom in to the next box
            currentZoomedBoxIndex = (currentZoomedBoxIndex + 1) % boxes.length;
            targetBox = boxes[currentZoomedBoxIndex];
            zoomInTimeline(targetBox.position.x, targetBox.position.y, targetBox.position.z, 3);
            rotateAroundGroup = false;
            // Show the corresponding content for the zoomed-in box
            hideAllContents();
            hideAllPlates()
            if (contents[currentZoomedBoxIndex]) {
                contents[currentZoomedBoxIndex].style.display = "block";
                // detail.style.display = "none";
            }
            contents[currentZoomedBoxIndex].style.opacity = "0";
            // Delayed opacity increase for .content1
            setTimeout(() => {
                contents[currentZoomedBoxIndex].style.opacity = "1"; // Increase opacity
            }, 800);
            // Update the heading for the zoomed-in box
            if (headingElement[currentZoomedBoxIndex]) {
                heading.textContent = headingElement[currentZoomedBoxIndex];
            } else {
                console.error("Heading element not found for box:", currentZoomedBoxIndex);
            }
        }
    } else {
        // If zoomed out, zoom in to box1
        targetBox = boxes[0];
        zoomInTimeline(targetBox.position.x, targetBox.position.y, targetBox.position.z, 3);
        isZoomedIn = true;
        rotateAroundGroup = false;
        // Show the corresponding content for box1
        hideAllContents();
        if (contents[0]) {
            contents[0].style.display = "block";
        }
        // Update the heading for box1
        if (headingElement[0]) {
            heading.textContent = headingElement[0];
        } else {
            console.error("Heading element not found for box:", 0);
        }
    }
});

leftZoomBtn.addEventListener("click", () => {
    let targetBox;
    let zoomAmount = 3; // Default zoom amount, adjust as needed

    // Check if zoomed in and not at box1
    if (isZoomedIn && currentZoomedBoxIndex !== 0) {
        currentZoomedBoxIndex = (currentZoomedBoxIndex - 1 + boxes.length) % boxes.length;
        targetBox = boxes[currentZoomedBoxIndex];
        zoomInTimeline(targetBox.position.x, targetBox.position.y, targetBox.position.z, zoomAmount);
        rotateAroundGroup = false;
    
        hideAllPlates()
        hideAllContents();
      
        if (contents[currentZoomedBoxIndex]) {
            contents[currentZoomedBoxIndex].style.display = "block";
            // detail.style.display="none"
            contents[currentZoomedBoxIndex].style.opacity = "0";

            // Delayed opacity increase for .content1
            setTimeout(() => {
                contents[currentZoomedBoxIndex].style.opacity = "1"; // Increase opacity
            }, 800); 
        }

        // Update the heading for the zoomed-in box
        if (headingElement[currentZoomedBoxIndex]) {
            heading.textContent = headingElement[currentZoomedBoxIndex];
        } else {
            console.error("Heading element not found for box:", currentZoomedBoxIndex);
        }
    } else {
        // If zoomed out or at box1, zoom out
        zoomInTimeline(0, 0, 0, 15); // Zoom out to initial view
        rotateAroundGroup = true; // Resume rotating around the group
        isZoomedIn = false; // Update zoom state to zoomed out
        leftZoomBtn.style.display = "none";
        rightZoomBtn.style.display = "none";
        originalBtn.style.display = "none";
        // Hide all contents when zoomed out
        hideAllContents();
        showAllPlates()
        gsap.to(box8.position, {
          duration: 1,
          y: 3,
        });
        gsap.to(box7.position, {
          duration: 1,
          y: 6,
        });
        // Remove the heading element when zoomed out
        heading.textContent = "";
    }
});

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        
            const box1Position = boxes[0].position;
            zoomInTimeline(box1Position.x, box1Position.y, box1Position.z, 3);
            rotateAroundGroup = false;
            isZoomedIn = true;
            currentZoomedBoxIndex = 0; 
            observer.unobserve(entry.target); 

            leftZoomBtn.style.display = "block";
            rightZoomBtn.style.display = "block";
            originalBtn.style.display = "block";
            hideAllContents();
            showAllPlates()

            gsap.to(box8.position, {
              duration: 1,
              y: 10,
            });

            gsap.to(box7.position, {
              duration: 1,
              y: 10,
            });

            hideAllPlates()
            hideAllContents();
            if (contents[0]) {
                contents[0].style.display = "block";
            }
            contents[currentZoomedBoxIndex].style.opacity = "0";
        
            setTimeout(() => {
                contents[currentZoomedBoxIndex].style.opacity = "1";
            }, 2000); 


            if (headingElement[0]) {
                heading.textContent = headingElement[0];
            } else {
                console.error("Heading element not found for box:", 0);
            }
        }
    });
};

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(handleIntersection, options);
  observer.observe(canvas);
  
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableRotate = false;
  controls.enabled = false;

  const onWindowResize = () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  };
  
  window.addEventListener("resize", onWindowResize, false);

  const clock = new THREE.Clock();

  const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    // Store the original Y positions of the boxes
    const originalPositions = {
      // box1: box1.position.x,
        box1: box1.position.y,
        box2: box2.position.y,
        box3: box3.position.y,
        box4: box4.position.y,
        box5: box5.position.y,
        box11: box11.position.x,
        box12: box12.position.x,
        box13: box13.position.x,
        box14: box14.position.x,
        box15: box15.position.x,
        box16: box16.position.x,
        box17: box17.position.x,
        box18: box18.position.x,
        box19: box19.position.x,
        box20: box20.position.x,
        box21: box21.position.x,
        box22: box22.position.x,
    };

    // Animate each box with slight up and down motion
    if (rotateAroundGroup) {
        const intensity = 0.01; // Adjust the overall intensity here
        const multiplier = 0.1; // Adjust the multiplier for individual boxes

        box1.position.y = originalPositions.box1 + Math.sin(elapsedTime * 1.5) * intensity * 0.3;
        box2.position.y = originalPositions.box2 + Math.sin(elapsedTime * 1) * intensity * 0.2;
        box3.position.y = originalPositions.box3 + Math.sin(elapsedTime * 1.5) * intensity * multiplier;
        box4.position.y = originalPositions.box4 + Math.sin(elapsedTime * 1)* intensity *0.2;
        box5.position.y = originalPositions.box5 + Math.sin(elapsedTime * 1) * intensity * 0.2;
     

  }

  const intensity = 0.01; 
  // box11.position.y = originalPositions.box11 + Math.sin(elapsedTime * 6) * intensity * 0.9;
  box11.position.x = originalPositions.box11 + Math.sin(elapsedTime * 1) * intensity * 0.5;
  box12.position.x = originalPositions.box12 + Math.sin(elapsedTime * 1) * intensity * 0.2;
  box13.position.x = originalPositions.box13 + Math.sin(elapsedTime * 1) * intensity * 0.2;
  box14.position.x = originalPositions.box14 + Math.sin(elapsedTime * 1) * intensity * 0.2;
  box15.position.x = originalPositions.box15 + Math.sin(elapsedTime * 1) * intensity * 0.2;
  box16.position.x = originalPositions.box16 + Math.sin(elapsedTime * 1) * intensity * 0.2;
  box17.position.x = originalPositions.box17 + Math.sin(elapsedTime * 1) * intensity * 0.2;
  box18.position.x = originalPositions.box18 + Math.sin(elapsedTime * 1) * intensity * 0.2;

  box19.position.x = originalPositions.box19 + Math.sin(elapsedTime * 1) * intensity * 0.2;
  box20.position.x = originalPositions.box20 + Math.sin(elapsedTime * 1) * intensity * 0.2;
  box21.position.x = originalPositions.box21 + Math.sin(elapsedTime * 1) * intensity * 0.2;
  box22.position.x = originalPositions.box22 + Math.sin(elapsedTime * 1) * intensity * 0.2;


    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

animate();  

}
setup();


var galleryThumbs = new Swiper('.gallery-thumbs', {
  loop: true,
  loopedSlides: 10,
  centeredSlides: true,
  spaceBetween: 10,
  slideToClickedSlide: true,
  slidesPerView: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  speed:1200,
   autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
 
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1440:{
    slidesPerView: 5,
    spaceBetween: 40,
  }
}
});

var galleryTop = new Swiper('.gallery-top', {
  loop: true,
  loopedSlides: 10,
  spaceBetween: 10,
});

galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;



particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
    
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Declare variables
var count_particles, stats, update;

// Initialize stats
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);

// Function to update stats
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);



