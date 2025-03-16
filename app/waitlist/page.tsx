'use client';

import { title, subtitle } from "@/components/primitives";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { Textarea } from "@heroui/input";
import { Card } from "@heroui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Video, Gift, Zap } from "lucide-react";

export default function WaitlistPage() {
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
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  placeholder="Your name"
                  variant="bordered"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  variant="bordered"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Experience Level</label>
                <Select
                  placeholder="Select your experience level"
                  variant="bordered"
                >
                  <SelectItem key="beginner">Beginner - New to coding</SelectItem>
                  <SelectItem key="intermediate">Intermediate - Some coding experience</SelectItem>
                  <SelectItem key="advanced">Advanced - Experienced developer</SelectItem>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">What are you most interested in learning?</label>
                <Textarea
                  placeholder="Tell us what topics you're most interested in..."
                  variant="bordered"
                  className="min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                color="primary"
                className="w-full"
                size="lg"
              >
                Join Waitlist
              </Button>

              <p className="text-center text-default-500 text-sm mt-4">
                By joining the waitlist, you'll receive email notifications when new sessions are scheduled. We respect your privacy and will never share your information.
              </p>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 