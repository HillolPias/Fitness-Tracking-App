"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Dumbbell, 
  Utensils, 
  Heart, 
  Trophy, 
  Zap, 
  RefreshCw 
} from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[Dumbbell, Utensils, Heart, Trophy, Zap, RefreshCw].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 50 + 20}px`
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 5,
              delay: index * 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Icon size={48} />
          </motion.div>
        ))}
      </div>
      
      <div className="container">
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Start Your Fitness Journey Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who have transformed their health and fitness with FitTrack. Your personal fitness coach, nutritionist, and motivator—all in one app.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="rounded-full px-8 text-base">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
                <Link href="#features">Learn More</Link>
              </Button>
            </motion.div>
            
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">
                Trusted by fitness enthusiasts at
              </p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
                {["Nike", "Under Armour", "Adidas", "Peloton", "Fitbit"].map((brand) => (
                  <div key={brand} className="text-xl font-bold tracking-tight">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}