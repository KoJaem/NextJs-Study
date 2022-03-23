/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 외부 이미지를 사용할때는 next.config.js에서 설정을 해줘야함.
  //domains 안에 사용할 이미지 주소를 넣어주기
  images: {
    domains: ["via.placeholder.com"],
  },
};

module.exports = nextConfig
