'use client';

import { useState } from "react";
import { title, subtitle } from "@/components/primitives";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { Textarea } from "@heroui/input";
import { Card } from "@heroui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Video, Gift, Zap, AlertCircle } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Spinner } from "@heroui/spinner";

// Form validation schema
const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  experience: z.enum(["beginner", "intermediate", "advanced"], {
    invalid_type_error: "Please select your experience level",
  }),
  interests: z.string().min(3, { message: "Please tell us what you're interested in learning" }),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export default function WaitlistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      experience: undefined,
      interests: "",
    },
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setFormError(null);
    setFormSuccess(null);

    try {
      console.log("Submitting form data:", data);
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response from API:", result);

      if (!response.ok) {
        // Handle validation errors from the server
        if (result.errors) {
          // Show the first error message
          const firstError = Object.values(result.errors)[0] as string[];
          setFormError(firstError[0] || 'Validation failed');
        } else {
          setFormError(result.message || 'Something went wrong. Please try again later.');
        }
      } else {
        // Success! Show success message and reset form
        setFormSuccess(result.message || "You've been added to the waitlist!");
        reset();
      }
    } catch (error) {
      console.error('Error submitting waitlist form:', error);
      setFormError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className={title({ class: "mb-4" })}>Join the Waitlist</h1>
        <p className={subtitle()}>
          Be the first to know when our live video sessions are scheduled
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item}>
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h2 className={title({ size: "sm", class: "mb-4" })}>What to Expect</h2>
              <ul className="space-y-4">
                {[
                  {
                    icon: <Video className="w-5 h-5 text-primary" />,
                    title: "Live Coding Sessions",
                    description: "Watch and learn as we build projects in real-time using AI tools"
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                    title: "Q&A Opportunities",
                    description: "Get your questions answered directly during the session"
                  },
                  {
                    icon: <Gift className="w-5 h-5 text-primary" />,
                    title: "Exclusive Resources",
                    description: "Access to additional materials and code samples"
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-primary" />,
                    title: "Early Access",
                    description: "Be the first to try new features and tools"
                  }
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-default-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-8">
            {formSuccess ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <CheckCircle2 className="w-12 h-12 text-success" />
                </div>
                <h3 className={title({ size: "sm", class: "mb-2" })}>Thank You!</h3>
                <p className="text-default-600 mb-6">{formSuccess}</p>
                <Button 
                  color="primary" 
                  variant="flat" 
                  onClick={() => setFormSuccess(null)}
                >
                  Return to Form
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {formError && (
                  <div className="p-4 bg-danger/10 border border-danger/20 rounded-lg text-danger text-sm flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">There was a problem with your submission</p>
                      <p>{formError}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="name"
                        placeholder="Your name"
                        variant="bordered"
                        isInvalid={!!errors.name}
                        errorMessage={errors.name?.message}
                      />
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        variant="bordered"
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message}
                      />
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">Experience Level</label>
                  <Controller
                    name="experience"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        id="experience"
                        placeholder="Select your experience level"
                        variant="bordered"
                        isInvalid={!!errors.experience}
                        errorMessage={errors.experience?.message}
                      >
                        <SelectItem key="beginner">Beginner - New to coding</SelectItem>
                        <SelectItem key="intermediate">Intermediate - Some coding experience</SelectItem>
                        <SelectItem key="advanced">Advanced - Experienced developer</SelectItem>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="interests" className="text-sm font-medium">What are you most interested in learning?</label>
                  <Controller
                    name="interests"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        id="interests"
                        placeholder="Tell us what topics you're most interested in..."
                        variant="bordered"
                        className="min-h-[100px]"
                        isInvalid={!!errors.interests}
                        errorMessage={errors.interests?.message}
                      />
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  color="primary"
                  className="w-full"
                  size="lg"
                  isDisabled={isSubmitting}
                  startContent={isSubmitting && <Spinner size="sm" color="white" />}
                >
                  {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                </Button>

                <p className="text-center text-default-500 text-sm mt-4">
                  By joining the waitlist, you&apos;ll receive email notifications when new sessions are scheduled. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 