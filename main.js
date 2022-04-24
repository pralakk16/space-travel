import './style.css'

import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(-170, 170, 40);



const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
})




renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 50, 0);

const loader = new GLTFLoader();

loader.load( './models/Earth/Earth.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error(error );

} );

function animate(){
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera)
}

animate();