import React, { useState } from 'react';
import { Code, Database, Server, Mail, Github, Linkedin, Menu, X, Terminal, Cpu, Cloud, Brain, Award, GraduationCap, Boxes, FileJson, Zap, Container, Play } from 'lucide-react';

export default function BackendPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    { name: 'Golang', category: 'Backend', icon: Code },
    { name: 'Python', category: 'Backend', icon: Terminal },
    { name: 'Java', category: 'Backend', icon: Code },
    { name: 'JavaScript', category: 'Backend', icon: FileJson },
    { name: 'Ruby on Rails', category: 'Backend', icon: Code },
    { name: 'PostgreSQL', category: 'Database', icon: Database },
    { name: 'MongoDB', category: 'Database', icon: Database },
    { name: 'Redis', category: 'Database', icon: Zap },
    { name: 'gRPC', category: 'APIs', icon: Server },
    { name: 'GraphQL', category: 'APIs', icon: FileJson },
    { name: 'REST APIs', category: 'APIs', icon: Server },
    { name: 'WebSocket', category: 'APIs', icon: Zap },
    { name: 'AWS', category: 'Cloud', icon: Cloud },
    { name: 'GCP', category: 'Cloud', icon: Cloud },
    { name: 'Kubernetes', category: 'DevOps', icon: Boxes },
    { name: 'Docker', category: 'DevOps', icon: Container },
    { name: 'Terraform', category: 'DevOps', icon: Code },
    { name: 'Microservices', category: 'Architecture', icon: Boxes },
    { name: 'Distributed Systems', category: 'Architecture', icon: Server },
    { name: 'PyTorch', category: 'AI/ML', icon: Brain },
    { name: 'XGBoost', category: 'AI/ML', icon: Brain },
    { name: 'Apache Spark', category: 'AI/ML', icon: Zap },
    { name: 'LangChain', category: 'AI/ML', icon: Brain },
    { name: 'RAG', category: 'AI/ML', icon: Brain }
  ];

  const projects = [
    {
      title: 'DTCC Gateway Microservice',
      description: 'First-to-market implementation of gateway microservice integrated with DTCC API platform using Golang, gRPC, and REST APIs. Positioned firm as pioneer in adopting new REST standard.',
      tech: ['Golang', 'gRPC', 'REST APIs', 'Microservices'],
      company: 'APEX FINTECH SOLUTIONS'
    },
    {
      title: 'Multi-Asset ACATS Transfer System',
      description: 'Developed comprehensive ACATS transfer capabilities supporting equities, fixed income securities, ETFs, and mutual fund positions within unified broker-dealer platform. Handles $100M+ daily in asset movements serving 20M+ accounts.',
      tech: ['Golang', 'PostgreSQL', 'Kubernetes', 'REST APIs'],
      company: 'APEX FINTECH SOLUTIONS'
    },
    {
      title: 'Workflow Automation System',
      description: 'Built comprehensive workflow automation system replacing legacy manual processes with intelligent data extraction and validation. Eliminated 100+ hours of weekly manual data entry across multiple teams.',
      tech: ['Python', 'Smartsheet API', 'DocuSign', 'Automation'],
      company: 'Oregon Government'
    },
    {
      title: 'Visa/Mastercard Payment Processing',
      description: 'Developed credit card processing microservice API (ISO8583) replacing external third-party API. Achieved 300ms reduction in latency for core payment workflow.',
      tech: ['Python', 'ISO8583', 'Microservices', 'Payment Gateway'],
      company: 'OMISE PAYMENT'
    },
    {
      title: 'Cryptocurrency Onboarding Service',
      description: 'Built automated cryptocurrency onboarding microservice for staking/exchange platform with distributed tracing using OpenTelemetry.',
      tech: ['Java', 'PostgreSQL', 'OpenTelemetry', 'Microservices'],
      company: 'ZIPMEX'
    },
    {
      title: 'GraphQL BFF Architecture',
      description: 'Designed and implemented GraphQL Backend-for-Frontend to streamline client-specific data needs, reducing over-fetching and improving application performance.',
      tech: ['GraphQL', 'Node.js', 'Microservices', 'API Gateway'],
      company: 'ZIPMEX'
    }
  ];

