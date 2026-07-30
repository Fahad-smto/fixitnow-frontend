"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, Clock, Shield, Star, Play } from "lucide-react"
import Image from "next/image"

export default function Banner() {
  return (
    <section className="relative bg-black text-white dark:bg-white dark:text-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80"
          alt="Banner background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">
                Trusted by 10,000+ customers
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Home Deserves
              <span className="block text-white/80">
                The Best Care
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/70 max-w-lg leading-relaxed">
              Professional repair and maintenance services at your doorstep. 
              Quality guaranteed with certified experts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Video
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">U{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-white/60">4.9/5 from 2,500+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right Content - Features Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/20">
                  <Wrench className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Expert Repairs</h3>
                  <p className="text-sm text-white/70">
                    Certified professionals for all your needs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/20">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Quick Service</h3>
                  <p className="text-sm text-white/70">Same-day service</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/20">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Guaranteed</h3>
                  <p className="text-sm text-white/70">Quality work</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}