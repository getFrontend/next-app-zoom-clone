"use client";

import { Button } from "@/components/ui/button";
import Table from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PersonalRoomPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const client = useStreamVideoClient();
  const { toast } = useToast();

  const meetingId = user?.id;

  const { call } = useGetCallById(meetingId!);

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }
    toast({
      title: "Private Room is creating",
    });

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  return (
    <section className="size-full flex flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Personal Room</h1>

      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.username}'s Meeting Room`} />
        <Table title="Meeting ID" description={meetingId!} />
        <Table title="Invitation Link" description={meetingLink} />
      </div>
      <div className="flex gap-5">
        <Button className="bg-green-2 hover:bg-blue-1" onClick={startRoom}>
          Start Meeting
        </Button>
        <Button
          className="bg-dark-3"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          Copy Invitation
          <Image
            src="/icons/copy.svg"
            alt="copy icon"
            width={13}
            height={13}
            className="ml-2"
          />
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoomPage;
