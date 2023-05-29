import { FormProps } from "@/types/components/molecules/form.type";
import { FormStyled } from "./form.styled";

export default function Form({ children }: FormProps) {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      {children}
    </FormStyled>
  )
}