const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h2 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h2>
      <p className="truncate text-sm font-bold max-sm:max-w-[280px] lg:text-xl">
        {description}
      </p>
    </div>
  );
};

export default Table;
