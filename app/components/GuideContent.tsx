'use client';

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import { Card } from "@heroui/card";
import { Tabs, Tab } from "@heroui/tabs";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Progress } from "@heroui/progress";
import { Chip } from "@heroui/chip";
import { CodeBlock } from "@/app/components/ui/CodeBlock";
import { 
  BookOpen, 
  Code2, 
  Cpu, 
  FileJson, 
  AlertTriangle, 
  BarChart3, 
  MessageSquarePlus, 
  Share2, 
  Rocket,
  GraduationCap,
  Wrench,
  BookMarked,
  ExternalLink,
  Clock,
  Key
} from "lucide-react";

export default function GuideContent() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className={title({ class: "mb-4" })}>
          Build a Viral Tweet Generator
        </h1>
        <p className={subtitle({ class: "max-w-2xl mx-auto" })}>
          A step-by-step guide for no/low-code creators using AI tools
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 bg-default-100 px-4 py-2 rounded-full">
            <Clock className="w-4 h-4" />
            <span>1 Hour</span>
          </div>
          <div className="flex items-center gap-2 bg-default-100 px-4 py-2 rounded-full">
            <Code2 className="w-4 h-4" />
            <span>10% Coding</span>
          </div>
          <div className="flex items-center gap-2 bg-default-100 px-4 py-2 rounded-full">
            <Cpu className="w-4 h-4" />
            <span>AI-Powered</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Table of Contents Sidebar */}
        <div className="col-span-12 lg:col-span-3">
          <Card className="sticky top-20">
            <div className="p-4 border-b border-default-100">
              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Contents</h3>
              </div>
            </div>
            <div className="p-4">
              <nav className="space-y-1">
                {[
                  { icon: BookOpen, text: "Introduction", href: "#introduction" },
                  { icon: Wrench, text: "Prerequisites", href: "#prerequisites" },
                  { icon: Rocket, text: "Project Setup", href: "#step-1-project-setup" },
                  { icon: Code2, text: "Tweet Generator", href: "#step-2-creating-the-tweet-generator" },
                  { icon: Cpu, text: "AI Services", href: "#step-3-setting-up-ai-services" },
                  { icon: FileJson, text: "Custom Elements", href: "#step-4-adding-custom-elements" },
                  { icon: Share2, text: "News API", href: "#step-5-adding-news-api" },
                  { icon: AlertTriangle, text: "Disclaimer", href: "#step-6-adding-disclaimer" },
                  { icon: BarChart3, text: "Analytics", href: "#step-7-setting-up-analytics" },
                  { icon: MessageSquarePlus, text: "Second Generator", href: "#step-8-creating-second-generator" },
                  { icon: Rocket, text: "Deployment", href: "#step-9-preparing-for-deployment" },
                  { icon: Share2, text: "OpenGraph", href: "#step-10-creating-opengraph" },
                  { icon: GraduationCap, text: "Resources", href: "#resources" }
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-default-100 transition-colors w-full text-left"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.text}</span>
                  </button>
                ))}
              </nav>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="col-span-12 lg:col-span-9">
          <Card>
            <div className="p-6">
              <Tabs aria-label="Guide sections" size="lg" color="primary">
                <Tab key="overview" title="Overview">
                  <section id="introduction" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Introduction</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        This guide will walk you through building a Viral Tweet Generator app using AI integration in less than one hour. We'll be using AI tools to do most of the heavy lifting, making this perfect for creators with minimal coding experience. The entire project was developed with only 10% actual coding, as everything was accomplished using Cursor IDE with AI assistance.
                      </p>
                      <div className="bg-default-50 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold mb-2">Project Links</h4>
                        <div className="flex flex-col gap-2">
                          <Link 
                            href="https://tweetsgen.sahaibsingh.com/" 
                            isExternal 
                            className="flex items-center gap-2 text-primary"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </Link>
                          <Link 
                            href="https://github.com/sahaib/Viral-Tweet-Generator" 
                            isExternal 
                            className="flex items-center gap-2 text-primary"
                          >
                            <ExternalLink className="w-4 h-4" />
                            GitHub Repository
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab>

                <Tab key="setup" title="Setup">
                  <section id="prerequisites" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Prerequisites</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <Accordion variant="splitted">
                        <AccordionItem
                          key="1"
                          aria-label="Accounts Required"
                          title="Required Accounts"
                          startContent={<Wrench className="text-primary" />}
                        >
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Chip color="primary" variant="flat">GitHub</Chip>
                              <span>For code repository hosting</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Chip color="primary" variant="flat">Vercel</Chip>
                              <span>For deployment (free tier works fine)</span>
                            </li>
                          </ul>
                        </AccordionItem>

                        <AccordionItem
                          key="2"
                          aria-label="API Keys"
                          title="Required API Keys"
                          startContent={<Key className="text-primary" />}
                        >
                          <ul className="space-y-4">
                            <li>
                              <div className="flex items-center gap-2 mb-1">
                                <Chip color="success" variant="flat">Groq</Chip>
                                <span className="text-sm text-default-500">(Primary AI provider)</span>
                              </div>
                              <Link href="https://groq.com/" isExternal className="text-primary text-sm">
                                Get API Key →
                              </Link>
                            </li>
                            <li>
                              <div className="flex items-center gap-2 mb-1">
                                <Chip color="warning" variant="flat">OpenRouter</Chip>
                                <span className="text-sm text-default-500">(Fallback AI provider)</span>
                              </div>
                              <Link href="https://openrouter.ai/" isExternal className="text-primary text-sm">
                                Get API Key →
                              </Link>
                            </li>
                            <li>
                              <div className="flex items-center gap-2 mb-1">
                                <Chip color="secondary" variant="flat">NewsAPI</Chip>
                                <span className="text-sm text-default-500">(For news integration)</span>
                              </div>
                              <Link href="https://newsapi.org/" isExternal className="text-primary text-sm">
                                Get API Key →
                              </Link>
                            </li>
                          </ul>
                        </AccordionItem>

                        <AccordionItem
                          key="3"
                          aria-label="Development Tools"
                          title="Development Tools"
                          startContent={<Code2 className="text-primary" />}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Chip color="primary" variant="flat">Cursor IDE</Chip>
                              <span>or any other AI-powered code editor</span>
                            </div>
                            <Link href="https://cursor.sh/" isExternal className="text-primary text-sm">
                              Download Cursor IDE →
                            </Link>
                          </div>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </section>
                </Tab>

                <Tab key="steps" title="Step-by-Step Guide">
                  <section id="step-1-project-setup" className="mb-10">
                    <div className="mb-6">
                      <h2 className={title({ size: "sm", class: "mb-2" })}>Step 1: Project Setup</h2>
                      <p className="text-default-600">Start by setting up a new project with HeroUI</p>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="bg-default-50 p-4 rounded-lg my-4">
                        <h4 className="font-semibold mb-2">Initial Setup Steps</h4>
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Create an empty folder for your project</li>
                          <li>Follow the setup instructions at <Link href="https://www.heroui.com/docs/guide/installation" isExternal>HeroUI Installation Guide</Link></li>
                        </ol>
                      </div>
                      <div className="relative">
                        <CodeBlock
                          code={`# Create a new project folder
mkdir viral-tweet-generator
cd viral-tweet-generator

# Follow HeroUI setup instructions
# (This will install all necessary dependencies)`}
                          language="bash"
                        />
                      </div>
                    </div>
                  </section>

                  <section id="step-2-creating-the-tweet-generator" className="mb-10">
                    <div className="mb-6">
                      <h2 className={title({ size: "sm", class: "mb-2" })}>Step 2: Creating the Tweet Generator with AI Prompting</h2>
                      <p className="text-default-600">Use this exact prompt in your AI-powered code editor (like Cursor IDE) to generate the initial app structure</p>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="relative">
                        <CodeBlock
                          code={`Let's create a new tweet generation app in this project in which i have just done the setup using https://www.heroui.com/docs/guide/installation.
This tweet generator should use AI via Groq setup and fallback to Openrouter model meta-llama/llama-3.3-70b-instruct:free

Role: You're a viral content strategist for tech and AI. Create high-engagement tweets that blend curiosity, urgency, and debate.

Context:
Audience: Tech founders, developers, AI enthusiasts.
Trends: Focus on cutting-edge tools, ethical debates, or disruptive predictions.
Tone: Bold, conversational, slightly provocative. Use humor, analogies, and cliffhangers.

Key Elements to Include:
- Hook: Start with a shocking stat, analogy, or question
- Bold Angle: Add a contrarian take, prediction, or comparison
- Engagement Trigger: End with a debate question, poll, or FOMO tease
- Viral Structure: Short lines, emoji breaks (🚀/🤯/💡), italics for emphasis

Examples for Inspiration:
"Google just killed 100 AI startups with ONE update. Here's how to survive…"
"AI can now clone your voice in 3 seconds. Why is no one panicking?"
"Saying 'AI won't take your job' is like saying 'the internet is a fad' in 1995. Fight me."

We need a really good GUI for this based the ui library that we have already setup which is heroUI.
We even have API from newsapi.org so we can use that for sourcing news.`}
                          language="markdown"
                        />
                      </div>
                    </div>
                  </section>

                  <section id="step-3-setting-up-ai-services" className="mb-10">
                    <div className="mb-6">
                      <h2 className={title({ size: "sm", class: "mb-2" })}>Step 3: Setting Up AI Services</h2>
                      <p className="text-default-600">Configure the AI providers for tweet generation</p>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Groq Setup</h3>
                          <ol className="list-decimal list-inside space-y-2">
                            <li>Sign up for an account at <Link href="https://groq.com/" isExternal>Groq</Link></li>
                            <li>Generate an API key from your dashboard</li>
                            <li>Add the API key to your environment variables</li>
                          </ol>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">OpenRouter Setup</h3>
                          <ol className="list-decimal list-inside space-y-2">
                            <li>Sign up at <Link href="https://openrouter.ai/" isExternal>OpenRouter</Link></li>
                            <li>Generate an API key</li>
                            <li>We'll specifically use the meta-llama/llama-3.3-70b-instruct:free model</li>
                            <li>Add the API key to your environment variables</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="step-4-adding-custom-elements" className="mb-10">
                    <div className="mb-6">
                      <h2 className={title({ size: "sm", class: "mb-2" })}>Step 4: Adding Custom Elements</h2>
                      <p className="text-default-600">Customize the UI with sponsor button and logo changes</p>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Sponsor Button Prompt</h3>
                          <div className="relative">
                            <CodeBlock
                              code={`please replace the sponsor button in the navigation with this:

<iframe 
  id="kofiframe" 
  src="https://ko-fi.com/sahaib/?hidefeed=true&widget=true&embed=true&preview=true" 
  style="border:none;width:100%;padding:4px;background:#f9f9f9;" 
  height="712" 
  title="sahaib"
></iframe>`}
                              language="html"
                            />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2">Logo Customization Prompt</h3>
                          <div className="relative">
                            <CodeBlock
                              code={`for logo please use this from lucid icons:

import { Feather } from 'lucide-react';

const App = () => {
  return (
    <Feather />
  );
};

export default App;

and even in the support button add this icon:

import { HeartHandshake } from 'lucide-react';`}
                              language="typescript"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="step-5-adding-news-api" className="mb-10">
                    <div className="mb-6">
                      <h2 className={title({ size: "sm", class: "mb-2" })}>Step 5: Adding News API Integration</h2>
                      <p className="text-default-600">Integrate real-time news for tweet inspiration</p>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>To add news integration, use NewsAPI.org:</p>
                      <ol className="list-decimal list-inside space-y-2 mb-4">
                        <li>Sign up for an API key at <Link href="https://newsapi.org/" isExternal>NewsAPI.org</Link></li>
                      </ol>
                      <div className="relative">
                        <CodeBlock
                          code={`Let's integrate the News API from newsapi.org to provide current tech and AI news that users can use as inspiration for their tweets. We'll need to:

1. Fetch recent headlines
2. Display them in a clean UI component
3. Allow users to easily use them as a basis for tweet generation`}
                          language="markdown"
                        />
                      </div>
                    </div>
                  </section>

                  <section id="step-6-adding-disclaimer" className="mb-10">
                    <div className="mb-6">
                      <h2 className={title({ size: "sm", class: "mb-2" })}>Step 6: Adding Disclaimer</h2>
                      <p className="text-default-600">Add important usage guidelines and disclaimers</p>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="relative">
                        <CodeBlock
                          code="add a disclaimer to always fact check the news and refer the source link for getting the right content this is just a tweet generation tool not news sourcing."
                          language="markdown"
                        />
                      </div>
                    </div>
                  </section>

                  <section id="step-7-setting-up-analytics" className="mb-10">
                    <div className="mb-6">
                      <h2 className={title({ size: "sm", class: "mb-2" })}>Step 7: Setting Up Analytics</h2>
                      <p className="text-default-600">Track usage and improve the generator</p>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="relative">
                        <CodeBlock
                          code="let's integrate Vercel Analytics to this app especially for the tweet generator!"
                          language="markdown"
                        />
                      </div>
                    </div>
                  </section>

                  <section id="step-8-creating-second-generator" className="mb-10">
                    <div className="mb-6">
                      <h2 className={title({ size: "sm", class: "mb-2" })}>Step 8: Creating Second Tweet Generator</h2>
                      <p className="text-default-600">Add an alternative tweet generation style</p>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="relative">
                        <CodeBlock
                          code={`let's add a new section of tweet generator using AI of course but a bit of a different page or section which can generate tweets like this:
"Social Media will have you sitting on the toilet for 145 mins 😭"
Use either groq or open router as fallback..
add a fancy good attractive UI!`}
                          language="markdown"
                        />
                      </div>
                    </div>
                  </section>

                  <section id="step-9-preparing-for-deployment" className="mb-10">
                    <div className="mb-6">
                      <h2 className={title({ size: "sm", class: "mb-2" })}>Step 9: Preparing for Deployment</h2>
                      <p className="text-default-600">Get your app ready for production</p>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="relative">
                        <CodeBlock
                          code="now we are going to deploy the app to this git (which you need to do) and then it'll automatically get deployed to vercel, please prepare the app accordingly and make it secure!"
                          language="markdown"
                        />
                      </div>
                    </div>
                  </section>

                  <section id="step-10-creating-opengraph" className="mb-10">
                    <div className="mb-6">
                      <h2 className={title({ size: "sm", class: "mb-2" })}>Step 10: Creating OpenGraph Preview</h2>
                      <p className="text-default-600">Add social media preview support</p>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="relative">
                        <CodeBlock
                          code="Please update and create a nice opengraph of or the app as well.."
                          language="markdown"
                        />
                      </div>
                    </div>
                  </section>
                </Tab>

                <Tab key="resources" title="Resources">
                  <section id="resources" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Resources and References</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          title: "HeroUI Documentation",
                          description: "UI component library used in this project",
                          link: "https://heroui.com/docs"
                        },
                        {
                          title: "Groq API",
                          description: "Primary AI provider for tweet generation",
                          link: "https://groq.com"
                        },
                        {
                          title: "OpenRouter",
                          description: "Fallback AI provider using Llama model",
                          link: "https://openrouter.ai"
                        },
                        {
                          title: "NewsAPI",
                          description: "Real-time news integration",
                          link: "https://newsapi.org"
                        }
                      ].map((resource, index) => (
                        <Card key={index} className="p-4">
                          <h3 className="font-semibold mb-2">{resource.title}</h3>
                          <p className="text-sm text-default-600 mb-3">{resource.description}</p>
                          <Link 
                            href={resource.link} 
                            isExternal 
                            className="text-primary text-sm flex items-center gap-1"
                          >
                            Learn More <ExternalLink className="w-3 h-3" />
                          </Link>
                        </Card>
                      ))}
                    </div>
                  </section>
                </Tab>
              </Tabs>
            </div>
          </Card>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="fixed bottom-6 right-6 bg-default-50 p-4 rounded-lg shadow-lg">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium">Progress</span>
            <Progress
              size="sm"
              value={40}
              color="primary"
              className="max-w-md"
            />
          </div>
          <Link
            href="/waitlist"
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: "sm"
            })}
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
} 