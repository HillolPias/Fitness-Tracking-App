/*
  # Create users table and related tables for the Health & Fitness App

  1. New Tables
    - `user_profiles` - Stores user profile information
    - `workouts` - Tracks workout sessions
    - `exercises` - Library of exercises
    - `workout_exercises` - Junction table connecting workouts with exercises 
    - `nutrition_logs` - Records food intake
    - `health_metrics` - Tracks health measurements over time
    - `achievements` - Stores user achievements and badges

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
*/

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  fitness_goal TEXT,
  height DECIMAL,
  weight DECIMAL,
  date_of_birth DATE,
  gender TEXT,
  activity_level TEXT,
  profile_image_url TEXT,
  plan_type TEXT DEFAULT 'free',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create exercises table
CREATE TABLE IF NOT EXISTS exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  muscle_group TEXT,
  difficulty TEXT,
  instructions TEXT,
  image_url TEXT,
  video_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create workouts table
CREATE TABLE IF NOT EXISTS workouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  duration INTEGER,
  calories_burned INTEGER,
  workout_date TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'planned',
  is_template BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create workout_exercises junction table
CREATE TABLE IF NOT EXISTS workout_exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workout_id UUID REFERENCES workouts(id) ON DELETE CASCADE,
  exercise_id UUID REFERENCES exercises(id) ON DELETE CASCADE,
  sets INTEGER,
  reps INTEGER,
  weight DECIMAL,
  duration INTEGER,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create nutrition_logs table
CREATE TABLE IF NOT EXISTS nutrition_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
  food_name TEXT NOT NULL,
  calories INTEGER,
  protein DECIMAL,
  carbs DECIMAL,
  fat DECIMAL,
  meal_type TEXT,
  serving_size TEXT,
  log_date TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create health_metrics table
CREATE TABLE IF NOT EXISTS health_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
  weight DECIMAL,
  body_fat DECIMAL,
  muscle_mass DECIMAL,
  water_percentage DECIMAL,
  bone_mass DECIMAL,
  bmi DECIMAL,
  resting_heart_rate INTEGER,
  steps INTEGER,
  sleep_hours DECIMAL,
  stress_level INTEGER,
  metric_date TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create achievements table
CREATE TABLE IF NOT EXISTS achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  badge_image_url TEXT,
  achievement_date TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE workouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE workout_exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE nutrition_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- Create policies for user_profiles
CREATE POLICY "Users can view their own profile"
  ON user_profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON user_profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create policies for exercises (public read, admin insert/update)
CREATE POLICY "Exercises are viewable by all authenticated users"
  ON exercises
  FOR SELECT
  USING (true);

-- Create policies for workouts
CREATE POLICY "Users can view their own workouts"
  ON workouts
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own workouts"
  ON workouts
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own workouts"
  ON workouts
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own workouts"
  ON workouts
  FOR DELETE
  USING (auth.uid() = user_id);

-- Create policies for workout_exercises
CREATE POLICY "Users can view their own workout exercises"
  ON workout_exercises
  FOR SELECT
  USING (auth.uid() = (SELECT user_id FROM workouts WHERE id = workout_id));

CREATE POLICY "Users can create their own workout exercises"
  ON workout_exercises
  FOR INSERT
  WITH CHECK (auth.uid() = (SELECT user_id FROM workouts WHERE id = workout_id));

CREATE POLICY "Users can update their own workout exercises"
  ON workout_exercises
  FOR UPDATE
  USING (auth.uid() = (SELECT user_id FROM workouts WHERE id = workout_id));

CREATE POLICY "Users can delete their own workout exercises"
  ON workout_exercises
  FOR DELETE
  USING (auth.uid() = (SELECT user_id FROM workouts WHERE id = workout_id));

-- Create policies for nutrition_logs
CREATE POLICY "Users can view their own nutrition logs"
  ON nutrition_logs
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own nutrition logs"
  ON nutrition_logs
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own nutrition logs"
  ON nutrition_logs
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own nutrition logs"
  ON nutrition_logs
  FOR DELETE
  USING (auth.uid() = user_id);

-- Create policies for health_metrics
CREATE POLICY "Users can view their own health metrics"
  ON health_metrics
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own health metrics"
  ON health_metrics
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own health metrics"
  ON health_metrics
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own health metrics"
  ON health_metrics
  FOR DELETE
  USING (auth.uid() = user_id);

-- Create policies for achievements
CREATE POLICY "Users can view their own achievements"
  ON achievements
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own achievements"
  ON achievements
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);