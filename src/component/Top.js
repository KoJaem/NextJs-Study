// Top 이 아니라 Header 인데
import { Header } from 'semantic-ui-react';
import Gnb from "./Gnb";
import styled from '@emotion/styled';

// Semantic UI 에서 사용하고 있기 때문에 Top 이라고 했음.
export default function Top() {
  return (
    <div>
      <TopWrapper>
        <LogoWrapper>
          <Logo src="/images/logo.jpg" alt="logo" />
        </LogoWrapper>
        <Header as="h1">KoJaem</Header>
      </TopWrapper>
      <Gnb />
    </div>
  );
}

const TopWrapper = styled.div`
  display: flex;
  padding-top: 20px;
`;
const LogoWrapper = styled.div`
  flex: 100px 0 0;
`;
const Logo = styled.img`
  display: block;
  width: 80px;
`;