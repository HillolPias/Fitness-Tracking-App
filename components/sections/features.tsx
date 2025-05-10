"use client";

import { 
  Dumbbell, 
  Utensils, 
  LineChart, 
  Lightbulb, 
  Clock, 
  Share2, 
  Medal, 
  UserCheck 
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Features() {
  const features = [
    {
      icon: Dumbbell,
      title: "Workout Tracking",
      description: "Log exercises, sets, reps, and weights. Monitor your progress and see your strength gains over time.",
      color: "chart-1"
    },
    {
      icon: Utensils,
      title: "Nutrition Logging",
      description: "Track your daily food intake, calories, and macronutrients to ensure you're fueling your body correctly.",
      color: "chart-2"
    },
    {
      icon: LineChart,
      title: "Health Metrics",
      description: "Monitor weight, body measurements, heart rate, sleep quality, and more to get a complete picture of your health.",
      color: "chart-3"
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Receive personalized workout plans and nutrition advice based on your goals and progress.",
      color: "chart-4"
    },
    {
      icon: Clock,
      title: "Workout Timer",
      description: "Built-in interval timer and rest timer to keep your workouts efficient and effective.",
      color: "chart-5"
    },
    {
      icon: Share2,
      title: "Social Sharing",
      description: "Share your achievements and progress with friends and the FitTrack community for added motivation.",
      color: "chart-1"
    },
    {
      icon: Medal,
      title: "Achievements",
      description: "Earn badges and rewards for hitting milestones and staying consistent with your fitness routine.",
      color: "chart-2"
    },
    {
      icon: UserCheck,
      title: "Progress Photos",
      description: "Visually track your transformation with secure, private progress photos comparison tools.",
      color: "chart-3"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need To Reach Your Goals
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our comprehensive fitness platform provides all the tools you need to track, analyze, and improve your health and fitness.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className={cn(
                "w-12 h-12 flex items-center justify-center rounded-lg mb-4",
                `bg-[hsl(var(--${feature.color})/0.15)]`
              )}>
                <feature.icon className={cn(
                  "h-6 w-6",
                  `text-[hsl(var(--${feature.color}))]`
                )} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}