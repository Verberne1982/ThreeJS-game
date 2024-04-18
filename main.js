import * as THREE from 'three';

// Setup scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// Setup camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Setup renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, metalness: 0.5, roughness: 0.5 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add edges to cube
const edgesGeometry = new THREE.EdgesGeometry(geometry);
const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
const cubeEdges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
cube.add(cubeEdges);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Setup camera position
camera.position.z = 5;

// Keyboard input handling
const keys = {};
document.addEventListener('keydown', event => {
    keys[event.code] = true;
});

document.addEventListener('keyup', event => {
    keys[event.code] = false;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Move cube based on keyboard input
    if (keys['KeyW']) cube.position.y -= 0.05;
    if (keys['KeyS']) cube.position.y += 0.05;
    if (keys['KeyA']) cube.position.x -= 0.05;
    if (keys['KeyD']) cube.position.x += 0.05;
    if (keys['ArrowUp']) cube.position.z += 0.05;
    if (keys['ArrowDown']) cube.position.z -= 0.05;

    renderer.render(scene, camera);
}

// Start animation loop
animate();
