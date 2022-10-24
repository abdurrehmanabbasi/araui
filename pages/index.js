import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>ARAUI</title>
        <meta name="description" content="ARAUI here i created most usable user interfaces with tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className=" w-1/2 m-auto">
      <h2 className="text-2xl">Here list of ARAUI components made with tailwindcss</h2>
      <ul className="mt-10 flex flex-col gap-y-10 ">
        <li><Link href="/simplesidenav">Simple Sidenav</Link></li>
        <li><Link href="/simplesidenav">Simple Sidenav</Link></li>
        <li><Link href="/simplesidenav">Simple Sidenav</Link></li>
      </ul>
      
    </div>
    </>
  );
}
