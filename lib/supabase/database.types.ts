export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          fitness_goal: string | null
          height: number | null
          weight: number | null
          date_of_birth: string | null
          gender: string | null
          activity_level: string | null
          profile_image_url: string | null
          plan_type: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          fitness_goal?: string | null
          height?: number | null
          weight?: number | null
          date_of_birth?: string | null
          gender?: string | null
          activity_level?: string | null
          profile_image_url?: string | null
          plan_type?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          fitness_goal?: string | null
          height?: number | null
          weight?: number | null
          date_of_birth?: string | null
          gender?: string | null
          activity_level?: string | null
          profile_image_url?: string | null
          plan_type?: string
          created_at?: string
          updated_at?: string
        }
      }
      exercises: {
        Row: {
          id: string
          name: string
          description: string | null
          muscle_group: string | null
          difficulty: string | null
          instructions: string | null
          image_url: string | null
          video_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          muscle_group?: string | null
          difficulty?: string | null
          instructions?: string | null
          image_url?: string | null
          video_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          muscle_group?: string | null
          difficulty?: string | null
          instructions?: string | null
          image_url?: string | null
          video_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      workouts: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          duration: number | null
          calories_burned: number | null
          workout_date: string
          status: string
          is_template: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          duration?: number | null
          calories_burned?: number | null
          workout_date?: string
          status?: string
          is_template?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          duration?: number | null
          calories_burned?: number | null
          workout_date?: string
          status?: string
          is_template?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      workout_exercises: {
        Row: {
          id: string
          workout_id: string
          exercise_id: string
          sets: number | null
          reps: number | null
          weight: number | null
          duration: number | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          workout_id: string
          exercise_id: string
          sets?: number | null
          reps?: number | null
          weight?: number | null
          duration?: number | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          workout_id?: string
          exercise_id?: string
          sets?: number | null
          reps?: number | null
          weight?: number | null
          duration?: number | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      nutrition_logs: {
        Row: {
          id: string
          user_id: string
          food_name: string
          calories: number | null
          protein: number | null
          carbs: number | null
          fat: number | null
          meal_type: string | null
          serving_size: string | null
          log_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          food_name: string
          calories?: number | null
          protein?: number | null
          carbs?: number | null
          fat?: number | null
          meal_type?: string | null
          serving_size?: string | null
          log_date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          food_name?: string
          calories?: number | null
          protein?: number | null
          carbs?: number | null
          fat?: number | null
          meal_type?: string | null
          serving_size?: string | null
          log_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      health_metrics: {
        Row: {
          id: string
          user_id: string
          weight: number | null
          body_fat: number | null
          muscle_mass: number | null
          water_percentage: number | null
          bone_mass: number | null
          bmi: number | null
          resting_heart_rate: number | null
          steps: number | null
          sleep_hours: number | null
          stress_level: number | null
          metric_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          weight?: number | null
          body_fat?: number | null
          muscle_mass?: number | null
          water_percentage?: number | null
          bone_mass?: number | null
          bmi?: number | null
          resting_heart_rate?: number | null
          steps?: number | null
          sleep_hours?: number | null
          stress_level?: number | null
          metric_date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          weight?: number | null
          body_fat?: number | null
          muscle_mass?: number | null
          water_percentage?: number | null
          bone_mass?: number | null
          bmi?: number | null
          resting_heart_rate?: number | null
          steps?: number | null
          sleep_hours?: number | null
          stress_level?: number | null
          metric_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      achievements: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          badge_image_url: string | null
          achievement_date: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          badge_image_url?: string | null
          achievement_date?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          badge_image_url?: string | null
          achievement_date?: string
          created_at?: string
        }
      }
    }
  }
}