"use client"

import { useEffect } from "react"

export function useScrollToHash() {
  useEffect(() => {
    // Fonction pour gérer le clic sur les liens d'ancrage
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const hashval = anchor.getAttribute("href")
        const target = document.querySelector(hashval as string)

        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80 // 80px offset for navbar
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })

          // Update URL without page jump
          history.pushState(null, "", hashval)
        }
      }
    }

    // Ajouter l'écouteur d'événement
    document.addEventListener("click", handleAnchorClick)

    // Gérer le chargement initial avec un hash dans l'URL
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash)
      if (target) {
        setTimeout(() => {
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }, 100)
      }
    }

    // Nettoyer l'écouteur d'événement
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])
}

export default function ScrollToHashHandler() {
  useScrollToHash()
  return null
}
