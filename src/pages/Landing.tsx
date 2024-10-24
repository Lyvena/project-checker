import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <Logo />
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Evaluate Projects on Potlock
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A comprehensive evaluation platform for assessing projects based on clear goals, 
          realistic timelines, and community benefits.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/project">Start Evaluation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;