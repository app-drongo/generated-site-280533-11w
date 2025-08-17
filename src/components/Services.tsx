// Enhanced by AI on 2025-08-17T11:47:43.279Z
// Section: services
// Category: services

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2,
  Smartphone,
  Cloud,
  Palette,
  BarChart3,
  Shield,
  Rocket,
  Globe,
  ArrowRight
} from "lucide-react"

export default function ServicesCardGrid() {
  const services = [
    {
      id: "sap-implementation",
      title: "SAP Implementation",
      description: "Comprehensive SAP implementation services to streamline your manufacturing and logistics operations.",
      icon: Rocket,
      badge: "Expertise",
      features: ["Industry-Specific Solutions", "Process Optimization", "Change Management"],
      link: "/services/sap-implementation"
    },
    {
      id: "warehouse-management",
      title: "Warehouse Management",
      description: "Innovative warehouse management solutions to improve efficiency, visibility, and control.",
      icon: Globe,
      features: ["Inventory Optimization", "Automation", "Real-Time Reporting"],
      link: "/services/warehouse-management"
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Leverage the power of SAP to drive digital transformation and gain a competitive edge.",
      icon: Cloud,
      badge: "New",
      features: ["Process Automation", "Data-Driven Insights", "Scalable Infrastructure"],
      link: "/services/digital-transformation"
    },
    {
      id: "sap-consulting",
      title: "SAP Consulting",
      description: "Expert SAP consulting services to help you maximize the value of your enterprise software investment.",
      icon: Palette,
      features: ["Strategic Roadmapping", "System Integration", "User Adoption"],
      link: "/services/sap-consulting"
    },
    {
      id: "manufacturing-solutions",
      title: "Manufacturing Solutions",
      description: "Tailored SAP solutions to optimize your manufacturing operations and drive operational excellence.",
      icon: BarChart3,
      features: ["Production Planning", "Quality Control", "Supply Chain Optimization"],
      link: "/services/manufacturing-solutions"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your SAP ecosystem from cyber threats.",
      icon: Shield,
      features: ["Vulnerability Assessments", "Threat Monitoring", "Compliance Consulting"],
      link: "/services/cybersecurity"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Consulting Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Unlock the Power of SAP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              for Your Manufacturing and Logistics Operations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP solutions designed to help your business thrive in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Learn More</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your manufacturing and logistics operations with SAP?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              Explore All Services
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}