'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Card } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Tabs, Tab } from "@heroui/tabs";
import { Sheet } from "@/components/ui/sheet";
import { 
  Search, 
  Sparkles,
  Code2,
  PenTool,
  MessageSquare,
  Image as ImageIcon,
  BookOpen,
  Copy,
  ThumbsUp,
  Database,
  Braces,
  Bot,
  Layout,
  Terminal,
  GitBranch,
  Shield,
  Cpu,
  Network,
  AlertTriangle,
  BookOpen as BookIcon,
  Link as LinkIcon,
  CheckCircle2
} from "lucide-react";

interface Prompt {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  difficulty: string;
  prompt: {
    overview: string;
    context: string;
    requirements: string[];
    sections: Array<{
      title: string;
      description: string;
      items: Array<{
        key: string;
        details: string[];
      }>;
    }>;
    deliverables: Array<{
      title: string;
      items: string[];
    }>;
    bestPractices: string[];
    commonPitfalls: string[];
    resources: Array<{
      title: string;
      description: string;
      url: string;
    }>;
  };
}

const categories = [
  { key: "all", label: "All Prompts", icon: Sparkles },
  { key: "system-design", label: "System Design", icon: Network },
  { key: "backend", label: "Backend", icon: Database },
  { key: "frontend", label: "Frontend", icon: Layout },
  { key: "devops", label: "DevOps", icon: Terminal },
  { key: "security", label: "Security", icon: Shield },
  { key: "ai", label: "AI/ML", icon: Bot },
];

