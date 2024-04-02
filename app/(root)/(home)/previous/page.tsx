import CallList from "@/components/CallList";

const PreviousPage = () => {
  return (
    <section className="size-full flex flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Previous Calls</h1>
      <CallList type="ended" />
    </section>
  );
};

export default PreviousPage;
