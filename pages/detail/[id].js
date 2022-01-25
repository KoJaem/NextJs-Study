// 다이나믹 라우팅을 static 으로 만들 수 있다는것을 보여주는 코드
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Item from '../../src/component/Item';
import { Loader } from "semantic-ui-react";
import Head from 'next/head';
import styled from "@emotion/styled";

const Post = ({ item, name }) => {
  const router = useRouter();

  if(router.isFallback) {
    return (
      <LoadingWrapper>
        <Loader active inline="centered">
          Loading
        </Loader>
      </LoadingWrapper>
    )
  }
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경 입니다.
          <Item item={item} />)
        </>
      )}
    </>
  );
};

export default Post;

// view/ [id].js 랑 다른 코드.
export async function getStaticPaths() {
    const apiUrl = process.env.apiUrl;
    const res = await Axios.get(apiUrl);
    const data = res.data;
  return {
    // paths: [
    //   { params: { id: "740" } },
    //   { params: { id: "730" } },
    //   { params: { id: "729" } },
    // ],
    paths: data.slice(0, 9).map(item => ({
      params: {
        id : item.id.toString(),
      }
    })),
    fallback: true,
    // fallback 값이 false 면 없는 페이지 처리를 해주지않음.
    // fallback 값이 true 면 없는 페이지 요청이 들어왔을때, 렌더링을 하고,
    // 그 후 정적 생성목록에 추가한다. 경로는 (.next/server/pages/detail/)
    
    // fallback: true 는 페이지가 굉장히 많을 때 유용함.
  };
}

// getStaticProps
export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;


  return {
    props: {
      item: data,
      name: process.env.name
    }
  }
}

const LoadingWrapper = styled.div`
  padding: 100px;
`;