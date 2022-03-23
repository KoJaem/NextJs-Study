// Head title 부분
import Head from "next/head";
export function HeadInfo({title, keywords, content}) {
  return (
    <Head>
      <title>{title}</title>
      <meta keywords={keywords} />
      <meta content={content} />
    </Head>
  );
}

// Props 가 안넘어올때 default 로 설정
HeadInfo.defaultProps = {
    title: 'My Blog',
    keywords: 'Blog powered by Next js',
    content: 'practice next js',
}

