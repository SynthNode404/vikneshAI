
import React, { useState, useCallback, useEffect } from 'react';
import { ProfileCard } from './components/ProfileCard';
import { ChatWindow } from './components/ChatWindow';
import { sendMessageToAI } from './services/geminiService';
import { Message } from './types';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      role: 'model',
      text: "Greetings, mortal! I've just finished teaching my doorknobs the concept of existential dread. What conundrum can I unravel for you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const aiResponseText = await sendMessageToAI(text);
      const aiMessage: Message = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: aiResponseText,
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Viknesh seems to be wrestling a philosophical argument... or maybe just a stubborn thumb. Error: ${errorMessage}`);
      const errorMessageObj: Message = {
        id: `error-${Date.now()}`,
        role: 'model',
        text: `My apologies, my connection to the collective dream-power of garden slugs seems to be fluctuating. Please try again shortly.`,
      };
      setMessages(prev => [...prev, errorMessageObj]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-900 text-white font-sans antialiased overflow-hidden">
      <div className="lg:w-1/3 xl:w-1/4 p-4 lg:p-6 bg-gray-900/80 backdrop-blur-sm border-r border-gray-700/50 flex-shrink-0 lg:h-full lg:overflow-y-auto">
        <ProfileCard />
      </div>
      
      <main className="flex-1 flex flex-col h-full max-h-screen">
         <ChatWindow messages={messages} isLoading={isLoading} onSendMessage={handleSendMessage} error={error} />
      </main>
    </div>
  );
};

export default App;
