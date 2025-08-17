// Enhanced by AI on 2025-08-17T11:47:43.389Z
// Section: about
// Category: about

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Focused Expertise",
      description: "Our team specializes in SAP consulting for manufacturing and logistics, delivering tailored solutions to optimize your operations."
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "We leverage the latest SAP technologies and industry best practices to drive digital transformation and unlock new possibilities for your business."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our top priority. We work closely with you to understand your unique challenges and goals, and build solutions that deliver measurable results."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With a presence in multiple countries, we help enterprises worldwide harness the power of SAP to streamline their manufacturing and warehouse management processes."
    }
  ]

  const stats = [
    { value: "2010", label: "Founded", icon: Award },
    { value: "500+", label: "Clients Served", icon: Users },
    { value: "99.9%", label: "System Uptime", icon: TrendingUp },
    { value: "20+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "John Doe",
      role: "CEO & Co-Founder",
      image: "JD",
      bio: "Seasoned executive with 20+ years of experience in SAP implementation and digital transformation."
    },
    {
      name: "Jane Smith",
      role: "CTO & Co-Founder",
      image: "JS",
      bio: "Technical visionary with a proven track record of driving innovation in the manufacturing and logistics sectors."
    },
    {
      name: "Michael Johnson",
      role: "Head of Consulting",
      image: "MJ",
      bio: "Trusted advisor to global enterprises, helping them maximize the value of their SAP investments."
    },
    {
      name: "Emily Chen",
      role: "Director of Operations",
      image: "EC",
      bio: "Operational excellence expert, ensuring seamless delivery and exceptional client experiences."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Acme SAP Consulting
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Unlocking the Power of SAP for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Manufacturing and Logistics
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a team of seasoned SAP experts dedicated to helping manufacturing and logistics enterprises
            transform their operations and drive sustainable growth through innovative SAP solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2010, Acme SAP Consulting was born out of a vision to empower manufacturing and logistics
                companies to unlock the full potential of their SAP investments.
              </p>
              <p>
                Frustrated by the complexity and challenges that often come with SAP implementation and optimization,
                our co-founders set out to build a consultancy that would deliver tailored, user-centric solutions
                to drive tangible business results.
              </p>
              <p>
                Today, we proudly serve over 500 clients worldwide, helping them streamline their operations, enhance
                visibility, and stay ahead of the curve in an ever-evolving industry landscape.
              </p>
            </div>
            <Button className="group">
              Learn More About Our Journey
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "We believe that SAP can be a powerful enabler for manufacturing and logistics companies,
                      but only when implemented and optimized with a deep understanding of the industry."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- John Doe, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our work and shape the way we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Experts</h3>
            <p className="text-muted-foreground">
              The talented individuals behind our success, dedicated to delivering exceptional SAP consulting services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Acme SAP Consulting has been a true partner in our digital transformation journey.
                Their deep industry expertise and tailored solutions have helped us streamline our
                manufacturing and warehouse operations, driving significant efficiency gains and cost savings."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">CIO, Global Manufacturing Corp.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}