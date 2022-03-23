export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Welcome to My blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// 페이지에 들어올때마다 서버에 요청해서 데이터를 받아옴
// 서버의 값이 바뀌면, 얘도 바뀜
// export const getServerSideProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
//   );
//   const posts = await res.json();

//   // 여기서 return 한 값이 Home 함수에 전달이 됨.
//   return {
//     props: {
//       posts
//     }
//   }
// };



export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // 처음 접속이 일어난 후에 n초가 지난 시점부터 (언제든) 접속이 일어나면 새롭게 데이터를 받아서 렌더링 해줌.
    revalidate: 20
  };
};
