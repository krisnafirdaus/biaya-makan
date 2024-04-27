"use client";

import { useState } from 'react';

const Home = () => {
  const [harga, setHarga] = useState<string>('');
  const [pbb, setPbb] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [service, setService] = useState<string>('');
  const [total, setTotal] = useState<string>('');

  const formatNumber = (inputNumber: string): string => {
    const numbers = inputNumber.replace(/\D/g, '');  
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');  
  };

  const handleChangeHarga = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedInput = formatNumber(event.target.value);
    setHarga(formattedInput);
  };

  const handleChangePbb = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedInput = formatNumber(event.target.value);
    setPbb(formattedInput);
  };

  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedInput = formatNumber(event.target.value);
    setQuantity(formattedInput);
  }

  const handleChangeService = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedInput = formatNumber(event.target.value);
    setService(formattedInput);
  }

  const submitTotal = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const hargaNumber = parseInt(harga.replace(/\D/g, ''));
    const pbbNumber = parseInt(pbb.replace(/\D/g, ''));
    const quantityNumber = parseInt(quantity.replace(/\D/g, ''));
    const serviceNumber = parseInt(service.replace(/\D/g, ''));

    const Total = hargaNumber + ((pbbNumber + serviceNumber) / quantityNumber);
    setTotal(formatNumber(Total.toString()));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="container">
        <form className="max-w-sm mx-auto" onSubmit={submitTotal} >
          <div className="mb-5">
            <label htmlFor="harga" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Harga
            </label>
            <input
              type="text" 
              id="harga"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={harga}
              onChange={handleChangeHarga}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Service
            </label>
            <input
              type="text" 
              id="service"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={service}
              onChange={handleChangeService}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="pbb" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              PB1
            </label>
            <input
              type="text"
              id="pbb"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={pbb}
              onChange={handleChangePbb}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={quantity}
              onChange={handleChangeQuantity}
            />
          </div>
          <div className="flex items-start mb-5">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>

        <div>
          <h5 className="text-2xl font-medium text-gray-900 dark:text-white">Result</h5>
          <h1 className="text-xl font-semibold text-blue-700 mt-2">
            Total: {total || "-"}
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
