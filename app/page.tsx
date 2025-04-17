"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

// 定义聊天卡片类型
interface ChatCard {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
  visible: boolean;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    rotate: string;
    zIndex: number;
  };
}

export default function Home() {
  // 管理聊天卡片的状态
  const [chatCards, setChatCards] = useState<ChatCard[]>([
    {
      id: 1,
      name: "Sarah K.",
      avatar: "/avatar1.svg",
      online: true,
      visible: true,
      position: { top: "12px", right: "4px", rotate: "3deg", zIndex: 10 }
    },
    {
      id: 2,
      name: "John Doe",
      avatar: "/avatar2.svg",
      online: true,
      visible: true,
      position: { top: "0", left: "0", rotate: "0deg", zIndex: 20 }
    },
    {
      id: 3,
      name: "Alex M.",
      avatar: "/avatar3.svg",
      online: false,
      visible: true,
      position: { bottom: "-8px", left: "-4px", rotate: "-2deg", zIndex: 0 }
    }
  ]);

  // 删除聊天卡片
  const removeCard = (id: number) => {
    setChatCards(chatCards.map(card => 
      card.id === id ? { ...card, visible: false } : card
    ));
    
    // 2秒后恢复卡片（模拟效果）
    setTimeout(() => {
      setChatCards(chatCards.map(card => 
        card.id === id ? { ...card, visible: true } : card
      ));
    }, 2000);
  };

  return (
    <div className="min-h-screen text-gray-800 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* 闪烁网格背景 */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="size-full"
          squareSize={4}
          gridGap={6}
          color="#10B981"
          maxOpacity={0.2}
          flickerChance={0.08}
        />
      </div>
      
      {/* 主容器 - 两栏布局 */}
      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen relative z-10">
        
        {/* 左侧主内容区域 */}
        <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-between backdrop-blur-sm bg-transparent rounded-none">
          
          {/* 顶部导航栏 */}
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
            {/* Logo */}
            <div className="flex items-center mb-6 md:mb-0">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <span className="text-emerald-500 mr-1">Viva</span>Chat
                <span className="ml-2 inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              </h1>
            </div>
            
            {/* 导航菜单 */}
            <nav className="flex flex-wrap gap-6 text-sm text-gray-600">
              <Link href="#about" className="hover:text-emerald-500 transition-colors">About</Link>
              <Link href="#benefits" className="hover:text-emerald-500 transition-colors">Benefits</Link>
              <Link href="#app" className="hover:text-emerald-500 transition-colors">App</Link>
              <Link href="#features" className="hover:text-emerald-500 transition-colors">Features</Link>
              <Link href="#reviews" className="hover:text-emerald-500 transition-colors">Reviews</Link>
              <Link href="#plans" className="hover:text-emerald-500 transition-colors">Plans</Link>
            </nav>
          </header>
          
          {/* 主标题内容区 */}
          <div className="flex-grow flex flex-col justify-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Empower Connections with <span className="text-emerald-500">VivaChat</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Instant, real-time communication, providing both visual connection and immediate answers to customers&apos; inquiries.
            </p>
            
            {/* CTA 按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                Try Out
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg">
                Learn More
              </button>
            </div>
            
            {/* 标签关键词 */}
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white/30 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium hover-scale shadow-sm border border-white/20">High-performance</span>
              <span className="px-4 py-2 bg-white/30 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium hover-scale shadow-sm border border-white/20">Revolutionary</span>
              <span className="px-4 py-2 bg-white/30 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium hover-scale shadow-sm border border-white/20">Progressive</span>
            </div>
          </div>
          
          {/* 页脚 */}
          <footer className="text-sm text-gray-500">
            <a href="https://vivachat.com" className="hover:text-emerald-500 transition-colors">vivachat.com</a>
          </footer>
        </div>
        
        {/* 右侧视频支持卡片轮播组件 */}
        <div className="w-full lg:w-2/5 backdrop-blur-sm p-8 lg:p-12 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* 渲染聊天卡片 */}
            {chatCards.map((card) => (
              card.visible && (
                <div 
                  key={card.id}
                  className={`absolute w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 transition-all duration-500 ${
                    card.id !== 2 ? 'opacity-70' : ''
                  }`}
                  style={{
                    top: card.position.top || 'auto',
                    right: card.position.right || 'auto',
                    bottom: card.position.bottom || 'auto',
                    left: card.position.left || 'auto',
                    transform: `rotate(${card.position.rotate})`,
                    zIndex: card.position.zIndex,
                  }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <div className={`${card.id === 2 ? 'w-10 h-10' : 'w-8 h-8'} rounded-full overflow-hidden ${card.id === 2 ? 'mr-3' : 'mr-2'} ${
                        card.id === 2 ? 'border border-emerald-200' : ''
                      }`}>
                        <Image 
                          src={card.avatar} 
                          alt={card.name} 
                          width={card.id === 2 ? 40 : 32} 
                          height={card.id === 2 ? 40 : 32}
                          className="hover-scale" 
                        />
                      </div>
                      <div>
                        <span className="font-medium block">{card.name}</span>
                        {card.id === 2 && (
                          <span className="text-xs text-emerald-500">Online</span>
                        )}
                      </div>
                    </div>
                    <button 
                      className={`text-gray-400 hover:text-gray-600 ${
                        card.id === 2 ? 'bg-gray-50 p-1.5 rounded-full backdrop-blur-sm bg-opacity-80 hover:bg-opacity-100 transition-all' : ''
                      }`}
                      onClick={() => removeCard(card.id)}
                      aria-label="关闭"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  {card.id === 2 ? (
                    <div className="w-full h-56 bg-gradient-to-b from-emerald-50 to-gray-50 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                      <Image src="/videochat.svg" alt="Video Call Preview" width={300} height={200} className="object-cover hover-scale" />
                      <div className="absolute bottom-3 right-3 bg-emerald-500 text-white p-2 rounded-full shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                          <path d="M14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  
                  {card.id === 2 ? (
                    <button className="w-full py-2.5 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors mb-3 flex items-center justify-center">
                      Ask Me A Question
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ) : (
                    <button className="w-full py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Ask Me A Question
                    </button>
                  )}
                  
                  {card.id === 2 && (
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Type here..."
                        className="w-full py-3 px-4 bg-gray-50 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white pr-10"
                      />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-500 hover:text-emerald-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
