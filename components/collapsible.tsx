"use client"

import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CollapsibleText({ 
  content, 
  initialLineNumber = 3 
}: { 
  content: string; 
  initialLineNumber?: number;
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [contentHeight, setContentHeight] = React.useState(0)
  const contentRef = React.useRef<HTMLParagraphElement>(null)

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [content, isOpen])

  return (
    <div className="w-full px-4 py-4 border-2 border-cyan-700  rounded-lg dark:bg-gray-900/50">
      <div className="relative">
        {/* Animated container with max-height */}
        <div 
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isOpen ? contentHeight : `${initialLineNumber * 1.5}rem`
          }}
        >
          <p 
            ref={contentRef}
            className="dark:text-gray-300 text-gray-700 leading-relaxed"
          >
            {content}
          </p>
        </div>
        
        <div className="mt-3">
          <Button
            variant="ghost"
            className="dark:text-cyan-400 hover:text-cyan-300  px-0 gap-1 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <>
                <ChevronUp size={16} className="transition-transform duration-300" />
                <span>Show less</span>
              </>
            ) : (
              <>
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                <span className="animate-pulse">Show more</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}