import React, { Component } from 'react'
import * as THREE from 'three'
import window from 'global'

class Scene extends Component{
    componentDidMount(){
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        
        //ADD SCENE
        this.scene = new THREE.Scene()
        
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 3000)
        this.camera.position.z = 1000
        
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setClearColor('#000')
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

        //ADD GROUP
        this.group = new THREE.Group()
        this.scene.add(this.group)

        for(let i = 0; i < 1000; i++) {
            const geometry = new THREE.SphereGeometry(3, 32, 32)
            const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0x808008 + 0x808080, wireframe: false })
            this.cube = new THREE.Mesh(geometry, material)
            this.cube.position.x = Math.random() * 2000 - 1000
            this.cube.position.y = Math.random() * 2000 - 1000
            this.cube.position.z = Math.random() * 2000 - 1000
            this.group.add(this.cube)
        }
        // console.log(this.group);

        window.addEventListener( 'resize', this.onWindowResize, false );

        this.start()
    }

    componentWillUnmount(){
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start = () => {
        if (!this.frameId) {
        this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop = () => {
        cancelAnimationFrame(this.frameId)
    }

    onWindowResize = () => {
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }

    animate = () => {
        this.group.rotation.x += 0.01
        this.group.rotation.y += 0.01
        this.group.rotation.z -= 0.01
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
        // console.log(this.group.children[0].position.x);  
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    render(){
        
        return(
            <div
                style={{ width: window.innerWidth, height: window.innerHeight }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

  export default Scene
