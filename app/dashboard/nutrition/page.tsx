"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export default function NutritionPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nutrition</h1>
          <p className="text-muted-foreground">Track your daily nutrition and meals</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Log Meal
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {[
          { name: "Calories", current: 1840, target: 2200, unit: "kcal", color: "chart-1" },
          { name: "Protein", current: 82, target: 120, unit: "g", color: "chart-2" },
          { name: "Carbs", current: 215, target: 275, unit: "g", color: "chart-3" },
          { name: "Fat", current: 65, target: 73, unit: "g", color: "chart-4" },
          { name: "Fiber", current: 18, target: 25, unit: "g", color: "chart-5" },
          { name: "Water", current: 1.8, target: 2.5, unit: "L", color: "chart-1" }
        ].map((nutrient, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{nutrient.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-2xl font-bold">
                      {nutrient.current}
                      <span className="text-sm font-normal text-muted-foreground ml-1">
                        {nutrient.unit}
                      </span>
                    </span>
                    <span className="text-muted-foreground">
                      / {nutrient.target} {nutrient.unit}
                    </span>
                  </div>
                  <Progress 
                    value={(nutrient.current / nutrient.target) * 100} 
                    className="h-2"
                    // indicatorClassName={`bg-[hsl(var(--${nutrient.color}))]`}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today&apos;s Meals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { time: "8:30 AM", meal: "Breakfast", items: ["Oatmeal", "Banana", "Protein Shake"], calories: 420 },
              { time: "12:30 PM", meal: "Lunch", items: ["Grilled Chicken Salad", "Quinoa", "Avocado"], calories: 580 },
              { time: "4:00 PM", meal: "Snack", items: ["Greek Yogurt", "Mixed Berries", "Almonds"], calories: 280 },
              { time: "7:30 PM", meal: "Dinner", items: ["Salmon", "Brown Rice", "Roasted Vegetables"], calories: 560 }
            ].map((meal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-muted/50"
              >
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{meal.meal}</h3>
                      <p className="text-sm text-muted-foreground">{meal.time}</p>
                    </div>
                    <span className="text-sm font-medium">{meal.calories} kcal</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {meal.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="text-sm px-2 py-1 rounded-full bg-background"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}