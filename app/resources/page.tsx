import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";

export default function ResourcesPage() {
  const resources = [
    {
      name: "HeroUI",
      description: "A beautiful, fast and modern React UI library used for building the interface.",
      url: "https://www.heroui.com/",
      category: "UI Framework"
    },
    {
      name: "Groq",
      description: "Primary AI provider with fast inference speeds for generating tweets.",
      url: "https://groq.com/",
      category: "AI Provider"
    },
    {
      name: "OpenRouter",
      description: "Fallback AI provider that offers access to multiple models including Llama 3.",
      url: "https://openrouter.ai/",
      category: "AI Provider"
    },
    {
      name: "NewsAPI",
      description: "API for fetching current news headlines to use as inspiration for tweets.",
      url: "https://newsapi.org/",
      category: "Content API"
    },
    {
      name: "Lucide React",
      description: "Beautiful, consistent icon set with over 1000 icons for your React projects.",
      url: "https://lucide.dev/",
      category: "Icons"
    },
    {
      name: "Vercel",
      description: "Platform for deploying and hosting web applications with ease.",
      url: "https://vercel.com/",
      category: "Deployment"
    },
    {
      name: "Ko-fi",
      description: "Platform for receiving support and donations from your audience.",
      url: "https://ko-fi.com/",
      category: "Support"
    },
    {
      name: "GitHub",
      description: "Platform for hosting and collaborating on code repositories.",
      url: "https://github.com/",
      category: "Code Repository"
    },
    {
      name: "Cursor IDE",
      description: "AI-powered code editor that helps you write code faster.",
      url: "https://cursor.sh/",
      category: "Development Tool"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className={title({ class: "mb-6" })}>Resources</h1>
      <p className={subtitle({ class: "mb-8" })}>
        Tools and services used in the Viral Tweet Generator project
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-default-50 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col h-full">
              <div className="mb-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/20 text-primary">
                  {resource.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{resource.name}</h2>
              <p className="text-default-600 mb-4 flex-grow">{resource.description}</p>
              <Link
                href={resource.url}
                isExternal
                className={buttonStyles({
                  color: "primary",
                  variant: "flat",
                  radius: "md",
                  size: "sm",
                  class: "w-full justify-center"
                })}
              >
                Visit {resource.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-default-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Additional Learning Resources</h2>
        <ul className="space-y-3">
          <li>
            <Link href="https://github.com/sahaib/Viral-Tweet-Generator" isExternal className="text-primary hover:underline">
              Viral Tweet Generator GitHub Repository
            </Link>
            <p className="text-sm text-default-600 mt-1">
              Complete source code for the project discussed in the guide.
            </p>
          </li>
          <li>
            <Link href="https://tweetsgen.sahaibsingh.com/" isExternal className="text-primary hover:underline">
              Live Demo of Viral Tweet Generator
            </Link>
            <p className="text-sm text-default-600 mt-1">
              See the finished product in action.
            </p>
          </li>
          <li>
            <Link href="https://www.heroui.com/docs/guide/installation" isExternal className="text-primary hover:underline">
              HeroUI Documentation
            </Link>
            <p className="text-sm text-default-600 mt-1">
              Learn how to use HeroUI components for your projects.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/guide"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "bordered",
            class: "mr-4"
          })}
        >
          Back to Guide
        </Link>
        <Link
          href="/waitlist"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Join Waitlist
        </Link>
      </div>
    </div>
  );
} 