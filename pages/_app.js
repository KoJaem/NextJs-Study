import '../styles/globals.css'
import "semantic-ui-css/semantic.min.css";
import Footer from "./../src/component/Footer";
import Top from '../src/component/Top';
import styled from "@emotion/styled";


function MyApp({ Component, pageProps }) {
  return (
  <Wrapper>
    <Top />
    <Component {...pageProps} />
    <Footer />
  </Wrapper>
  )
}
/* Props 로 넘어온 Component 는 현재 페이지를 의미
(페이지 전환시에 ) 이 Component 의 props 가 변경 됨.
pageProps 는 데이터패치 메소드를 통해 미리 가져온 초기 객체임.
이 메소드를 사용하지 않는다면 빈객체가 전달됨.
*/

export default MyApp

/*
_app.js 를 이용하면
페이지 전환 시 레이아웃을 유지할 수 있습니다.
페이지 전환 시 상태값을 유지할 수 있습니다.
componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있습니다.
추가적인 데이터를 페이지로 주입시켜주는게 가능합니다.
글로벌 CSS 를 이곳에 선언합니다.
*/

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`;