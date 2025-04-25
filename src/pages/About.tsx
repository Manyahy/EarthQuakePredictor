
import { useEffect } from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    document.title = "About - QuakeWatchGuard";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">About QuakeWatchGuard</h1>
        <p className="text-slate-600 mb-8">Advanced earthquake prediction and early warning system</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Our Mission</h2>
                <p className="mb-4">
                  QuakeWatchGuard is dedicated to advancing earthquake prediction technology to save lives 
                  and minimize damage from seismic events. By combining cutting-edge AI models with 
                  comprehensive seismic monitoring data, we aim to provide communities with advance 
                  warning of potential earthquake activity.
                </p>
                <p>
                  Our system continuously analyzes patterns in tectonic plate movements, 
                  electromagnetic changes, groundwater fluctuations, and historical data to identify 
                  early warning signs of impending seismic events.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">How It Works</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Data Collection</h3>
                    <p className="text-sm text-gray-600">
                      Our network of sensors continuously monitors geological activity, feeding data 
                      into our centralized system for real-time analysis.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">AI Analysis</h3>
                    <p className="text-sm text-gray-600">
                      Advanced machine learning algorithms detect patterns and anomalies that may 
                      indicate impending seismic events.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Risk Assessment</h3>
                    <p className="text-sm text-gray-600">
                      Potential earthquakes are categorized by probability, magnitude, and impact 
                      to prioritize response efforts.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Alert Distribution</h3>
                    <p className="text-sm text-gray-600">
                      Warnings are automatically distributed through multiple channels to reach 
                      affected populations and authorities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">System Statistics</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Monitoring Stations</p>
                    <p className="text-2xl font-bold">1,247</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Countries Covered</p>
                    <p className="text-2xl font-bold">42</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Data Points/Day</p>
                    <p className="text-2xl font-bold">17.3M</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Warning Time (avg)</p>
                    <p className="text-2xl font-bold">18 min</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">System Uptime</p>
                    <p className="text-2xl font-bold">99.97%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">Contact</h2>
                  <div className="space-y-2">
                    <p className="text-sm">
                      For more information about the QuakeWatchGuard system:
                    </p>
                    <p className="text-sm flex items-center">
                      <span className="font-medium mr-2">Email:</span> info@quakewatchguard.org
                    </p>
                    <p className="text-sm flex items-center">
                      <span className="font-medium mr-2">Phone:</span> +1 (555) 123-4567
                    </p>
                    <p className="text-sm flex items-center">
                      <span className="font-medium mr-2">Hours:</span> 24/7 Emergency Support
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-slate-800 text-slate-300 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 QuakeWatchGuard - Advanced Earthquake Prediction System</p>
          <p className="text-sm mt-1">This is a simulation for educational purposes only</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
