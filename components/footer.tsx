'use client';

import { useSheet } from "@/context/sheet-context";
import { Link } from "@heroui/link";
import { GithubIcon, TwitterIcon } from "lucide-react";
import { siteConfig } from "@/config/site";

const sections = {
  about: {
    title: "About",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About the Platform</h3>
          <p>
            Grow with Sahaib is a platform dedicated to helping developers learn modern web development
            through practical, hands-on projects using the latest technologies and AI tools.
          </p>
          <p>
            Our step-by-step guides focus on real-world applications, ensuring you gain practical
            experience while building your portfolio.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About Sahaib</h3>
          <p>
            Hi! I'm Sahaib Singh, a full-stack developer and AI enthusiast. With over 5 years of experience
            in web development, I'm passionate about creating modern, user-friendly applications and
            helping others learn to do the same.
          </p>
          <p>
            I specialize in Next.js, React, and AI integration, and I love exploring new technologies
            and sharing my knowledge with the developer community.
          </p>
          <div className="pt-4">
            <h4 className="font-medium mb-2">My Tech Stack:</h4>
            <ul className="space-y-1 text-default-600">
              <li>• Frontend: Next.js, React, TailwindCSS, Framer Motion</li>
              <li>• Backend: Node.js, Python, PostgreSQL, MongoDB</li>
              <li>• AI/ML: OpenAI, LangChain, TensorFlow</li>
              <li>• DevOps: Docker, AWS, Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  resources: {
    title: "Learning Resources",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Learning Paths</h3>
          <div className="grid gap-4">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <h4 className="font-medium mb-2">Next.js and React Development</h4>
              <p className="text-default-600">Master modern web development with our comprehensive guides.</p>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <h4 className="font-medium mb-2">AI Integration in Web Apps</h4>
              <p className="text-default-600">Learn to leverage AI capabilities in your applications.</p>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <h4 className="font-medium mb-2">Modern UI Development</h4>
              <p className="text-default-600">Create beautiful, responsive interfaces with modern tools.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Upcoming Content</h3>
          <ul className="space-y-2 text-default-600">
            <li>• Advanced AI Prompt Engineering</li>
            <li>• Full-Stack Authentication Systems</li>
            <li>• Real-time Applications with WebSockets</li>
            <li>• Serverless Architecture Patterns</li>
          </ul>
        </div>
      </div>
    ),
  },
  community: {
    title: "Community",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Join Our Community</h3>
          <p>
            Connect with fellow developers, share your experiences, and grow together in our supportive
            community of learners and builders.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h4 className="font-medium mb-2">Live Sessions</h4>
            <p className="text-default-600">Join interactive coding sessions and Q&As with Sahaib.</p>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h4 className="font-medium mb-2">Project Feedback</h4>
            <p className="text-default-600">Get constructive feedback on your projects from the community.</p>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h4 className="font-medium mb-2">Networking</h4>
            <p className="text-default-600">Connect with other developers and expand your professional network.</p>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-sm text-default-500">
            Join our waitlist to get early access to community features and exclusive content.
          </p>
        </div>
      </div>
    ),
  },
};

export function Footer() {
  const { openSheet } = useSheet();

  return (
    <footer className="w-full border-t border-primary/10 bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Grow with Sahaib</h3>
            <div className="flex gap-4">
              <Link
                isExternal
                href={siteConfig.links.twitter}
                className="text-default-600 hover:text-primary"
              >
                <TwitterIcon size={20} />
              </Link>
              <Link
                isExternal
                href={siteConfig.links.github}
                className="text-default-600 hover:text-primary"
              >
                <GithubIcon size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => openSheet(section)}
                  className="text-left text-default-600 hover:text-primary transition-colors"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-default-600">
              Join our waitlist to get notified about new guides and live sessions.
            </p>
            <Link
              href="/waitlist"
              className="text-primary hover:underline"
            >
              Join Waitlist →
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-default-600">
          <p>© {new Date().getFullYear()} Grow with Sahaib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 