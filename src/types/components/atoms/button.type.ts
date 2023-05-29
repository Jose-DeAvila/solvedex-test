export interface ButtonProps {
  onClick: () => void,
  children: React.ReactNode,
  type: "button" | "submit" | "reset",
  isDisabled?: boolean,
  title?: string
}