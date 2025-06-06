import { readable, writable } from 'svelte/store'

// socials
export const github = readable('janpeterd')
export const githubLink = readable('https://github.com/janpeterd')
export const linkedInLink = readable('https://www.linkedin.com/in/jan-peter-dhall%C3%A9/')
export const mail = readable('janpeter.dhalle@gmail.com')
export const mailLink = readable('mailto:r0836604@student.thomasmore.be')
export const phone = readable('+ 32 498 87 53 93')
export const phoneLink = readable('tel:+32498875393')
export const storageCleared = writable(false)
export const darkMode = writable(undefined)
