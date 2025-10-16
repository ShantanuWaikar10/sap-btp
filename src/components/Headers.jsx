import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Headers = () => {
  const [keyStartDate, setKeyStartDate] = useState(null);

  const [glAccountFromDate, setGlAccountFromDate] = useState(null);
  const [glAccountToDate, setGlAccountToDate] = useState(null);

  const [customerFromDate, setCustomerFromDate] = useState(null);
  const [customerToDate, setCustomerToDate] = useState(null);

  const [customerAccountGroupFromDate, setCustomerAccountGroupFromDate] =
    useState(null);
  const [customerAccountGroupToDate, setCustomerAccountGroupToDate] =
    useState(null);

  const [profitCentreFromDate, setProfitCentreFromDate] = useState(null);
  const [profitCentreToDate, setProfitCentreToDate] = useState(null);

  const [transactionCurrencyFromDate, setTransactionCurrencyFromDate] =
    useState(null);
  const [transactionCurrencyToDate, setTransactionCurrencyToDate] =
    useState(null);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-4">
          {/* Company Code */}
          <div className="">
            <label
              htmlFor="company_code"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Company Code:<span className="text-red-300">*</span>
            </label>
            <input
              type="number"
              id="company_code"
              className="bg-[#171c22] border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
              required
            />
          </div>

          {/* GL Account */}
          <div className="">
            <label
              htmlFor="gl_account"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              GL Account:
            </label>
            <div className="flex gap-2">
              <DatePicker
                className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={glAccountFromDate}
                placeholderText="From"
                onChange={(date) => setGlAccountFromDate(date)}
              />
              <DatePicker
                className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={glAccountToDate}
                placeholderText="To"
                onChange={(date) => setGlAccountToDate(date)}
              />
              <div>
                <div>
                  <button
                    onClick={() => setOpen(true)}
                    className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md block w-full text-center py-1.5 px-2"
                  >
                    Select
                  </button>
                  <Dialog
                    open={open}
                    onClose={setOpen}
                    className="relative z-10"
                  >
                    <DialogBackdrop
                      transition
                      className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                      <div className="flex items-end justify-center mt-28 p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                          transition
                          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <DialogTitle
                                  as="h3"
                                  className="text-base font-semibold text-gray-900"
                                >
                                  Multiple Selection for Customer Code
                                </DialogTitle>
                                <Tabs>
                                  <TabList className="flex gap-2 mt-2">
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Select Single Values
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Select Ranges
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Exclude Single Values
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Exclude Ranges
                                    </Tab>
                                  </TabList>

                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr>
                                          <th className="py-2">Single Value</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr className="grid grid-cols-2">
                                          <th className="py-2">Lower limit</th>
                                          <th className="py-2">Upper limit</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr>
                                          <th className="py-2">Single Value</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr className="grid grid-cols-2">
                                          <th className="py-2">Lower limit</th>
                                          <th className="py-2">Upper limit</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                </Tabs>
                              </div>
                            </div>
                          </div>
                        </DialogPanel>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          {/* Customer */}
          <div className="">
            <label
              htmlFor="customer"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Customer:
            </label>
            <div className="flex gap-2">
              <DatePicker
                className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={customerFromDate}
                placeholderText="From"
                onChange={(date) => setCustomerFromDate(date)}
              />
              <DatePicker
                className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={customerToDate}
                placeholderText="To"
                onChange={(date) => setCustomerToDate(date)}
              />
              <div>
                <div>
                  <button
                    onClick={() => setOpen(true)}
                    className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md block w-full text-center py-1.5 px-2"
                  >
                    Select
                  </button>
                  <Dialog
                    open={open}
                    onClose={setOpen}
                    className="relative z-10"
                  >
                    <DialogBackdrop
                      transition
                      className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                      <div className="flex items-end justify-center mt-28 p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                          transition
                          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <DialogTitle
                                  as="h3"
                                  className="text-base font-semibold text-gray-900"
                                >
                                  Multiple Selection for Customer Code
                                </DialogTitle>
                                <Tabs>
                                  <TabList className="flex gap-2 mt-2">
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Select Single Values
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Select Ranges
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Exclude Single Values
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Exclude Ranges
                                    </Tab>
                                  </TabList>

                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr>
                                          <th className="py-2">Single Value</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr className="grid grid-cols-2">
                                          <th className="py-2">Lower limit</th>
                                          <th className="py-2">Upper limit</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr>
                                          <th className="py-2">Single Value</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr className="grid grid-cols-2">
                                          <th className="py-2">Lower limit</th>
                                          <th className="py-2">Upper limit</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                </Tabs>
                              </div>
                            </div>
                          </div>
                        </DialogPanel>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Account Group  */}
          <div className="">
            <label
              htmlFor="customer_account_group"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Customer Account Group:
            </label>
            <div className="flex gap-2">
              <DatePicker
                className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={customerAccountGroupFromDate}
                placeholderText="From"
                onChange={(date) => setCustomerAccountGroupFromDate(date)}
              />
              <DatePicker
                className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={customerAccountGroupToDate}
                placeholderText="To"
                onChange={(date) => setCustomerAccountGroupToDate(date)}
              />
              <div>
                <div>
                  <button
                    onClick={() => setOpen(true)}
                    className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md block w-full text-center py-1.5 px-2"
                  >
                    Select
                  </button>
                  <Dialog
                    open={open}
                    onClose={setOpen}
                    className="relative z-10"
                  >
                    <DialogBackdrop
                      transition
                      className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                      <div className="flex items-end justify-center mt-28 p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                          transition
                          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <DialogTitle
                                  as="h3"
                                  className="text-base font-semibold text-gray-900"
                                >
                                  Multiple Selection for Customer Code
                                </DialogTitle>
                                <Tabs>
                                  <TabList className="flex gap-2 mt-2">
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Select Single Values
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Select Ranges
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Exclude Single Values
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Exclude Ranges
                                    </Tab>
                                  </TabList>

                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr>
                                          <th className="py-2">Single Value</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr className="grid grid-cols-2">
                                          <th className="py-2">Lower limit</th>
                                          <th className="py-2">Upper limit</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr>
                                          <th className="py-2">Single Value</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr className="grid grid-cols-2">
                                          <th className="py-2">Lower limit</th>
                                          <th className="py-2">Upper limit</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                </Tabs>
                              </div>
                            </div>
                          </div>
                        </DialogPanel>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          {/* Profit Centre  */}
          <div className="">
            <label
              htmlFor="profit_centre"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Profit Centre:
            </label>
            <div className="flex gap-2">
              <DatePicker
                className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={profitCentreFromDate}
                placeholderText="From"
                onChange={(date) => setProfitCentreFromDate(date)}
              />
              <DatePicker
                className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={profitCentreToDate}
                placeholderText="To"
                onChange={(date) => setProfitCentreToDate(date)}
              />
              <div>
                <div>
                  <button
                    onClick={() => setOpen(true)}
                    className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md block w-full text-center py-1.5 px-2"
                  >
                    Select
                  </button>
                  <Dialog
                    open={open}
                    onClose={setOpen}
                    className="relative z-10"
                  >
                    <DialogBackdrop
                      transition
                      className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                      <div className="flex items-end justify-center mt-28 p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                          transition
                          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <DialogTitle
                                  as="h3"
                                  className="text-base font-semibold text-gray-900"
                                >
                                  Multiple Selection for Customer Code
                                </DialogTitle>
                                <Tabs>
                                  <TabList className="flex gap-2 mt-2">
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Select Single Values
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Select Ranges
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Exclude Single Values
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Exclude Ranges
                                    </Tab>
                                  </TabList>

                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr>
                                          <th className="py-2">Single Value</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr className="grid grid-cols-2">
                                          <th className="py-2">Lower limit</th>
                                          <th className="py-2">Upper limit</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr>
                                          <th className="py-2">Single Value</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr className="grid grid-cols-2">
                                          <th className="py-2">Lower limit</th>
                                          <th className="py-2">Upper limit</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                </Tabs>
                              </div>
                            </div>
                          </div>
                        </DialogPanel>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Currency  */}
          <div className="">
            <label
              htmlFor="transaction_currency"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Transaction Currency:
            </label>
            <div className="flex gap-2">
              <DatePicker
                className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={transactionCurrencyFromDate}
                placeholderText="From"
                onChange={(date) => setTransactionCurrencyFromDate(date)}
              />
              <DatePicker
                className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={transactionCurrencyToDate}
                placeholderText="To"
                onChange={(date) => setTransactionCurrencyToDate(date)}
              />
              <div>
                <div>
                  <button
                    onClick={() => setOpen(true)}
                    className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md block w-full text-center py-1.5 px-2"
                  >
                    Select
                  </button>
                  <Dialog
                    open={open}
                    onClose={setOpen}
                    className="relative z-10"
                  >
                    <DialogBackdrop
                      transition
                      className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                      <div className="flex items-end justify-center mt-28 p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                          transition
                          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <DialogTitle
                                  as="h3"
                                  className="text-base font-semibold text-gray-900"
                                >
                                  Multiple Selection for Customer Code
                                </DialogTitle>
                                <Tabs>
                                  <TabList className="flex gap-2 mt-2">
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Select Single Values
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Select Ranges
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Exclude Single Values
                                    </Tab>
                                    <Tab className="bg-[#171c22] focus:bg-[#434f5c] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm font-semibold rounded-md focus:ring-black focus:border-black block w-1/2 text-center py-1.5">
                                      Exclude Ranges
                                    </Tab>
                                  </TabList>

                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr>
                                          <th className="py-2">Single Value</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr className="grid grid-cols-2">
                                          <th className="py-2">Lower limit</th>
                                          <th className="py-2">Upper limit</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr>
                                          <th className="py-2">Single Value</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                  <TabPanel>
                                    <table class="table-auto">
                                      <thead>
                                        <tr className="grid grid-cols-2">
                                          <th className="py-2">Lower limit</th>
                                          <th className="py-2">Upper limit</th>
                                        </tr>
                                      </thead>
                                      <tbody className="grid grid-cols-1 gap-2">
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                        <tr className="grid grid-cols-2 gap-2">
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              className="bg-white border-1 border-gray-700 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </TabPanel>
                                </Tabs>
                              </div>
                            </div>
                          </div>
                        </DialogPanel>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          {/* Key Date */}
          <div className="">
            <label
              htmlFor="key_date"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Key Date:<span className="text-red-300">*</span>
            </label>
            <DatePicker
              className="bg-[#171c22] cursor-pointer border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5 px-17"
              selected={keyStartDate}
              placeholderText="Select the date"
              onChange={(date) => setKeyStartDate(date)}
            />
          </div>

          {/* Include special GL items */}
          <div className="">
            <label
              htmlFor="include_special_gl_items"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Include Special GL Items:
            </label>
            <div className="flex items-center me-4 mt-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "
              ></input>
              <label
                htmlFor="inline-checkbox"
                className="ms-2 text-sm font-medium text-gray-400"
              >
                True
              </label>
            </div>
          </div>

          {/* Ageing Calculation Method */}
          <div className="col-span-2">
            <label
              htmlFor="Ageing_Calculation_Method"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Ageing Calculation Method:<span className="text-red-300">*</span>
            </label>

            <li className="w-full rounded-t-lg">
              <div className="flex items-center ps-3">
                <input
                  id="list-radio-1"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R1: Net due Date (Baseline Date + Payment Terms Days){" "}
                </label>
              </div>
            </li>

            <li className="w-full rounded-t-lg">
              <div className="flex items-center ps-3">
                <input
                  id="list-radio-2"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R2: Posting Date + Payment Terms Days{" "}
                </label>
              </div>
            </li>

            <li className="w-full rounded-t-lg">
              <div className="flex items-center ps-3">
                <input
                  id="list-radio-1"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R3: Document Date + Payment Terms Days{" "}
                </label>
              </div>
            </li>

            <li className="w-full rounded-t-lg">
              <div className="flex items-center ps-3">
                <input
                  id="list-radio-4"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R4: Baseline Date{" "}
                </label>
              </div>
            </li>

            <li className="w-full rounded-t-lg">
              <div className="flex items-center ps-3">
                <input
                  id="list-radio-5"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R5: Posting Date{" "}
                </label>
              </div>
            </li>

            <li className="w-full rounded-t-lg">
              <div className="flex items-center ps-3">
                <input
                  id="list-radio-6"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="list-radio-license"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R6: Document Date{" "}
                </label>
              </div>
            </li>
          </div>

          {/* Ageing Bucket */}
          <div className="col-span-2">
            <label
              htmlFor="Ageing_Bucket"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Ageing Bucket:
            </label>
            <div className="grid grid-cols-3 gap-4">
              <select
                defaultValue="select"
                className="bg-[#171c22] text-center border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name=""
                id=""
              >
                <option value="select">Select</option>
                <option value="30">30 (30)</option>
              </select>

              <select
                defaultValue="select"
                className="bg-[#171c22] text-center border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name=""
                id=""
              >
                <option value="select">Select</option>
                <option value="60">60 (60)</option>
              </select>

              <select
                defaultValue="select"
                className="bg-[#171c22] text-center border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name=""
                id=""
              >
                <option value="select">Select</option>
                <option value="90">90 (90)</option>
              </select>

              <select
                defaultValue="select"
                className="bg-[#171c22] text-center border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name=""
                id=""
              >
                <option value="select">Select</option>
                <option value="180">180 (180)</option>
              </select>

              <select
                defaultValue="select"
                className="bg-[#171c22] text-center border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name=""
                id=""
              >
                <option value="select">Select</option>
                <option value="365">365 (365)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;
