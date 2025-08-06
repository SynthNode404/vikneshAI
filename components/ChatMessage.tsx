
import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="flex items-end justify-end">
        <div className="max-w-xs md:max-w-md lg:max-w-lg bg-cyan-600 rounded-lg p-3 shadow-md">
          <p className="text-white text-sm">{message.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center ring-2 ring-cyan-500/50">
          <img 
            src="https://storage.googleapis.com/generative-ai-protoprompt/face_image_to_check_out/1.png" 
            alt="Viknesh mini-avatar" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      <div className="max-w-xs md:max-w-md lg:max-w-lg bg-gray-700/80 rounded-lg p-3 shadow-md">
        <p className="text-gray-200 text-sm leading-relaxed">{message.text}</p>
      </div>
    </div>
  );
};
