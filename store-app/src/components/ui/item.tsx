import Image from "next/image";
import Link from "next/link";

type ItemProps = {
  id: number,
  type: string;
  description: string;
  imagePath: string;
  value: number;
};

export default function Item({id, type, description, imagePath, value }: ItemProps) {
  return (
    <Link href={`item/${id}`}>
      <div className="w-[240px] h-[320px] border rounded-md border-gray-100 flex flex-col justify-center p-6">
        <Image src={imagePath} width={160} height={100} alt="Item for sale" className="m-auto bg-amber-50"/>
        <h2 className="font-bold">{type}</h2>
        <hr/>
        <span>
          <p className="text-[16px] py-2 text-green-400 font-bold">R${value}</p>
        </span>
      </div>
    </Link>
  );
} 