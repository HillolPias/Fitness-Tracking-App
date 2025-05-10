"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create your profile",
      description: "Sign up and set your fitness goals, current stats, and preferences."
    },
    {
      number: "02",
      title: "Track your activities",
      description: "Log workouts, meals, and health metrics through our intuitive interface."
    },
    {
      number: "03",
      title: "Get personalized insights",
      description: "Receive tailored recommendations based on your progress and goals."
    },
    {
      number: "04",
      title: "Achieve your goals",
      description: "Stay consistent, track your progress, and celebrate your achievements."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--chart-3)/0.15),transparent_40%)]" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How FitTrack Works</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our simple yet powerful process helps you stay on track with your fitness journey. Here's how it works:
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Number(step.number.split("")[1]) * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-muted/50 border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Why our users love FitTrack</h3>
              <div className="space-y-3">
                {[
                  "Intuitive, easy-to-use interface",
                  "Comprehensive tracking in one place",
                  "Personalized coaching and recommendations",
                  "Community support and motivation"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Woman using fitness app"
                fill
                className="object-cover"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* App screenshot overlays */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-[10%] -right-12 w-64 rounded-xl overflow-hidden shadow-lg rotate-3 border-4 border-background"
            >
              <Image
                src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="App screenshot"
                width={256}
                height={550}
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-[10%] -left-12 w-64 rounded-xl overflow-hidden shadow-lg -rotate-6 border-4 border-background"
            >
              <Image
                src="https://images.pexels.com/photos/8436744/pexels-photo-8436744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="App screenshot"
                width={256}
                height={550}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}