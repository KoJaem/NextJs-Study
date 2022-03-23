import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Photo({ photo }) {
  const router = useRouter();
  console.log(router);
  // const { title, url } = photo;
  return (
    <div>
      <h2>image {router.query.id}</h2>
      {/* <Image src={url} width={500} height={500} alt={title} /> */}
      <Link href="/photos">
        <a>go back</a>
      </Link>
    </div>
  );
}

// export const getStaticProps = async() => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/photos/`);
// }
