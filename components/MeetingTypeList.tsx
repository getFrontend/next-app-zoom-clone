"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { homeCards, initialValues } from "@/constants";
import { useToast } from "./ui/use-toast";
import { Textarea } from "./ui/textarea";
import DatePicker from "react-datepicker";
import { Input } from "./ui/input";
import { AnimatePresence, motion } from "framer-motion";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const { toast } = useToast();

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast({ title: "Please select a date and time!" });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create meeting!");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetail(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: "✅ Meeting created successfully!",
      });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed to create Meeting!" });
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {homeCards.map((card, index) => (
        <div
          key={card?.title || index}
          className="relative group-cards block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-green-1 block rounded-[20px]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-[20px] h-full w-full overflow-hidden border border-transparent relative z-20">
            <div className="relative z-50">
              <HomeCard
                key={card.id}
                img={card.img}
                title={card.title}
                description={card.description}
                className={card.className}
                handleClick={
                  card.id === 1
                    ? () => setMeetingState("isInstantMeeting")
                    : card.id === 2
                    ? () => setMeetingState("isScheduleMeeting")
                    : card.id === 3
                    ? () => router.push("/recordings")
                    : () => setMeetingState("isJoiningMeeting")
                }
              />
            </div>
          </div>
        </div>
      ))}

      {!callDetail ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <DatePicker
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy HH:mm"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link Copied!" });
          }}
          image={"/icons/checked.svg"}
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Paste the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
