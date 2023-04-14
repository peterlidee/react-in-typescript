type TextWrapperProps = {
  children: string;
}

export function TextWrapper({ children }: TextWrapperProps) {
  return <div>{children}</div>;
}