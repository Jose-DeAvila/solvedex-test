import { InputProps } from '@/types/components/atoms/input.type';
import { MainInput } from './input.styled';
import { ChangeEvent } from 'react';

export default function Input({ placeholder, regex, isRequired, type, onChange }: InputProps) {

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    onChange(value);
  }

  return (
    <MainInput
      placeholder={placeholder}
      pattern={regex}
      required={isRequired}
      type={type}
      onChange={handleChange}
    />
  )
}
