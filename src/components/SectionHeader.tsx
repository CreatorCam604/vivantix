import clsx from "clsx";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  return (
    <div
      className={clsx(
        "mb-12",
        align === "center"
          ? "text-center flex flex-col items-center"
          : "text-left"
      )}
    >
      {eyebrow && (
        <p className="mb-6 text-xs tracking-[0.35em] text-cyan-400 uppercase">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-sm sm:text-base text-neutral-300">
          {description}
        </p>
      )}
    </div>
  );
}
