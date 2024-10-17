import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from 'sonner';

const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  teamSize: z.number().min(1, "Team size must be at least 1"),
  hasClearGoals: z.boolean(),
  hasRealisticTimeline: z.boolean(),
  hasCommunityBenefit: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

const EvaluationForm = ({ setScore }: { setScore: (score: number) => void }) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      description: "",
      teamSize: 1,
      hasClearGoals: false,
      hasRealisticTimeline: false,
      hasCommunityBenefit: false,
    },
  });

  const onSubmit = (data: FormData) => {
    let score = 0;
    if (data.hasClearGoals) score += 30;
    if (data.hasRealisticTimeline) score += 30;
    if (data.hasCommunityBenefit) score += 40;
    setScore(score);
    toast.success("Evaluation submitted successfully!");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter project name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your project" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="teamSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Size</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasClearGoals"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Has Clear Goals</FormLabel>
                <FormDescription>The project has well-defined objectives and milestones.</FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasRealisticTimeline"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Has Realistic Timeline</FormLabel>
                <FormDescription>The project timeline is achievable and well-planned.</FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasCommunityBenefit"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Has Community Benefit</FormLabel>
                <FormDescription>The project provides clear value to the community.</FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Evaluate Project</Button>
      </form>
    </Form>
  );
};

export default EvaluationForm;