const academicProjects = [
  {
    title: 'Basic Financial Document Q&A (RAG-style)',
    description: 'Built a simple question-answering system over financial documents using embeddings and keyword search. Learned how retrieval-augmented generation works at a high level.',
    tech: ['Python', 'OpenAI API', 'LangChain (basic)', 'FAISS'],
    category: 'NLP / RAG (Intro)'
  },
  {
    title: 'Intro to Parallel ML Training',
    description: 'Explored how machine learning training can be sped up using GPUs and data parallelism. Implemented small PyTorch experiments based on concepts from Andrew Ng’s ML course and CUDA readings.',
    tech: ['PyTorch', 'Python', 'CUDA (conceptual)'],
    category: 'ML Systems (Intro)'
  },
  {
    title: 'Sentiment Analysis API',
    description: 'Built a simple sentiment analysis API using a pre-trained transformer model. Focused on understanding model inference, latency, and basic API deployment.',
    tech: ['Python', 'Transformers', 'FastAPI'],
    category: 'NLP'
  },
  {
    title: 'LLM Chatbot Experiment',
    description: 'Created a basic chatbot using an LLM API. Experimented with prompt design, memory, and tool calling to understand how modern chat systems work.',
    tech: ['Python', 'OpenAI API', 'LangChain (intro)'],
    category: 'LLMs'
  },
  {
    title: 'Object Detection Exploration',
    description: 'Experimented with a pre-trained YOLO model to understand how object detection works. Focused on running inference and evaluating results on sample images.',
    tech: ['PyTorch', 'YOLO', 'OpenCV'],
    category: 'Computer Vision'
  },
  {
    title: 'Reinforcement Learning Practice Project',
    description: 'Implemented basic reinforcement learning algorithms (Q-learning) on simulated environments to understand policies, rewards, and training dynamics.',
    tech: ['Python', 'NumPy', 'PyTorch'],
    category: 'Reinforcement Learning (Intro)'
  }
];


  const experience = [
    {
      role: 'Senior Solution Engineer (Contract)',
      company: 'Oregon Government',
      period: 'Feb 2025 - Sep 2025',
      location: 'Portland, OR',
      points: [
        'Developed comprehensive workflow automation system replacing legacy manual processes with intelligent data extraction and validation',
        'Eliminated 100+ hours of weekly manual data entry across multiple teams',
        'Technologies: Python, Smartsheet API, DocuSign'
      ]
    },
    {
      role: 'Software Engineer II',
      company: 'APEX FINTECH SOLUTIONS',
      period: 'Feb 2023 - Nov 2024',
      location: 'Portland, OR',
      points: [
        'Led development of end-to-end tests covering complete user scenarios with third-party system simulator, resulting in 50% reduction in UAT bugs',
        'Contributed to architectural design and sprint planning during transition from on-premises to Kubernetes-based cloud architecture (handling $100M+ daily asset movements, 20M+ accounts)',
        'Planned, designed, and implemented DTCC gateway microservice using Golang, gRPC, and REST APIs - first firm to adopt new REST standard',
        'Developed Multi-Asset ACATS transfer capabilities supporting equities, fixed income securities, ETFs, and mutual funds'
      ]
    },
    {
      role: 'Software Engineer II',
      company: 'ZIPMEX',
      period: 'Oct 2021 - Dec 2022',
      location: 'Remote, CA',
      points: [
        'Implemented OpenTelemetry distributed tracing across microservices, increasing system observability',
        'Built automated cryptocurrency onboarding microservice for staking/exchange platform using Java and PostgreSQL',
        'Automated distributed load testing using Python and Locust, measuring SLA thresholds under high concurrency',
        'Designed GraphQL Backend-for-Frontend (BFF) reducing over-fetching and improving application performance'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'OMISE PAYMENT',
      period: 'Sep 2020 - Sep 2021',
      location: 'Bangkok',
      points: [
        'Refactored ORM legacy code to SQL resulting in 90% reduction in SQL queries and 1000ms reduction in P50 latency for core payment API',
        'Developed Visa/Mastercard credit card processing microservice API (ISO8583) replacing external third-party API',
        'Achieved 300ms reduction in latency in core payment workflow using Python microservices'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Science, Computer Science',
      school: 'Georgia Institute of Technology',
      specialization: 'Artificial Intelligence Specialization'
    },
    {
      degree: 'Bachelor of Science, Computer Science',
      school: 'Portland State University'
    },
    {
      degree: 'Bachelor of Engineering, Computer Engineering',
      school: 'King Mongkut Institute of Technology'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="bg-white text-gray-900 sticky top-0 z-40 shadow-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold flex items-center gap-2 text-blue-600">
              <Terminal size={28} />
              <span>Robert Janekarnkit</span>
            </div>
            
            <ul className="hidden md:flex gap-8">
              <li><a href="#about" className="text-gray-900 hover:text-blue-600 transition">About</a></li>
              <li><a href="#skills" className="text-gray-900 hover:text-blue-600 transition">Skills</a></li>
              <li><a href="#projects" className="text-gray-900 hover:text-blue-600 transition">Projects</a></li>
              <li><a href="#academic" className="text-gray-900 hover:text-blue-600 transition">Academic</a></li>
              <li><a href="#experience" className="text-gray-900 hover:text-blue-600 transition">Experience</a></li>
              <li><a href="#education" className="text-gray-900 hover:text-blue-600 transition">Education</a></li>
              <li><a href="#contact" className="text-gray-900 hover:text-blue-600 transition">Contact</a></li>
            </ul>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <ul className="md:hidden mt-4 space-y-3 pb-4 bg-white rounded-lg p-4 shadow-md">
              <li><a href="#about" className="block" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#skills" className="block" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" className="block" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
              <li><a href="#academic" className="block" onClick={() => setMobileMenuOpen(false)}>Academic</a></li>
              <li><a href="#experience" className="block" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
              <li><a href="#education" className="block" onClick={() => setMobileMenuOpen(false)}>Education</a></li>
              <li><a href="#contact" className="block" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block text-blue-600 mb-4">
            <Cpu size={64} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Robert Janekarnkit
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-600">
            Backend Software Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
            Software engineer with 5+ years of experience in scalable distributed systems. 
            Proven track record architecting microservices handling millions of users.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6 text-gray-700">
              I have a proven track record of architecting scalable microservices and writing maintainable code that powers 
              mission-critical financial systems.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              My expertise spans backend development with Golang, Python, and Java, designing high-throughput APIs, 
              and implementing cloud-native architectures. I take pride and ownership in the software I deliver, 
              focusing on performance optimization, system reliability, and best practices.
            </p>
            <p className="text-lg text-gray-700">
              Currently pursuing a Master's in Computer Science with AI specialization at Georgia Tech, 
              combining practical industry experience with cutting-edge academic research in distributed systems and AI/ML.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 text-center"
                >
                  <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{skill.name}</div>
                  <div className="text-sm mt-1 text-blue-600">{skill.category}</div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition border border-gray-200">
              <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">API Development</h3>
              <p className="text-gray-600">REST, GraphQL, gRPC</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition border border-gray-200">
              <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Database</h3>
              <p className="text-gray-600">PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition border border-gray-200">
              <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Cloud & DevOps</h3>
              <p className="text-gray-600">AWS, GCP, Kubernetes, Docker</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition border border-gray-200">
              <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">AI/ML</h3>
              <p className="text-gray-600">PyTorch, Spark, LangChain, RAG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Professional Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-gray-200">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-sm mb-3 text-blue-600 font-semibold">{project.company}</p>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Projects Section */}
      <section id="academic" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Academic & AI/ML Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Research and academic projects focusing on machine learning, AI, and cutting-edge technologies
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 shadow-md hover:shadow-xl transition border border-purple-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                    {project.category}
                  </span>
                  <Brain className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="mb-4 text-gray-700 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-white text-purple-600 px-2 py-1 rounded text-xs font-medium border border-purple-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-3 border-t border-purple-200">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-600 hover:text-purple-800 transition text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-purple-600 hover:text-purple-800 transition text-sm font-medium"
                    >
                      <Play size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
                <div className="font-semibold mb-1 text-blue-600">{job.company}</div>
                <div className="mb-4 text-gray-600 text-sm">{job.period} | {job.location}</div>
                <ul className="space-y-2">
                  {job.points.map((point, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Education</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                    <div className="font-semibold mb-1 text-blue-600">{edu.school}</div>
                    {edu.specialization && (
                      <div className="mb-2 text-gray-600 flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-500" />
                        <span>{edu.specialization}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Get In Touch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            I'm currently open to new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate or discuss backend engineering!
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="mailto:janekarnkit2020@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-lg transition transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
              <Mail size={20} />
              <span>janekarnkit2020@gmail.com</span>
            </a>
            <a href="https://github.com/boblancer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg transition transform hover:scale-105 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/robertjanekarnkit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg transition transform hover:scale-105 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; 2024 Robert Janekarnkit. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}