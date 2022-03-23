// 전체적인 레이아웃을 잡아주는 코드
import Head from "next/head";
import { Nav, HeadInfo } from "./index";
export function Layout({ children }) {
  return (
    <>
      <HeadInfo />
      <Nav />
      <div>{children}</div>
    </>
  );
}
