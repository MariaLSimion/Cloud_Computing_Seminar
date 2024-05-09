import { deleteRecord, getRecords } from "@/utils/recordsFunctions";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/router";
import Link from "next/link";

const MainPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedOwnership, setSelectedOwnership] = useState("");
  const [selectedReadStatus, SetSelectedReadStatus] = useState("");
  


  const fetchRecords = async () => {
    try {
      const response = await getRecords();
  
      let filteredData = response;
  
      if (selectedGenre && selectedGenre !== "Filter by genre") {
        // Filter records based on selected genre
        filteredData = response.filter((record) => record.genre === selectedGenre);
      }
      if (selectedOwnership && selectedOwnership !== "Filter by ownership") {
        // Filter records based on selected ownership status
        filteredData = response.filter((record) => record.owned === selectedOwnership);
      }

      if (selectedReadStatus && selectedReadStatus !== "Filter by reading status") {
        // Filter records based on selected reading status
        filteredData = response.filter((record) => record.read === selectedReadStatus);
      }

  
      setData(filteredData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);

      if (response?.acknowledged) {
        const newData = data.filter((el) => el._id !== id);

        setData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditRecord = (id) => {
    router.push(`/edit?id=${id}`);
  }
  // const handleFilter = (e) => {
  //   setSelectedGenre(e.target.value);
  // };

  const handleFilter = (e, filterType) => {
    if (filterType === "genre") {
      setSelectedGenre(e.target.value);
    } else if (filterType === "ownership") {
      setSelectedOwnership(e.target.value);
    }
    else if (filterType === "reading") {
      SetSelectedReadStatus(e.target.value);
    }
  };
  
  // useEffect(() => {
  //   fetchRecords();
  // }, []);
  useEffect(() => {
    fetchRecords();
  }, [selectedGenre,selectedOwnership, selectedReadStatus]);
  

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col h-screen">


      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="http://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdGukF9JaWuBdyA3V5Nx0quqgdQ0VNzORh0rIlexkZg&s" class="h-8" alt="Virtual Shelf Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Virtual Shelf</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="http://localhost:3000/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="http://localhost:3000/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <Link href = "/create">
                <div>
                <a  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add a book</a>
            
                </div>
                </Link>
                  </li>
              <li>
          <Link href="/contact">
            <div>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </div>
           
          </Link>
        </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center ">
  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to your virtual library!</h1>
</div>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here you can find you books. Virtual shelf is a virtual library, a management system to keep track of you book collection.</p>
<div className="p-4 flex flex-wrap gap-4">
  
<form class="max-w-sm mx-auto">
  <label htmlFor="genre" 
  className="sr-only">Underline select</label>
  <select id="genre" 
  value={selectedGenre}
  onChange={(e) => handleFilter(e, "genre")}
  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option selected>Filter by genre</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Mystery">Mystery</option>
      <option value="Romance">Romance</option>
      <option value="Other">Other</option>
  </select>
</form>

<form class="max-w-sm mx-auto">
  <label htmlFor="owned" 
  className="sr-only">Underline select</label>
  <select id="owned"
   value={selectedOwnership}
   onChange={(e) => handleFilter(e, "ownership")}
  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option selected>Filter by ownership</option>
      <option value="Yes">Owned</option>
      <option value="No">Not owned</option>
  </select>
</form>

<form class="max-w-sm mx-auto">
  <label htmlFor="read" 
  className="sr-only">Underline select</label>
  <select id="read"
  value={selectedReadStatus}
  onChange={(e) => handleFilter(e, "reading")}
  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option selected>Filter by reading status</option>
      <option value="Yes">Read</option>
      <option value="No">Not read</option>
      <option value="Reading">Reading</option>
  </select>
</form>
</div>
      <div className="p-4 flex flex-wrap gap-4">

        {data?.map((record) => (
          <div
            key={record._id}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {record.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {record.author}
            </p>
            <p className="mb-3 italic text-sm text-gray-700 dark:text-gray-400">
              Genre: {record.genre}
            </p>
            <p className="mb-3 italic text-sm text-center text-gray-700 dark:text-gray-400">
          Read: {record.read} Owned: {record.owned}
          </p>
            <button
              type="button"
              onClick={() => handleEditRecord(record._id)}
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => handleDeleteRecord(record._id)}
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Delete
            </button>
          </div>
        ))}
        
      </div>


      {/* <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 absolute bottom-0 w-full">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Virtual Shelf™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
  </div>
</footer> */}


    </div>
  );
};

export default MainPage;