
import { useEffect } from "react";
import Header from "@/components/Header";
import PredictionCard from "@/components/PredictionCard";
import { predictionData } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Predictions = () => {
  useEffect(() => {
    document.title = "Predictions - QuakeWatchGuard";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Earthquake Predictions</h1>
        <p className="text-slate-600 mb-8">AI-powered seismic activity prediction system</p>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Prediction Model Accuracy</h2>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold">87.4%</span>
                <span className="text-green-600 text-sm">↑ 2.1% from last quarter</span>
              </div>
              <p className="text-sm text-slate-500">
                Based on historical data correlation and AI pattern recognition
              </p>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-slate-500">Data points</p>
                  <p className="font-bold">12.7M</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Model version</p>
                  <p className="font-bold">v3.5.2</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Last updated</p>
                  <p className="font-bold">7 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">Current Predictions</TabsTrigger>
            <TabsTrigger value="historical">Historical Accuracy</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" className="mt-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {predictionData.map(prediction => (
                <PredictionCard key={prediction.id} prediction={prediction} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="historical" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Historical Prediction Accuracy</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">2025 Q1 Predictions</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-slate-100 rounded-lg">
                        <p className="text-sm text-slate-500">Predictions made</p>
                        <p className="text-xl font-bold">27</p>
                      </div>
                      <div className="p-4 bg-slate-100 rounded-lg">
                        <p className="text-sm text-slate-500">Accuracy</p>
                        <p className="text-xl font-bold">89.2%</p>
                      </div>
                      <div className="p-4 bg-slate-100 rounded-lg">
                        <p className="text-sm text-slate-500">False alarms</p>
                        <p className="text-xl font-bold">3</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">2024 Q4 Predictions</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-slate-100 rounded-lg">
                        <p className="text-sm text-slate-500">Predictions made</p>
                        <p className="text-xl font-bold">31</p>
                      </div>
                      <div className="p-4 bg-slate-100 rounded-lg">
                        <p className="text-sm text-slate-500">Accuracy</p>
                        <p className="text-xl font-bold">85.1%</p>
                      </div>
                      <div className="p-4 bg-slate-100 rounded-lg">
                        <p className="text-sm text-slate-500">False alarms</p>
                        <p className="text-xl font-bold">4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="methodology" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Prediction Methodology</h3>
                <div className="space-y-4">
                  <p>
                    Our earthquake prediction system combines multiple data sources and advanced AI algorithms 
                    to identify patterns that may indicate potential seismic events:
                  </p>
                  
                  <div>
                    <h4 className="font-medium">Data Sources</h4>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Ground motion sensors</li>
                      <li>Tectonic plate movement</li>
                      <li>Historical earthquake patterns</li>
                      <li>Electromagnetic field changes</li>
                      <li>Groundwater level fluctuations</li>
                      <li>Radon gas emissions</li>
                      <li>Satellite-based crustal deformation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">AI Analysis</h4>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Neural network pattern recognition</li>
                      <li>Anomaly detection algorithms</li>
                      <li>Machine learning time-series forecasting</li>
                      <li>Bayesian probability models</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm bg-blue-50 p-3 border-l-4 border-blue-500">
                    <strong>Disclaimer:</strong> Earthquake prediction is not yet an exact science. 
                    Our system provides probabilistic forecasts based on available data and should be 
                    used as one component of comprehensive disaster preparedness.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
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

export default Predictions;
