import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import EvaluationForm from '@/components/EvaluationForm';
import ResultsDisplay from '@/components/ResultsDisplay';
import Logo from '@/components/Logo';

const Index = () => {
  const [score, setScore] = React.useState<number | null>(null);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Project Evaluation</h1>
        <EvaluationForm setScore={setScore} />
        {score !== null && <ResultsDisplay score={score} />}
      </div>
      <Toaster />
    </div>
  );
};

export default Index;