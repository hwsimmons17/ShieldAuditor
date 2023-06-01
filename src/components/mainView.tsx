"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Sidebar from "./sidebar";
import HomeView from "./homeView";
import ResultsView from "./resultsView";
import { useBackend } from "@/lib/backend";

export default function MainView() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [contractFile, setContractFile] = useState<File | null>(null);
  const [reviewedCode, setReviewedCode] = useState<string | null>(null);
  const backend = useBackend();

  const handleSubmit = async () => {
    console.log("handling submit");
    if (!contractFile) {
      console.log("no contract file");
      // TODO: Tell user they need a valid contractFile
      return;
    }

    const result = await backend.slitherReviewCode(contractFile);
    if (!result) {
      return;
    }
    setReviewedCode(result);
  };

  const clearData = () => {
    setReviewedCode(null);
    setContractFile(null);
  };

  useEffect(() => {
    handleSubmit();
  }, [contractFile]);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <Sidebar />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <Sidebar />
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl">
            <div className="flex h-16 items-center gap-x-4 border-gray-200 bg-white shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div
                className="h-6 w-px bg-gray-200 lg:hidden"
                aria-hidden="true"
              />

              <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <form className="relative flex flex-1" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="search-field"
                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    name="search"
                  />
                </form>
              </div>
            </div>
          </div>

          <main className="">
            <div className="mx-auto max-w-7xl pl-1">
              <div className="md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1 bg-lightGray p-10">
                  <h2 className="text-2xl font-medium leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight flex flex-row">
                    <CodeBracketIcon className="h-8 w-8" aria-hidden="true" />
                    <div className="mx-6 text-2xl">Home</div>
                  </h2>
                </div>
              </div>
              {showResults ? (
                <ResultsView reviewedCode={reviewedCode} />
              ) : (
                <HomeView
                  contractFile={contractFile}
                  setContractFile={setContractFile}
                  reviewedCode={reviewedCode}
                  clearData={clearData}
                  setShowResults={setShowResults}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
