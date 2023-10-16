import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// 初始化
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 3)
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

// model loader
const loader = new GLTFLoader();

loader.load('./fnf_scarlett_bunny/scene.gltf', function (gltf) {

    scene.add(gltf.scene);

}, undefined, function (error) {

    console.error(error);

});


function animate() {
    controls.update();
    scene.rotateY(Math.PI / 1000)
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();