import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import modelPath from '../assets/bb8_animated.glb'

export default function BB8Model(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF(modelPath)
    const { actions } = useAnimations(animations, group)

    // References for bone/mesh rotation
    const headRef = useRef()

    useEffect(() => {
        if (!nodes) return;
        console.log('BB8 Nodes:', nodes)

        if (actions && Object.keys(actions).length > 0) {
            try {
                const firstAction = actions[Object.keys(actions)[0]]
                if (firstAction) firstAction.play()
            } catch (e) {
                console.warn("Animation failed to play:", e)
            }
        }
    }, [nodes, actions, animations])

    useFrame((state) => {
        if (!group.current || !nodes) return

        const { x, y } = state.mouse

        // Safety check for head node
        const head = nodes.head || nodes.Head || nodes.BB8_Head || nodes.Cube_001 // Fallback names

        if (head) {
            // eslint-disable-next-line react-hooks/immutability
            head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, x * 0.5, 0.1)
            // eslint-disable-next-line react-hooks/immutability
            head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, -y * 0.3, 0.1)
        }
    })

    if (!nodes) return null

    // Most GLTs have a Scene or scene
    const sceneObject = nodes.Scene || nodes.scene || Object.values(nodes).find(n => n.type === 'Scene') || nodes[Object.keys(nodes)[0]]

    return (
        <group ref={group} {...props} dispose={null}>
            {sceneObject ? <primitive object={sceneObject} /> : null}
        </group>
    )
}

useGLTF.preload(modelPath)
