// 에러 500 페이지 같은 페이지는
// 404 처럼 505.js 를 만들어서 커스터마이징 하는것이 아니라,
// _error.js 파일을 만들어서 해야함. (이 페이지는 정적으로 최적화 되지는 않음.)
// 404.js 파일이 없으면 404 페이지도 여기서 처리 됨.
// 하지만, 404 페이지는 스태틱으로 처리하는게 더 좋음.
function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;