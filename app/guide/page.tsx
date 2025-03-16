import { title, subtitle } from "@/components/primitives";
import { Card } from "@heroui/card";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Clock, Code2, Cpu, ArrowRight } from "lucide-react";

export default function GuidesPage() {
  return (
    <div className="container mx-auto py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className={title({ class: "mb-4" })}>
          Project Guides
        </h1>
        <p className={subtitle({ class: "max-w-2xl mx-auto" })}>
          Step-by-step guides to build amazing projects with AI tools
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Viral Tweet Generator Guide */}
        <Card className="p-6 space-y-6">
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

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">You'll Learn:</h3>
              <ul className="list-disc list-inside text-sm text-default-600">
                <li>AI Integration with Groq and OpenRouter</li>
                <li>Real-time News API Integration</li>
                <li>Modern UI Development with HeroUI</li>
                <li>Analytics and OpenGraph Implementation</li>
              </ul>
            </div>

            <Link 
              href="/guide/viral-tweet-generator"
              className={buttonStyles({
                color: "primary",
                variant: "flat",
                className: "w-full justify-between"
              })}
            >
              View Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>

        {/* Coming Soon Cards */}
        {[
          {
            title: "URL Shortener",
            description: "Build a modern URL shortening service with custom domains, analytics tracking, and QR code generation.",
            duration: "1.5 Hours",
            coding: "15% Coding",
            comingSoon: true
          },
          {
            title: "Twitter Bot",
            description: "Create an AI-powered Twitter bot that automatically engages with trending topics and generates relevant content.",
            duration: "2 Hours",
            coding: "20% Coding",
            comingSoon: true
          }
        ].map((guide, index) => (
          <Card key={index} className="p-6 space-y-6 opacity-75">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className={title({ size: "sm", class: "mb-2" })}>{guide.title}</h2>
                <span className="text-xs bg-default-100 px-2 py-1 rounded-full">Coming Soon</span>
              </div>
              <p className="text-default-600">
                {guide.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-default-100 px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                <span>{guide.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-default-100 px-3 py-1 rounded-full text-sm">
                <Code2 className="w-4 h-4" />
                <span>{guide.coding}</span>
              </div>
            </div>

            <button 
              disabled
              className={buttonStyles({
                color: "primary",
                variant: "flat",
                className: "w-full justify-between opacity-50 cursor-not-allowed"
              })}
            >
              Coming Soon
              <ArrowRight className="w-4 h-4" />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
} 