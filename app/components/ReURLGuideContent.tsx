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
  Key,
  Database,
  Lock,
  Globe
} from "lucide-react";

export default function ReURLGuideContent() {
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
          Build a Modern URL Shortener (ReURL) in Under 1 Hour
        </h1>
        <p className={subtitle({ class: "max-w-2xl mx-auto" })}>
          Create a slick, secure URL shortener with analytics, custom links, and a dope UI—fast!
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
                  { icon: BookOpen, text: "Introduction", href: "#intro" },
                  { icon: BookOpen, text: "What You'll Build", href: "#what-youll-build" },
                  { icon: Wrench, text: "Tools You'll Need", href: "#tools-youll-need" },
                  { icon: Rocket, text: "Project Setup", href: "#step-1-project-setup" },
                  { icon: Key, text: "Clerk Authentication", href: "#step-2-clerk-authentication" },
                  { icon: Database, text: "Neon Database", href: "#step-3-neon-database" },
                  { icon: Code2, text: "URL Shortening Logic", href: "#step-4-url-shortening-logic" },
                  { icon: FileJson, text: "Once UI Design", href: "#step-5-once-ui-design" },
                  { icon: BarChart3, text: "Analytics", href: "#step-6-analytics" },
                  { icon: Lock, text: "Rate Limiting", href: "#step-7-rate-limiting" },
                  { icon: MessageSquarePlus, text: "Donation Button", href: "#step-8-donation-button" },
                  { icon: Globe, text: "Deployment", href: "#step-9-deployment" },
                  { icon: Rocket, text: "Final Tips", href: "#final-tips" }
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
                  <section id="intro" className="mb-12">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Introduction</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="bg-gradient-to-r from-primary-100/30 to-secondary-100/20 p-6 rounded-xl mb-6">
                        <p className="text-lg leading-relaxed">
                          This guide is for beginners with little to no coding skills. We'll use AI (via Cursor IDE) and Once UI to build ReURL, a modern URL shortener. I built this with 90% AI help and 10% tweaks in under an hour. You can too! Let's roll.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-default-50 rounded-xl p-5 border border-default-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-primary-100 rounded-lg">
                              <Rocket className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold text-lg">Quick Build</h4>
                          </div>
                          <p>Complete this project in under an hour with minimal coding. Perfect for beginners who want to build something impressive quickly!</p>
                        </div>
                        
                        <div className="bg-default-50 rounded-xl p-5 border border-default-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-primary-100 rounded-lg">
                              <Cpu className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold text-lg">AI-Powered</h4>
                          </div>
                          <p>Let AI handle 90% of the work while you focus on understanding and customizing the app to your needs.</p>
                        </div>
                      </div>

                      <div className="bg-default-50 p-6 rounded-xl border border-default-200 mt-6">
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <Globe className="w-5 h-5 text-primary" />
                          Project Links
                        </h4>
                        <div className="flex flex-col gap-3">
                          <Link 
                            href="https://reurl.dev" 
                            isExternal 
                            className="flex items-center gap-2 bg-default-100 hover:bg-default-200 p-4 rounded-lg transition-colors text-primary"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <div>
                              <span className="font-medium">Live Demo</span>
                              <p className="text-sm text-default-600 mt-1">See the finished project in action</p>
                            </div>
                          </Link>
                          <Link 
                            href="/waitlist" 
                            className="flex items-center gap-2 bg-default-100 hover:bg-default-200 p-4 rounded-lg transition-colors text-primary"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <div>
                              <span className="font-medium">Join Waitlist</span>
                              <p className="text-sm text-default-600 mt-1">Get access to the code and join our workshop</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="what-youll-build" className="mb-12">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>What You'll Build</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-2 bg-primary-100 rounded-lg mt-1">
                          <Code2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-lg font-medium mb-3">A badass URL shortener app that:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-3">
                              <li className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                                <span>Shortens URLs into tiny, shareable links</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                                <span>Lets users create custom slugs (e.g., reurl.dev/mycoollink)</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                                <span>Locks links with passwords</span>
                              </li>
                            </ul>
                            <ul className="space-y-3">
                              <li className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                                <span>Tracks clicks, locations, and devices with analytics</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                                <span>Uses Clerk for user logins</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                                <span>Looks sexy with Once UI and dark mode</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-default-50 p-4 rounded-lg border-l-4 border-primary">
                        <p className="italic">The source code for this project is private and will be shared exclusively during the workshop session. <Link href="/waitlist" className="text-primary font-medium">Join our waitlist</Link> to get access and follow along!</p>
                      </div>
                    </div>
                  </section>
                  
                  <section id="tools-youll-need" className="mb-12">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Tools You'll Need</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Code2 className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold">Cursor IDE</h4>
                          </div>
                          <p className="text-sm">AI coding sidekick</p>
                          <Link href="https://cursor.sh" isExternal className="text-xs text-primary mt-2 inline-block">
                            Download →
                          </Link>
                        </div>
                        
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-3">
                            <FileJson className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold">Once UI</h4>
                          </div>
                          <p className="text-sm">Slick component library</p>
                          <span className="text-xs text-success-600 mt-2 inline-block">Included in setup</span>
                        </div>
                        
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Globe className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold">Next.js</h4>
                          </div>
                          <p className="text-sm">Framework for app structure</p>
                          <span className="text-xs text-success-600 mt-2 inline-block">Comes with setup</span>
                        </div>
                        
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Database className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold">Neon Database</h4>
                          </div>
                          <p className="text-sm">Serverless PostgreSQL</p>
                          <Link href="https://neon.tech" isExternal className="text-xs text-primary mt-2 inline-block">
                            Sign up →
                          </Link>
                        </div>
                        
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Key className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold">Clerk</h4>
                          </div>
                          <p className="text-sm">User authentication</p>
                          <Link href="https://clerk.dev" isExternal className="text-xs text-primary mt-2 inline-block">
                            Get keys →
                          </Link>
                        </div>
                        
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Lock className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold">Upstash Redis</h4>
                          </div>
                          <p className="text-sm">Rate limiting and caching</p>
                          <Link href="https://upstash.com" isExternal className="text-xs text-primary mt-2 inline-block">
                            Get Redis keys →
                          </Link>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Globe className="w-4 h-4 text-primary" />
                            <h5 className="font-medium text-sm">IPInfo</h5>
                          </div>
                          <p className="text-xs">Geolocation for analytics</p>
                        </div>
                        
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-2">
                            <BarChart3 className="w-4 h-4 text-primary" />
                            <h5 className="font-medium text-sm">Chart.js</h5>
                          </div>
                          <p className="text-xs">Analytics charts</p>
                        </div>
                        
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-2">
                            <FileJson className="w-4 h-4 text-primary" />
                            <h5 className="font-medium text-sm">TailwindCSS</h5>
                          </div>
                          <p className="text-xs">Styling framework</p>
                        </div>
                        
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Globe className="w-4 h-4 text-primary" />
                            <h5 className="font-medium text-sm">Vercel</h5>
                          </div>
                          <p className="text-xs">Hosting your app</p>
                        </div>
                        
                        <div className="bg-default-50 p-4 rounded-xl border border-default-200">
                          <div className="flex items-center gap-2 mb-2">
                            <MessageSquarePlus className="w-4 h-4 text-primary" />
                            <h5 className="font-medium text-sm">Razorpay (Optional)</h5>
                          </div>
                          <p className="text-xs">Donation button</p>
                        </div>
                      </div>
                      
                      <div className="flex p-4 rounded-lg bg-warning-100 border border-warning-200 mt-6 items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-warning mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Heads Up</h4>
                          <p className="text-sm">Sign up for Neon, Clerk, Upstash, IPInfo, and Vercel first. Takes 15 minutes, saves headaches later.</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab>

                <Tab key="setup" title="Setup">
                  <section id="step-1-project-setup" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Step 1: Project Setup</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <ol>
                        <li>Make a folder (e.g., "ReURL").</li>
                        <li>Open it in Cursor IDE by dragging it in.</li>
                        <li>Set up Next.js with Once UI:
                          <ul>
                            <li>Open terminal in Cursor (bottom panel).</li>
                            <li>Run: <CodeBlock code="npx create-next-app@latest reurl --use-npm" language="bash" /></li>
                            <li>Say "Yes" to TailwindCSS, App Router, and src/ folder.</li>
                            <li><CodeBlock code="cd reurl" language="bash" /></li>
                            <li><CodeBlock code="npm install @once-ui/core" language="bash" /></li>
                          </ul>
                        </li>
                        <li>Test it: Run <CodeBlock code="npm run dev" language="bash" />. Hit localhost:3000 in your browser—blank slate, ready to go.</li>
                      </ol>
                      
                      <div className="bg-default-50 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold mb-2">Prompt You Might've Used in Cursor</h4>
                        <CodeBlock 
                          code="Set up a new Next.js 15 project with TailwindCSS and Once UI component library. Use the App Router and src/ folder structure. Make it ready for a URL shortener app." 
                          language="text" 
                        />
                      </div>
                    </div>
                  </section>

                  <section id="step-2-clerk-authentication" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Step 2: Configure Authentication with Clerk</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <ol>
                        <li>Get Clerk keys: Sign up at <Link href="https://clerk.dev" isExternal>clerk.dev</Link>. Grab <code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> and <code>CLERK_SECRET_KEY</code> from the dashboard.</li>
                        <li>Add to <code>.env</code> file in your project root:
                          <CodeBlock 
                            code={`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard`} 
                            language="bash" 
                          />
                        </li>
                        <li>Install Clerk: Run <CodeBlock code="npm install @clerk/nextjs" language="bash" /></li>
                        <li>Set up Clerk: In Cursor's AI chat, paste:
                          <CodeBlock 
                            code="Add Clerk authentication to my Next.js app. Protect the /dashboard route and create sign-in/sign-up pages using Once UI components like Card and Button. Hook up the .env keys." 
                            language="text" 
                          />
                        </li>
                      </ol>
                      <p>AI will add ClerkProvider in <code>src/app/layout.js</code>, middleware in <code>middleware.js</code> for protected routes, and basic sign-in/up pages in <code>src/app/sign-in/page.js</code> and <code>src/app/sign-up/page.js</code>.</p>
                    </div>
                  </section>
                </Tab>

                <Tab key="development" title="Development">
                  <section id="step-3-neon-database" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Step 3: Set Up Neon Database</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <ol>
                        <li>Get Neon DB: Sign up at <Link href="https://neon.tech" isExternal>neon.tech</Link>. Copy the connection string.</li>
                        <li>Add to <code>.env</code>:
                          <CodeBlock code="DATABASE_URL=your-neon-database-connection-string" language="bash" />
                        </li>
                        <li>Install Prisma: Run <CodeBlock code="npm install prisma @prisma/client" language="bash" /></li>
                        <li>Init Prisma: Run <CodeBlock code="npx prisma init" language="bash" />. Update <code>schema.prisma</code> in <code>prisma/</code> folder with:
                          <CodeBlock 
                            code={`datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id
  clerkId   String   @unique
  links     Link[]
}

model Link {
  id         String   @id @default(uuid())
  url        String
  slug       String   @unique
  password   String?
  userId     String
  user       User     @relation(fields: [userId], references: [id])
  analytics  Analytic[]
}

model Analytic {
  id        String   @id @default(uuid())
  linkId    String
  link      Link     @relation(fields: [linkId], references: [id])
  location  String?
  device    String?
  clickedAt DateTime @default(now())
}`} 
                            language="typescript" 
                          />
                        </li>
                        <li>Push schema: Run <CodeBlock code="npx prisma db push" language="bash" /></li>
                      </ol>
                      <div className="bg-default-50 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold mb-2">Prompt You Might've Used in Cursor</h4>
                        <CodeBlock 
                          code="Set up Prisma with Neon PostgreSQL in my Next.js app. Create a schema for a URL shortener with User, Link, and Analytic models. Include fields for custom slugs, passwords, and click tracking. Use the DATABASE_URL from .env." 
                          language="text" 
                        />
                      </div>
                    </div>
                  </section>

                  <section id="step-4-url-shortening-logic" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Step 4: Build the URL Shortening Logic</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <ol>
                        <li>Create API route: In <code>src/app/api/shorten/route.js</code>, tell Cursor:
                          <CodeBlock 
                            code="Create a Next.js API POST route at /api/shorten. Take a URL, optional custom slug, and optional password from the request body. Generate a random 6-char slug if none provided. Save to Neon DB using Prisma. Return the shortened URL." 
                            language="text" 
                          />
                        </li>
                        <li>Test it: Use Postman or Curl:
                          <CodeBlock 
                            code={`curl -X POST http://localhost:3000/api/shorten -d '{"url": "https://example.com", "slug": "test", "password": "secret"}' -H "Content-Type: application/json"`} 
                            language="bash" 
                          />
                        </li>
                      </ol>
                    </div>
                  </section>

                  <section id="step-5-once-ui-design" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Step 5: Create the UI with Once UI</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>Tell Cursor to create these pages:</p>
                      <ol>
                        <li>Homepage with shorten form.</li>
                        <li>Dashboard for managing links.</li>
                        <li>Analytics page.</li>
                        <li>Redirect page with password protection.</li>
                      </ol>
                      <p>Example prompt for homepage:</p>
                      <CodeBlock 
                        code="Create a modern homepage for my URL shortener using Once UI components. Include a form to shorten URLs with fields for the original URL, optional custom slug, and optional password. Add a slick header, dark mode toggle, and footer." 
                        language="text" 
                      />
                    </div>
                  </section>

                  <section id="step-6-analytics" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Step 6: Add Analytics Tracking</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>Create these components:</p>
                      <ol>
                        <li>Tracking middleware (location, device, etc.).</li>
                        <li>Charts with Chart.js for the dashboard.</li>
                        <li>Analytics API endpoint.</li>
                      </ol>
                      <p>Prompt for analytics page:</p>
                      <CodeBlock 
                        code="Create an analytics page for my URL shortener that shows charts and metrics for link clicks. Use Chart.js for visuals and Once UI for the layout. Include location maps, device breakdowns, and time-based metrics." 
                        language="text" 
                      />
                    </div>
                  </section>
                </Tab>

                <Tab key="deployment" title="Deployment">
                  <section id="step-9-deployment" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Step 9: Deploy to Vercel</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <h4>1. Push to GitHub:</h4>
                      <ul>
                        <li>Sign into <Link href="https://github.com" isExternal>github.com</Link>.</li>
                        <li>Create a repo (e.g., "reurl").</li>
                        <li>Run:
                          <CodeBlock 
                            code={`git init
git add .
git commit -m "Initial ReURL commit"
git remote add origin https://github.com/yourusername/reurl.git
git push -u origin main`} 
                            language="bash" 
                          />
                        </li>
                      </ul>
                      
                      <h4>2. Deploy on Vercel:</h4>
                      <ul>
                        <li>Sign into <Link href="https://vercel.com" isExternal>vercel.com</Link>.</li>
                        <li>Import your repo.</li>
                        <li>Add all <code>.env</code> vars in Vercel dashboard.</li>
                        <li>Hit "Deploy." It's live!</li>
                      </ul>
                    </div>
                  </section>

                  <section id="final-tips" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Final Tips</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <ul>
                        <li><strong>Secure It</strong>: Add <code>.env</code> to <code>.gitignore</code>—don't push secrets!</li>
                        <li><strong>Test Hard</strong>: Shorten links, check analytics, try logins, hit the donation button.</li>
                        <li><strong>Tweak It</strong>: Mess with Once UI styles or Tailwind for your vibe.</li>
                      </ul>
                      <p>You've got a killer URL shortener in under an hour. Share that shit!</p>
                      
                      <h4 className="mt-6">Sources Used</h4>
                      <ul>
                        <li>Next.js: <Link href="https://nextjs.org" isExternal>nextjs.org</Link></li>
                        <li>Once UI: Comes with setup</li>
                        <li>Neon Database: <Link href="https://neon.tech" isExternal>neon.tech</Link></li>
                        <li>Clerk: <Link href="https://clerk.dev" isExternal>clerk.dev</Link></li>
                        <li>Upstash Redis: <Link href="https://upstash.com" isExternal>upstash.com</Link></li>
                        <li>Chart.js: <Link href="https://chartjs.org" isExternal>chartjs.org</Link></li>
                        <li>TailwindCSS: <Link href="https://tailwindcss.com" isExternal>tailwindcss.com</Link></li>
                        <li>Vercel: <Link href="https://vercel.com" isExternal>vercel.com</Link></li>
                        <li>Razorpay: <Link href="https://razorpay.com" isExternal>razorpay.com</Link></li>
                      </ul>
                    </div>
                  </section>
                </Tab>

                <Tab key="resources" title="Resources">
                  <section id="additional-resources" className="mb-10">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>Additional Resources</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-default-50 rounded-xl p-5 border border-default-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary-100 rounded-lg">
                              <Globe className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold text-lg">Framework</h4>
                          </div>
                          <div className="space-y-3">
                            <Link 
                              href="https://nextjs.org/docs" 
                              isExternal 
                              className="flex items-center justify-between p-3 bg-default-100 hover:bg-default-200 rounded-lg transition-colors"
                            >
                              <span className="font-medium">Next.js Documentation</span>
                              <ExternalLink className="w-4 h-4 text-default-500" />
                            </Link>
                            <Link 
                              href="https://tailwindcss.com/docs" 
                              isExternal 
                              className="flex items-center justify-between p-3 bg-default-100 hover:bg-default-200 rounded-lg transition-colors"
                            >
                              <span className="font-medium">TailwindCSS Documentation</span>
                              <ExternalLink className="w-4 h-4 text-default-500" />
                            </Link>
                          </div>
                        </div>

                        <div className="bg-default-50 rounded-xl p-5 border border-default-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary-100 rounded-lg">
                              <Key className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold text-lg">Authentication</h4>
                          </div>
                          <div className="space-y-3">
                            <Link 
                              href="https://clerk.dev/docs" 
                              isExternal 
                              className="flex items-center justify-between p-3 bg-default-100 hover:bg-default-200 rounded-lg transition-colors"
                            >
                              <span className="font-medium">Clerk Authentication Docs</span>
                              <ExternalLink className="w-4 h-4 text-default-500" />
                            </Link>
                            <div className="flex items-center gap-2 p-3 bg-default-100 rounded-lg">
                              <span className="font-medium">Clerk Dashboard</span>
                              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">Account Required</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-default-50 rounded-xl p-5 border border-default-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary-100 rounded-lg">
                              <Database className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold text-lg">Database</h4>
                          </div>
                          <div className="space-y-3">
                            <Link 
                              href="https://neon.tech/docs" 
                              isExternal 
                              className="flex items-center justify-between p-3 bg-default-100 hover:bg-default-200 rounded-lg transition-colors"
                            >
                              <span className="font-medium">Neon Database Documentation</span>
                              <ExternalLink className="w-4 h-4 text-default-500" />
                            </Link>
                            <Link 
                              href="https://www.prisma.io/docs" 
                              isExternal 
                              className="flex items-center justify-between p-3 bg-default-100 hover:bg-default-200 rounded-lg transition-colors"
                            >
                              <span className="font-medium">Prisma ORM Documentation</span>
                              <ExternalLink className="w-4 h-4 text-default-500" />
                            </Link>
                          </div>
                        </div>
                        
                        <div className="bg-default-50 rounded-xl p-5 border border-default-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary-100 rounded-lg">
                              <Lock className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold text-lg">Utilities</h4>
                          </div>
                          <div className="space-y-3">
                            <Link 
                              href="https://upstash.com/docs" 
                              isExternal 
                              className="flex items-center justify-between p-3 bg-default-100 hover:bg-default-200 rounded-lg transition-colors"
                            >
                              <span className="font-medium">Upstash Redis Documentation</span>
                              <ExternalLink className="w-4 h-4 text-default-500" />
                            </Link>
                            <Link 
                              href="https://www.chartjs.org/docs/latest/" 
                              isExternal 
                              className="flex items-center justify-between p-3 bg-default-100 hover:bg-default-200 rounded-lg transition-colors"
                            >
                              <span className="font-medium">Chart.js Documentation</span>
                              <ExternalLink className="w-4 h-4 text-default-500" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary-100/20 to-secondary-100/10 p-6 rounded-xl mb-8 border border-default-200">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <MessageSquarePlus className="w-5 h-5 text-primary" />
                          Community Support
                        </h4>
                        <p className="mb-4">
                          Need help with this project? Join our community for support, tips, and discussions about ReURL and other AI-assisted development projects. Exclusive access to our developers is available through our workshop sessions.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Link
                            href="/waitlist"
                            className={buttonStyles({
                              color: "primary",
                              radius: "full",
                              className: "px-4"
                            })}
                          >
                            Join Our Waitlist
                          </Link>
                          <button
                            className={buttonStyles({
                              variant: "flat",
                              color: "default",
                              radius: "full",
                              className: "px-4"
                            })}
                            onClick={() => scrollToSection("#intro")}
                          >
                            Back to Top
                          </button>
                        </div>
                      </div>

                      <div className="bg-default-50 p-6 rounded-xl border border-default-200">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Rocket className="w-5 h-5 text-primary" />
                          Workshop Access
                        </h4>
                        <p className="mb-4">
                          This guide is just a preview. For hands-on help, complete code, and advanced features, join our exclusive workshops.
                        </p>
                        <div className="bg-default-100 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Workshop Benefits</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                              <span className="text-sm">Full source code access</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                              <span className="text-sm">Live coding sessions</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                              <span className="text-sm">Q&A with developers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                              <span className="text-sm">Project customization help</span>
                            </div>
                          </div>
                          <Link
                            href="/waitlist"
                            className={buttonStyles({
                              color: "primary",
                              radius: "md",
                              className: "w-full justify-center"
                            })}
                          >
                            Join Waitlist for Workshop Access
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab>
              </Tabs>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 