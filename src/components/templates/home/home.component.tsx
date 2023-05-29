import { HomeContainer } from './home.styled';
import { HomeTemplateProps } from '@/types/components/templates/home.type';

export default function HomeTemplate({ children }: HomeTemplateProps) {
  return (
    <HomeContainer>
      {children}
    </HomeContainer>
  )
}