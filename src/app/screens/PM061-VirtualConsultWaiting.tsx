import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Video, Mic, MicOff, VideoOff, Phone } from 'lucide-react';

interface VirtualConsultWaitingProps {
  onJoinCall: () => void;
  onCancel: () => void;
}

export default function VirtualConsultWaiting({ onJoinCall, onCancel }: VirtualConsultWaitingProps) {
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [waitTime] = useState(2);

  return (
    <div className="flex flex-col h-full bg-[#1F2937]">
      {/* Video Preview Area */}
      <div className="flex-1 relative">
        {/* Self Video Preview */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#374151] to-[#1F2937] flex items-center justify-center">
          {videoEnabled ? (
            <div className="text-center">
              <div className="w-32 h-32 bg-[#6B7280] rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-5xl">👤</span>
              </div>
              <p className="text-white text-base">Camera is working</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-32 h-32 bg-[#6B7280] rounded-full flex items-center justify-center mb-4 mx-auto">
                <VideoOff className="w-12 h-12 text-white" />
              </div>
              <p className="text-white text-base">Camera is off</p>
            </div>
          )}
        </div>

        {/* Waiting Status */}
        <div className="absolute top-8 left-0 right-0">
          <div className="bg-[#1F2937]/90 backdrop-blur-sm rounded-2xl p-6 mx-6 text-center">
            <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⏳</span>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Virtual Waiting Room
            </h2>
            <p className="text-sm text-white/80 mb-4">
              A provider will join shortly
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse"></div>
              <p className="text-sm text-white/80">
                Estimated wait: {waitTime} minutes
              </p>
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="absolute bottom-32 left-0 right-0">
          <div className="mx-6">
            <div className="bg-[#10B981]/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
              <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Connection Excellent</p>
                <p className="text-xs text-white/80">Audio and video quality is good</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-[#1F2937] border-t border-[#374151] p-6 pb-8">
        {/* Media Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              audioEnabled
                ? 'bg-[#374151] hover:bg-[#4B5563]'
                : 'bg-[#EF4444] hover:bg-[#DC2626]'
            }`}
          >
            {audioEnabled ? (
              <Mic className="w-6 h-6 text-white" />
            ) : (
              <MicOff className="w-6 h-6 text-white" />
            )}
          </button>

          <button
            onClick={() => setVideoEnabled(!videoEnabled)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              videoEnabled
                ? 'bg-[#374151] hover:bg-[#4B5563]'
                : 'bg-[#EF4444] hover:bg-[#DC2626]'
            }`}
          >
            {videoEnabled ? (
              <Video className="w-6 h-6 text-white" />
            ) : (
              <VideoOff className="w-6 h-6 text-white" />
            )}
          </button>

          <button
            onClick={onCancel}
            className="w-14 h-14 bg-[#EF4444] hover:bg-[#DC2626] rounded-full flex items-center justify-center transition-colors"
          >
            <Phone className="w-6 h-6 text-white rotate-135" />
          </button>
        </div>

        {/* Labels */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <p className="text-xs text-white/60 w-14 text-center">
            {audioEnabled ? 'Mute' : 'Unmute'}
          </p>
          <p className="text-xs text-white/60 w-14 text-center">
            {videoEnabled ? 'Stop Video' : 'Start Video'}
          </p>
          <p className="text-xs text-white/60 w-14 text-center">
            Leave
          </p>
        </div>

        {/* Info */}
        <div className="bg-[#374151] rounded-xl p-4">
          <p className="text-sm text-white/80 text-center">
            You're in line to see a provider. Please keep this window open and stay ready to join the call.
          </p>
        </div>
      </div>
    </div>
  );
}
