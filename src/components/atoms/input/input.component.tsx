import { InputProps } from '@/types/components/atoms/input.type';
import { MainInput } from './input.styled';
import { ChangeEvent } from 'react';

export default function Input({ placeholder, regex, isRequired, type, onChange }: InputProps) {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    event.preventDefault();
    onChange(value);
  }

  return (
    <MainInput
      data-test-target="input:city"
      placeholder={placeholder}
      pattern={regex}
      required={isRequired}
      type={type}
      onChange={handleChange}
    />
  )
}
