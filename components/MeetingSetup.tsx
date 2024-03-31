"use client";

import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FiArrowRight } from "react-icons/fi";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  // https://getstream.io/video/docs/react/ui-cookbook/replacing-call-controls/
  const [isMicCamToggled, setIsMicCamToggled] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error(
      "useStreamCall must be used within a StreamCall component!"
    );
  }

  useEffect(() => {
    if (isMicCamToggled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [isMicCamToggled, call?.camera, call?.microphone]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-center text-2xl font-bold">Setup & Settings</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggled}
            onChange={(event) => setIsMicCamToggled(event.target.checked)}
          />
          Join with microphone and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="group rounded-md bg-green-2 px-4 py-2.5 text-lg hover:bg-blue-1"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join meeting
        <FiArrowRight className="ml-2.5 transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
      </Button>
    </div>
  );
};

export default MeetingSetup;
