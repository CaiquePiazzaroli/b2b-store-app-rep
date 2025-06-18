import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useDebouncedCallback } from 'use-debounce';

type searchinput = {
    placeholder:string
}

export default function SearchInput({placeholder} : searchinput) {

    //Debounce otimiza a busca
    const handleSearch = useDebouncedCallback((value: string) => {
        console.log(value);
    }, 300)

    
    return (
    <div className="flex-1 mx-6">
        <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-500" />
            <input
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                type="text"
                placeholder= {placeholder}
                className="w-full rounded-full bg-blue-50 border border-blue-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    </div>
    )
}