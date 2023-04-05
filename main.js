import * as THREE from 'three'

// Grab canvas
const canvas = document.querySelector('canvas')

// Renderer
const renderer = new THREE.WebGLRenderer({antialias: true, canvas})

const canvasWidth = renderer.domElement.clientWidth
const canvasHeight = renderer.domElement.clientHeight

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 1, 500)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)

const material = new THREE.LineBasicMaterial({color: 0x0000ff})

const points = []
points.push(new THREE.Vector3(-10, 0, 0))
points.push(new THREE.Vector3(0, 10, 0))
points.push(new THREE.Vector3(10, 0, 0))

const geometry = new THREE.BufferGeometry().setFromPoints(points)

const line = new THREE.Line(geometry, material)

scene.add(line)

renderer.render(scene, camera)