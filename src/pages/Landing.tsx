import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import { Award, Brain, Clock, Target, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] space-y-20 py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <Logo />
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Evaluate Projects on Potlock
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive AI-powered evaluation platform for assessing projects based on clear goals, 
          realistic timelines, and community benefits.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/project" className="group">
              Start Evaluation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Powered by AI Technology</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <FeatureCard 
            icon={Brain}
            title="AI Analysis"
            description="Advanced AI algorithms analyze project viability and potential"
          />
          <FeatureCard 
            icon={Target}
            title="Smart Goals"
            description="AI-assisted goal setting and milestone tracking"
          />
          <FeatureCard 
            icon={Clock}
            title="Timeline Analysis"
            description="Intelligent timeline assessment and recommendations"
          />
          <FeatureCard 
            icon={Award}
            title="Success Metrics"
            description="Data-driven success metrics and benchmarking"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;