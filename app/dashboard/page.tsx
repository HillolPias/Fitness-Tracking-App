"use client";

import { useState } from "react";
import { Activity, Calendar, Clock, Dumbbell, Siren as Fire, Heart, Utensils, TrendingUp, BarChart2, Award, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState("week");
  
  // Mock data for charts
  const activityData = [
    { day: "Mon", calories: 420, steps: 8423, workoutMin: 45 },
    { day: "Tue", calories: 380, steps: 7841, workoutMin: 30 },
    { day: "Wed", calories: 450, steps: 9247, workoutMin: 60 },
    { day: "Thu", calories: 320, steps: 6982, workoutMin: 0 },
    { day: "Fri", calories: 510, steps: 10384, workoutMin: 75 },
    { day: "Sat", calories: 390, steps: 8126, workoutMin: 40 },
    { day: "Sun", calories: 280, steps: 5923, workoutMin: 0 },
  ];
  
  const calorieData = [
    { name: "Protein", value: 98, color: "hsl(var(--chart-1))" },
    { name: "Carbs", value: 240, color: "hsl(var(--chart-2))" },
    { name: "Fat", value: 65, color: "hsl(var(--chart-3))" },
  ];
  
  const workoutData = [
    { name: "Chest", time: 45 },
    { name: "Back", time: 50 },
    { name: "Legs", time: 60 },
    { name: "Arms", time: 35 },
    { name: "Core", time: 30 },
    { name: "Cardio", time: 40 },
  ];
  
  const healthMetricsData = [
    { date: "Mar", weight: 185, bodyfat: 18, muscle: 45 },
    { date: "Apr", weight: 182, bodyfat: 17.5, muscle: 45.5 },
    { date: "May", weight: 180, bodyfat: 17, muscle: 46 },
    { date: "Jun", weight: 178, bodyfat: 16.5, muscle: 46.5 },
    { date: "Jul", weight: 176, bodyfat: 16, muscle: 47 },
    { date: "Aug", weight: 174, bodyfat: 15.5, muscle: 47.5 },
  ];

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here&apos;s your fitness summary.</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {timeframe === "week" ? "This Week" : timeframe === "month" ? "This Month" : "This Year"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTimeframe("week")}>This Week</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeframe("month")}>This Month</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeframe("year")}>This Year</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { 
            title: "Total Calories", 
            value: "8,543", 
            description: "+12% from last week", 
            icon: Fire, 
            color: "chart-1",
          },
          { 
            title: "Workout Days", 
            value: "5/7", 
            description: "On track to meet goal", 
            icon: Dumbbell, 
            color: "chart-2", 
          },
          { 
            title: "Active Minutes", 
            value: "325", 
            description: "+45 from last week", 
            icon: Clock, 
            color: "chart-3", 
          },
          { 
            title: "Step Count", 
            value: "56,926", 
            description: "8,132 daily average", 
            icon: Activity, 
            color: "chart-4", 
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <div className={`bg-[hsl(var(--${item.color})/0.2)] text-[hsl(var(--${item.color}))] p-2 rounded-full`}>
                  <item.icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <motion.div 
          className="col-span-full lg:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Activity Overview</CardTitle>
              <CardDescription>Your daily activity metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--background))", 
                      borderColor: "hsl(var(--border))",
                      borderRadius: "8px" 
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="calories" 
                    stroke="hsl(var(--chart-1))" 
                    fill="hsl(var(--chart-1)/0.2)" 
                    name="Calories"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="steps" 
                    stroke="hsl(var(--chart-2))" 
                    fill="hsl(var(--chart-2)/0.2)" 
                    name="Steps" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="workoutMin" 
                    stroke="hsl(var(--chart-3))" 
                    fill="hsl(var(--chart-3)/0.2)" 
                    name="Workout Minutes" 
                  />
                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="md:col-span-1 lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Today&apos;s Nutrition</CardTitle>
              <CardDescription>1,874 / 2,200 calories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-6">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={calorieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {calorieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--background))", 
                        borderColor: "hsl(var(--border))",
                        borderRadius: "8px" 
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-4">
                {calorieData.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium">{item.value}g</span>
                    </div>
                    <Progress 
                      value={index === 0 ? 65 : index === 1 ? 45 : 70} 
                      className="h-2" 
                      // indicatorclassName={index === 0 ? "bg-[hsl(var(--chart-1))]" : index === 1 ? "bg-[hsl(var(--chart-2))]" : "bg-[hsl(var(--chart-3))]"}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="col-span-full lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Workout Analysis</CardTitle>
              <CardDescription>Time spent by muscle group</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={workoutData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--background))", 
                      borderColor: "hsl(var(--border))",
                      borderRadius: "8px" 
                    }} 
                  />
                  <Bar 
                    dataKey="time" 
                    name="Minutes" 
                    radius={[4, 4, 0, 0]}
                  >
                    {workoutData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={`hsl(var(--chart-${(index % 5) + 1}))`} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="col-span-full lg:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Health Metrics</CardTitle>
              <CardDescription>6-month progress</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="weight">
                <TabsList className="mb-4">
                  <TabsTrigger value="weight">Weight</TabsTrigger>
                  <TabsTrigger value="bodyfat">Body Fat</TabsTrigger>
                  <TabsTrigger value="muscle">Muscle Mass</TabsTrigger>
                </TabsList>
                <TabsContent value="weight">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={healthMetricsData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--background))", 
                          borderColor: "hsl(var(--border))",
                          borderRadius: "8px" 
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="weight" 
                        stroke="hsl(var(--chart-1))" 
                        strokeWidth={2}
                        dot={{ stroke: 'hsl(var(--chart-1))', strokeWidth: 2, r: 4, fill: 'hsl(var(--background))' }}
                        activeDot={{ stroke: 'hsl(var(--chart-1))', strokeWidth: 2, r: 6, fill: 'hsl(var(--chart-1))' }}
                        name="Weight (lbs)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="bodyfat">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={healthMetricsData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--background))", 
                          borderColor: "hsl(var(--border))",
                          borderRadius: "8px" 
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="bodyfat" 
                        stroke="hsl(var(--chart-2))" 
                        strokeWidth={2}
                        dot={{ stroke: 'hsl(var(--chart-2))', strokeWidth: 2, r: 4, fill: 'hsl(var(--background))' }}
                        activeDot={{ stroke: 'hsl(var(--chart-2))', strokeWidth: 2, r: 6, fill: 'hsl(var(--chart-2))' }}
                        name="Body Fat (%)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="muscle">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={healthMetricsData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--background))", 
                          borderColor: "hsl(var(--border))",
                          borderRadius: "8px" 
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="muscle" 
                        stroke="hsl(var(--chart-3))" 
                        strokeWidth={2}
                        dot={{ stroke: 'hsl(var(--chart-3))', strokeWidth: 2, r: 4, fill: 'hsl(var(--background))' }}
                        activeDot={{ stroke: 'hsl(var(--chart-3))', strokeWidth: 2, r: 6, fill: 'hsl(var(--chart-3))' }}
                        name="Muscle Mass (kg)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Upcoming Workouts</CardTitle>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { day: "Today", time: "6:00 PM", workout: "Upper Body Strength", duration: "45 min" },
                  { day: "Tomorrow", time: "7:30 AM", workout: "HIIT Cardio", duration: "30 min" },
                  { day: "Wed, Aug 18", time: "6:00 PM", workout: "Lower Body Focus", duration: "50 min" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Dumbbell className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{item.workout}</p>
                        <p className="text-xs text-muted-foreground">{item.day} • {item.time}</p>
                      </div>
                    </div>
                    <div className="text-sm">{item.duration}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Achievements</CardTitle>
                <Button variant="outline" size="sm">
                  <Award className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "7-Day Streak", description: "Completed workouts for 7 consecutive days", date: "Today", icon: Fire, color: "chart-1" },
                  { title: "New PR: Bench Press", description: "Increased max weight to 205 lbs", date: "2 days ago", icon: TrendingUp, color: "chart-2" },
                  { title: "10K Steps Club", description: "Reached 10,000 steps for 5 consecutive days", date: "1 week ago", icon: Activity, color: "chart-3" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-[hsl(var(--${item.color})/0.15)] flex items-center justify-center`}>
                        <item.icon className={`h-5 w-5 text-[hsl(var(--${item.color}))]`} />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">{item.date}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}