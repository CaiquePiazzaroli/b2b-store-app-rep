import Image from "next/image";
import Link from "next/link";

type ItemGeneralProps = {
  client: boolean;
  id: number;
  type: string;
  description: string;
  imagePath: string;
  value: number;
};

type ItemProps = {
  id: number;
  type: string;
  description: string;
  imagePath: string;
  value: number;
};

function ClientItem({ id, type, description, imagePath, value }: ItemProps) {
  return (
    <Link href={`item/${id}`} className="block">
      <div className="w-[300px] h-[400px] p-4 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <div className="w-full flex justify-center grow-1 m-auto">
          <Image
            src={imagePath}
            alt={`Imagem do produto ${type}`}
            width={160}
            height={100}
          />
        </div>
        <div className="flex flex-col flex-grow p-4">
          <h3
            className="text-lg font-semibold text-gray-900 truncate"
            title={type}
          >
            {type}
          </h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-3">
            {description}
          </p>
          <div className="mt-auto pt-4">
            <span className="inline-block bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-lg">
              R$ {value.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function AdminItem({ id, type, description, imagePath, value }: ItemProps) {
  return (
    <div className="flex border mb-6 border-gray-200 rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 p-4 space-x-6">
      <Image
        src={imagePath}
        width={160}
        height={120}
        alt={`Imagem do item ${type}`}
        className="rounded-md bg-amber-50 object-cover"
      />
      <div className="flex flex-col justify-between grow">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{type}</h2>
          <p className="mt-2 text-gray-700 line-clamp-4">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-green-600 font-bold text-lg">
            R$ {value.toFixed(2)}
          </p>
          <Link
            href={`/admin/update_itens/${id}`}
            className="text-blue-600 hover:underline font-medium"
          >
            Editar item
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Item({
  client,
  id,
  type,
  description,
  imagePath,
  value,
}: ItemGeneralProps) {
  return (
    <>
      {client == true ? (
        <ClientItem
          id={id}
          type={type}
          description={description}
          imagePath={imagePath}
          value={value}
        />
      ) : (
        <AdminItem
          id={id}
          type={type}
          description={description}
          imagePath={imagePath}
          value={value}
        />
      )}
    </>
  );
}
