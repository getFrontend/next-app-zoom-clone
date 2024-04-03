"use client";

import { useRouter } from "next/navigation";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";

const EndCallButton = () => {
  const router = useRouter();
  const call = useCall();

  if (!call)
    throw new Error(
      "useStreamCall must be used within a StreamCall component!"
    );

  // https://getstream.io/video/docs/react/guides/call-and-participant-state/#participant-state-3
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endCall = async () => {
    await call.endCall();
    router.push("/dashboard");
  };

  return (
    <Button onClick={endCall} className="bg-orange-1 hover:bg-red-500">
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
