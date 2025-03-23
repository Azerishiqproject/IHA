"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("kontrol");

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 text-white py-2 px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-400">GÖKBORA - OPUS SYSTEMv4</div>
        <div className="text-sm text-gray-400">v1.0.0</div>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow h-screen">
        {/* Left Panel */}
        <div className="w-1/3 bg-gray-800 border-r border-gray-700 flex flex-col overflow-hidden">
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-700 bg-gray-900 shrink-0">
            <div className="px-4 py-2 font-medium text-blue-400">OPTime</div>
            <div className="px-4 py-2 text-gray-400">-</div>
          </div>

          {/* Control Tabs */}
          <div className="flex border-b border-gray-700 shrink-0 ">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === "kontrol" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-200"}`}
              onClick={() => setActiveTab("kontrol")}
            >
              Kontrol
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === "ayarlar" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-200"}`}
              onClick={() => setActiveTab("ayarlar")}
            >
              Ayarlar
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === "ucusPlani" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-gray-200"}`}
              onClick={() => setActiveTab("ucusPlani")}
            >
              Uçuş Planı
            </button>
          </div>

          {/* Tab Content Container - Scrollable */}
          <div className="flex-grow overflow-y-auto">
            {/* Kontrol Tab Content */}
            {activeTab === "kontrol" && (
              <div className="p-3 pb-10">
                {/* Parameters Section */}
                <div className="bg-gray-900 rounded-lg p-2 mb-3">
                  <div className="flex">
                    <div className="w-1/2 flex flex-col">
                      <div className="p-1.5 text-gray-400">Mode</div>
                      <div className="p-1.5 text-gray-400">Batarya</div>
                      <div className="p-1.5 text-gray-400">Konum</div>
                      <div className="p-1.5 text-gray-400">Yükseklik</div>
                      <div className="p-1.5 text-gray-400">Hız</div>
                    </div>
                    <div className="w-1/2 flex flex-col">
                      <div className="p-1.5 text-white">Mode</div>
                      <div className="p-1.5 text-white">Batarya</div>
                      <div className="p-1.5 text-white">Konum</div>
                      <div className="p-1.5 text-white">Konum</div>
                      <div className="p-1.5 text-white">Hız</div>
                    </div>
                  </div>
                </div>

                {/* Manual Mode */}
                <div className="text-center py-2 bg-gray-900 rounded-lg mb-3">
                  <div className="text-blue-400 font-medium mb-1">Manuel Mode</div>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-1.5 px-5 rounded-md shadow-sm">İptal</button>
                </div>

                {/* Telemetry Status */}
                <div className="bg-gray-900 rounded-lg p-2 mb-3">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">Telemetry Status :</span>
                    <span className="text-white">255</span>
                  </div>
                </div>

                {/* Bottom Controls Section */}
                <div className="bg-gray-900 rounded-lg p-3 mb-3">
                  {/* Yükseklik/Hız Controls */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-gray-300 font-medium">Yükseklik</div>
                   
                  </div>
                  
                  {/* Horizontal Layout for Sliders */}
                  <div className="flex gap-3 mb-4">
                    {/* Yükseklik Slider */}
                    <div className="flex-1">
                      <input 
                        type="range" 
                        className="w-full appearance-none h-2 bg-blue-200 rounded-full" 
                      />
                    </div>
                    
                    {/* Vertical Line Divider */}
                    
                    {/* Hız Slider (Vertical) */}
                   
                  </div>
                  
                  {/* Kaçış Noktaları */}
                  <div className="text-gray-300 font-medium mb-2">Kaçış Noktaları</div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <button className="border border-gray-700 bg-gray-800 hover:bg-gray-700 p-2 rounded text-gray-200">Ana Kaçış</button>
                    <button className="border border-gray-700 bg-gray-800 hover:bg-gray-700 p-2 rounded text-gray-200">Siper</button>
                    <button className="border border-gray-700 bg-gray-800 hover:bg-gray-700 p-2 rounded text-gray-200">Sığınma</button>
                    <button className="border border-gray-700 bg-gray-800 hover:bg-gray-700 p-2 rounded text-gray-200">Hızlı Kaçış</button>
                  </div>
                  
                  {/* Two Column Layout for Bottom Controls */}
                  <div className="flex gap-3 mb-4">
                    {/* Left Column */}
                    <div className="w-1/2">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="text-gray-300 whitespace-nowrap">Sıradaki WP :</div>
                        <select className="flex-1 p-1.5 border border-gray-700 bg-gray-800 rounded text-white text-center">
                          <option>0</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="w-1/2">
                      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded">Set Next</button>
                    </div>
                  </div>
                  
                  {/* Aktif Görev */}
                  <div className="text-center mb-3">
                    <div className="text-gray-300 font-medium">Aktif Görev</div>
                    <div className="text-gray-500 py-1">-</div>
                  </div>
                  
                  {/* Take off and landing buttons */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded">Kalkış</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded">İniş</button>
                  </div>
                  
                  {/* Mode buttons row */}
                  <div className="flex mb-1">
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-sm border-r border-amber-800 mr-1">Auto</button>
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-sm border-r border-amber-800 mr-1">Guided</button>
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-sm border-r border-amber-800 mr-1">FBWB</button>
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-sm">Loiter</button>
                  </div>
                </div>
              </div>
            )}

            {/* Ayarlar Tab Content */}
            {activeTab === "ayarlar" && (
              <div className="p-3 text-gray-300">
                <h3 className="text-lg font-medium mb-3 text-blue-400">Ayarlar</h3>
                <div className="bg-gray-900 rounded-lg p-3 mb-3">
                  <div className="mb-2">
                    <label className="block text-gray-400 mb-1">Bağlantı Tipi</label>
                    <select className="w-full p-1.5 border border-gray-700 bg-gray-800 rounded-md">
                      <option>TCP</option>
                      <option>UDP</option>
                      <option>Serial</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-400 mb-1">IP Adresi</label>
                    <input type="text" className="w-full p-1.5 border border-gray-700 bg-gray-800 rounded-md" placeholder="192.168.1.1" />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-400 mb-1">Port</label>
                    <input type="text" className="w-full p-1.5 border border-gray-700 bg-gray-800 rounded-md" placeholder="14550" />
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-4 rounded-md mt-2">Bağlan</button>
                </div>
              </div>
            )}

            {/* Uçuş Planı Tab Content */}
            {activeTab === "ucusPlani" && (
              <div className="p-3 text-gray-300">
                <h3 className="text-lg font-medium mb-3 text-blue-400">Uçuş Planı</h3>
                <div className="bg-gray-900 rounded-lg p-3 mb-3">
                  <div className="mb-2">
                    <label className="block text-gray-400 mb-1">Plan Adı</label>
                    <input type="text" className="w-full p-1.5 border border-gray-700 bg-gray-800 rounded-md" placeholder="Yeni Plan" />
                  </div>
                  <div className="bg-gray-800 rounded-md p-2 mb-2 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Waypoints</div>
                    <div className="text-gray-500 text-center py-2">Henüz waypoint eklenmedi</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-4 rounded-md flex-1">Yükle</button>
                    <button className="bg-green-600 hover:bg-green-700 text-white py-1.5 px-4 rounded-md flex-1">Kaydet</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Map/Image */}
        <div className="w-2/3 bg-gray-900 flex items-center justify-center">
          <div className="w-full h-full relative">
            {/* Use a aspect ratio container to maintain image proportion */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[90%] h-[80%]">
                <Image 
                  src="/WhatsApp Image 2025-03-23 at 16.04.12.jpeg" 
                  alt="Drone view" 
                  fill 
                  style={{ objectFit: 'contain' }}
                  className="rounded-md" 
                  priority
                />
                
                {/* Yellow border/indicator box around the main drone image */}
                <div className="absolute inset-0 border-4 border-yellow-400 rounded-md pointer-events-none"></div>
              </div>
            </div>
            
            {/* Drone Indicator */}
            <div className="absolute top-1/3 right-1/4 transform translate-x-0 z-10">
              <div className="relative">
                <div className="absolute -top-5 right-0 text-pink-500 text-xs font-bold bg-black/60 px-1 rounded">İHA</div>
                <div className="border-2 border-pink-500 bg-black/40 rounded-md">
                  <div className="relative w-[100px] h-[60px] rounded overflow-hidden">
                    <Image 
                      src="/WhatsApp Image 2025-03-23 at 16.04.12.jpeg" 
                      alt="İHA" 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="border border-pink-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
