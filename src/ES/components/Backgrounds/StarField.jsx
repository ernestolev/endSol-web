import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function StarField() {
    const containerRef = useRef(null);

    useEffect(() => {
        let camera, scene, renderer, stars = [];

        function init() {
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 5;

            scene = new THREE.Scene();
            
            renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            if (containerRef.current) {
                containerRef.current.appendChild(renderer.domElement);
            }
        }

        function addSphere() {
            for (let z = -1000; z < 1000; z += 20) {
                const geometry = new THREE.SphereGeometry(0.5, 32, 32);
                const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
                const sphere = new THREE.Mesh(geometry, material);

                sphere.position.x = Math.random() * 1000 - 500;
                sphere.position.y = Math.random() * 1000 - 500;
                sphere.position.z = z;
                sphere.scale.x = sphere.scale.y = 2;

                scene.add(sphere);
                stars.push(sphere);
            }
        }

        function animateStars() {
            stars.forEach((star, i) => {
                star.position.z += i/10;
                if (star.position.z > 1000) star.position.z -= 2000;
            });
        }

        function render() {
            requestAnimationFrame(render);
            renderer.render(scene, camera);
            animateStars();
        }

        init();
        addSphere();
        render();

        return () => {
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className="starField" />;
}