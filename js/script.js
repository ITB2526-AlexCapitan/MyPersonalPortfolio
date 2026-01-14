import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// --- GESTIÓN DEL FORMULARIO ---
window.handleSubmit = (event) => {
    event.preventDefault(); 
    
    const btn = event.target.querySelector('.btn-submit');
    const originalText = btn.innerText;
    
    btn.innerText = "Sent Successfully! ✓";
    btn.style.backgroundColor = "var(--accent)"; 
    btn.style.color = "#fff";
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = "";
        btn.style.color = "";
        event.target.reset();
    }, 3000);
};

// --- THREE.JS LOGIC ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 5, 15);

const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);

if (window.innerWidth < 768) {
    camera.position.set(0, 2, 9);
} else {
    camera.position.set(0, 2, 7);
}
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 1.2);
spotLight.position.set(5, 10, 5);
spotLight.angle = 0.5;
spotLight.penumbra = 0.5;
scene.add(spotLight);

const blueLight = new THREE.PointLight(0x2997ff, 1.5, 10);
blueLight.position.set(-3, 2, 2);
scene.add(blueLight);

const laptopGroup = new THREE.Group();
const metalMaterial = new THREE.MeshStandardMaterial({ color: 0xa0a0a0, roughness: 0.25, metalness: 0.9 });
const screenBezelMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.2 });
const screenGlowingMaterial = new THREE.MeshBasicMaterial({ color: 0x1a1a1a });
const trackpadMaterial = new THREE.MeshStandardMaterial({ color: 0x909090, roughness: 0.3, metalness: 0.8 });

const baseGeometry = new RoundedBoxGeometry(3, 0.15, 2, 4, 0.05);
const base = new THREE.Mesh(baseGeometry, metalMaterial);

const trackpadGeo = new THREE.PlaneGeometry(1, 0.7);
const trackpad = new THREE.Mesh(trackpadGeo, trackpadMaterial);
trackpad.rotation.x = -Math.PI / 2;
trackpad.position.y = 0.076;
trackpad.position.z = 0.5;
base.add(trackpad);
laptopGroup.add(base);

const lidGroup = new THREE.Group();
lidGroup.position.set(0, 0.075, -1);

const lidGeometry = new RoundedBoxGeometry(3, 0.1, 2, 4, 0.05);
lidGeometry.translate(0, 0, 1);
const lid = new THREE.Mesh(lidGeometry, metalMaterial);

const bezelGeo = new THREE.PlaneGeometry(2.9, 1.9);
bezelGeo.translate(0, 0.051, 1);
bezelGeo.rotateX(-Math.PI / 2);
const bezel = new THREE.Mesh(bezelGeo, screenBezelMaterial);
lidGroup.add(bezel);

const screenGeo = new THREE.PlaneGeometry(2.8, 1.75);
screenGeo.translate(0, 0.052, 1);
screenGeo.rotateX(-Math.PI / 2);
const screenMesh = new THREE.Mesh(screenGeo, screenGlowingMaterial);

lidGroup.add(lid);
lidGroup.add(screenMesh);
laptopGroup.add(lidGroup);
scene.add(laptopGroup);

laptopGroup.rotation.y = -0.3;
laptopGroup.rotation.x = 0.2;

function onScroll() {
    const scrollY = window.scrollY;
    const maxScroll = 500;
    let progress = Math.min(scrollY / maxScroll, 1);
    const startAngle = -1.8;
    const endAngle = 0;
    const currentAngle = startAngle + (Math.abs(startAngle - endAngle) * progress);

    if(lidGroup) lidGroup.rotation.x = currentAngle;
    laptopGroup.rotation.y = -0.3 + (progress * 0.5);
}

window.addEventListener('scroll', onScroll);
lidGroup.rotation.x = -1.8;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    
    if (window.innerWidth < 768) {
        camera.position.z = 9;
    } else {
        camera.position.z = 7;
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));