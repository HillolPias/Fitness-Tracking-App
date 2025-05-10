"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Bell,
  CreditCard,
  LogOut,
  Camera,
  Shield,
  Smartphone
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and settings</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 rounded-full"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Hillol Das Pias</h2>
                <p className="text-muted-foreground">Premium Member since March 2024</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue="Hillol Das Pias" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="hillol4958@gmail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" defaultValue="+8801738206419" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Rajshahi, Bangladesh" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                    defaultValue="Fitness enthusiast focused on strength training and nutrition. Working towards my first marathon."
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">Authenticator App</p>
                      <p className="text-sm text-muted-foreground">
                        Use an authenticator app to generate one-time codes.
                      </p>
                    </div>
                    <Button variant="outline">Setup</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">SMS Recovery</p>
                      <p className="text-sm text-muted-foreground">
                        Use your phone number as a backup method.
                      </p>
                    </div>
                    <Button variant="outline">Add Phone</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Workout Reminders",
                    description: "Get notified about upcoming scheduled workouts"
                  },
                  {
                    title: "Achievement Alerts",
                    description: "Notifications when you reach fitness milestones"
                  },
                  {
                    title: "Nutrition Reminders",
                    description: "Daily reminders to log your meals and water intake"
                  },
                  {
                    title: "Progress Updates",
                    description: "Weekly summary of your fitness progress"
                  }
                ].map((notification, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm">Email</Button>
                      <Button variant="outline" size="sm">Push</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Premium Plan</p>
                        <p className="text-sm text-muted-foreground">
                          Billed annually • $99/year
                        </p>
                      </div>
                      <Button>Change Plan</Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Your next billing date is April 1, 2025
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-muted p-2">
                          <CreditCard className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">•••• 4242</p>
                          <p className="text-sm text-muted-foreground">
                            Expires 12/25
                          </p>
                        </div>
                      </div>
                      <Button variant="outline">Edit</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        date: "Mar 1, 2024",
                        amount: "$99.00",
                        status: "Paid",
                        description: "Premium Plan - Annual"
                      },
                      {
                        date: "Mar 1, 2023",
                        amount: "$99.00",
                        status: "Paid",
                        description: "Premium Plan - Annual"
                      }
                    ].map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{transaction.date}</p>
                          <p className="text-sm text-muted-foreground">
                            {transaction.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{transaction.amount}</p>
                          <p className="text-sm text-green-500">{transaction.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}