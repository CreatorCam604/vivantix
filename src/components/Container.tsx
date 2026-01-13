// src/components/Container.tsx
import clsx from "clsx";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  id?: string;
};

export function Container({ className, id, ...props }: ContainerProps) {
  return (
    <div
      id={id}
      className={clsx(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
