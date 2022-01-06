import Head from "next/head";
import { useEffect, useState } from "react";
import Axios from "axios";
import ItemList from '../src/component/ItemList';
import { Divider, Header } from "semantic-ui-react";
import { styled } from "@emotion/styled";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then(res => {
      // console.log(res.data);
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | KoJaem</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 20 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 20 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}

// create-next-app 으로 설치하면
// 1. 컴파일과 번들링이 자동으로 된다 (webpack 과 babel)
// 2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영된다.
// 3. 서버사이드 렌더링이 지원된다.
// 4. 스태틱(public) 파일을 지원한다.

// axios

