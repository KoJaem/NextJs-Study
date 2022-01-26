import { Button, Form } from 'semantic-ui-react';
import styled from "@emotion/styled";
import Axios from "axios";
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  function login() {
    // 아이디, 비밀번호 체크 등의 backend 작업은 건너뜀.
    // 즉, 아무거나 입력하고 로그인 버튼 누르면 로그인 되게끔 구현.
    Axios.post('/api/login')
    .then(res => {
      if(res.status === 200) {
        // 로그인 성공
        router.push('/admin');
      }
    });
  }
    return (
      <Wrapper>
        <Form>
          <Form.Field inline>
            <input placeholder="ID" />
          </Form.Field>
          <Form.Field inline>
            <input type="password" placeholder="Password" />
          </Form.Field>
          <Button color='blue' onClick={login}>Login</Button>
        </Form>
      </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 100px 0;
    text-align: center;
`;