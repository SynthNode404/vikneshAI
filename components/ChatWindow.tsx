
import React, { useEffect, useRef } from 'react';
import { Message } from '../types';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { LoadingIcon } from './Icons';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (text: string) => void;
  error: string | null;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading, onSendMessage, error }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isLoading && (
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center ring-2 ring-cyan-500/50">
                <LoadingIcon className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="bg-gray-700/80 rounded-lg p-3 text-sm animate-pulse">
                Viknesh is consulting the garden slugs...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {error && <div className="p-4 text-center text-red-400 bg-red-900/50 mx-6 rounded-lg text-sm">{error}</div>}
      <div className="p-4 sm:p-6 border-t border-gray-700/50">
        <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};
