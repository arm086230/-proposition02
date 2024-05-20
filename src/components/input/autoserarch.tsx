import React, { useEffect, useState } from "react";
import axios from "axios";

type Propsproduct = {
  id: number;
  title: string;
  image: string;
};

interface PropsInput{
  type: string
  placeholder?: string
  value: string
  disabled? : boolean
  size?: 'small' | 'medium' | 'large'
  onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void
  onMouseDown?:(e: React.MouseEvent<HTMLInputElement>) => void
  onSubmit?:(e: React.FormEvent<HTMLFormElement>) => void
  onKeyDown?:(e: React.KeyboardEvent<HTMLInputElement>) => void
}




export default function Autosearch(props: PropsInput) {
  let size = ''
  if (props.size === 'small'){
      size = 'px-2 py-1'
  } else if (props.size === 'medium'){
      size = 'px-5 py-4'
  } else {
      size = 'px-4 py-5'
  }

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Propsproduct[]>([]);
  const [searchResult, setSearchResult] = useState<Propsproduct[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSearchResult(
      products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="max-w-lg mx-auto mt-10">
      <input
        type={props.type}
        value={query}
        disabled={props.disabled}
        onChange={handleSearch}
        placeholder="Search products..."
        className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${size}`}
      />
      {query !== "" && searchResult.length > 0 && (
        <ul className="mt-2 border border-gray-300 rounded-md shadow-sm bg-white">
          {searchResult.map((product) => (
            <li key={product.id} className="p-2 hover:bg-gray-100">
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-10 h-10 object-cover mr-3"
                />
                <span>{product.title}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
