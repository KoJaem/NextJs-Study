import { Divider } from "semantic-ui-react";
import styled from "@emotion/styled";
export default function Footer() {
  return (
    <Wrapper>
      <Divider />
      <div>nextJs 공부 (코딩앙마님 유튜브 참고)</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    text-align: center;
`;