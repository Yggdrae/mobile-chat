import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

const ButtonSizes = {
  sm: "h-[40px] px-4 text-[14px]",
  md: "h-[48px] px-5 text-[16px]",
  lg: "h-[56px] px-6 text-[18px]",
};

const ButtonVariants = {
  primary: {
    container: "bg-primary-500 rounded-lg",
    text: "text-gray-50",
  },
  outline: {
    container: "border border-primary-500 rounded-lg",
    text: "text-primary-500",
  },
  ghost: {
    container: "rounded-lg",
    text: "text-primary-500",
  },
};

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  size?: keyof typeof ButtonSizes;
  variant?: keyof typeof ButtonVariants;
  className?: string;
  textClassName?: string;
}

export default function Button({
  size = "md",
  variant = "primary",
  title,
  className,
  textClassName,
  ...rest
}: ButtonProps) {
  const sizeClass = ButtonSizes[size];
  const variantClass = ButtonVariants[variant];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`justify-center items-center ${sizeClass} ${variantClass.container} ${className ?? ""}`}
      {...rest}
    >
      <Text className={`${variantClass.text} ${textClassName ?? ""}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
