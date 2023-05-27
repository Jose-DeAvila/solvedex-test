import { Header, HomeContainer } from './home.styled';
import Input from '@/components/atoms/input/input.component';
import { REGEX_CITY } from '@/constants';

export default function HomeTemplate() {
  return (
    <HomeContainer>
      <Header>Solvedex Weather App</Header>
      <Input onChange={(value) => console.log(value)} placeholder='Search Here' regex={REGEX_CITY} type='text' isRequired ></Input>
    </HomeContainer>
  )
}