const prompts: Prompt[] = [
    {
        id: "1",
        category: "system-design",
        title: "System Architecture Analysis & Optimization",
        description: "Deep analysis of system architecture with scalability, reliability, and performance optimization recommendations",
        tags: ["architecture", "scalability", "optimization", "enterprise"],
        difficulty: "Advanced",
        prompt: {
          overview: `Given the provided system architecture, perform a comprehensive analysis and provide detailed recommendations:
    
    1. Architecture Review:
       - Component interaction patterns
       - Data flow analysis
       - Scalability bottlenecks
       - Single points of failure
       - Performance optimization opportunities
       - Security vulnerabilities
    
    2. Scalability Analysis:
       - Load balancing strategy
       - Database scaling (vertical vs horizontal)
       - Caching implementation
       - Message queue utilization
       - Service discovery patterns
       - State management approach
    
    3. Reliability Assessment:
       - Fault tolerance mechanisms
       - Disaster recovery planning
       - Data backup strategies
       - Circuit breaker patterns
       - Retry mechanisms
       - Fallback implementations
    
    4. Performance Optimization:
       - Resource utilization
       - Query optimization
       - Caching strategies
       - Connection pooling
       - Async processing opportunities
       - Batch processing implementations
    
    5. Security Evaluation:
       - Authentication mechanisms
       - Authorization patterns
       - Data encryption (at rest & in transit)
       - API security
       - Rate limiting implementation
       - Audit logging
    
    6. Monitoring & Observability:
       - Metrics collection
       - Log aggregation
       - Distributed tracing
       - Alert configuration
       - Performance monitoring
       - Error tracking
    
    7. Cost Optimization:
       - Resource allocation
       - Service tier recommendations
       - Capacity planning
       - Auto-scaling policies
       - Storage optimization
       - Traffic management
    
    For each section, provide:
    - Current implementation analysis
    - Potential risks and challenges
    - Specific improvement recommendations
    - Implementation priorities (P0-P3)
    - Estimated effort/impact matrix
    - Migration strategy (if applicable)
    
    System Architecture Details:
    [Paste your system architecture details here]`,
          context: `System Architecture Details:
    [Paste your system architecture details here]`,
          requirements: [
            "System architecture analysis",
            "Scalability analysis",
            "Reliability assessment",
            "Performance optimization",
            "Security evaluation",
            "Monitoring & observability",
            "Cost optimization"
          ],
          sections: [
            {
              title: "Architecture Review",
              description: "Component interaction patterns, data flow analysis, and scalability bottlenecks",
              items: [
                { key: "Component interaction patterns", details: ["Deep analysis of system architecture"] },
                { key: "Data flow analysis", details: ["Deep analysis of system architecture"] },
                { key: "Scalability bottlenecks", details: ["Deep analysis of system architecture"] },
                { key: "Single points of failure", details: ["Deep analysis of system architecture"] },
                { key: "Performance optimization opportunities", details: ["Deep analysis of system architecture"] },
                { key: "Security vulnerabilities", details: ["Deep analysis of system architecture"] }
              ]
            },
            {
              title: "Scalability Analysis",
              description: "Load balancing strategy, database scaling, caching季度 implementation, message queue utilization, service discovery patterns, and state management approach",
              items: [
                { key: "Load balancing strategy", details: ["Deep analysis of system architecture"] },
                { key: "Database scaling (vertical vs horizontal)", details: ["Deep analysis of system architecture"] },
                { key: "Caching implementation", details: ["Deep analysis of system architecture"] },
                { key: "Message queue utilization", details: ["Deep analysis of system architecture"] },
                { key: "Service discovery patterns", details: ["Deep analysis of system architecture"] },
                { key: "State management approach", details: ["Deep analysis of system architecture"] }
              ]
            },
            {
              title: "Reliability Assessment",
              description: "Fault tolerance mechanisms, disaster recovery planning, data backup strategies, circuit breaker patterns, retry mechanisms, and fallback implementations",
              items: [
                { key: "Fault tolerance mechanisms", details: ["Deep analysis of system architecture"] },
                { key: "Disaster recovery planning", details: ["Deep analysis of system architecture"] },
                { key: "Data backup strategies", details: ["Deep analysis of system architecture"] },
                { key: "Circuit breaker patterns", details: ["Deep analysis of system architecture"] },
                { key: "Retry mechanisms", details: ["Deep analysis of system architecture"] },
                { key: "Fallback implementations", details: ["Deep analysis of system architecture"] }
              ]
            },
            {
              title: "Performance Optimization",
              description: "Resource utilization, query optimization, caching strategies, connection pooling, async processing opportunities, and batch processing implementations",
              items: [
                { key: "Resource utilization", details: ["Deep analysis of system architecture"] },
                { key: "Query optimization", details: ["Deep analysis of system architecture"] },
                { key: "Caching strategies", details: ["Deep analysis of system architecture"] },
                { key: "Connection pooling", details: ["Deep analysis of system architecture"] },
                { key: "Async processing opportunities", details: ["Deep analysis of system architecture"] },
                { key: "Batch processing implementations", details: ["Deep analysis of system architecture"] }
              ]
            },
            {
              title: "Security Evaluation",
              description: "Authentication mechanisms, authorization patterns, data encryption (at rest & in transit), API security, rate limiting implementation, and audit logging",
              items: [
                { key: "Authentication mechanisms", details: ["Deep analysis of system architecture"] },
                { key: "Authorization patterns", details: ["Deep analysis of system architecture"] },
                { key: "Data encryption (at rest & in transit)", details: ["Deep analysis of system architecture"] },
                { key: "API security", details: ["Deep analysis of system architecture"] },
                { key: "Rate limiting implementation", details: ["Deep analysis of system architecture"] },
                { key: "Audit logging", details: ["Deep analysis of system architecture"] }
              ]
            },
            {
              title: "Monitoring & Observability",
              description: "Metrics collection, log aggregation, distributed tracing, alert configuration, performance monitoring, and error tracking",
              items: [
                { key: "Metrics collection", details: ["Deep analysis of system architecture"] },
                { key: "Log aggregation", details: ["Deep analysis of system architecture"] },
                { key: "Distributed tracing", details: ["Deep analysis of system architecture"] },
                { key: "Alert configuration", details: ["Deep analysis of system architecture"] },
                { key: "Performance monitoring", details: ["Deep analysis of system architecture"] },
                { key: "Error tracking", details: ["Deep analysis of system architecture"] }
              ]
            },
            {
              title: "Cost Optimization",
              description: "Resource allocation, service tier recommendations, capacity planning, auto-scaling policies, storage optimization, and traffic management",
              items: [
                { key: "Resource allocation", details: ["Deep analysis of system architecture"] },
                { key: "Service tier recommendations", details: ["Deep analysis of system architecture"] },
                { key: "Capacity planning", details: ["Deep analysis of system architecture"] },
                { key: "Auto-scaling policies", details: ["Deep analysis of system architecture"] },
                { key: "Storage optimization", details: ["Deep analysis of system architecture"] },
                { key: "Traffic management", details: ["Deep analysis of system architecture"] }
              ]
            }
          ],
          deliverables: [
            { title: "Current implementation analysis", items: ["Deep analysis of system architecture"] },
            { title: "Potential risks and challenges", items: ["Deep analysis of system architecture"] },
            { title: "Specific improvement recommendations", items: ["Deep analysis of system architecture"] },
            { title: "Implementation priorities (P0-P3)", items: ["Deep analysis of system architecture"] },
            { title: "Estimated effort/impact matrix", items: ["Deep analysis of system architecture"] },
            { title: "Migration strategy (if applicable)", items: ["Deep analysis of system architecture"] }
          ],
          bestPractices: [
            "Deep analysis of system architecture",
            "Scalability analysis",
            "Reliability assessment",
            "Performance optimization",
            "Security evaluation",
            "Monitoring & observability",
            "Cost optimization"
          ],
          commonPitfalls: [
            "Overlooking potential risks and challenges",
            "Underestimating the complexity of the system",
            "Ignoring the importance of migration strategy",
            "Failing to prioritize implementation",
            "Not considering all aspects of the system"
          ],
          resources: [
            { title: "AWS Well-Architected Framework", description: "Guide to system architecture best practices", url: "https://aws.amazon.com/architecture/well-architected/" },
            { title: "Scalability Patterns", description: "Scalability strategies for distributed systems", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/category/scalability" },
            { title: "Reliability Engineering", description: "Google SRE reliability principles", url: "https://sre.google/sre-book/part-II/" },
            { title: "Performance Optimization Guide", description: "Performance optimization techniques", url: "https://www.nginx.com/resources/wiki/community/web-performance-optimization/" }
          ]
        }
      },
      {
        id: "2",
        category: "backend",
        title: "Microservices Design Pattern Implementation",
        description: "Detailed implementation guide for microservices patterns with specific code examples and best practices",
        tags: ["microservices", "backend", "distributed-systems"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement microservices architecture using the following pattern-based approach:
    
    1. Service Decomposition:
       - Domain-Driven Design (DDD) principles
       - Bounded context identification
       - Service responsibility segregation
       - API contract design
       - Event storming results
       - Data ownership patterns
    
    2. Inter-Service Communication:
       - Synchronous patterns:
         * REST API design
         * gRPC implementation
         * GraphQL schema design
       - Asynchronous patterns:
         * Event-driven architecture
         * Message queue implementation
         * Pub/sub patterns
       - Service mesh configuration
    
    3. Data Management:
       - Database per service pattern
       - Event sourcing implementation
       - CQRS pattern
       - Saga pattern for transactions
       - Data consistency strategies
       - Cache invalidation approaches
    
    4. Resilience Patterns:
       - Circuit breaker implementation
       - Bulkhead pattern
       - Retry policies
       - Rate limiting
       - Fallback strategies
       - Timeout configurations
    
    5. Deployment Strategy:
       - Container orchestration
       - Service discovery
       - Configuration management
       - Secret management
       - CI/CD pipeline
       - Blue-green deployment
    
    6. Monitoring Setup:
       - Distributed tracing
       - Log aggregation
       - Metrics collection
       - Health checks
       - Alert configuration
       - Dashboard setup
    
    For each component, provide:
    - Detailed code examples
    - Configuration snippets
    - Test scenarios
    - Performance benchmarks
    - Security considerations
    - Scaling strategies
    
    Project Requirements:
    [Paste your microservices requirements here]`,
          context: "Project Requirements: [Paste your microservices requirements here]",
          requirements: [
            "Service decomposition strategy",
            "Inter-service communication patterns",
            "Data management approach",
            "Resilience implementation",
            "Deployment configuration",
            "Monitoring setup"
          ],
          sections: [
            {
              title: "Service Decomposition",
              description: "Domain-Driven Design principles and bounded context identification",
              items: [
                { key: "DDD Principles", details: ["Identify bounded contexts", "Define aggregates", "Design domain events"] },
                { key: "Service Boundaries", details: ["Define service responsibilities", "Identify data ownership", "Design APIs"] }
              ]
            },
            {
              title: "Inter-Service Communication",
              description: "Synchronous and asynchronous communication patterns",
              items: [
                { key: "Synchronous Patterns", details: ["REST API design", "gRPC implementation", "GraphQL schema"] },
                { key: "Asynchronous Patterns", details: ["Event-driven architecture", "Message queues", "Pub/sub system"] }
              ]
            }
          ],
          deliverables: [
            { title: "Architecture Design Document", items: ["Service decomposition diagram", "Communication patterns"] },
            { title: "Implementation Guide", items: ["Code examples", "Configuration templates"] }
          ],
          bestPractices: [
            "Follow DDD principles",
            "Implement resilience patterns",
            "Use asynchronous communication when possible",
            "Implement proper monitoring"
          ],
          commonPitfalls: [
            "Incorrect service boundaries",
            "Tight coupling between services",
            "Lack of resilience patterns",
            "Insufficient monitoring"
          ],
          resources: [
            { title: "Domain-Driven Design", description: "Eric Evans' DDD principles", url: "https://domainlanguage.com/ddd/" },
            { title: "Microservices Patterns", description: "Patterns for microservices by Chris Richardson", url: "https://microservices.io/patterns/microservices.html" }
          ]
        }
      },
      {
        id: "3",
        category: "frontend",
        title: "Advanced React Component Architecture",
        description: "Enterprise-grade React component design with performance optimization and state management patterns",
        tags: ["react", "frontend", "performance"],
        difficulty: "Intermediate",
        prompt: {
          overview: `Design and implement a scalable React component architecture following these specifications:
    
    1. Component Structure:
       - Atomic design principles
       - Component composition patterns
       - HOC implementations
       - Custom hooks architecture
       - Render props patterns
       - Component boundaries
    
    2. State Management:
       - Global state architecture
       - Local state strategies
       - Context API implementation
       - Redux/Zustand patterns
       - State persistence
       - State synchronization
    
    3. Performance Optimization:
       - Memoization strategies
       - Code splitting approach
       - Bundle size optimization
       - Virtual list implementation
       - Image optimization
       - Resource preloading
    
    4. Testing Strategy:
       - Unit test setup
       - Integration testing
       - E2E test configuration
       - Performance testing
       - Accessibility testing
       - Visual regression tests
    
    5. Styling Architecture:
       - CSS-in-JS implementation
       - Theming system
       - Dark mode support
       - RTL handling
       - Responsive design
       - Animation patterns
    
    6. API Integration:
       - Data fetching patterns
       - Error handling
       - Loading states
       - Offline support
       - Cache management
       - Real-time updates
    
    7. Security Measures:
       - XSS prevention
       - CSRF protection
       - Content security policy
       - Input sanitization
       - Authentication flow
       - Authorization checks
    
    For each section, provide:
    - Implementation code
    - Configuration setup
    - Best practices
    - Common pitfalls
    - Performance metrics
    - Migration guide
    
    Component Requirements:
    [Paste your component requirements here]`,
          context: "Component Requirements: [Paste your component requirements here]",
          requirements: [
            "Component architecture design",
            "State management implementation",
            "Performance optimization",
            "Testing strategy",
            "Styling system",
            "API integration",
            "Security measures"
          ],
          sections: [
            {
              title: "Component Structure",
              description: "Atomic design principles and component composition patterns",
              items: [
                { key: "Atomic Design", details: ["Atoms", "Molecules", "Organisms", "Templates", "Pages"] },
                { key: "Component Patterns", details: ["HOCs", "Render Props", "Custom Hooks", "Composition"] }
              ]
            },
            {
              title: "State Management",
              description: "Global and local state management strategies",
              items: [
                { key: "Global State", details: ["Redux/Zustand setup", "Context API", "State persistence"] },
                { key: "Local State", details: ["useState", "useReducer", "Custom hooks"] }
              ]
            }
          ],
          deliverables: [
            { title: "Component Library", items: ["Base components", "Composite components", "Documentation"] },
            { title: "State Management", items: ["Store configuration", "Actions/Reducers", "Middleware"] }
          ],
          bestPractices: [
            "Follow atomic design",
            "Implement proper state management",
            "Optimize performance",
            "Write comprehensive tests"
          ],
          commonPitfalls: [
            "Prop drilling",
            "Unnecessary re-renders",
            "Poor state management",
            "Inadequate testing"
          ],
          resources: [
            { title: "Atomic Design by Brad Frost", description: "Guide to atomic design principles", url: "https://bradfrost.com/blog/post/atomic-web-design/" },
            { title: "React Performance", description: "Official React performance optimization docs", url: "https://reactjs.org/docs/optimizing-performance.html" }
          ]
        }
      },
      {
        id: "4",
        category: "devops",
        title: "Kubernetes Production Deployment Strategy",
        description: "Enterprise-grade Kubernetes deployment configuration with security, monitoring, and scaling best practices",
        tags: ["kubernetes", "devops", "cloud-native"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement a production-ready Kubernetes deployment strategy:
    
    1. Cluster Architecture:
       - Node pool configuration
       - Network policy design
       - Storage class setup
       - Ingress controller
       - Service mesh integration
       - Multi-cluster strategy
    
    2. Security Configuration:
       - RBAC setup
       - Network policies
       - Pod security policies
       - Secret management
       - Container security
       - Image scanning
    
    3. Resource Management:
       - Resource quotas
       - Limit ranges
       - HPA configuration
       - VPA setup
       - Cluster autoscaling
       - Cost optimization
    
    4. Monitoring Stack:
       - Prometheus setup
       - Grafana dashboards
       - Alert manager
       - Logging pipeline
       - Tracing integration
       - Metrics collection
    
    5. CI/CD Pipeline:
       - GitOps workflow
       - Deployment strategies
       - Rollback procedures
       - Canary deployments
       - Blue-green updates
       - A/B testing setup
    
    6. Backup & DR:
       - Backup procedures
       - Recovery testing
       - Data persistence
       - State management
       - Config backups
       - Disaster recovery
    
    7. Performance Optimization:
       - Resource requests/limits
       - Node affinity rules
       - Pod disruption budgets
       - Quality of service
       - Network optimization
       - Storage performance
    
    Provide for each:
    - YAML configurations
    - Helm charts
    - Shell scripts
    - Documentation
    - Runbooks
    - Troubleshooting guides
    
    Deployment Requirements:
    [Paste your deployment requirements here]`,
          context: "Deployment Requirements: [Paste your deployment requirements here]",
          requirements: [
            "Cluster architecture design",
            "Security configuration",
            "Resource management",
            "Monitoring setup",
            "CI/CD pipeline",
            "Backup and DR",
            "Performance optimization"
          ],
          sections: [
            {
              title: "Cluster Architecture",
              description: "Node pool configuration and network policy design",
              items: [
                { key: "Node Pools", details: ["Configuration", "Scaling", "Labels", "Taints"] },
                { key: "Networking", details: ["Network policies", "Ingress", "Service mesh"] }
              ]
            },
            {
              title: "Security",
              description: "RBAC and security policies configuration",
              items: [
                { key: "RBAC", details: ["Roles", "Role bindings", "Service accounts"] },
                { key: "Policies", details: ["Network policies", "Pod security", "Image scanning"] }
              ]
            }
          ],
          deliverables: [
            { title: "Infrastructure Code", items: ["Terraform/Pulumi", "Helm charts", "YAML manifests"] },
            { title: "Documentation", items: ["Architecture diagrams", "Runbooks", "Troubleshooting guides"] }
          ],
          bestPractices: [
            "Follow security best practices",
            "Implement proper monitoring",
            "Use GitOps workflow",
            "Maintain high availability"
          ],
          commonPitfalls: [
            "Insufficient security",
            "Poor resource management",
            "Lack of monitoring",
            "Inadequate backup strategy"
          ],
          resources: [
            { title: "Kubernetes Docs", description: "Official Kubernetes documentation", url: "https://kubernetes.io/docs/home/" },
            { title: "GitOps Guide", description: "Introduction to GitOps with Kubernetes", url: "https://www.weave.works/technologies/gitops/" }
          ]
        }
      },
      {
        id: "5",
        category: "security",
        title: "Zero Trust Security Architecture",
        description: "Comprehensive zero trust security implementation with detailed controls and monitoring",
        tags: ["security", "zero-trust", "compliance"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement a zero trust security architecture with the following components:
    
    1. Identity & Access Management:
       - Authentication methods
       - Authorization policies
       - MFA implementation
       - SSO integration
       - Identity federation
       - Privileged access management
    
    2. Network Security:
       - Micro-segmentation
       - East-west traffic control
       - North-south traffic control
       - DDoS protection
       - WAF configuration
       - VPN setup
    
    3. Data Security:
       - Encryption at rest
       - Encryption in transit
       - Key management
       - Data classification
       - DLP implementation
       - Backup encryption
    
    4. Application Security:
       - SAST/DAST integration
       - Container security
       - API security
       - Secret management
       - Dependency scanning
       - Runtime protection
    
    5. Monitoring & Response:
       - SIEM implementation
       - EDR deployment
       - Threat hunting
       - Incident response
       - Forensics capability
       - Alert correlation
    
    6. Compliance & Governance:
       - Policy enforcement
       - Audit logging
       - Compliance reporting
       - Risk assessment
       - Control validation
       - Policy automation
    
    7. DevSecOps Integration:
       - Pipeline security
       - Infrastructure as code
       - Security testing
       - Vulnerability management
       - Compliance as code
       - Security metrics
    
    For each component:
    - Implementation details
    - Tool configurations
    - Policy templates
    - Monitoring setup
    - Response playbooks
    - Compliance mappings
    
    Security Requirements:
    [Paste your security requirements here]`,
          context: "Security Requirements: [Paste your security requirements here]",
          requirements: [
            "Identity and access management",
            "Network security",
            "Data security",
            "Application security",
            "Monitoring and response",
            "Compliance and governance",
            "DevSecOps integration"
          ],
          sections: [
            {
              title: "Identity & Access Management",
              description: "Authentication and authorization implementation",
              items: [
                { key: "Authentication", details: ["MFA", "SSO", "Identity federation"] },
                { key: "Authorization", details: ["RBAC", "ABAC", "Privileged access"] }
              ]
            },
            {
              title: "Network Security",
              description: "Network segmentation and traffic control",
              items: [
                { key: "Segmentation", details: ["Micro-segmentation", "East-west traffic", "North-south traffic"] },
                { key: "Protection", details: ["DDoS", "WAF", "VPN"] }
              ]
            }
          ],
          deliverables: [
            { title: "Security Architecture", items: ["Design documents", "Implementation guides", "Policies"] },
            { title: "Monitoring Setup", items: ["SIEM configuration", "Alert rules", "Response playbooks"] }
          ],
          bestPractices: [
            "Implement least privilege",
            "Enable comprehensive logging",
            "Use encryption everywhere",
            "Regular security testing"
          ],
          commonPitfalls: [
            "Incomplete segmentation",
            "Poor key management",
            "Insufficient monitoring",
            "Weak access controls"
          ],
          resources: [
            { title: "NIST Zero Trust", description: "NIST SP 800-207 Zero Trust Architecture", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf" },
            { title: "Cloudflare Zero Trust", description: "Practical guide to zero trust", url: "https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/" }
          ]
        }
      },
      {
        id: "6",
        category: "ai",
        title: "MLOps Pipeline Architecture",
        description: "Production-grade MLOps pipeline design with monitoring, versioning, and deployment strategies",
        tags: ["mlops", "ai", "machine-learning"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement an MLOps pipeline with the following specifications:
    
    1. Data Pipeline:
       - Data ingestion
       - Data validation
       - Feature engineering
       - Data versioning
       - Data quality checks
       - Pipeline monitoring
    
    2. Model Development:
       - Experiment tracking
       - Model versioning
       - Hyperparameter tuning
       - Cross-validation
       - Model evaluation
       - Documentation
    
    3. Training Infrastructure:
       - Resource management
       - Distributed training
       - GPU optimization
       - Cost monitoring
       - Pipeline scheduling
       - Cache management
    
    4. Model Serving:
       - Deployment strategies
       - A/B testing
       - Model monitoring
       - Performance tracking
       - Version control
       - Rollback procedures
    
    5. Model Monitoring:
       - Drift detection
       - Performance metrics
       - Resource utilization
       - Alert configuration
       - Dashboard setup
       - Logging strategy
    
    6. CI/CD Pipeline:
       - Automated testing
       - Deployment automation
       - Quality gates
       - Security checks
       - Documentation
       - Version control
    
    7. Production Optimization:
       - Model optimization
       - Inference optimization
       - Resource scaling
       - Cost optimization
       - Performance tuning
       - Batch processing
    
    For each component:
    - Implementation code
    - Configuration files
    - Testing strategy
    - Monitoring setup
    - Documentation
    - Best practices
    
    MLOps Requirements:
    [Paste your MLOps requirements here]`,
          context: "MLOps Requirements: [Paste your MLOps requirements here]",
          requirements: [
            "Data pipeline setup",
            "Model development workflow",
            "Training infrastructure",
            "Model serving",
            "Monitoring system",
            "CI/CD pipeline",
            "Production optimization"
          ],
          sections: [
            {
              title: "Data Pipeline",
              description: "Data ingestion and processing workflow",
              items: [
                { key: "Data Ingestion", details: ["Sources", "Validation", "Quality checks"] },
                { key: "Feature Engineering", details: ["Transformations", "Feature store", "Versioning"] }
              ]
            },
            {
              title: "Model Development",
              description: "Model training and evaluation workflow",
              items: [
                { key: "Training", details: ["Experiment tracking", "Hyperparameter tuning", "Evaluation"] },
                { key: "Versioning", details: ["Model registry", "Artifacts", "Documentation"] }
              ]
            }
          ],
          deliverables: [
            { title: "Pipeline Architecture", items: ["Design documents", "Infrastructure code", "Workflows"] },
            { title: "Monitoring Setup", items: ["Metrics configuration", "Dashboards", "Alerts"] }
          ],
          bestPractices: [
            "Version everything",
            "Automate testing",
            "Monitor continuously",
            "Document thoroughly"
          ],
          commonPitfalls: [
            "Poor data versioning",
            "Insufficient monitoring",
            "Manual deployments",
            "Lack of reproducibility"
          ],
          resources: [
            { title: "Google MLOps", description: "Google's MLOps best practices", url: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning" },
            { title: "MLflow Docs", description: "Open-source MLOps platform", url: "https://mlflow.org/docs/latest/index.html" }
          ]
        }
      },
      {
        id: "7",
        category: "system-design",
        title: "Distributed Cache Implementation Strategy",
        description: "Comprehensive guide for implementing a distributed caching system with eviction policies and consistency patterns",
        tags: ["caching", "distributed-systems", "performance"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement a distributed caching system with the following specifications:
    
    1. Cache Architecture:
       - Topology design (centralized vs distributed)
       - Cache clustering strategy
       - Replication patterns
       - Sharding approach
       - Cache invalidation flows
       - Cache warm-up procedures
    
    2. Consistency Management:
       - Cache coherence protocols
       - Write-through vs write-back
       - Read-through patterns
       - Eventual consistency handling
       - Cache synchronization
       - Conflict resolution
    
    3. Eviction Policies:
       - LRU implementation
       - LFU configuration
       - Time-based expiration
       - Size-based eviction
       - Custom eviction rules
       - Memory management
    
    4. Performance Optimization:
       - Cache hit ratio optimization
       - Latency reduction strategies
       - Compression techniques
       - Serialization formats
       - Connection pooling
       - Batch operations
    
    5. Resilience Features:
       - Cache fallback strategies
       - Circuit breaker integration
       - Retry mechanisms
       - Graceful degradation
       - Cache refresh patterns
       - Failure detection
    
    6. Monitoring & Metrics:
       - Hit/miss tracking
       - Eviction monitoring
       - Memory usage metrics
       - Latency measurements
       - Cache health checks
       - Alert configurations
    
    7. Implementation Details:
       - Technology selection (Redis/Memcached)
       - Configuration settings
       - Client library setup
       - Security controls
       - Backup strategy
       - Scaling patterns
    
    For each section, provide:
    - Implementation examples
    - Configuration templates
    - Performance benchmarks
    - Failure scenarios
    - Recovery procedures
    - Best practices
    
    Cache Requirements:
    [Paste your caching requirements here]`,
          context: "Cache Requirements: [Paste your caching requirements here]",
          requirements: [
            "Cache architecture design",
            "Consistency management",
            "Eviction policies",
            "Performance optimization",
            "Resilience features",
            "Monitoring setup",
            "Implementation details"
          ],
          sections: [
            {
              title: "Cache Architecture",
              description: "Topology design and clustering strategy",
              items: [
                { key: "Topology", details: ["Centralized vs distributed", "Clustering", "Replication"] },
                { key: "Cache Operations", details: ["Invalidation", "Warm-up", "Sharding"] }
              ]
            },
            {
              title: "Consistency Management",
              description: "Cache coherence and synchronization",
              items: [
                { key: "Write Policies", details: ["Write-through", "Write-back", "Write-around"] },
                { key: "Consistency", details: ["Cache coherence", "Synchronization", "Conflict resolution"] }
              ]
            }
          ],
          deliverables: [
            { title: "Implementation Guide", items: ["Architecture diagrams", "Configuration templates"] },
            { title: "Performance Analysis", items: ["Benchmarks", "Optimization recommendations"] }
          ],
          bestPractices: [
            "Implement proper eviction policies",
            "Use appropriate consistency patterns",
            "Monitor cache performance",
            "Plan for resilience"
          ],
          commonPitfalls: [
            "Poor eviction strategy",
            "Inconsistent caching",
            "Missing monitoring",
            "Inadequate resilience"
          ],
          resources: [
            { title: "Redis Documentation", description: "Official Redis guide for distributed caching", url: "https://redis.io/docs/" },
            { title: "Caching Patterns", description: "Microsoft guide to caching patterns", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside" }
          ]
        }
      },
      {
        id: "8",
        category: "backend",
        title: "REST API Optimization Blueprint",
        description: "Detailed strategy for building and optimizing RESTful APIs with versioning and rate limiting",
        tags: ["rest", "api", "backend"],
        difficulty: "Intermediate",
        prompt: {
          overview: `Design and optimize a RESTful API system with the following components:
    
    1. API Design:
       - Resource modeling
       - Endpoint structure
       - HTTP method usage
       - Status code patterns
       - Request/response schemas
       - Documentation standards
    
    2. Versioning Strategy:
       - URI versioning
       - Header versioning
       - Media type versioning
       - Deprecation policies
       - Backward compatibility
       - Migration guides
    
    3. Performance Features:
       - Caching headers
       - Pagination patterns
       - Filtering capabilities
       - Compression support
       - Batch endpoints
       - Async processing
    
    4. Rate Limiting:
       - Throttling policies
       - Quota management
       - Token bucket algorithm
       - Burst handling
       - Client feedback
       - Monitoring setup
    
    5. Security Controls:
       - Authentication flows
       - Authorization scopes
       - CSRF protection
       - XSS prevention
       - Rate limit enforcement
       - Audit logging
    
    6. Error Handling:
       - Error code system
       - Response formatting
       - Validation messages
       - Retry recommendations
       - Fallback strategies
       - Logging patterns
    
    7. Testing Strategy:
       - Unit tests
       - Integration tests
       - Load testing
       - Security testing
       - Contract testing
       - Performance testing
    
    For each component:
    - Code examples
    - Configuration files
    - Best practices
    - Common pitfalls
    - Performance metrics
    - Implementation guide
    
    API Requirements:
    [Paste your API requirements here]`,
          context: "API Requirements: [Paste your API requirements here]",
          requirements: [
            "API design principles",
            "Versioning strategy",
            "Performance optimization",
            "Rate limiting",
            "Security controls",
            "Error handling",
            "Testing approach"
          ],
          sections: [
            {
              title: "API Design",
              description: "Resource modeling and endpoint structure",
              items: [
                { key: "Resources", details: ["Modeling", "Endpoints", "HTTP methods"] },
                { key: "Documentation", details: ["Standards", "Schemas", "Examples"] }
              ]
            },
            {
              title: "Versioning",
              description: "API versioning strategies",
              items: [
                { key: "Version Types", details: ["URI", "Header", "Media type"] },
                { key: "Compatibility", details: ["Backward compatibility", "Migration", "Deprecation"] }
              ]
            }
          ],
          deliverables: [
            { title: "API Documentation", items: ["OpenAPI specs", "Implementation guide"] },
            { title: "Testing Suite", items: ["Test cases", "Performance benchmarks"] }
          ],
          bestPractices: [
            "Follow REST principles",
            "Implement proper versioning",
            "Use appropriate security controls",
            "Handle errors gracefully"
          ],
          commonPitfalls: [
            "Poor resource modeling",
            "Inadequate versioning",
            "Missing security controls",
            "Improper error handling"
          ],
          resources: [
            { title: "REST API Design", description: "RESTful API design guidelines", url: "https://restfulapi.net/" },
            { title: "API Security Guide", description: "OWASP API security best practices", url: "https://owasp.org/www-project-api-security/" }
          ]
        }
      },
      {
        id: "9",
        category: "frontend",
        title: "Progressive Web App Architecture",
        description: "Complete PWA implementation guide with offline support and performance optimization",
        tags: ["pwa", "frontend", "offline"],
        difficulty: "Intermediate",
        prompt: {
          overview: `Design and implement a Progressive Web App with these specifications:
    
    1. Core PWA Features:
       - Service worker setup
       - Manifest configuration
       - HTTPS enforcement
       - App shell architecture
       - Push notifications
       - Background sync
    
    2. Offline Capabilities:
       - Cache strategies
       - Offline fallbacks
       - Data synchronization
       - Queue management
       - Conflict resolution
       - Storage quotas
    
    3. Performance Optimization:
       - Lazy loading
       - Code splitting
       - Asset optimization
       - Critical CSS
       - Font loading
       - Image optimization
    
    4. User Experience:
       - Install prompts
       - Splash screens
       - Navigation patterns
       - Error states
       - Loading indicators
       - Feedback mechanisms
    
    5. Testing Strategy:
       - Lighthouse audits
       - Offline testing
       - Network testing
       - Device testing
       - Performance testing
       - Usability testing
    
    6. Security Features:
       - Content Security Policy
       - Subresource Integrity
       - HTTPS validation
       - Storage encryption
       - Input validation
       - Session management
    
    7. Deployment Setup:
       - Build configuration
       - Cache versioning
       - Update strategies
       - Rollback procedures
       - Monitoring setup
       - Analytics integration
    
    For each section:
    - Implementation code
    - Configuration files
    - Best practices
    - Performance metrics
    - Testing scenarios
    - Documentation
    
    PWA Requirements:
    [Paste your PWA requirements here]`,
          context: "PWA Requirements: [Paste your PWA requirements here]",
          requirements: [
            "Core PWA features",
            "Offline capabilities",
            "Performance optimization",
            "User experience",
            "Testing strategy",
            "Security features",
            "Deployment setup"
          ],
          sections: [
            {
              title: "Core Features",
              description: "Essential PWA functionality",
              items: [
                { key: "Service Worker", details: ["Setup", "Lifecycle", "Caching"] },
                { key: "App Shell", details: ["Architecture", "Manifest", "HTTPS"] }
              ]
            },
            {
              title: "Offline Support",
              description: "Offline capabilities and sync",
              items: [
                { key: "Caching", details: ["Strategies", "Fallbacks", "Storage"] },
                { key: "Sync", details: ["Background sync", "Queue", "Conflict resolution"] }
              ]
            }
          ],
          deliverables: [
            { title: "Implementation Guide", items: ["Setup instructions", "Configuration files"] },
            { title: "Testing Documentation", items: ["Test cases", "Performance metrics"] }
          ],
          bestPractices: [
            "Implement proper caching",
            "Optimize performance",
            "Handle offline scenarios",
            "Ensure security"
          ],
          commonPitfalls: [
            "Poor offline support",
            "Inadequate caching",
            "Missing security features",
            "Performance issues"
          ],
          resources: [
            { title: "Google PWA Guide", description: "Official PWA development guide", url: "https://developers.google.com/web/progressive-web-apps" },
            { title: "Offline Cookbook", description: "Jake Archibald's offline strategies", url: "https://web.dev/offline-cookbook/" }
          ]
        }
      },
      {
        id: "10",
        category: "devops",
        title: "Infrastructure as Code Blueprint",
        description: "Comprehensive IaC implementation with Terraform/CloudFormation best practices",
        tags: ["iac", "devops", "automation"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement an Infrastructure as Code solution with:
    
    1. Infrastructure Design:
       - Resource modeling
       - Module structure
       - Environment separation
       - State management
       - Dependency mapping
       - Naming conventions
    
    2. Configuration Management:
       - Variable handling
       - Secret management
       - Provider setup
       - Backend configuration
       - Version control
       - Documentation
    
    3. Deployment Pipeline:
       - CI/CD integration
       - Validation steps
       - Plan/apply workflows
       - Rollback procedures
       - Drift detection
       - Approval gates
    
    4. Security Controls:
       - IAM policies
       - Network security
       - Encryption setup
       - Audit logging
       - Access controls
       - Compliance checks
    
    5. Optimization Features:
       - Cost tagging
       - Resource optimization
       - Reusability patterns
       - Module composition
       - Performance tuning
       - Cleanup procedures
    
    6. Monitoring Setup:
       - Infrastructure metrics
       - Change tracking
       - Alert configuration
       - Health checks
       - Logging setup
       - Visualization tools
    
    7. Maintenance Strategy:
       - Version upgrades
       - Refactoring patterns
       - Testing strategy
       - Documentation updates
       - Dependency management
       - Backup procedures
    
    For each component:
    - Template examples
    - Configuration files
    - Pipeline scripts
    - Best practices
    - Validation checks
    - Troubleshooting guide
    
    IaC Requirements:
    [Paste your IaC requirements here]`,
          context: "IaC Requirements: [Paste your IaC requirements here]",
          requirements: [
            "Infrastructure design",
            "Configuration management",
            "Deployment pipeline",
            "Security controls",
            "Optimization features",
            "Monitoring setup",
            "Maintenance strategy"
          ],
          sections: [
            {
              title: "Infrastructure Design",
              description: "Resource modeling and module structure",
              items: [
                { key: "Resources", details: ["Modeling", "Dependencies", "Naming"] },
                { key: "Modules", details: ["Structure", "Reusability", "Versioning"] }
              ]
            },
            {
              title: "Configuration",
              description: "Configuration and secret management",
              items: [
                { key: "Variables", details: ["Handling", "Validation", "Defaults"] },
                { key: "Secrets", details: ["Management", "Encryption", "Access"] }
              ]
            }
          ],
          deliverables: [
            { title: "Infrastructure Code", items: ["Templates", "Modules", "Scripts"] },
            { title: "Documentation", items: ["Architecture", "Procedures", "Runbooks"] }
          ],
          bestPractices: [
            "Use modular design",
            "Implement state management",
            "Follow security best practices",
            "Maintain documentation"
          ],
          commonPitfalls: [
            "Poor state management",
            "Inadequate security",
            "Missing documentation",
            "Weak testing"
          ],
          resources: [
            { title: "Terraform Docs", description: "Official Terraform documentation", url: "https://www.terraform.io/docs" },
            { title: "AWS CloudFormation", description: "AWS IaC guide", url: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html" }
          ]
        }
      },
      {
        id: "11",
        category: "security",
        title: "Penetration Testing Framework",
        description: "Detailed penetration testing methodology with automated and manual testing strategies",
        tags: ["pentest", "security", "vulnerability"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement a penetration testing framework with:
    
    1. Reconnaissance Phase:
       - Target enumeration
       - Network mapping
       - Service discovery
       - Vulnerability scanning
       - OSINT collection
       - Footprinting
    
    2. Vulnerability Assessment:
       - Automated scanning
       - Manual testing
       - False positive filtering
       - Risk scoring
       - CVSS evaluation
       - Exploit validation
    
    3. Exploitation Phase:
       - Exploit selection
       - Payload crafting
       - Privilege escalation
       - Lateral movement
       - Persistence methods
       - Cleanup procedures
    
    4. Reporting Structure:
       - Finding documentation
       - Risk assessment
       - Mitigation recommendations
       - Executive summary
       - Technical details
       - Remediation tracking
    
    5. Tool Configuration:
       - Scanner setup
       - Exploit frameworks
       - Proxy configuration
       - Logging setup
       - Evidence collection
       - Automation scripts
    
    6. Compliance Mapping:
       - OWASP Top 10
       - NIST controls
       - PCI DSS requirements
       - ISO 27001 alignment
       - GDPR considerations
       - Audit preparation
    
    7. Post-Testing Actions:
       - Remediation validation
       - Retest procedures
       - Documentation updates
       - Knowledge sharing
       - Tool improvements
       - Process refinement
    
    For each phase:
    - Tool recommendations
    - Script examples
    - Testing procedures
    - Report templates
    - Risk matrices
    - Best practices
    
    Testing Requirements:
    [Paste your testing requirements here]`,
          context: "Testing Requirements: [Paste your testing requirements here]",
          requirements: [
            "Reconnaissance methodology",
            "Vulnerability assessment",
            "Exploitation approach",
            "Reporting structure",
            "Tool configuration",
            "Compliance mapping",
            "Post-testing procedures"
          ],
          sections: [
            {
              title: "Reconnaissance",
              description: "Information gathering and enumeration",
              items: [
                { key: "Information Gathering", details: ["Enumeration", "Mapping", "Discovery"] },
                { key: "OSINT", details: ["Collection", "Analysis", "Validation"] }
              ]
            },
            {
              title: "Assessment",
              description: "Vulnerability assessment and validation",
              items: [
                { key: "Scanning", details: ["Automated", "Manual", "Validation"] },
                { key: "Risk Analysis", details: ["Scoring", "Evaluation", "Prioritization"] }
              ]
            }
          ],
          deliverables: [
            { title: "Testing Documentation", items: ["Methodology", "Procedures", "Templates"] },
            { title: "Reports", items: ["Findings", "Recommendations", "Tracking"] }
          ],
          bestPractices: [
            "Follow testing methodology",
            "Validate findings",
            "Document everything",
            "Maintain confidentiality"
          ],
          commonPitfalls: [
            "Incomplete reconnaissance",
            "False positives",
            "Poor documentation",
            "Missed vulnerabilities"
          ],
          resources: [
            { title: "OWASP Testing Guide", description: "OWASP penetration testing methodology", url: "https://owasp.org/www-project-web-security-testing-guide/" },
            { title: "PTES Standard", description: "Penetration Testing Execution Standard", url: "http://www.pentest-standard.org/index.php/Main_Page" }
          ]
        }
      },
      {
        id: "12",
        category: "ai",
        title: "Natural Language Processing Pipeline",
        description: "Complete NLP pipeline design with preprocessing, modeling, and deployment",
        tags: ["nlp", "ai", "text-processing"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement an NLP pipeline with these components:
    
    1. Data Preprocessing:
       - Text normalization
       - Tokenization strategies
       - Stop word handling
       - Stemming/lemmatization
       - Entity extraction
       - Data augmentation
    
    2. Feature Engineering:
       - Word embeddings
       - TF-IDF implementation
       - N-gram generation
       - POS tagging
       - Dependency parsing
       - Feature selection
    
    3. Model Architecture:
       - Model selection
       - Transfer learning
       - Fine-tuning strategy
       - Ensemble methods
       - Hyperparameter tuning
       - Validation setup
    
    4. Training Pipeline:
       - Batch processing
       - Distributed training
       - Early stopping
       - Checkpoint management
       - Resource optimization
       - Logging setup
    
    5. Inference System:
       - Real-time processing
       - Batch prediction
       - Model serving
       - Error handling
       - Performance monitoring
       - Version control
    
    6. Evaluation Metrics:
       - Accuracy tracking
       - F1 score calculation
       - Confusion matrices
       - BLEU/ROUGE scores
       - Custom metrics
       - Visualization tools
    
    7. Deployment Strategy:
       - Containerization
       - API integration
       - Scaling patterns
       - Monitoring setup
       - Update procedures
       - Rollback plans
    
    For each component:
    - Code examples
    - Configuration files
    - Best practices
    - Performance benchmarks
    - Testing strategies
    - Documentation
    
    NLP Requirements:
    [Paste your NLP requirements here]`,
          context: "NLP Requirements: [Paste your NLP requirements here]",
          requirements: [
            "Data preprocessing",
            "Feature engineering",
            "Model architecture",
            "Training pipeline",
            "Inference system",
            "Evaluation metrics",
            "Deployment strategy"
          ],
          sections: [
            {
              title: "Preprocessing",
              description: "Text preprocessing and normalization",
              items: [
                { key: "Text Processing", details: ["Normalization", "Tokenization", "Cleaning"] },
                { key: "Feature Extraction", details: ["Embeddings", "N-grams", "POS tagging"] }
              ]
            },
            {
              title: "Model Development",
              description: "Model architecture and training",
              items: [
                { key: "Architecture", details: ["Selection", "Transfer learning", "Fine-tuning"] },
                { key: "Training", details: ["Pipeline", "Validation", "Optimization"] }
              ]
            }
          ],
          deliverables: [
            { title: "Pipeline Code", items: ["Implementation", "Configuration", "Documentation"] },
            { title: "Model Artifacts", items: ["Trained models", "Evaluation results", "Deployment configs"] }
          ],
          bestPractices: [
            "Implement proper preprocessing",
            "Use appropriate model architecture",
            "Monitor training process",
            "Evaluate thoroughly"
          ],
          commonPitfalls: [
            "Poor preprocessing",
            "Inadequate evaluation",
            "Missing monitoring",
            "Deployment issues"
          ],
          resources: [
            { title: "Hugging Face NLP", description: "NLP models and pipelines", url: "https://huggingface.co/docs/transformers/index" },
            { title: "Spacy Docs", description: "Industrial-strength NLP library", url: "https://spacy.io/usage" }
          ]
        }
      },
      {
        id: "13",
        category: "system-design",
        title: "Event-Driven Architecture Blueprint",
        description: "Complete design for an event-driven system with choreography, orchestration, and fault tolerance",
        tags: ["event-driven", "system-design", "messaging"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement an event-driven architecture with these specifications:
    
    1. Event Infrastructure:
       - Event bus selection
       - Topic/queue design
       - Partitioning strategy
       - Message format standards
       - Schema registry
       - Dead letter queues
    
    2. Event Patterns:
       - Choreography setup
       - Orchestration flows
       - Publish/subscribe model
       - Event sourcing
       - Command patterns
       - Saga implementation
    
    3. Processing Pipeline:
       - Event handlers
       - Idempotency controls
       - Deduplication logic
       - Retry mechanisms
       - Parallel processing
       - Batch handling
    
    4. Fault Tolerance:
       - Error handling flows
       - Circuit breakers
       - Retry policies
       - Fallback strategies
       - Message replay
       - Recovery procedures
    
    5. Scalability Features:
       - Consumer groups
       - Load balancing
       - Auto-scaling rules
       - Backpressure handling
       - Throughput optimization
       - Latency controls
    
    6. Monitoring & Observability:
       - Event tracking
       - Latency metrics
       - Error monitoring
       - Throughput dashboards
       - Alert configuration
       - Audit logging
    
    7. Security Measures:
       - Message encryption
       - Access controls
       - Authentication
       - Authorization
       - Data masking
       - Compliance checks
    
    For each section:
    - Implementation examples
    - Configuration templates
    - Failure scenarios
    - Performance metrics
    - Best practices
    - Troubleshooting guides
    
    Event System Requirements:
    [Paste your event-driven requirements here]`,
          context: "Event System Requirements: [Paste your event-driven requirements here]",
          requirements: [
            "Event infrastructure setup",
            "Event patterns implementation",
            "Processing pipeline",
            "Fault tolerance",
            "Scalability features",
            "Monitoring & observability",
            "Security measures"
          ],
          sections: [
            {
              title: "Event Infrastructure",
              description: "Event bus and messaging setup",
              items: [
                { key: "Event Bus", details: ["Selection", "Topic design", "Partitioning"] },
                { key: "Message Handling", details: ["Format standards", "Schema registry", "DLQ"] }
              ]
            },
            {
              title: "Event Patterns",
              description: "Choreography and orchestration patterns",
              items: [
                { key: "Pattern Types", details: ["Choreography", "Orchestration", "Pub/sub"] },
                { key: "Implementation", details: ["Event sourcing", "Sagas", "Commands"] }
              ]
            }
          ],
          deliverables: [
            { title: "Implementation Guide", items: ["Configuration templates", "Code examples"] },
            { title: "Documentation", items: ["Architecture diagrams", "Pattern guides"] }
          ],
          bestPractices: [
            "Use appropriate event patterns",
            "Implement proper error handling",
            "Monitor event flow",
            "Ensure scalability"
          ],
          commonPitfalls: [
            "Poor event design",
            "Missing error handling",
            "Inadequate monitoring",
            "Scalability issues"
          ],
          resources: [
            { title: "Kafka Documentation", description: "Apache Kafka event streaming guide", url: "https://kafka.apache.org/documentation/" },
            { title: "Event-Driven Patterns", description: "Martin Fowler's event-driven insights", url: "https://martinfowler.com/articles/201701-event-driven.html" }
          ]
        }
      },
      {
        id: "14",
        category: "backend",
        title: "GraphQL Server Optimization",
        description: "Detailed GraphQL server implementation with query optimization and security best practices",
        tags: ["graphql", "backend", "api"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and optimize a GraphQL server with these components:
    
    1. Schema Design:
       - Type definitions
       - Query structure
       - Mutation patterns
       - Subscription setup
       - Interface usage
       - Schema stitching
    
    2. Query Optimization:
       - Data loader patterns
       - N+1 problem solutions
       - Query complexity analysis
       - Field selection
       - Pagination strategies
       - Caching layers
    
    3. Resolver Implementation:
       - Resolver composition
       - Error handling
       - Input validation
       - Batch processing
       - Async operations
       - Logging integration
    
    4. Subscription System:
       - WebSocket setup
       - Pub/sub implementation
       - Real-time updates
       - Connection management
       - Subscription cleanup
       - Rate limiting
    
    5. Security Features:
       - Authentication flows
       - Authorization rules
       - Query depth limits
       - Rate limiting
       - Input sanitization
       - Audit trails
    
    6. Performance Tuning:
       - Response caching
       - Query batching
       - Persisted queries
       - Compression
       - Connection pooling
       - Load testing
    
    7. Monitoring Setup:
       - Query metrics
       - Error tracking
       - Performance dashboards
       - Slow query logging
       - Alert configuration
       - Usage analytics
    
    For each component:
    - Code examples
    - Configuration files
    - Best practices
    - Performance benchmarks
    - Security guidelines
    - Testing scenarios
    
    GraphQL Requirements:
    [Paste your GraphQL requirements here]`,
          context: "GraphQL Requirements: [Paste your GraphQL requirements here]",
          requirements: [
            "Schema design",
            "Query optimization",
            "Resolver implementation",
            "Subscription system",
            "Security features",
            "Performance tuning",
            "Monitoring setup"
          ],
          sections: [
            {
              title: "Schema Design",
              description: "Type definitions and query structure",
              items: [
                { key: "Types", details: ["Definitions", "Interfaces", "Unions"] },
                { key: "Operations", details: ["Queries", "Mutations", "Subscriptions"] }
              ]
            }
          ],
          deliverables: [
            { title: "Schema Documentation", items: ["Type definitions", "Query examples"] },
            { title: "Implementation Guide", items: ["Code samples", "Best practices"] }
          ],
          bestPractices: [
            "Use proper schema design",
            "Implement query optimization",
            "Handle errors appropriately",
            "Monitor performance"
          ],
          commonPitfalls: [
            "Poor schema design",
            "Missing optimizations",
            "Inadequate security",
            "Performance issues"
          ],
          resources: [
            { title: "GraphQL Official Docs", description: "Official GraphQL documentation", url: "https://graphql.org/learn/" },
            { title: "Apollo Optimization", description: "GraphQL optimization with Apollo", url: "https://www.apollographql.com/docs/react/performance/performance/" }
          ]
        }
      },
      {
        id: "15",
        category: "frontend",
        title: "Design System Implementation",
        description: "Comprehensive design system setup with component library and accessibility features",
        tags: ["design-system", "frontend", "accessibility"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement a frontend design system with these specifications:
    
    1. Component Library:
       - Atomic components
       - Pattern library
       - Variant management
       - Props documentation
       - Storybook setup
       - Component testing
    
    2. Styling Architecture:
       - CSS architecture
       - Theme configuration
       - Design tokens
       - Dark mode support
       - Responsive utilities
       - Animation system
    
    3. Accessibility Features:
       - ARIA implementation
       - Keyboard navigation
       - Screen reader support
       - Color contrast
       - Focus management
       - Testing guidelines
    
    4. State Management:
       - Component state
       - Global state
       - Form handling
       - Error states
       - Loading patterns
       - Undo/redo support
    
    5. Performance Optimization:
       - Lazy loading
       - Bundle optimization
       - Render optimization
       - CSS pruning
       - Asset caching
       - Preloading
    
    6. Documentation System:
       - Usage guides
       - API documentation
       - Style guides
       - Change logs
       - Examples library
       - Versioning
    
    7. Integration Strategy:
       - Framework compatibility
       - Build tooling
       - CI/CD setup
       - Package publishing
       - Update strategy
       - Deprecation handling
    
    For each section:
    - Implementation code
    - Configuration setup
    - Best practices
    - Testing strategies
    - Performance metrics
    - Accessibility checklist
    
    Design System Requirements:
    [Paste your design system requirements here]`,
          context: "Design System Requirements: [Paste your design system requirements here]",
          requirements: [
            "Component library",
            "Styling architecture",
            "Accessibility features",
            "State management",
            "Performance optimization",
            "Documentation system",
            "Integration strategy"
          ],
          sections: [
            {
              title: "Component Library",
              description: "Atomic design and component patterns",
              items: [
                { key: "Components", details: ["Atomic design", "Pattern library", "Testing"] },
                { key: "Documentation", details: ["Props", "Examples", "Guidelines"] }
              ]
            }
          ],
          deliverables: [
            { title: "Component Library", items: ["Base components", "Documentation"] },
            { title: "Style Guide", items: ["Design tokens", "Usage patterns"] }
          ],
          bestPractices: [
            "Follow atomic design",
            "Ensure accessibility",
            "Document thoroughly",
            "Test components"
          ],
          commonPitfalls: [
            "Poor documentation",
            "Missing accessibility",
            "Inconsistent patterns",
            "Inadequate testing"
          ],
          resources: [
            { title: "Storybook Docs", description: "Official Storybook design system guide", url: "https://storybook.js.org/docs/react/get-started/introduction" },
            { title: "Web Accessibility", description: "W3C accessibility guidelines", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" }
          ]
        }
      },
      {
        id: "16",
        category: "devops",
        title: "Serverless Architecture Deployment",
        description: "Complete serverless deployment strategy with cost optimization and monitoring",
        tags: ["serverless", "devops", "cloud"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement a serverless architecture with:
    
    1. Function Design:
       - Function granularity
       - Handler patterns
       - Event triggers
       - Cold start mitigation
       - Dependency management
       - Configuration setup
    
    2. Infrastructure Setup:
       - API Gateway config
       - Event sources
       - Storage integration
       - Queue systems
       - Database connections
       - Networking rules
    
    3. Cost Optimization:
       - Resource allocation
       - Usage monitoring
       - Throttling controls
       - Cost alerts
       - Cleanup procedures
       - Budget tracking
    
    4. Security Controls:
       - IAM permissions
       - Environment variables
       - Secret management
       - VPC integration
       - Authentication
       - Audit logging
    
    5. Deployment Pipeline:
       - CI/CD configuration
       - Canary deployments
       - Rollback strategy
       - Testing stages
       - Version control
       - Approval workflows
    
    6. Monitoring System:
       - Invocation tracking
       - Error monitoring
       - Latency metrics
       - Log aggregation
       - Alert setup
       - Dashboard creation
    
    7. Scaling Strategy:
       - Concurrency handling
       - Warm-up techniques
       - Rate limiting
       - Resource scaling
       - Performance tuning
       - Failure recovery
    
    For each component:
    - Configuration templates
    - Deployment scripts
    - Best practices
    - Cost analysis
    - Monitoring setup
    - Troubleshooting guide
    
    Serverless Requirements:
    [Paste your serverless requirements here]`,
          context: "Serverless Requirements: [Paste your serverless requirements here]",
          requirements: [
            "Function design",
            "Infrastructure setup",
            "Cost optimization",
            "Security controls",
            "Deployment pipeline",
            "Monitoring system",
            "Scaling strategy"
          ],
          sections: [
            {
              title: "Function Design",
              description: "Serverless function architecture",
              items: [
                { key: "Functions", details: ["Granularity", "Handlers", "Events"] },
                { key: "Configuration", details: ["Dependencies", "Environment", "Triggers"] }
              ]
            }
          ],
          deliverables: [
            { title: "Infrastructure Code", items: ["Function definitions", "Configuration"] },
            { title: "Documentation", items: ["Architecture diagrams", "Deployment guide"] }
          ],
          bestPractices: [
            "Optimize function size",
            "Implement proper monitoring",
            "Control costs",
            "Ensure security"
          ],
          commonPitfalls: [
            "Poor function design",
            "Cost overruns",
            "Missing monitoring",
            "Security gaps"
          ],
          resources: [
            { title: "AWS Lambda Docs", description: "Official AWS Lambda serverless guide", url: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" },
            { title: "Serverless Framework", description: "Serverless deployment framework", url: "https://www.serverless.com/framework/docs/" }
          ]
        }
      },
      {
        id: "17",
        category: "security",
        title: "Cloud Security Posture Management",
        description: "Comprehensive cloud security framework with misconfiguration detection and compliance",
        tags: ["cloud-security", "security", "compliance"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement a cloud security posture management system with:
    
    1. Configuration Assessment:
       - Resource inventory
       - Configuration scanning
       - Policy validation
       - Drift detection
       - Baseline management
       - Audit trails
    
    2. Threat Detection:
       - Anomaly detection
       - Access monitoring
       - Network analysis
       - Log correlation
       - Behavior tracking
       - Alert rules
    
    3. Compliance Management:
       - CIS benchmarks
       - NIST alignment
       - GDPR controls
       - HIPAA requirements
       - PCI DSS checks
       - Custom policies
    
    4. Remediation Strategy:
       - Auto-remediation
       - Manual fixes
       - Playbook creation
       - Validation testing
       - Rollback plans
       - Reporting system
    
    5. Identity Security:
       - IAM analysis
       - Privilege monitoring
       - MFA enforcement
       - Role assessment
       - Access reviews
       - Session controls
    
    6. Monitoring Setup:
       - Dashboard creation
       - Alert configuration
       - Metric tracking
       - Log aggregation
       - Incident tracking
       - Visualization tools
    
    7. Integration Points:
       - CI/CD security
       - Cloud provider APIs
       - Third-party tools
       - Notification systems
       - Ticketing integration
       - Reporting exports
    
    For each component:
    - Tool configurations
    - Policy templates
    - Automation scripts
    - Compliance mappings
    - Remediation guides
    - Monitoring setup
    
    Cloud Security Requirements:
    [Paste your cloud security requirements here]`,
          context: "Cloud Security Requirements: [Paste your cloud security requirements here]",
          requirements: [
            "Configuration assessment",
            "Threat detection",
            "Compliance management",
            "Remediation strategy",
            "Identity security",
            "Monitoring setup",
            "Integration points"
          ],
          sections: [
            {
              title: "Configuration Assessment",
              description: "Cloud resource configuration analysis",
              items: [
                { key: "Assessment", details: ["Resource inventory", "Policy validation"] },
                { key: "Monitoring", details: ["Drift detection", "Compliance checks"] }
              ]
            }
          ],
          deliverables: [
            { title: "Security Framework", items: ["Policies", "Procedures"] },
            { title: "Documentation", items: ["Architecture", "Compliance mappings"] }
          ],
          bestPractices: [
            "Regular assessments",
            "Automated remediation",
            "Continuous monitoring",
            "Policy enforcement"
          ],
          commonPitfalls: [
            "Incomplete coverage",
            "Manual remediation",
            "Poor monitoring",
            "Policy gaps"
          ],
          resources: [
            { title: "CIS Benchmarks", description: "Center for Internet Security cloud benchmarks", url: "https://www.cisecurity.org/cis-benchmarks/" },
            { title: "AWS Security Best Practices", description: "AWS cloud security guide", url: "https://docs.aws.amazon.com/security/" }
          ]
        }
      },
      {
        id: "18",
        category: "ai",
        title: "Computer Vision Pipeline Design",
        description: "End-to-end computer vision pipeline with preprocessing, modeling, and real-time inference",
        tags: ["computer-vision", "ai", "image-processing"],
        difficulty: "Advanced",
        prompt: {
          overview: `Design and implement a computer vision pipeline with these components:
    
    1. Data Preparation:
       - Image preprocessing
       - Augmentation strategies
       - Labeling workflow
       - Dataset versioning
       - Quality checks
       - Format conversion
    
    2. Model Architecture:
       - CNN selection
       - Transfer learning
       - Custom layers
       - Loss functions
       - Optimization setup
       - Evaluation metrics
    
    3. Training Pipeline:
       - Batch processing
       - GPU optimization
       - Distributed training
       - Checkpoint saving
       - Early stopping
       - Hyperparameter tuning
    
    4. Inference System:
       - Real-time processing
       - Batch inference
       - Model optimization
       - Edge deployment
       - Error handling
       - Latency tracking
    
    5. Post-Processing:
       - Bounding box handling
       - Segmentation masks
       - Confidence scoring
       - Result filtering
       - Visualization tools
       - Output formatting
    
    6. Monitoring Setup:
       - Accuracy tracking
       - Drift detection
       - Performance metrics
       - Error logging
       - Alert configuration
       - Dashboard setup
    
    7. Deployment Strategy:
       - Container setup
       - API integration
       - Scaling patterns
       - Version control
       - Update procedures
       - Rollback plans
    
    For each component:
    - Code examples
    - Configuration files
    - Best practices
    - Performance benchmarks
    - Testing strategies
    - Documentation
    
    Vision Requirements:
    [Paste your vision requirements here]`,
          context: "Vision Requirements: [Paste your vision requirements here]",
          requirements: [
            "Data preparation",
            "Model architecture",
            "Training pipeline",
            "Inference system",
            "Post-processing",
            "Monitoring setup",
            "Deployment strategy"
          ],
          sections: [
            {
              title: "Data Preparation",
              description: "Image preprocessing and augmentation",
              items: [
                { key: "Preprocessing", details: ["Normalization", "Augmentation", "Quality"] },
                { key: "Pipeline", details: ["Versioning", "Validation", "Storage"] }
              ]
            }
          ],
          deliverables: [
            { title: "Pipeline Code", items: ["Processing scripts", "Model code"] },
            { title: "Documentation", items: ["Architecture", "Training guide"] }
          ],
          bestPractices: [
            "Proper preprocessing",
            "Robust training",
            "Efficient inference",
            "Regular monitoring"
          ],
          commonPitfalls: [
            "Poor data quality",
            "Overfitting",
            "Slow inference",
            "Missing monitoring"
          ],
          resources: [
            { title: "OpenCV Docs", description: "Open-source computer vision library", url: "https://docs.opencv.org/master/" },
            { title: "TensorFlow Vision", description: "TensorFlow computer vision guide", url: "https://www.tensorflow.org/tutorials/images/classification" }
          ]
        }
      },
  {
    id: "19",
    category: "system-design",
    title: "Load Balancer Configuration Strategy",
    description: "Detailed load balancing design with health checks, routing, and high availability",
    tags: ["load-balancing", "system-design", "ha"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and implement a load balancing strategy with these components:

1. Load Balancer Architecture:
   - Layer 4 vs Layer 7
   - Topology design
   - Multi-region setup
   - Failover mechanisms
   - Session persistence
   - SSL termination

2. Traffic Routing:
   - Round-robin policy
   - Least connections
   - Weighted distribution
   - Geo-based routing
   - Path-based routing
   - Sticky sessions

3. Health Monitoring:
   - Health check endpoints
   - Probe configurations
   - Failure thresholds
   - Recovery detection
   - Alert integration
   - Status reporting

4. High Availability:
   - Redundancy setup
   - Active-passive modes
   - Failover procedures
   - DNS configuration
   - Backup strategies
   - Recovery testing

5. Performance Tuning:
   - Connection limits
   - Timeout settings
   - Buffer optimization
   - Compression setup
   - Caching integration
   - Latency reduction

6. Security Features:
   - TLS configuration
   - Rate limiting
   - IP whitelisting
   - DDoS protection
   - WAF integration
   - Audit logging

7. Monitoring & Metrics:
   - Traffic analytics
   - Error rates
   - Latency tracking
   - Throughput metrics
   - Alert setup
   - Dashboard creation

For each section:
- Configuration examples
- Implementation guides
- Best practices
- Failure scenarios
- Performance benchmarks
- Troubleshooting steps

Load Balancer Requirements:
[Paste your load balancer requirements here]`,
      context: "Load Balancer Requirements: [Paste your load balancer requirements here]",
      requirements: [
        "Load balancer architecture",
        "Traffic routing",
        "Health monitoring",
        "High availability",
        "Performance tuning",
        "Security features",
        "Monitoring setup"
      ],
      sections: [
        {
          title: "Load Balancer Architecture",
          description: "Core design and topology",
          items: [
            { key: "Layers", details: ["Layer 4", "Layer 7"] },
            { key: "Features", details: ["Failover", "SSL", "Persistence"] }
          ]
        },
        {
          title: "Traffic Routing",
          description: "Routing policies and strategies",
          items: [
            { key: "Policies", details: ["Round-robin", "Least connections", "Weighted"] },
            { key: "Advanced", details: ["Geo-based", "Path-based"] }
          ]
        }
      ],
      deliverables: [
        { title: "Configuration Files", items: ["NGINX/HAProxy configs", "Health check scripts"] },
        { title: "Deployment Guide", items: ["Setup steps", "Testing procedures"] }
      ],
      bestPractices: [
        "Implement health checks",
        "Use SSL termination",
        "Optimize routing policies",
        "Monitor traffic patterns"
      ],
      commonPitfalls: [
        "Overloaded servers",
        "Improper health checks",
        "Session persistence issues",
        "Unmonitored failures"
      ],
      resources: [
        { title: "NGINX Load Balancing", description: "Official NGINX load balancing guide", url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/" },
        { title: "AWS ELB Docs", description: "AWS Elastic Load Balancer documentation", url: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html" }
      ]
    }
  },
  {
    id: "20",
    category: "system-design",
    title: "CQRS Implementation Guide",
    description: "Complete CQRS pattern implementation with command and query separation",
    tags: ["cqrs", "system-design", "patterns"],
    difficulty: "Advanced",
    prompt: {
      overview: `Design and implement a CQRS architecture with these specifications:

1. Command Design:
   - Command structure
   - Validation rules
   - Handler implementation
   - Idempotency controls
   - Command logging
   - Retry policies

2. Query Design:
   - Query structure
   - Data projection
   - Read model setup
   - Caching strategy
   - Query optimization
   - Response formatting

3. Data Separation:
   - Write database design
   - Read database design
   - Synchronization flows
   - Event sourcing
   - Data consistency
   - Schema updates

4. Event Handling:
   - Event publishing
   - Event subscribers
   - Async processing
   - Error handling
   - Event replay
   - Versioning

5. Scalability Features:
   - Command scaling
   - Query scaling
   - Load balancing
   - Sharding strategy
   - Partitioning
   - Performance tuning

6. Resilience Patterns:
   - Circuit breakers
   - Fallbacks
   - Retry mechanisms
   - Timeout handling
   - Failure recovery
   - Monitoring setup

7. Implementation Details:
   - Framework selection
   - Code structure
   - Testing strategy
   - Deployment setup
   - Documentation
   - Migration guide

For each component:
- Code examples
- Configuration templates
- Best practices
- Performance metrics
- Failure handling
- Implementation steps

CQRS Requirements:
[Paste your CQRS requirements here]`,
      context: "CQRS Requirements: [Paste your CQRS requirements here]",
      requirements: [
        "Command design",
        "Query design",
        "Data separation",
        "Event handling",
        "Scalability features",
        "Resilience patterns",
        "Implementation details"
      ],
      sections: [
        {
          title: "Command Design",
          description: "Structure and handling of commands",
          items: [
            { key: "Structure", details: ["Definition", "Validation"] },
            { key: "Execution", details: ["Handlers", "Idempotency"] }
          ]
        },
        {
          title: "Query Design",
          description: "Read model and optimization",
          items: [
            { key: "Model", details: ["Projection", "Caching"] },
            { key: "Execution", details: ["Optimization", "Formatting"] }
          ]
        }
      ],
      deliverables: [
        { title: "CQRS Codebase", items: ["Command handlers", "Query models"] },
        { title: "Architecture Docs", items: ["Design diagrams", "Migration steps"] }
      ],
      bestPractices: [
        "Separate read/write concerns",
        "Use event sourcing",
        "Implement retry logic",
        "Monitor performance"
      ],
      commonPitfalls: [
        "Overcomplicated design",
        "Inconsistent data",
        "Missing event handling",
        "Scalability bottlenecks"
      ],
      resources: [
        { title: "CQRS by Martin Fowler", description: "Intro to CQRS pattern", url: "https://martinfowler.com/bliki/CQRS.html" },
        { title: "Event Sourcing Guide", description: "Event sourcing with CQRS", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing" }
      ]
    }
  },
  {
    id: "21",
    category: "system-design",
    title: "Rate Limiting System Design",
    description: "Comprehensive rate limiting implementation with throttling and quota management",
    tags: ["rate-limiting", "system-design", "scalability"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and implement a rate limiting system with these features:

1. Rate Limit Strategy:
   - Token bucket algorithm
   - Leaky bucket setup
   - Fixed window counters
   - Sliding window logs
   - Burst handling
   - Quota allocation

2. Implementation Layers:
   - Application-level limits
   - API gateway limits
   - Network-level limits
   - Distributed limiting
   - Cache integration
   - Persistence layer

3. Policy Management:
   - User-based limits
   - IP-based limits
   - Resource-based limits
   - Dynamic policies
   - Override rules
   - Policy updates

4. Response Handling:
   - HTTP headers
   - Error messages
   - Retry-after logic
   - Graceful degradation
   - Client feedback
   - Logging setup

5. Scalability Design:
   - Distributed counters
   - Redis integration
   - Synchronization
   - High availability
   - Load balancing
   - Performance tuning

6. Security Features:
   - Abuse prevention
   - DDoS mitigation
   - Blacklist support
   - Whitelist support
   - Audit trails
   - Alerting

7. Monitoring & Analytics:
   - Usage tracking
   - Limit violation logs
   - Performance metrics
   - Dashboard setup
   - Alert configuration
   - Trend analysis

For each section:
- Implementation examples
- Configuration files
- Best practices
- Failure scenarios
- Performance benchmarks
- Troubleshooting guide

Rate Limiter Requirements:
[Paste your rate limiting requirements here]`,
      context: "Rate Limiter Requirements: [Paste your rate limiting requirements here]",
      requirements: [
        "Rate limit strategy",
        "Implementation layers",
        "Policy management",
        "Response handling",
        "Scalability design",
        "Security features",
        "Monitoring setup"
      ],
      sections: [
        {
          title: "Rate Limit Strategy",
          description: "Algorithm and policy design",
          items: [
            { key: "Algorithms", details: ["Token bucket", "Leaky bucket"] },
            { key: "Policies", details: ["Fixed window", "Sliding window"] }
          ]
        },
        {
          title: "Scalability Design",
          description: "Distributed and high-availability setup",
          items: [
            { key: "Distributed", details: ["Counters", "Redis"] },
            { key: "HA", details: ["Sync", "Load balancing"] }
          ]
        }
      ],
      deliverables: [
        { title: "Rate Limiter Config", items: ["Algorithm setup", "Policy definitions"] },
        { title: "Monitoring Guide", items: ["Metrics setup", "Alert rules"] }
      ],
      bestPractices: [
        "Choose appropriate algorithm",
        "Implement distributed counters",
        "Provide clear feedback",
        "Monitor usage patterns"
      ],
      commonPitfalls: [
        "Inconsistent limits",
        "Poor scalability",
        "Missing monitoring",
        "Overly strict policies"
      ],
      resources: [
        { title: "Rate Limiting Patterns", description: "Guide to rate limiting", url: "https://redis.io/docs/rate-limiting/" },
        { title: "NGINX Rate Limiting", description: "NGINX rate limiting docs", url: "https://docs.nginx.com/nginx/admin-guide/security-controls/controlling-access-rate-limiting/" }
      ]
    }
  },

  // Backend (IDs 22-24)
  {
    id: "22",
    category: "backend",
    title: "Message Queue Optimization",
    description: "Detailed message queue system with priority handling and dead letter queues",
    tags: ["message-queue", "backend", "async"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and optimize a message queue system with these components:

1. Queue Architecture:
   - Queue topology
   - Topic vs queue
   - Priority levels
   - Partitioning
   - Routing keys
   - Exchange types

2. Message Handling:
   - Payload design
   - Serialization formats
   - Validation rules
   - Retry policies
   - Dead letter queues
   - Acknowledgment modes

3. Processing Pipeline:
   - Consumer design
   - Worker pools
   - Batch processing
   - Error handling
   - Timeout controls
   - Logging setup

4. Reliability Features:
   - Message persistence
   - Delivery guarantees
   - Failover handling
   - Queue mirroring
   - Recovery procedures
   - Monitoring integration

5. Performance Tuning:
   - Throughput optimization
   - Latency reduction
   - Prefetch settings
   - Compression
   - Connection pooling
   - Load balancing

6. Security Controls:
   - Authentication
   - Authorization
   - Encryption
   - Access controls
   - Audit logging
   - Compliance checks

7. Monitoring Setup:
   - Queue depth tracking
   - Processing rates
   - Error metrics
   - Alert configuration
   - Dashboard creation
   - Health checks

For each component:
- Configuration examples
- Code snippets
- Best practices
- Performance benchmarks
- Failure scenarios
- Troubleshooting guide

Message Queue Requirements:
[Paste your message queue requirements here]`,
      context: "Message Queue Requirements: [Paste your message queue requirements here]",
      requirements: [
        "Queue architecture",
        "Message handling",
        "Processing pipeline",
        "Reliability features",
        "Performance tuning",
        "Security controls",
        "Monitoring setup"
      ],
      sections: [
        {
          title: "Queue Architecture",
          description: "Topology and structure",
          items: [
            { key: "Types", details: ["Topic", "Queue"] },
            { key: "Features", details: ["Priority", "Partitioning"] }
          ]
        },
        {
          title: "Message Handling",
          description: "Payload and retry management",
          items: [
            { key: "Payload", details: ["Design", "Serialization"] },
            { key: "Retries", details: ["Policies", "Dead letter"] }
          ]
        }
      ],
      deliverables: [
        { title: "Queue Config", items: ["Topology setup", "Consumer code"] },
        { title: "Optimization Guide", items: ["Performance tips", "Monitoring setup"] }
      ],
      bestPractices: [
        "Use dead letter queues",
        "Optimize throughput",
        "Ensure message persistence",
        "Monitor queue depth"
      ],
      commonPitfalls: [
        "Message loss",
        "Poor performance",
        "Untracked errors",
        "Security gaps"
      ],
      resources: [
        { title: "RabbitMQ Docs", description: "Official RabbitMQ guide", url: "https://www.rabbitmq.com/documentation.html" },
        { title: "Kafka Architecture", description: "Kafka design principles", url: "https://kafka.apache.org/documentation/#design" }
      ]
    }
  },
  {
    id: "23",
    category: "backend",
    title: "Database Sharding Strategy",
    description: "Complete database sharding implementation with partitioning and migration plans",
    tags: ["sharding", "backend", "database"],
    difficulty: "Advanced",
    prompt: {
      overview: `Design and implement a database sharding strategy with these specifications:

1. Sharding Architecture:
   - Shard key selection
   - Partitioning strategy
   - Horizontal vs vertical
   - Shard distribution
   - Replica sets
   - Cluster setup

2. Data Management:
   - Data splitting logic
   - Query routing
   - Cross-shard joins
   - Data consistency
   - Rebalancing strategy
   - Backup plans

3. Query Optimization:
   - Shard-aware queries
   - Index design
   - Aggregation handling
   - Caching integration
   - Performance tuning
   - Latency reduction

4. Migration Strategy:
   - Data migration plan
   - Downtime minimization
   - Validation checks
   - Rollback procedures
   - Testing scenarios
   - Monitoring setup

5. Scalability Features:
   - Shard scaling
   - Load balancing
   - Auto-sharding
   - Capacity planning
   - Resource allocation
   - Growth handling

6. Resilience Design:
   - Failure detection
   - Shard recovery
   - Replication sync
   - Error handling
   - Fallback mechanisms
   - Health checks

7. Security Controls:
   - Data encryption
   - Access controls
   - Audit logging
   - Compliance checks
   - Backup security
   - Authentication

For each section:
- Implementation examples
- Configuration templates
- Best practices
- Performance metrics
- Migration guides
- Troubleshooting steps

Sharding Requirements:
[Paste your sharding requirements here]`,
      context: "Sharding Requirements: [Paste your sharding requirements here]",
      requirements: [
        "Sharding architecture",
        "Data management",
        "Query optimization",
        "Migration strategy",
        "Scalability features",
        "Resilience design",
        "Security controls"
      ],
      sections: [
        {
          title: "Sharding Architecture",
          description: "Shard key and partitioning",
          items: [
            { key: "Key Selection", details: ["Criteria", "Impact"] },
            { key: "Partitioning", details: ["Horizontal", "Vertical"] }
          ]
        },
        {
          title: "Migration Strategy",
          description: "Data movement and validation",
          items: [
            { key: "Planning", details: ["Migration", "Downtime"] },
            { key: "Execution", details: ["Validation", "Rollback"] }
          ]
        }
      ],
      deliverables: [
        { title: "Sharding Plan", items: ["Shard key design", "Partition logic"] },
        { title: "Migration Guide", items: ["Steps", "Testing procedures"] }
      ],
      bestPractices: [
        "Choose optimal shard key",
        "Minimize downtime",
        "Optimize queries",
        "Ensure consistency"
      ],
      commonPitfalls: [
        "Uneven shard distribution",
        "Query performance issues",
        "Migration failures",
        "Security oversights"
      ],
      resources: [
        { title: "MongoDB Sharding", description: "MongoDB sharding guide", url: "https://www.mongodb.com/docs/manual/sharding/" },
        { title: "PostgreSQL Partitioning", description: "PostgreSQL partitioning docs", url: "https://www.postgresql.org/docs/current/ddl-partitioning.html" }
      ]
    }
  },
  {
    id: "24",
    category: "backend",
    title: "WebSocket Server Implementation",
    description: "Real-time WebSocket server design with connection management and scaling",
    tags: ["websocket", "backend", "real-time"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and implement a WebSocket server with these components:

1. Server Architecture:
   - Protocol setup
   - Handshake process
   - Connection pooling
   - Message framing
   - Heartbeat system
   - Upgrade handling

2. Connection Management:
   - Session tracking
   - User mapping
   - Connection limits
   - Timeout handling
   - Cleanup procedures
   - Reconnection logic

3. Message Handling:
   - Payload validation
   - Broadcast patterns
   - Room/channel system
   - Error responses
   - Retry mechanisms
   - Logging setup

4. Scalability Features:
   - Load balancing
   - Cluster support
   - Horizontal scaling
   - Message routing
   - Backpressure control
   - Performance tuning

5. Security Controls:
   - Authentication
   - Authorization
   - Encryption (WSS)
   - Rate limiting
   - CSRF protection
   - Audit trails

6. Resilience Design:
   - Connection recovery
   - Failure detection
   - Fallback strategies
   - Health checks
   - Monitoring integration
   - Graceful shutdown

7. Monitoring Setup:
   - Connection metrics
   - Message rates
   - Error tracking
   - Latency monitoring
   - Alert configuration
   - Dashboard creation

For each component:
- Code examples
- Configuration files
- Best practices
- Performance benchmarks
- Failure scenarios
- Troubleshooting guide

WebSocket Requirements:
[Paste your WebSocket requirements here]`,
      context: "WebSocket Requirements: [Paste your WebSocket requirements here]",
      requirements: [
        "Server architecture",
        "Connection management",
        "Message handling",
        "Scalability features",
        "Security controls",
        "Resilience design",
        "Monitoring setup"
      ],
      sections: [
        {
          title: "Server Architecture",
          description: "Protocol and setup",
          items: [
            { key: "Protocol", details: ["WebSocket", "Handshake"] },
            { key: "Features", details: ["Pooling", "Heartbeat"] }
          ]
        },
        {
          title: "Message Handling",
          description: "Payload and broadcast",
          items: [
            { key: "Payload", details: ["Validation", "Formatting"] },
            { key: "Distribution", details: ["Broadcast", "Channels"] }
          ]
        }
      ],
      deliverables: [
        { title: "WebSocket Server", items: ["Server code", "Connection logic"] },
        { title: "Scaling Guide", items: ["Cluster setup", "Performance tips"] }
      ],
      bestPractices: [
        "Implement heartbeats",
        "Use secure WSS",
        "Manage connections",
        "Monitor performance"
      ],
      commonPitfalls: [
        "Connection leaks",
        "Unsecured channels",
        "Scaling issues",
        "Missing monitoring"
      ],
      resources: [
        { title: "WebSocket Protocol", description: "Official WebSocket RFC", url: "https://datatracker.ietf.org/doc/html/rfc6455" },
        { title: "Socket.IO Docs", description: "Socket.IO implementation guide", url: "https://socket.io/docs/v4/" }
      ]
    }
  },

  // Frontend (IDs 25-27)
  {
    id: "25",
    category: "frontend",
    title: "State Machine Implementation",
    description: "Robust state machine design for complex UI workflows and transitions",
    tags: ["state-machine", "frontend", "workflow"],
    difficulty: "Advanced",
    prompt: {
      overview: `Design and implement a frontend state machine with these specifications:

1. State Design:
   - State definitions
   - Transition rules
   - Initial states
   - Final states
   - Nested states
   - Guard conditions

2. Implementation:
   - XState integration
   - Configuration setup
   - Action handlers
   - Side effects
   - Context management
   - Type safety

3. UI Integration:
   - State rendering
   - Transition animations
   - Error states
   - Loading patterns
   - User feedback
   - Event triggers

4. Testing Strategy:
   - State coverage
   - Transition testing
   - Edge cases
   - Mock services
   - Visual testing
   - Performance checks

5. Debugging Features:
   - State visualization
   - Transition logging
   - Error tracking
   - Dev tools integration
   - Replay capability
   - Monitoring setup

6. Optimization:
   - State minimization
   - Event batching
   - Render optimization
   - Memory management
   - Lazy loading
   - Performance tuning

7. Documentation:
   - State diagrams
   - Usage examples
   - API reference
   - Best practices
   - Common patterns
   - Troubleshooting

For each section:
- Code examples
- Configuration files
- Best practices
- Testing scenarios
- Performance metrics
- Implementation guide

State Machine Requirements:
[Paste your state machine requirements here]`,
      context: "State Machine Requirements: [Paste your state machine requirements here]",
      requirements: [
        "State design",
        "Implementation",
        "UI integration",
        "Testing strategy",
        "Debugging features",
        "Optimization",
        "Documentation"
      ],
      sections: [
        {
          title: "State Design",
          description: "Defining states and transitions",
          items: [
            { key: "States", details: ["Initial", "Final", "Nested"] },
            { key: "Transitions", details: ["Rules", "Guards"] }
          ]
        },
        {
          title: "UI Integration",
          description: "Rendering and feedback",
          items: [
            { key: "Rendering", details: ["States", "Animations"] },
            { key: "Feedback", details: ["Errors", "Loading"] }
          ]
        }
      ],
      deliverables: [
        { title: "State Machine Code", items: ["XState config", "UI components"] },
        { title: "Docs & Diagrams", items: ["State charts", "Usage guide"] }
      ],
      bestPractices: [
        "Keep states minimal",
        "Use guard conditions",
        "Optimize rendering",
        "Document transitions"
      ],
      commonPitfalls: [
        "Overcomplex states",
        "Untracked transitions",
        "Performance issues",
        "Missing tests"
      ],
      resources: [
        { title: "XState Docs", description: "Official XState documentation", url: "https://xstate.js.org/docs/" },
        { title: "State Machines in React", description: "Guide to state machines in React", url: "https://kentcdodds.com/blog/state-machines-in-react" }
      ]
    }
  },
  {
    id: "26",
    category: "frontend",
    title: "Form Handling Architecture",
    description: "Enterprise-grade form system with validation, submission, and error handling",
    tags: ["forms", "frontend", "validation"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and implement a form handling system with these components:

1. Form Structure:
   - Field definitions
   - Form composition
   - Nested forms
   - Dynamic fields
   - Initial values
   - Schema design

2. Validation System:
   - Sync validation
   - Async validation
   - Custom rules
   - Error messages
   - Cross-field validation
   - Real-time feedback

3. Submission Handling:
   - Submission states
   - Error handling
   - Retry logic
   - Success states
   - Progress tracking
   - Logging setup

4. State Management:
   - Form state
   - Dirty tracking
   - Touched fields
   - Validation status
   - Undo/redo support
   - Persistence

5. UI Integration:
   - Field components
   - Error display
   - Loading indicators
   - Success feedback
   - Accessibility
   - Styling system

6. Performance Features:
   - Debouncing
   - Throttling
   - Memoization
   - Lazy validation
   - Render optimization
   - Bundle size control

7. Testing Strategy:
   - Unit tests
   - Integration tests
   - Validation tests
   - Submission tests
   - Accessibility tests
   - Performance tests

For each component:
- Code examples
- Configuration setup
- Best practices
- Common pitfalls
- Performance metrics
- Implementation guide

Form Requirements:
[Paste your form requirements here]`,
      context: "Form Requirements: [Paste your form requirements here]",
      requirements: [
        "Form structure",
        "Validation system",
        "Submission handling",
        "State management",
        "UI integration",
        "Performance features",
        "Testing strategy"
      ],
      sections: [
        {
          title: "Form Structure",
          description: "Field setup and composition",
          items: [
            { key: "Fields", details: ["Definitions", "Dynamic"] },
            { key: "Schema", details: ["Design", "Initial values"] }
          ]
        },
        {
          title: "Validation System",
          description: "Rules and feedback",
          items: [
            { key: "Rules", details: ["Sync", "Async", "Custom"] },
            { key: "Feedback", details: ["Errors", "Real-time"] }
          ]
        }
      ],
      deliverables: [
        { title: "Form Components", items: ["Field code", "Validation logic"] },
        { title: "Testing Guide", items: ["Test cases", "Accessibility checks"] }
      ],
      bestPractices: [
        "Implement real-time validation",
        "Optimize performance",
        "Ensure accessibility",
        "Handle errors gracefully"
      ],
      commonPitfalls: [
        "Slow validation",
        "Inaccessible forms",
        "State mismanagement",
        "Untracked errors"
      ],
      resources: [
        { title: "React Hook Form", description: "Efficient form handling in React", url: "https://react-hook-form.com/" },
        { title: "Formik Docs", description: "Formik form library guide", url: "https://formik.org/docs/overview" }
      ]
    }
  },
  {
    id: "27",
    category: "frontend",
    title: "Animation System Design",
    description: "Comprehensive animation framework with transitions, keyframes, and performance optimization",
    tags: ["animation", "frontend", "ux"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and implement a frontend animation system with these specifications:

1. Animation Architecture:
   - Animation library
   - Keyframe design
   - Transition system
   - Trigger setup
   - Timing controls
   - Easing functions

2. Component Integration:
   - Animated components
   - Mount/unmount effects
   - List transitions
   - Conditional animations
   - Staggered effects
   - Reusable patterns

3. Performance Optimization:
   - GPU acceleration
   - RAF optimization
   - Will-change usage
   - Layer management
   - Frame rate control
   - Resource usage

4. Control System:
   - Play/pause controls
   - Reverse playback
   - Speed adjustment
   - Loop handling
   - Event triggers
   - State sync

5. Accessibility Features:
   - Reduced motion
   - Focus handling
   - Screen reader support
   - Keyboard triggers
   - Visibility controls
   - User preferences

6. Debugging Tools:
   - Animation timeline
   - Performance profiling
   - Error logging
   - Preview system
   - State tracking
   - Monitoring setup

7. Documentation:
   - Animation catalog
   - Usage examples
   - API reference
   - Best practices
   - Performance guide
   - Troubleshooting

For each section:
- Code examples
- Configuration files
- Best practices
- Performance benchmarks
- Testing scenarios
- Implementation guide

Animation Requirements:
[Paste your animation requirements here]`,
      context: "Animation Requirements: [Paste your animation requirements here]",
      requirements: [
        "Animation architecture",
        "Component integration",
        "Performance optimization",
        "Control system",
        "Accessibility features",
        "Debugging tools",
        "Documentation"
      ],
      sections: [
        {
          title: "Animation Architecture",
          description: "Library and keyframes",
          items: [
            { key: "Setup", details: ["Library", "Triggers"] },
            { key: "Motion", details: ["Keyframes", "Easing"] }
          ]
        },
        {
          title: "Accessibility Features",
          description: "User-friendly animations",
          items: [
            { key: "Motion", details: ["Reduced", "Visibility"] },
            { key: "Interaction", details: ["Focus", "Keyboard"] }
          ]
        }
      ],
      deliverables: [
        { title: "Animation Library", items: ["Codebase", "Component examples"] },
        { title: "Performance Guide", items: ["Optimization tips", "Debugging tools"] }
      ],
      bestPractices: [
        "Use GPU acceleration",
        "Support reduced motion",
        "Optimize frame rates",
        "Document animations"
      ],
      commonPitfalls: [
        "Performance lag",
        "Accessibility issues",
        "Overcomplex animations",
        "Missing controls"
      ],
      resources: [
        { title: "Framer Motion", description: "Animation library for React", url: "https://www.framer.com/motion/" },
        { title: "Web Animations API", description: "Native web animation guide", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API" }
      ]
    }
  },

  // DevOps (IDs 28-30)
  {
    id: "28",
    category: "devops",
    title: "CI/CD Pipeline Optimization",
    description: "Advanced CI/CD pipeline design with parallel execution and artifact management",
    tags: ["cicd", "devops", "automation"],
    difficulty: "Advanced",
    prompt: {
      overview: `Design and optimize a CI/CD pipeline with these components:

1. Pipeline Structure:
   - Stage definitions
   - Parallel execution
   - Dependency graph
   - Trigger rules
   - Matrix builds
   - Environment setup

2. Build Process:
   - Build caching
   - Dependency management
   - Incremental builds
   - Artifact generation
   - Versioning
   - Build validation

3. Testing Strategy:
   - Unit tests
   - Integration tests
   - Performance tests
   - Security scans
   - Code quality
   - Test reporting

4. Deployment Flow:
   - Blue-green strategy
   - Canary releases
   - Rollback plans
   - Environment promotion
   - Approval gates
   - Deployment validation

5. Artifact Management:
   - Repository setup
   - Version control
   - Artifact signing
   - Retention policies
   - Access controls
   - Distribution

6. Monitoring Setup:
   - Build metrics
   - Test coverage
   - Deployment status
   - Error tracking
   - Alert configuration
   - Dashboard creation

7. Security Features:
   - Secret management
   - Pipeline security
   - Access controls
   - Audit logging
   - Vulnerability scans
   - Compliance checks

For each component:
- Configuration templates
- Script examples
- Best practices
- Performance metrics
- Failure scenarios
- Troubleshooting guide

CI/CD Requirements:
[Paste your CI/CD requirements here]`,
      context: "CI/CD Requirements: [Paste your CI/CD requirements here]",
      requirements: [
        "Pipeline structure",
        "Build process",
        "Testing strategy",
        "Deployment flow",
        "Artifact management",
        "Monitoring setup",
        "Security features"
      ],
      sections: [
        {
          title: "Pipeline Structure",
          description: "Stages and execution",
          items: [
            { key: "Stages", details: ["Definition", "Triggers"] },
            { key: "Execution", details: ["Parallel", "Matrix"] }
          ]
        },
        {
          title: "Deployment Flow",
          description: "Release strategies",
          items: [
            { key: "Strategies", details: ["Blue-green", "Canary"] },
            { key: "Control", details: ["Rollback", "Approval"] }
          ]
        }
      ],
      deliverables: [
        { title: "Pipeline Config", items: ["YAML files", "Scripts"] },
        { title: "Deployment Guide", items: ["Strategy docs", "Monitoring setup"] }
      ],
      bestPractices: [
        "Use parallel execution",
        "Implement caching",
        "Secure secrets",
        "Monitor deployments"
      ],
      commonPitfalls: [
        "Slow builds",
        "Unsecured pipelines",
        "Missing tests",
        "Deployment failures"
      ],
      resources: [
        { title: "GitHub Actions", description: "CI/CD with GitHub", url: "https://docs.github.com/en/actions" },
        { title: "Jenkins Docs", description: "Jenkins pipeline guide", url: "https://www.jenkins.io/doc/book/pipeline/" }
      ]
    }
  },
  {
    id: "29",
    category: "devops",
    title: "Log Aggregation System",
    description: "Complete log aggregation setup with parsing, storage, and alerting",
    tags: ["logging", "devops", "observability"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and implement a log aggregation system with these specifications:

1. Log Collection:
   - Agent setup
   - Log sources
   - Collection patterns
   - Real-time streaming
   - Batch processing
   - Filtering rules

2. Log Processing:
   - Parsing logic
   - Enrichment rules
   - Normalization
   - Tagging system
   - Error detection
   - Compression

3. Storage Design:
   - Storage backend
   - Retention policies
   - Indexing strategy
   - Partitioning
   - Backup plans
   - Access controls

4. Search System:
   - Query language
   - Full-text search
   - Time-based search
   - Filter support
   - Saved searches
   - Performance tuning

5. Alerting System:
   - Alert rules
   - Threshold triggers
   - Notification channels
   - Escalation policies
   - Alert suppression
   - Status tracking

6. Visualization:
   - Dashboard setup
   - Chart types
   - Real-time updates
   - Custom views
   - Export options
   - Sharing features

7. Security Features:
   - Encryption
   - Authentication
   - Authorization
   - Audit logging
   - Data masking
   - Compliance checks

For each section:
- Configuration examples
- Implementation guides
- Best practices
- Performance benchmarks
- Failure scenarios
- Troubleshooting steps

Log Aggregation Requirements:
[Paste your log aggregation requirements here]`,
      context: "Log Aggregation Requirements: [Paste your log aggregation requirements here]",
      requirements: [
        "Log collection",
        "Log processing",
        "Storage design",
        "Search system",
        "Alerting system",
        "Visualization",
        "Security features"
      ],
      sections: [
        {
          title: "Log Collection",
          description: "Gathering logs from sources",
          items: [
            { key: "Sources", details: ["Agents", "Patterns"] },
            { key: "Modes", details: ["Streaming", "Batch"] }
          ]
        },
        {
          title: "Alerting System",
          description: "Triggers and notifications",
          items: [
            { key: "Rules", details: ["Thresholds", "Escalation"] },
            { key: "Channels", details: ["Email", "Slack"] }
          ]
        }
      ],
      deliverables: [
        { title: "Log Config", items: ["Agent setup", "Parsing rules"] },
        { title: "Dashboard Guide", items: ["Visualization setup", "Alert config"] }
      ],
      bestPractices: [
        "Normalize logs",
        "Set retention policies",
        "Enable real-time alerts",
        "Secure log data"
      ],
      commonPitfalls: [
        "Unparsed logs",
        "Storage overflow",
        "Missed alerts",
        "Security breaches"
      ],
      resources: [
        { title: "Elastic Stack", description: "ELK stack for logging", url: "https://www.elastic.co/what-is/elk-stack" },
        { title: "Fluentd Docs", description: "Fluentd logging guide", url: "https://docs.fluentd.org/" }
      ]
    }
  },
  {
    id: "30",
    category: "devops",
    title: "Multi-Cloud Deployment Strategy",
    description: "Robust multi-cloud deployment with cost management and failover",
    tags: ["multi-cloud", "devops", "ha"],
    difficulty: "Advanced",
    prompt: {
      overview: `Design and implement a multi-cloud deployment strategy with:

1. Cloud Architecture:
   - Provider selection
   - Region setup
   - Service mapping
   - Interoperability
   - Resource allocation
   - Networking design

2. Deployment Flow:
   - Cross-cloud CI/CD
   - Configuration sync
   - Deployment patterns
   - Rollback strategy
   - Validation checks
   - Testing setup

3. Cost Management:
   - Cost tracking
   - Budget alerts
   - Resource optimization
   - Usage analysis
   - Billing integration
   - Forecasting

4. Failover System:
   - Multi-cloud redundancy
   - Failover triggers
   - Traffic routing
   - Recovery procedures
   - Health checks
   - Failback strategy

5. Security Controls:
   - Cross-cloud IAM
   - Encryption standards
   - Network security
   - Compliance checks
   - Audit logging
   - Secret management

6. Monitoring Setup:
   - Cloud metrics
   - Performance tracking
   - Error monitoring
   - Alert configuration
   - Dashboard creation
   - Usage analytics

7. Optimization Features:
   - Load balancing
   - Auto-scaling
   - Resource tagging
   - Cost optimization
   - Performance tuning
   - Cleanup procedures

For each component:
- Configuration templates
- Deployment scripts
- Best practices
- Cost analysis
- Failure scenarios
- Troubleshooting guide

Multi-Cloud Requirements:
[Paste your multi-cloud requirements here]`,
      context: "Multi-Cloud Requirements: [Paste your multi-cloud requirements here]",
      requirements: [
        "Cloud architecture",
        "Deployment flow",
        "Cost management",
        "Failover system",
        "Security controls",
        "Monitoring setup",
        "Optimization features"
      ],
      sections: [
        {
          title: "Cloud Architecture",
          description: "Provider and region setup",
          items: [
            { key: "Providers", details: ["AWS", "GCP", "Azure"] },
            { key: "Setup", details: ["Regions", "Networking"] }
          ]
        },
        {
          title: "Failover System",
          description: "Redundancy and recovery",
          items: [
            { key: "Redundancy", details: ["Multi-cloud", "Triggers"] },
            { key: "Recovery", details: ["Routing", "Failback"] }
          ]
        }
      ],
      deliverables: [
        { title: "Deployment Config", items: ["CI/CD scripts", "Cloud configs"] },
        { title: "Cost Guide", items: ["Tracking setup", "Optimization tips"] }
      ],
      bestPractices: [
        "Plan for interoperability",
        "Track costs",
        "Implement failover",
        "Monitor across clouds"
      ],
      commonPitfalls: [
        "Vendor lock-in",
        "Cost overruns",
        "Failover failures",
        "Security gaps"
      ],
      resources: [
        { title: "AWS Multi-Cloud", description: "AWS multi-cloud strategies", url: "https://aws.amazon.com/architecture/multi-cloud/" },
        { title: "Google Anthos", description: "Google's multi-cloud platform", url: "https://cloud.google.com/anthos/docs" }
      ]
    }
  },

  // Security (IDs 31-33)
  {
    id: "31",
    category: "security",
    title: "API Security Hardening",
    description: "Comprehensive API security implementation with authentication and monitoring",
    tags: ["api-security", "security", "hardening"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and implement an API security hardening strategy with:

1. Authentication:
   - OAuth 2.0 flows
   - JWT implementation
   - Token refresh
   - API key management
   - MFA support
   - Session controls

2. Authorization:
   - RBAC setup
   - Scope management
   - Permission checks
   - Policy enforcement
   - Dynamic rules
   - Audit trails

3. Input Validation:
   - Schema validation
   - Parameter sanitization
   - Size limits
   - Type checking
   - Injection prevention
   - Error handling

4. Rate Limiting:
   - Throttling policies
   - Quota tracking
   - Burst handling
   - Client feedback
   - Monitoring setup
   - Abuse prevention

5. Encryption:
   - TLS configuration
   - Data in transit
   - Data at rest
   - Key management
   - Certificate rotation
   - Compliance checks

6. Monitoring System:
   - Request logging
   - Anomaly detection
   - Security events
   - Alert configuration
   - Dashboard creation
   - Threat analysis

7. Testing Strategy:
   - Security scans
   - Penetration tests
   - Fuzz testing
   - Compliance tests
   - Vulnerability checks
   - Remediation plans

For each component:
- Configuration examples
- Implementation guides
- Best practices
- Security metrics
- Failure scenarios
- Troubleshooting steps

API Security Requirements:
[Paste your API security requirements here]`,
      context: "API Security Requirements: [Paste your API security requirements here]",
      requirements: [
        "Authentication",
        "Authorization",
        "Input validation",
        "Rate limiting",
        "Encryption",
        "Monitoring system",
        "Testing strategy"
      ],
      sections: [
        {
          title: "Authentication",
          description: "Secure access control",
          items: [
            { key: "Methods", details: ["OAuth", "JWT"] },
            { key: "Features", details: ["MFA", "Refresh"] }
          ]
        },
        {
          title: "Rate Limiting",
          description: "Control request rates",
          items: [
            { key: "Policies", details: ["Throttling", "Quotas"] },
            { key: "Handling", details: ["Burst", "Feedback"] }
          ]
        }
      ],
      deliverables: [
        { title: "Security Config", items: ["Auth setup", "Rate limits"] },
        { title: "Testing Plan", items: ["Scan scripts", "Penetration tests"] }
      ],
      bestPractices: [
        "Use OAuth 2.0",
        "Validate all inputs",
        "Enforce TLS",
        "Monitor anomalies"
      ],
      commonPitfalls: [
        "Weak auth",
        "Injection risks",
        "Unencrypted data",
        "Missing logs"
      ],
      resources: [
        { title: "OWASP API Security", description: "API security top 10", url: "https://owasp.org/www-project-api-security/" },
        { title: "OAuth 2.0", description: "Official OAuth spec", url: "https://oauth.net/2/" }
      ]
    }
  },
  {
    id: "32",
    category: "security",
    title: "Incident Response Framework",
    description: "Detailed incident response system with detection, containment, and recovery",
    tags: ["incident-response", "security", "recovery"],
    difficulty: "Advanced",
    prompt: {
      overview: `Design and implement an incident response framework with:

1. Detection Phase:
   - Alert rules
   - Anomaly detection
   - Log analysis
   - Threat intelligence
   - Monitoring setup
   - Notification system

2. Analysis Phase:
   - Impact assessment
   - Root cause analysis
   - Evidence collection
   - Timeline creation
   - Severity scoring
   - Documentation

3. Containment Phase:
   - Short-term actions
   - Long-term strategies
   - Isolation procedures
   - Access controls
   - Backup activation
   - Communication plan

4. Eradication Phase:
   - Threat removal
   - Vulnerability fixes
   - System cleanup
   - Patch management
   - Validation checks
   - Monitoring setup

5. Recovery Phase:
   - Restoration plan
   - Service resumption
   - Data recovery
   - Testing procedures
   - Rollback options
   - Status reporting

6. Post-Incident:
   - Lessons learned
   - Report generation
   - Process updates
   - Training plans
   - Tool improvements
   - Compliance review

7. Automation:
   - Response scripts
   - Playbook execution
   - Alert escalation
   - Remediation bots
   - Logging integration
   - Dashboard creation

For each phase:
- Playbook templates
- Tool configurations
- Best practices
- Response metrics
- Failure scenarios
- Troubleshooting guide

Incident Response Requirements:
[Paste your incident response requirements here]`,
      context: "Incident Response Requirements: [Paste your incident response requirements here]",
      requirements: [
        "Detection phase",
        "Analysis phase",
        "Containment phase",
        "Eradication phase",
        "Recovery phase",
        "Post-incident",
        "Automation"
      ],
      sections: [
        {
          title: "Detection Phase",
          description: "Identifying incidents",
          items: [
            { key: "Detection", details: ["Alerts", "Anomalies"] },
            { key: "Tools", details: ["Logs", "Threat intel"] }
          ]
        },
        {
          title: "Recovery Phase",
          description: "Restoring operations",
          items: [
            { key: "Restoration", details: ["Plan", "Data"] },
            { key: "Validation", details: ["Testing", "Rollback"] }
          ]
        }
      ],
      deliverables: [
        { title: "Response Playbook", items: ["Phase steps", "Scripts"] },
        { title: "Post-Incident Report", items: ["Lessons", "Updates"] }
      ],
      bestPractices: [
        "Detect early",
        "Contain quickly",
        "Automate responses",
        "Document everything"
      ],
      commonPitfalls: [
        "Slow detection",
        "Incomplete containment",
        "Missing automation",
        "Poor documentation"
      ],
      resources: [
        { title: "NIST Incident Response", description: "NIST 800-61 guide", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf" },
        { title: "SANS Incident Handling", description: "SANS incident response steps", url: "https://www.sans.org/white-papers/40887/" }
      ]
    }
  },
  {
    id: "33",
    category: "security",
    title: "Secrets Management System",
    description: "Robust secrets management with rotation, auditing, and integration",
    tags: ["secrets", "security", "vault"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and implement a secrets management system with:

1. Secrets Storage:
   - Vault selection
   - Encryption setup
   - Storage backend
   - Access controls
   - Backup strategy
   - High availability

2. Secret Distribution:
   - API access
   - SDK integration
   - Environment variables
   - Runtime injection
   - Secret leasing
   - Revocation system

3. Rotation Strategy:
   - Automated rotation
   - Manual overrides
   - Rotation policies
   - Key versioning
   - Validation checks
   - Notification system

4. Access Management:
   - RBAC policies
   - Temporary credentials
   - Audit logging
   - Access reviews
   - Emergency access
   - Compliance checks

5. Integration Points:
   - CI/CD pipelines
   - Application runtime
   - Cloud providers
   - Container systems
   - Monitoring tools
   - Alerting system

6. Monitoring Setup:
   - Access tracking
   - Usage metrics
   - Rotation logs
   - Error detection
   - Alert configuration
   - Dashboard creation

7. Security Features:
   - Encryption standards
   - Authentication
   - Authorization
   - Tamper detection
   - Data masking
   - Audit trails

For each component:
- Configuration examples
- Implementation guides
- Best practices
- Security metrics
- Failure scenarios
- Troubleshooting steps

Secrets Management Requirements:
[Paste your secrets management requirements here]`,
      context: "Secrets Management Requirements: [Paste your secrets management requirements here]",
      requirements: [
        "Secrets storage",
        "Secret distribution",
        "Rotation strategy",
        "Access management",
        "Integration points",
        "Monitoring setup",
        "Security features"
      ],
      sections: [
        {
          title: "Secrets Storage",
          description: "Secure storage setup",
          items: [
            { key: "Storage", details: ["Vault", "Backend"] },
            { key: "Security", details: ["Encryption", "HA"] }
          ]
        },
        {
          title: "Rotation Strategy",
          description: "Key rotation and validation",
          items: [
            { key: "Rotation", details: ["Automated", "Manual"] },
            { key: "Management", details: ["Policies", "Validation"] }
          ]
        }
      ],
      deliverables: [
        { title: "Secrets Config", items: ["Vault setup", "Rotation scripts"] },
        { title: "Integration Guide", items: ["CI/CD steps", "Monitoring setup"] }
      ],
      bestPractices: [
        "Encrypt secrets",
        "Rotate regularly",
        "Restrict access",
        "Monitor usage"
      ],
      commonPitfalls: [
        "Unencrypted secrets",
        "No rotation",
        "Access leaks",
        "Missing audits"
      ],
      resources: [
        { title: "HashiCorp Vault", description: "Vault secrets management", url: "https://www.vaultproject.io/docs" },
        { title: "AWS Secrets Manager", description: "AWS secrets guide", url: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html" }
      ]
    }
  },

  // AI/ML (IDs 34-36)
  {
    id: "34",
    category: "ai",
    title: "Reinforcement Learning Pipeline",
    description: "Complete RL pipeline with environment setup, training, and evaluation",
    tags: ["reinforcement-learning", "ai", "agent"],
    difficulty: "Advanced",
    prompt: {
      overview: `Design and implement a reinforcement learning pipeline with:

1. Environment Design:
   - State space
   - Action space
   - Reward function
   - Simulator setup
   - Environment testing
   - Reset logic

2. Agent Architecture:
   - Policy design
   - Value functions
   - Model selection
   - Exploration strategy
   - Learning algorithm
   - Hyperparameters

3. Training Pipeline:
   - Episode management
   - Batch processing
   - Experience replay
   - Parallel training
   - Checkpoint saving
   - Logging setup

4. Evaluation System:
   - Reward tracking
   - Success metrics
   - Convergence checks
   - Performance benchmarks
   - Visualization tools
   - Testing scenarios

5. Optimization Features:
   - Reward shaping
   - Learning rate tuning
   - Gradient clipping
   - Exploration decay
   - Resource allocation
   - Speed optimization

6. Deployment Strategy:
   - Policy export
   - Real-time inference
   - Scaling setup
   - Monitoring integration
   - Update procedures
   - Rollback plans

7. Monitoring Setup:
   - Training metrics
   - Reward curves
   - Error tracking
   - Alert configuration
   - Dashboard creation
   - Performance logs

For each component:
- Code examples
- Configuration files
- Best practices
- Performance metrics
- Testing strategies
- Documentation

RL Requirements:
[Paste your RL requirements here]`,
      context: "RL Requirements: [Paste your RL requirements here]",
      requirements: [
        "Environment design",
        "Agent architecture",
        "Training pipeline",
        "Evaluation system",
        "Optimization features",
        "Deployment strategy",
        "Monitoring setup"
      ],
      sections: [
        {
          title: "Environment Design",
          description: "Simulation setup",
          items: [
            { key: "Spaces", details: ["State", "Action"] },
            { key: "Setup", details: ["Reward", "Simulator"] }
          ]
        },
        {
          title: "Agent Architecture",
          description: "Policy and learning",
          items: [
            { key: "Policy", details: ["Design", "Functions"] },
            { key: "Learning", details: ["Algorithm", "Exploration"] }
          ]
        }
      ],
      deliverables: [
        { title: "RL Codebase", items: ["Environment", "Agent code"] },
        { title: "Evaluation Report", items: ["Metrics", "Visualizations"] }
      ],
      bestPractices: [
        "Tune rewards",
        "Balance exploration",
        "Optimize training",
        "Monitor convergence"
      ],
      commonPitfalls: [
        "Poor reward design",
        "Overfitting",
        "Slow training",
        "Missing evaluation"
      ],
      resources: [
        { title: "OpenAI Gym", description: "RL environment library", url: "https://www.gymlibrary.dev/" },
        { title: "Deep RL Guide", description: "DeepMind RL tutorial", url: "https://www.deepmind.com/learning-resources/introduction-to-reinforcement-learning" }
      ]
    }
  },
  {
    id: "35",
    category: "ai",
    title: "Time Series Forecasting System",
    description: "End-to-end time series forecasting with preprocessing, modeling, and deployment",
    tags: ["time-series", "ai", "forecasting"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and implement a time series forecasting system with:

1. Data Preprocessing:
   - Time alignment
   - Missing value handling
   - Outlier detection
   - Normalization
   - Feature extraction
   - Windowing

2. Model Architecture:
   - Model selection
   - ARIMA setup
   - LSTM design
   - Prophet integration
   - Ensemble methods
   - Hyperparameter tuning

3. Training Pipeline:
   - Sliding windows
   - Batch processing
   - Cross-validation
   - Early stopping
   - Checkpoint management
   - Logging setup

4. Forecasting System:
   - Horizon selection
   - Confidence intervals
   - Multi-step prediction
   - Error handling
   - Performance tracking
   - Visualization tools

5. Evaluation Metrics:
   - MAE/MSE calculation
   - MAPE tracking
   - Residual analysis
   - Forecast accuracy
   - Custom metrics
   - Reporting system

6. Deployment Strategy:
   - API integration
   - Batch forecasting
   - Real-time updates
   - Scaling setup
   - Monitoring integration
   - Rollback plans

7. Monitoring Setup:
   - Forecast accuracy
   - Drift detection
   - Error metrics
   - Alert configuration
   - Dashboard creation
   - Usage analytics

For each component:
- Code examples
- Configuration files
- Best practices
- Performance benchmarks
- Testing strategies
- Documentation

Time Series Requirements:
[Paste your time series requirements here]`,
      context: "Time Series Requirements: [Paste your time series requirements here]",
      requirements: [
        "Data preprocessing",
        "Model architecture",
        "Training pipeline",
        "Forecasting system",
        "Evaluation metrics",
        "Deployment strategy",
        "Monitoring setup"
      ],
      sections: [
        {
          title: "Data Preprocessing",
          description: "Preparing time series data",
          items: [
            { key: "Cleaning", details: ["Missing", "Outliers"] },
            { key: "Features", details: ["Normalization", "Extraction"] }
          ]
        },
        {
          title: "Forecasting System",
          description: "Prediction and intervals",
          items: [
            { key: "Prediction", details: ["Horizon", "Multi-step"] },
            { key: "Output", details: ["Intervals", "Visuals"] }
          ]
        }
      ],
      deliverables: [
        { title: "Forecasting Code", items: ["Preprocessing", "Model code"] },
        { title: "Deployment Guide", items: ["API setup", "Monitoring tools"] }
      ],
      bestPractices: [
        "Handle missing data",
        "Tune models",
        "Validate forecasts",
        "Monitor drift"
      ],
      commonPitfalls: [
        "Unclean data",
        "Overfitting",
        "Inaccurate forecasts",
        "Missing monitoring"
      ],
      resources: [
        { title: "Prophet Docs", description: "Facebook's forecasting tool", url: "https://facebook.github.io/prophet/docs/quick_start.html" },
        { title: "Time Series Guide", description: "Intro to time series", url: "https://otexts.com/fpp3/" }
      ]
    }
  },
  {
    id: "36",
    category: "ai",
    title: "Anomaly Detection Pipeline",
    description: "Robust anomaly detection system with real-time monitoring and alerting",
    tags: ["anomaly-detection", "ai", "monitoring"],
    difficulty: "Intermediate",
    prompt: {
      overview: `Design and implement an anomaly detection pipeline with:

1. Data Preparation:
   - Feature selection
   - Normalization
   - Dimensionality reduction
   - Windowing strategy
   - Labeling (if supervised)
   - Data validation

2. Model Architecture:
   - Algorithm selection
   - Autoencoder setup
   - Isolation forest
   - Clustering methods
   - Threshold tuning
   - Ensemble approach

3. Training Pipeline:
   - Batch processing
   - Online learning
   - Model versioning
   - Performance tracking
   - Checkpoint saving
   - Logging setup

4. Detection System:
   - Real-time scoring
   - Batch processing
   - Anomaly thresholds
   - Confidence scoring
   - Error handling
   - Visualization tools

5. Evaluation Metrics:
   - Precision/recall
   - F1 score
   - ROC/AUC
   - False positive rate
   - Custom metrics
   - Reporting system

6. Deployment Strategy:
   - API integration
   - Streaming support
   - Scaling setup
   - Monitoring integration
   - Update procedures
   - Rollback plans

7. Monitoring Setup:
   - Anomaly rates
   - Detection latency
   - Error tracking
   - Alert configuration
   - Dashboard creation
   - Drift detection

For each component:
- Code examples
- Configuration files
- Best practices
- Performance benchmarks
- Testing strategies
- Documentation

Anomaly Detection Requirements:
[Paste your anomaly detection requirements here]`,
      context: "Anomaly Detection Requirements: [Paste your anomaly detection requirements here]",
      requirements: [
        "Data preparation",
        "Model architecture",
        "Training pipeline",
        "Detection system",
        "Evaluation metrics",
        "Deployment strategy",
        "Monitoring setup"
      ],
      sections: [
        {
          title: "Data Preparation",
          description: "Preparing data for detection",
          items: [
            { key: "Features", details: ["Selection", "Normalization"] },
            { key: "Structure", details: ["Windowing", "Labeling"] }
          ]
        },
        {
          title: "Detection System",
          description: "Real-time anomaly scoring",
          items: [
            { key: "Scoring", details: ["Real-time", "Batch"] },
            { key: "Output", details: ["Thresholds", "Confidence"] }
          ]
        }
      ],
      deliverables: [
        { title: "Detection Code", items: ["Model setup", "Scoring logic"] },
        { title: "Monitoring Guide", items: ["Metrics", "Alerts"] }
      ],
      bestPractices: [
        "Normalize data",
        "Tune thresholds",
        "Monitor in real-time",
        "Validate metrics"
      ],
      commonPitfalls: [
        "Noisy data",
        "False positives",
        "Slow detection",
        "Missing drift handling"
      ],
      resources: [
        { title: "Scikit-learn Anomaly", description: "Anomaly detection with Scikit-learn", url: "https://scikit-learn.org/stable/modules/outlier_detection.html" },
        { title: "TensorFlow Anomaly", description: "TF anomaly detection guide", url: "https://www.tensorflow.org/tutorials/generative/autoencoder#anomaly_detection" }
      ]
    }
  }
];

export function PromptsContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredPrompts = prompts.filter(prompt => {
    const matchesCategory = selectedCategory === "all" || prompt.category === selectedCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const openPromptDetails = (prompt: Prompt) => {
    setSelectedPrompt(prompt);
    setIsSheetOpen(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={title({ class: "mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" })}>
            Engineering Prompts Library
          </h1>
          <p className="text-xl text-default-600 max-w-2xl mx-auto">
            Production-ready prompts for system design, architecture, and development. Each prompt is battle-tested and includes comprehensive specifications.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        {isClient && (
          <>
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-default-400" size={20} />
                  <Input
                    className="pl-10 w-full"
                    placeholder="Search prompts by title, description, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button 
                  as="a"
                  href="/waitlist"
                  color="primary" 
                  className="w-full md:w-auto"
                  startContent={<Sparkles size={18} />}
                >
                  Submit Expert Prompt
                </Button>
              </div>

              <Tabs 
                selectedKey={selectedCategory}
                onSelectionChange={(key) => setSelectedCategory(key as string)}
                className="flex-wrap justify-center"
                color="primary"
                variant="underlined"
                size="lg"
              >
                {categories.map((category) => (
                  <Tab
                    key={category.key}
                    title={
                      <div className="flex items-center gap-2 px-2">
                        <category.icon size={18} />
                        {category.label}
                      </div>
                    }
                    value={category.key}
                  />
                ))}
              </Tabs>
            </div>

            {/* Prompts Grid */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {filteredPrompts.map((prompt) => (
                <motion.div
                  key={prompt.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  onClick={() => openPromptDetails(prompt)}
                  className="cursor-pointer"
                >
                  <Card className="p-6 bg-default-50/50 hover:bg-default-50 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{prompt.title}</h3>
                          <p className="text-default-600 mb-4">{prompt.description}</p>
                        </div>
                        <Button
                          isIconOnly
                          variant="light"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(prompt.prompt.overview, prompt.id);
                          }}
                          className="text-primary"
                        >
                          {copiedId === prompt.id ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {prompt.tags.map((tag) => (
                          <Chip key={tag} size="sm" variant="flat" color="primary">
                            {tag}
                          </Chip>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center justify-between text-sm text-default-400">
                        <Chip
                          size="sm"
                          variant="flat"
                          color="success"
                        >
                          {prompt.difficulty}
                        </Chip>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>

      {/* Prompt Details Sheet */}
      {selectedPrompt && isClient && (
        <Sheet 
          isOpen={isSheetOpen} 
          onClose={() => setIsSheetOpen(false)}
          title={selectedPrompt.title}
        >
          <div className="space-y-8">
            {/* Overview Section */}
            <div className="bg-default-100 rounded-xl p-6 relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Overview</h3>
                <Button
                  isIconOnly
                  variant="light"
                  onClick={() => copyToClipboard(selectedPrompt.prompt.overview, selectedPrompt.id)}
                  className="text-primary absolute top-4 right-4"
                >
                  {copiedId === selectedPrompt.id ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                </Button>
              </div>
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap font-mono text-sm bg-default-200/50 rounded-lg p-4">
                  {selectedPrompt.prompt.overview}
                </pre>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedPrompt.tags.map((tag) => (
                <Chip key={tag} size="sm" variant="flat" color="primary">
                  {tag}
                </Chip>
              ))}
            </div>

            {/* Context Section */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Context</h3>
              <p className="text-default-600">{selectedPrompt.prompt.context}</p>
            </div>

            {/* Requirements Section */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Requirements</h3>
              <ul className="space-y-2">
                {selectedPrompt.prompt.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            {selectedPrompt.prompt.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-default-600 mb-4">{section.description}</p>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-default-100 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">{item.key}</h4>
                      <ul className="space-y-1">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-default-600 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Deliverables */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Deliverables</h3>
              <div className="space-y-4">
                {selectedPrompt.prompt.deliverables.map((deliverable, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2">{deliverable.title}</h4>
                    <ul className="space-y-1">
                      {deliverable.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Practices */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
              <ul className="space-y-2">
                {selectedPrompt.prompt.bestPractices.map((practice, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Pitfalls */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Common Pitfalls</h3>
              <ul className="space-y-2">
                {selectedPrompt.prompt.commonPitfalls.map((pitfall, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Additional Resources</h3>
              <div className="space-y-3">
                {selectedPrompt.prompt.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-default-100 rounded-lg hover:bg-default-200 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <LinkIcon className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">{resource.title}</h4>
                        <p className="text-sm text-default-600">{resource.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                color="primary"
                onClick={() => copyToClipboard(JSON.stringify(selectedPrompt.prompt, null, 2), selectedPrompt.id)}
                startContent={copiedId === selectedPrompt.id ? <CheckCircle2 size={18} /> : <Copy size={18} />}
              >
                {copiedId === selectedPrompt.id ? "Copied!" : "Copy Full Prompt"}
              </Button>
            </div>
          </div>
        </Sheet>
      )}
    </>
  );
} 