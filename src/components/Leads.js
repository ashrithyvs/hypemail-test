import React, { useState } from "react";
import { LeadsImage } from "../assets";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaUserMinus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Table, Checkbox } from "flowbite-react";
export default function Leads({ setCurrentStep }) {
  const [csvFile, setCsvFile] = useState();
  return (
    <div className="bg-white h-full">
      {csvFile ? (
        <div className="w-full px-6 flex-col space-y-6">
          <div className="3xl:flex justify-between">
            <div className="flex w-4/6 space-x-4 items-center">
              <input
                className="input"
                type="text"
                placeholder="Search for leads"
              />
              <FaUserMinus size={40} color="#000" className="icon" />
              <RiDeleteBin6Fill size={40} color="#000" className="icon" />
              <BiDotsVerticalRounded size={40} color="#000" className="icon" />
            </div>
            <div className="flex 3xl:w-2/6 space-x-6 justify-end">
              <button className="secondary-btn px-10 py-3">Add Manually</button>
              <button className="secondary-btn px-10 py-3 border-primary text-primary">
                Upload a CSV
              </button>
            </div>
          </div>
          <Table hoverable={true}>
            <Table.Head>
              <Table.HeadCell className="!p-4">
                <Checkbox />
              </Table.HeadCell>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Color</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="!p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Apple MacBook Pro 17"
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="!p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell>White</Table.Cell>
                <Table.Cell>Laptop PC</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="!p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Magic Mouse 2
                </Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      ) : (
        <div className="bg-white w-full 2xl:w-5/6 3xl:w-4/6 mx-auto border shadow px-12 m-16 flex space-x-10 py-16 rounded">
          <div className="flex-col space-y-7 text-left">
            <h4 className="text-2xl text-gray-900 font-bold">Add new Leads</h4>
            <p>
              Your CSV file should have "email" as a required field. Download a{" "}
              <a class="text-primary" href="/">
                Sample CSV
              </a>{" "}
              & paste your data in the relevant columns.
            </p>
            <div className="flex-col w-full space-y-4">
              <button
                onClick={() => {
                  setCsvFile(1);
                }}
                className="primary-btn block w-full"
              >
                Upload a CSV file
              </button>
              <button className="secondary-btn block w-full text-gray-500">
                Use a Google Sheet
              </button>
            </div>
          </div>
          <img src={LeadsImage} alt="leads" />
        </div>
      )}
      <div className="flex-col w-1/3 ml-auto space-y-3 my-4">
        {csvFile ? null : (
          <div className="flex space-x-4 h-min items-center">
            <AiFillQuestionCircle size={20} color="#E02424" />
            <h4 className="text-sm text-red-600 font-semibold">
              Some things are missing
            </h4>
            <a href="/" className="text-sm text-primary font-semibold">
              Fix them.
            </a>
          </div>
        )}
        <div className="flex space-x-6">
          <button
            onClick={() => {
              setCurrentStep(2);
            }}
            className={`primary-btn px-10 py-4   ${
              csvFile ? null : "bg-blue-400 cursor-not-allowed"
            } `}
          >
            Start Now
          </button>
          <button
            className={`secondary-btn px-10 py-4 ${
              csvFile
                ? null
                : " cursor-not-allowed text-gray-400 hover:bg-white"
            }`}
          >
            Schedule for later
          </button>
        </div>
      </div>
    </div>
  );
}
