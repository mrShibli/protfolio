import { useState } from 'react'
import { Menu, X, ChevronRight, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

const technologies = [
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Node.js', icon: 'fab fa-node' },
  { name: 'Angular', icon: 'fab fa-angular' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Puppeteer', icon: 'fas fa-puppet' },
  { name: 'Playwright', icon: 'fas fa-mask' },
  { name: 'Selenium', icon: 'fas fa-triangle' },
]

const services = [
  { title: 'Data Aggregation For E-commerce', description: 'Scrape product details, prices, and reviews from multiple e-commerce websites to aggregate and compare data.' },
  { title: 'Job Board Scraper', description: 'Create a tool to scrape job postings from various job boards based on specific criteria.' },
  { title: 'Social Media Analytics', description: 'Scrape data from social media platforms to analyze trends, engagement, and user sentiment.' },
  { title: 'Real Estate Listings Tracker', description: 'Build a scraper to extract real estate listings, including property details and prices, from different websites.' },
  { title: 'Travel Deal Finder', description: 'Scrape travel websites for flight and hotel deals. Provide users with notifications for significant discounts or special offers.' },
  { title: 'Stock Market Data Tracker', description: 'Scrape financial data, stock prices, and news related to specific stocks. Implement alerts for significant market events or price changes.' },
  { title: 'Content Aggregator', description: 'Scrape articles and blog posts from different sources based on user preferences. Present the aggregated content in a personalized feed.' },
  { title: 'Price Monitoring for Competitor Analysis', description: 'Monitor prices of specific products/services offered by competitors, and generate reports to analyze pricing strategies over time.' },
  { title: 'Automated Testing for Websites', description: 'Use tools like Playwright or Puppeteer to automate testing of website functionalities.' },
]

export default function SmartDataAutomators() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="flex justify-between items-center p-6 border-b border-border">
        <div className="text-2xl font-bold">
          <span className="text-primary">Smart</span>
          <span className="text-blue-500">DataAutomators</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a className="text-muted-foreground hover:text-foreground transition-colors" href="#about">About</a>
          <a className="text-muted-foreground hover:text-foreground transition-colors" href="#contact">Contact</a>
          <a className="text-muted-foreground hover:text-foreground transition-colors" href="#scrapeautomate">
            ScrapeAutomate 
            <span className="ml-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
          </a>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a className="text-muted-foreground hover:text-foreground transition-colors" href="#about">About</a>
            <a className="text-muted-foreground hover:text-foreground transition-colors" href="#contact">Contact</a>
            <a className="text-muted-foreground hover:text-foreground transition-colors" href="#scrapeautomate">
              ScrapeAutomate 
              <span className="ml-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
            </a>
          </nav>
        </div>
      )}

      <main className="px-6 max-w-7xl mx-auto">
        <section className="text-center my-16">
          <h1 className="text-5xl font-bold mb-4">We Automate The Web For You, Smartly</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Leveraging AI and machine learning, we transform vast amounts of web data into actionable insights for your business. 
            Our smart algorithms adapt to changing web structures, ensuring reliable data extraction.
          </p>
          <Button size="lg" className="text-lg">
            Schedule a Smart Consultation <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section className="mb-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://storage.googleapis.com/a1aa/image/GmoHG5gBpfwjcy0ORZZMRRS8UuG7NUsRM8foZurk0NkZO4rTA.jpg" 
              alt="Smart web automation illustration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-500/80 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white text-center">Powering the Future of Web Automation</h2>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Intelligent Web Automation Solutions</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our AI-powered automation tools adapt to website changes, ensuring consistent and reliable data extraction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                  selectedService === service.title 
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                    : 'bg-card hover:shadow-md'
                }`}
                onClick={() => setSelectedService(service.title)}
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className={selectedService === service.title ? 'text-primary-foreground' : 'text-muted-foreground'}>
                  {service.description}
                </p>
                {selectedService === service.title && (
                  <div className="mt-4 flex items-center justify-center">
                    <Check className="mr-2" /> Selected
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Cutting-edge Technologies We Leverage</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <i className={`${tech.icon} text-4xl mb-2 text-primary`}></i>
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground text-center py-16 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Build Smarter Workflows!</h2>
          <p className="text-xl mb-8">
            Let our AI-powered automation revolutionize your workflow and save countless hours of manual work!
          </p>
          <Button variant="secondary" size="lg">
            Get A Smart Quote
          </Button>
        </section>
      </main>
      
      <footer className="text-center py-6 text-muted-foreground mt-16 border-t border-border">
        <p>Copyright © 2024 SmartDataAutomators. All rights reserved.</p>
        <p>Enhanced from Astroship Template by Web3Templates</p>
      </footer>
    </div>
  )
}
