"use client";

import { Badge, Button, Card, Avatar, Blockquote } from "flowbite-react";
import { HiCode, HiLightningBolt, HiSparkles, HiTrendingUp, HiChatAlt2, HiPencilAlt } from "react-icons/hi";
import { BiCodeAlt, BiRocket, BiBrain, BiTrendingUp } from "react-icons/bi";
import { FaRobot, FaCode, FaLightbulb, FaFire } from "react-icons/fa";

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: "Building AI-Powered Web Applications with Next.js",
      excerpt: "Explore how to integrate machine learning models into your React applications for intelligent user experiences.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "AI Development",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Software Architecture in 2025",
      excerpt: "Discover emerging patterns and practices that are shaping the next generation of scalable applications.",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Software Architecture",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Mastering TypeScript: Advanced Patterns for Enterprise",
      excerpt: "Deep dive into sophisticated TypeScript techniques that improve code quality and developer productivity.",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      category: "TypeScript",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", count: 24, icon: FaRobot, color: "purple" },
    { name: "Software Development", count: 18, icon: FaCode, color: "blue" },
    { name: "Web Technologies", count: 16, icon: BiCodeAlt, color: "green" },
    { name: "Innovation", count: 12, icon: FaLightbulb, color: "yellow" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Badge 
                color="info" 
                size="lg" 
                className="animate-pulse bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
              >
                <HiSparkles className="w-4 h-4 mr-2" />
                Professional Software & AI Blog
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gnome Studio
              </span>
              <br />
              <span className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300">
                Code • AI • Innovation
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Exploring the cutting edge of software development and artificial intelligence. 
              Join me on a journey through modern tech, breakthrough innovations, and practical solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                color="blue"
                className="transform hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
              >
                <BiRocket className="w-5 h-5 mr-2" />
                Explore Latest Posts
              </Button>
              <Button 
                size="lg" 
                color="gray" 
                outline
                className="transform hover:scale-105 transition-transform"
              >
                <HiChatAlt2 className="w-5 h-5 mr-2" />
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            <HiTrendingUp className="inline w-8 h-8 mr-3 text-blue-600" />
            Featured Articles
          </h2>
          <Button color="light" size="sm">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Post */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-2xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <HiCode className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-sm opacity-90">Featured Article Image</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge color="purple" size="sm">
                    <HiLightningBolt className="w-3 h-3 mr-1" />
                    {featuredPosts[0].category}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {featuredPosts[0].date} • {featuredPosts[0].readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {featuredPosts[0].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {featuredPosts[0].excerpt}
                </p>
                <Button color="blue" size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
                  Read More
                </Button>
              </div>
            </Card>
          </div>

          {/* Side Posts */}
          <div className="space-y-6">
            {featuredPosts.slice(1).map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-t-lg flex items-center justify-center">
                  <HiCode className="w-8 h-8 text-white opacity-80" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge color="blue" size="xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {post.excerpt.substring(0, 100)}...
                  </p>
                  <Button size="xs" color="light">
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            <BiTrendingUp className="inline w-8 h-8 mr-3 text-green-600" />
            Popular Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${category.color}-100 dark:bg-${category.color}-900 mb-4`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {category.count} articles
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              <FaFire className="inline w-8 h-8 mr-3 text-red-500" />
              Passionate About Technology
            </h2>
            <Blockquote className="border-l-4 border-blue-500 pl-6 mb-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                &ldquo;Technology is best when it brings people together. Through code and AI, 
                we&rsquo;re not just building applications&mdash;we&rsquo;re crafting the future.&rdquo;
              </p>
            </Blockquote>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Welcome to my corner of the web! I&rsquo;m a software developer and AI enthusiast 
              who believes in the power of technology to solve real-world problems. Here, 
              you&rsquo;ll find insights into modern development practices, AI breakthroughs, 
              and innovative solutions that shape our digital world.
            </p>
            <Button color="blue" size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
              <HiPencilAlt className="w-5 h-5 mr-2" />
              Read My Story
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Avatar size="lg" className="mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Gnome Studio</h3>
                  <p className="opacity-90">Software Developer & AI Enthusiast</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BiRocket className="w-5 h-5 mr-3" />
                  <span>5+ years in software development</span>
                </div>
                <div className="flex items-center">
                  <BiBrain className="w-5 h-5 mr-3" />
                  <span>AI/ML specialist</span>
                </div>
                <div className="flex items-center">
                  <BiCodeAlt className="w-5 h-5 mr-3" />
                  <span>Full-stack developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Latest Tech Insights
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of developers and tech enthusiasts who get weekly insights 
            on software development, AI trends, and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <Button size="lg" color="light" className="whitespace-nowrap">
              <HiSparkles className="w-5 h-5 mr-2" />
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
