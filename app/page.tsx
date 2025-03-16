import { title, subtitle } from "@/components/primitives";
import { Card } from "@heroui/card";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Clock, Code2, Cpu, ArrowRight, Sparkles, Brain, Rocket, Terminal, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-default-100 dark:from-background dark:to-default-50 rounded-b-[40px]">
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className={title({ size: "lg", class: "inline-block" })}>
              Grow with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Sahaib
              </span>
            </h1>
            <p className={subtitle({ class: "max-w-2xl mx-auto" })}>
              Learn to build modern AI-powered applications with step-by-step guides.
              No heavy coding required - just your creativity and our AI tools.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/guide"
                className={buttonStyles({
                  size: "lg",
                  color: "primary",
                  className: "font-medium"
                })}
              >
                Start Learning
              </Link>
              <Link
                href="https://github.com/sahaib/grow-with-sahaib"
                target="_blank"
                className={buttonStyles({
                  size: "lg",
                  variant: "bordered",
                  className: "font-medium"
                })}
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={title({ class: "mb-4" })}>Why Learn With Us?</h2>
            <p className={subtitle()}>
              Build real-world projects with modern tools and AI assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI-First Approach",
                description: "Learn to leverage AI tools like Cursor IDE and ChatGPT to accelerate your development process."
              },
              {
                icon: <Terminal className="w-8 h-8" />,
                title: "Minimal Coding",
                description: "Focus on concepts and creativity with only 10-20% actual coding required."
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Production Ready",
                description: "Build projects that are ready to deploy and share with the world."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Driven",
                description: "Join live sessions and get your questions answered in real-time."
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Modern Stack",
                description: "Learn the latest technologies like Next.js, HeroUI, and various AI services."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Quick Results",
                description: "Complete projects in 1-2 hours and see immediate results."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                    {feature.icon}
                  </div>
                  <h3 className={title({ size: "sm" })}>{feature.title}</h3>
                  <p className="text-default-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Guide Section */}
      <section className="py-20 bg-default-50 rounded-[40px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={title({ class: "mb-4" })}>Latest Guide</h2>
            <p className={subtitle()}>
              Start with our newest project guide
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <Card className="p-6 space-y-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <h2 className={title({ size: "sm", class: "mb-2" })}>Viral Tweet Generator</h2>
                <p className="text-default-600">
                  Build an AI-powered tweet generator that creates viral content for tech and AI audiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-default-100 px-3 py-1 rounded-full text-sm">
                  <Clock className="w-4 h-4" />
                  <span>1 Hour</span>
                </div>
                <div className="flex items-center gap-2 bg-default-100 px-3 py-1 rounded-full text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>10% Coding</span>
                </div>
                <div className="flex items-center gap-2 bg-default-100 px-3 py-1 rounded-full text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>AI-Powered</span>
                </div>
              </div>

              <Link 
                href="/guide/viral-tweet-generator"
                className={buttonStyles({
                  color: "primary",
                  variant: "flat",
                  className: "w-full justify-between"
                })}
              >
                Start Building
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-12 text-center space-y-8 rounded-2xl hover:shadow-lg transition-shadow">
            <h2 className={title({ class: "mb-4" })}>Ready to Start Building?</h2>
            <p className={subtitle()}>
              Join our waitlist to get notified about new guides and live sessions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/waitlist"
                className={buttonStyles({
                  size: "lg",
                  color: "primary",
                  className: "font-medium"
                })}
              >
                Join Waitlist
              </Link>
              <Link
                href="/guide"
                className={buttonStyles({
                  size: "lg",
                  variant: "bordered",
                  className: "font-medium"
                })}
              >
                Browse Guides
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
