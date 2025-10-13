import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-4">
          {/* Company Code */}
          <div className="">
            <label
              for="company_code"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Company Code:<span className="text-red-300">*</span>
            </label>
            <input
              type="number"
              id="company_code"
              class="bg-[#171c22] border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
              required
            />
          </div>

          {/* GL Account */}
          <div className="">
            <label
              for="gl_account"
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
              <input
                type="text"
                className="bg-[#171c22] border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={glAccountFromDate}
              />
            </div>
          </div>

          {/* Customer */}
          <div className="">
            <label
              for="customer"
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
              <input
                type="text"
                className="bg-[#171c22] border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={glAccountFromDate}
              />
            </div>
          </div>

          {/* Customer Account Group  */}
          <div className="">
            <label
              for="customer_account_group"
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
              <input
                type="text"
                className="bg-[#171c22] border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={glAccountFromDate}
              />
            </div>
          </div>

          {/* Profit Centre  */}
          <div className="">
            <label
              for="profit_centre"
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
              <input
                type="text"
                className="bg-[#171c22] border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={glAccountFromDate}
              />
            </div>
          </div>

          {/* Transaction Currency  */}
          <div className="">
            <label
              for="transaction_currency"
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
              <input
                type="text"
                className="bg-[#171c22] border-1 border-gray-700 border-b-white text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full text-center py-1.5"
                selected={glAccountFromDate}
              />
            </div>
          </div>

          {/* Key Date */}
          <div className="">
            <label
              for="key_date"
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
              for="include_special_gl_items"
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
                for="inline-checkbox"
                className="ms-2 text-sm font-medium text-gray-400"
              >
                True
              </label>
            </div>
          </div>

          {/* Ageing Calculation Method */}
          <div className="col-span-2">
            <label
              for="Ageing_Calculation_Method"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Ageing Calculation Method:<span className="text-red-300">*</span>
            </label>

            <li class="w-full rounded-t-lg">
              <div class="flex items-center ps-3">
                <input
                  id="list-radio-1"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="list-radio-license"
                  class="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R1: Net due Date (Baseline Date + Payment Terms Days){" "}
                </label>
              </div>
            </li>

            <li class="w-full rounded-t-lg">
              <div class="flex items-center ps-3">
                <input
                  id="list-radio-2"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="list-radio-license"
                  class="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R2: Posting Date + Payment Terms Days{" "}
                </label>
              </div>
            </li>

            <li class="w-full rounded-t-lg">
              <div class="flex items-center ps-3">
                <input
                  id="list-radio-1"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="list-radio-license"
                  class="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R3: Document Date + Payment Terms Days{" "}
                </label>
              </div>
            </li>

            <li class="w-full rounded-t-lg">
              <div class="flex items-center ps-3">
                <input
                  id="list-radio-4"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="list-radio-license"
                  class="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R4: Baseline Date{" "}
                </label>
              </div>
            </li>

            <li class="w-full rounded-t-lg">
              <div class="flex items-center ps-3">
                <input
                  id="list-radio-5"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="list-radio-license"
                  class="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R5: Posting Date{" "}
                </label>
              </div>
            </li>

            <li class="w-full rounded-t-lg">
              <div class="flex items-center ps-3">
                <input
                  id="list-radio-6"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="list-radio-license"
                  class="w-full py-3 ms-2 text-sm font-medium text-gray-400"
                >
                  R6: Document Date{" "}
                </label>
              </div>
            </li>
          </div>

          {/* Ageing Bucket */}
          <div className="col-span-2">
            <label
              for="Ageing_Bucket"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Ageing Bucket:
            </label>
            <div className="grid grid-cols-3 gap-4">
              <select
                className="bg-[#171c22] text-center border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name=""
                id=""
              >
                <option selected>Select</option>
                <option value="30">30 (30)</option>
              </select>

              <select
                className="bg-[#171c22] text-center border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name=""
                id=""
              >
                <option selected>Select</option>
                <option value="60">60 (60)</option>
              </select>

              <select
                className="bg-[#171c22] text-center border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name=""
                id=""
              >
                <option selected>Select</option>
                <option value="90">90 (90)</option>
              </select>

              <select
                className="bg-[#171c22] text-center border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name=""
                id=""
              >
                <option selected>Select</option>
                <option value="180">180 (180)</option>
              </select>

              <select
                className="bg-[#171c22] text-center border-1 border-gray-700 border-b-white text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                name=""
                id=""
              >
                <option selected>Select</option>
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
