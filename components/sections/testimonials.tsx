"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marathon Runner",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "FitTrack helped me prepare for my first marathon with personalized training plans and nutrition advice. I improved my time by 15 minutes!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Weight Training Enthusiast",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "The workout tracking features are incredible. I can easily log my sets and reps, and watching my progress charts is so motivating.",
      rating: 5
    },
    {
      name: "Aisha Patel",
      role: "Yoga Instructor",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "As a yoga instructor, I recommend FitTrack to all my students. The holistic approach to fitness and wellness aligns perfectly with my philosophy.",
      rating: 5
    },
    {
      name: "David Wilson",
      role: "CrossFit Athlete",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "FitTrack's interval timer and workout tracking have been game-changers for my CrossFit training. The community features keep me accountable too!",
      rating: 4
    },
    {
      name: "Emma Rodriguez",
      role: "Nutritionist",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "The nutrition logging tools are accurate and comprehensive. I recommend this app to my clients as it helps them stay accountable with their diet plans.",
      rating: 5
    },
    {
      name: "James Taylor",
      role: "Triathlete",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Training for a triathlon requires tracking multiple disciplines. FitTrack makes it easy to monitor swimming, cycling, and running all in one place.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Fitness Enthusiasts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our users have to say about their experience with FitTrack.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-10 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg pointer-events-auto bg-background"
              onClick={prev}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg pointer-events-auto bg-background"
              onClick={next}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          <div className="overflow-hidden mx-8">
            <motion.div 
              className="flex gap-6"
              initial={false}
              animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 24}px)` }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                          {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-muted" />
                          ))}
                        </div>
                      </div>
                      <p className="italic">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {Array.from({ length: testimonials.length - 2 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full mx-1 transition-colors ${
                currentIndex === idx ? "bg-primary" : "bg-primary/30"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}