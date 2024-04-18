import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-100% flex w-100% justify-between">
      <div >
        <Link href={`users/subscribe`}><Button className="px-[40px] py-[20px] flex items-center" >Users</Button></Link>
      </div>
    </div>
  );
}
