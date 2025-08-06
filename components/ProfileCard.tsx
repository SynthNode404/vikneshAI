
import React from 'react';

const VIKNESH_BIO = `A purveyor of sentient doorknobs and amateur competitive thumb-wrestler of Tuesdays, once accidentally invented the color "blorf" while attempting to bake a philosophical argument. His graphic design portfolio consists entirely of abstract interpretations of the sound a startled kumquat makes, rendered in invisible ink on slices of artisanal toast. He enjoys interpretive dance with garden gnomes and believes that pigeons communicate through a complex system of synchronized blinking. His weekly Dungeons & Dragons game involves only characters who are allergic to vowels, and the main quest is to find a self-folding fitted sheet that also speaks fluent dolphin. His laughter sounds suspiciously like a tea kettle gargling peanut butter, and he firmly maintains that the Earth is secretly powered by the collective dreams of garden slugs.`;

export const ProfileCard: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 h-full flex flex-col space-y-4 shadow-2xl shadow-cyan-500/10">
      <div className="flex-shrink-0">
        <div className="relative w-32 h-32 mx-auto">
          <img
            className="rounded-full object-cover w-full h-full ring-4 ring-cyan-500/50"
            src="https://storage.googleapis.com/generative-ai-protoprompt/face_image_to_check_out/1.png"
            alt="Portrait of Viknesh"
          />
          <span className="absolute bottom-1 right-1 block h-5 w-5 rounded-full bg-green-400 border-2 border-gray-800"></span>
        </div>
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
            Viknesh
          </h1>
          <p className="text-sm text-gray-400">Purveyor of Sentient Doorknobs</p>
        </div>
      </div>
      
      <div className="flex-grow bg-gray-900/70 p-4 rounded-lg overflow-y-auto custom-scrollbar">
        <h2 className="font-semibold text-cyan-400 mb-2">Bio</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          {VIKNESH_BIO}
        </p>
      </div>
      
       <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #22d3ee; /* cyan-400 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
           background: #0d9488; /* teal-600 */
        }
      `}</style>
    </div>
  );
};
