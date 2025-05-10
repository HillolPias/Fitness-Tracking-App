"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--chart-1)/0.2),transparent_40%),radial-gradient(circle_at_bottom_left,hsl(var(--chart-2)/0.15),transparent_35%)]" />
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Achieve Your Fitness Goals 
              <span className="relative">
                <span className="text-primary"> Together</span>
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C35.6667 1.5 114.4 -1.9 199 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </motion.svg>
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg mb-8 max-w-md mx-auto lg:mx-0"
            >
              Track workouts, monitor nutrition, and analyze health metrics with personalized recommendations for your fitness journey.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="#features">Learn More</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <Image
                      src={`https://source.unsplash.com/random/100x100?fitness&${i}`}
                      alt="User"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">5,000+</span> active members
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Fitness tracking dashboard"
                fill
                className="object-cover"
                priority
              />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
              
              {/* Metrics cards */}
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="w-full max-w-xs bg-card/80 backdrop-blur-md p-4 rounded-xl shadow-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">This Week's Progress</h3>
                    <span className="text-sm text-primary">↑ 12%</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Steps</span>
                      <span className="text-sm font-medium">42,983</span>
                    </div>
                    <div className="w-full bg-primary/20 h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full w-[75%]"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Workouts</span>
                      <span className="text-sm font-medium">4/5</span>
                    </div>
                    <div className="w-full bg-primary/20 h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full w-[80%]"></div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="w-full max-w-xs bg-card/80 backdrop-blur-md p-4 rounded-xl shadow-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Nutrition Today</h3>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">On Track</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-2 bg-background/50 rounded-lg">
                      <div className="text-lg font-semibold">1,824</div>
                      <div className="text-xs text-muted-foreground">Calories</div>
                    </div>
                    <div className="text-center p-2 bg-background/50 rounded-lg">
                      <div className="text-lg font-semibold">98g</div>
                      <div className="text-xs text-muted-foreground">Protein</div>
                    </div>
                    <div className="text-center p-2 bg-background/50 rounded-lg">
                      <div className="text-lg font-semibold">64g</div>
                      <div className="text-xs text-muted-foreground">Carbs</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Pattern dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 text-primary/20">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="currentColor" />
                <circle cx="4" cy="28" r="4" fill="currentColor" />
                <circle cx="4" cy="52" r="4" fill="currentColor" />
                <circle cx="4" cy="76" r="4" fill="currentColor" />
                <circle cx="28" cy="4" r="4" fill="currentColor" />
                <circle cx="28" cy="28" r="4" fill="currentColor" />
                <circle cx="28" cy="52" r="4" fill="currentColor" />
                <circle cx="28" cy="76" r="4" fill="currentColor" />
                <circle cx="52" cy="4" r="4" fill="currentColor" />
                <circle cx="52" cy="28" r="4" fill="currentColor" />
                <circle cx="52" cy="52" r="4" fill="currentColor" />
                <circle cx="52" cy="76" r="4" fill="currentColor" />
                <circle cx="76" cy="4" r="4" fill="currentColor" />
                <circle cx="76" cy="28" r="4" fill="currentColor" />
                <circle cx="76" cy="52" r="4" fill="currentColor" />
                <circle cx="76" cy="76" r="4" fill="currentColor" />
              </svg>
            </div>
            
            {/* Pattern dots */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 text-primary/20">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="currentColor" />
                <circle cx="4" cy="28" r="4" fill="currentColor" />
                <circle cx="4" cy="52" r="4" fill="currentColor" />
                <circle cx="4" cy="76" r="4" fill="currentColor" />
                <circle cx="28" cy="4" r="4" fill="currentColor" />
                <circle cx="28" cy="28" r="4" fill="currentColor" />
                <circle cx="28" cy="52" r="4" fill="currentColor" />
                <circle cx="28" cy="76" r="4" fill="currentColor" />
                <circle cx="52" cy="4" r="4" fill="currentColor" />
                <circle cx="52" cy="28" r="4" fill="currentColor" />
                <circle cx="52" cy="52" r="4" fill="currentColor" />
                <circle cx="52" cy="76" r="4" fill="currentColor" />
                <circle cx="76" cy="4" r="4" fill="currentColor" />
                <circle cx="76" cy="28" r="4" fill="currentColor" />
                <circle cx="76" cy="52" r="4" fill="currentColor" />
                <circle cx="76" cy="76" r="4" fill="currentColor" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}