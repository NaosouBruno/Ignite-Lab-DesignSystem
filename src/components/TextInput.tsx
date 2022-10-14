import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextInputRootProps {
  children: ReactNode;
}
function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full   focus-within:ring-2 ring-cyan-300"
      )}
    >
      {props.children}
    </div>
  );
}
TextInputRoot.displayNmae = "TextInput.Root";

export interface TextINputIconProps {
  children: ReactNode;
}
function TextInputIcon(props: TextINputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}
TextInputIcon.displayNmae = "TextInput.Icon";
export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder: text-gray-400 outline-none"
      {...props}
    />
  );
}
TextInputInput.displayNmae = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
