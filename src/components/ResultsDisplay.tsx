import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ResultsDisplay = ({ score }: { score: number }) => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Evaluation Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Score:</span>
            <span className="text-2xl font-bold">{score}/100</span>
          </div>
          <Progress value={score} className="w-full" />
          <p className="text-sm text-gray-600">
            {score >= 70 ? "Great job! Your project shows promise." :
             score >= 40 ? "Good start, but there's room for improvement." :
             "Consider revising your project to better meet the criteria."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;