"use client"

import type React from "react"

import { Document, Page, pdfjs } from "react-pdf"
import one from "@/assets/sachit.pdf"
import { useState, useEffect } from "react"
import { FaDownload } from "react-icons/fa"

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString()

export const CV: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [width, setWidth] = useState<number | undefined>(undefined)
  const [isMounted, setIsMounted] = useState(false)

  // Handle responsive scaling
  useEffect(() => {
    setIsMounted(true)

    const handleResize = () => {
      const container = document.querySelector(".pdf-container")
      if (container) {
        setWidth(container.clientWidth)
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const downloadPdf = () => {
    setIsDownloading(true)
    const link = document.createElement("a")
    link.href = one
    link.setAttribute("download", "sachit.pdf")
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    link.remove()
    setIsDownloading(false)
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-2 sm:p-4 md:p-6 w-full max-w-4xl mx-auto">
      <div className="pdf-container shadow-lg rounded-lg overflow-hidden w-full bg-white">
        {isMounted && (
          <Document
            file={one}
            renderMode="canvas"
            loading={
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            }
            error={
              <div className="text-center py-12 text-red-500">
                <p>Failed to load PDF. Please try again later.</p>
              </div>
            }
          >
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={width} />
          </Document>
        )}
      </div>
      <button
        className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-primary rounded-full text-white shadow-md hover:bg-primary/80 transition-colors text-sm sm:text-base"
        onClick={downloadPdf}
        disabled={isDownloading}
      >
        <FaDownload className="mr-2" />
        {isDownloading ? "Downloading..." : "Download CV"}
      </button>
    </div>
  )
}

