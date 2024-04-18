import * as THREE from 'three';

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const keys = {};
const cubeSpeed = 0.05;

// Scene
scene.background = new THREE.Color(0xffffff);

// Camera
camera.position.z = 5;

// Renderer
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, metalness: 0.5, roughness: 0.5 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Edges
const edgesGeometry = new THREE.EdgesGeometry(geometry);
const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
const cubeEdges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
cube.add(cubeEdges);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(ambientLight, directionalLight);

// Input handling
document.addEventListener('keydown', event => { keys[event.code] = true; });
document.addEventListener('keyup', event => { keys[event.code] = false; });

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    moveCube();
    renderer.render(scene, camera);
}

function moveCube() {
    const { KeyW, KeyS, KeyA, KeyD, ArrowUp, ArrowDown } = keys;
    if (KeyW) cube.position.y -= cubeSpeed;
    if (KeyS) cube.position.y += cubeSpeed;
    if (KeyA) cube.position.x -= cubeSpeed;
    if (KeyD) cube.position.x += cubeSpeed;
    if (ArrowUp) cube.position.z += cubeSpeed;
    if (ArrowDown) cube.position.z -= cubeSpeed;
}

animate();



