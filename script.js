function showInfo(name,number,symbol,use){

  document.getElementById("popup").style.display="block";

  document.getElementById("elementName").innerHTML=name;

  document.getElementById("symbol").innerHTML=
  "Symbol: " + symbol;

  document.getElementById("atomicNumber").innerHTML=
  "Atomic Number: " + number;

  document.getElementById("uses").innerHTML=
  "Uses: " + use;
}

function closePopup(){

  document.getElementById("popup").style.display="none";
}

function searchElement(){

  let input =
  document.getElementById("searchBar").value.toLowerCase();

  let elements =
  document.getElementsByClassName("element");

  for(let i=0;i<elements.length;i++){

    let text =
    elements[i].innerText.toLowerCase();

    if(text.includes(input)){

      elements[i].style.display="block";

    }else{

      elements[i].style.display="none";
    }
  }
}

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:document.getElementById("atomCanvas"),
alpha:true
});

renderer.setSize(window.innerWidth,300);

const geometry =
new THREE.SphereGeometry(1,32,32);

const material =
new THREE.MeshBasicMaterial({
color:0x00ffff,
wireframe:true
});

const sphere =
new THREE.Mesh(geometry,material);

scene.add(sphere);

camera.position.z=3;

function animate(){

requestAnimationFrame(animate);

sphere.rotation.x += 0.01;

sphere.rotation.y += 0.01;

renderer.render(scene,camera);
}

animate();