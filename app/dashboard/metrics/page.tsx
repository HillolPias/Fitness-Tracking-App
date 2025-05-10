"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function MetricsPage() {
  const weightData = [
    { date: "Mar 1", value: 185 },
    { date: "Mar 8", value: 183 },
    { date: "Mar 15", value: 182 },
    { date: "Mar 22", value: 180 },
    { date: "Mar 29", value: 179 },
    { date: "Apr 5", value: 178 },
    { date: "Apr 12", value: 176 }
  ];

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Health Metrics</h1>
          <p className="text-muted-foreground">Track your body measurements and health data</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Log Metrics
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          { 
            title: "Weight",
            value: "176 lbs",
            change: "-2.3 lbs",
            trend: "down",
            period: "from last month"
          },
          {
            title: "Body Fat",
            value: "15.5%",
            change: "-0.8%",
            trend: "down",
            period: "from last month"
          },
          {
            title: "Muscle Mass",
            value: "65.2 kg",
            change: "+1.1 kg",
            trend: "up",
            period: "from last month"
          },
          {
            title: "BMI",
            value: "24.8",
            change: "-0.4",
            trend: "down",
            period: "from last month"
          }
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                {metric.trend === "up" ? (
                  <ArrowUp className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-500" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">
                  {metric.change} {metric.period}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Weight Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weightData}>
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
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ stroke: "hsl(var(--primary))", strokeWidth: 2, r: 4, fill: "hsl(var(--background))" }}
                    activeDot={{ stroke: "hsl(var(--primary))", strokeWidth: 2, r: 6, fill: "hsl(var(--primary))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Body Measurements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { part: "Chest", current: "42 in", previous: "43 in" },
                { part: "Waist", current: "34 in", previous: "36 in" },
                { part: "Hips", current: "40 in", previous: "41 in" },
                { part: "Biceps", current: "15 in", previous: "14.5 in" },
                { part: "Thighs", current: "23 in", previous: "22.5 in" }
              ].map((measurement, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{measurement.part}</span>
                  <div className="text-right">
                    <div className="font-medium">{measurement.current}</div>
                    <div className="text-sm text-muted-foreground">
                      Previous: {measurement.previous}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Resting Heart Rate", value: "68 bpm", status: "Normal" },
                { name: "Blood Pressure", value: "120/80", status: "Normal" },
                { name: "Sleep Quality", value: "7.5 hrs", status: "Good" },
                { name: "Stress Level", value: "Low", status: "Good" },
                { name: "Recovery Score", value: "8.5/10", status: "Excellent" }
              ].map((indicator, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{indicator.name}</span>
                  <div className="text-right">
                    <div className="font-medium">{indicator.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {indicator.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}