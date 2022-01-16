// 404 에러 페이지
import styled from "@emotion/styled";
import { Icon } from 'semantic-ui-react';
export default function Error404() {
    return <Wrapper>
        <Icon name="warning circle" color='red' />
        404 : 페이지를 찾을 수 없습니다.
    </Wrapper>
}

const Wrapper = styled.div`
    padding: 200px 0px;
    text-align: center;
    font-size: 30px;
`;