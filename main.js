import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './style.css'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

gsap.to('.box',{
    x : 600,
    duration : 7,
    scrollTrigger : {
        trigger : '.box2'
    }
})