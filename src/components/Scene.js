import React, { Component } from 'react'
import * as THREE from 'three'
import './Scene.css'

class Scene extends Component{
    componentDidMount(){
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        
        //ADD SCENE
        this.scene = new THREE.Scene()
        
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(75, width / height, 3, 1000)
        this.camera.position.z = 200
        
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setClearColor('#000')
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

        //ADD CUBE
        this.group = new THREE.Group()
        this.scene.add(this.group)
        
        const max = 200
        const min = -200

        for(let i = 0; i < 400; i++) {
            const geometry = new THREE.SphereGeometry(Math.random() * 3 - 3.5, 32, 32)
            const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0x808008 + 0x808080, wireframe: false })
            this.cube = new THREE.Mesh(geometry, material)
            this.cube.position.x = Math.random() * (max - min) - max
            this.cube.position.y = Math.random() * (max - min) - max
            this.cube.position.z = Math.random() * (max - min) - max
            this.group.add(this.cube)
        }
        // console.log(this.group);

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
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

  export default Scene
