import { FormAndResultsContainerProps } from "@/types/components/organisms/form-and-results-container.type";
import { FormAndResultsContainerStyled } from "./form-and-results-container.styled";

export default function FormAndResultsContainer({ children }: FormAndResultsContainerProps) {
  return (
    <FormAndResultsContainerStyled>
      {children}
    </FormAndResultsContainerStyled>
  )
}