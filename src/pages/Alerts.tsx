
import { useEffect } from "react";
import Header from "@/components/Header";
import AlertSystem from "@/components/AlertSystem";
import { alertZones } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";

const Alerts = () => {
  useEffect(() => {
    document.title = "Alerts - QuakeWatchGuard";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Alert System</h1>
        <p className="text-slate-600 mb-8">Early warning and evacuation management</p>
        
        <Card className="bg-red-50 border-red-200 mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-100">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h2 className="text-lg font-medium text-red-800">Active Alert: Santiago Region</h2>
                <p className="text-red-700">
                  Evacuation warning in effect. Prepare for possible evacuation orders.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-12 gap-6 mb-8">
          <div className="md:col-span-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-4">Alert Broadcasting System</h3>
                <div className="space-y-4">
                  <p>
                    The QuakeWatchGuard system automatically distributes alerts through multiple channels:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg flex items-center">
                      <div className="mr-3 text-blue-500">📱</div>
                      <div>
                        <p className="font-medium">Mobile Alerts</p>
                        <p className="text-sm text-gray-600">Status: Active</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center">
                      <div className="mr-3 text-blue-500">📢</div>
                      <div>
                        <p className="font-medium">Emergency Broadcast</p>
                        <p className="text-sm text-gray-600">Status: Active</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center">
                      <div className="mr-3 text-blue-500">📧</div>
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-600">Status: Active</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg flex items-center">
                      <div className="mr-3 text-blue-500">📞</div>
                      <div>
                        <p className="font-medium">Authority Notification</p>
                        <p className="text-sm text-gray-600">Status: Active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-4">Alert Response Times</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Average alert issue time</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold">6.2</span>
                      <span className="ml-1 text-sm text-gray-600">minutes</span>
                    </div>
                    <p className="text-xs text-green-600">↓ 0.8 minutes from last month</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Authority response time</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold">12.7</span>
                      <span className="ml-1 text-sm text-gray-600">minutes</span>
                    </div>
                    <p className="text-xs text-green-600">↓ 2.3 minutes from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <AlertSystem alertZones={alertZones} />
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

export default Alerts;
