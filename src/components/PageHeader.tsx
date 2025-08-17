// Enhanced by AI on 2025-08-17T11:47:43.731Z
// Section: page-header
// Category: page-header

import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"

export default function PageHeaderWithBreadcrumbs() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "SAP Consulting" }
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background to-muted/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-12 sm:py-16 lg:py-20">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-sm">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1
                const isFirst = index === 0
                
                return (
                  <li key={index} className="flex items-center gap-2">
                    {/* Separator */}
                    {index > 0 && (
                      <ChevronRight className="size-4 text-muted-foreground/50" />
                    )}
                    
                    {/* Breadcrumb Item */}
                    {isLast ? (
                      <span className="font-medium text-foreground">
                        {isFirst && (
                          <span className="flex items-center gap-1.5">
                            <Home className="size-4" />
                            {item.label}
                          </span>
                        )}
                        {!isFirst && item.label}
                      </span>
                    ) : (
                      <Link 
                        href={item.href || '#'} 
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4"
                      >
                        {isFirst && (
                          <span className="flex items-center gap-1.5">
                            <Home className="size-4" />
                            {item.label}
                          </span>
                        )}
                        {!isFirst && item.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ol>
          </nav>
          
          {/* Header Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              Unlock the Power of SAP for Manufacturing and Logistics
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Leverage our expertise in SAP consulting to optimize your manufacturing and warehouse operations. 
              We specialize in delivering tailored solutions that drive digital transformation and operational efficiency.
            </p>
          </div>
          
          {/* Decorative Line */}
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  )
}