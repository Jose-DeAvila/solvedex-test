export interface InputProps {
  placeholder: string,
  regex: string,
  isRequired: boolean,
  type: string,
  onChange: (value: string) => void
}