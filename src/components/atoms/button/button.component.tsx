import { ButtonProps } from "@/types/components/atoms/button.type";
import { ButtonStyled } from "./button.styled";

export default function Button({ isDisabled, onClick, type, children, title }: ButtonProps) {

  const handleClick = () => {
    onClick();
  }

  return (
    <ButtonStyled
      data-test-target="button:change-unit"
      disabled={isDisabled}
      onClick={handleClick}
      type={type}
      title={title}>
      {children}
    </ButtonStyled>
  )
}