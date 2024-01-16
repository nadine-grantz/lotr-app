import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export default function Volumes() {
  console.log(volumes);
  return (
    <div>
      <h1>volumes</h1>
    </div>
  );
}
