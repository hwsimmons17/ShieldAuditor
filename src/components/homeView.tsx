import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { AiFillGithub } from "react-icons/ai";

export default function HomeView() {
  const fileRef = useRef<HTMLInputElement>(null);

  const openFileExplorer = () => {
    const ref = fileRef.current;
    if (!ref) {
      return;
    }
    ref.click();
  };

  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1 bg-lightGray p-10">
          <h2 className="text-2xl font-medium leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight flex flex-row">
            <CodeBracketIcon className="h-8 w-8" aria-hidden="true" />
            <div className="mx-6 text-2xl">Home</div>
          </h2>
        </div>
      </div>
      <div className="max-w-md">
        <h3 className="font-medium text-xl py-5">Upload</h3>
        <p className="font-normal text-sm text-gray">
          To upload your contract, simply choose between connecting your GitHub
          repository or manually uploading a file.{" "}
        </p>
        <div className="pt-6 max-w-sm">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Select Contract
          </label>
          <select className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option>Nft.sol</option>
            <option>Marketplace.sol</option>
            <option>Router.sol</option>
          </select>
        </div>
        <div className="pt-6 block text-sm font-medium leading-6 text-gray-900">
          Upload Contract
          <button
            type="button"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray p-12 text-center hover:border-gray-400 mt-2"
            onClick={openFileExplorer}
          >
            <input
              type="file"
              className="hidden"
              ref={fileRef}
              accept=".sol"
              name="SolidityFile"
              onChange={(event) => {}}
            />
            <DocumentTextIcon className="mx-auto h-12 w-12 text-gray" />
            <span className="mt-2 block text-sm font-regular text-gray-900">
              Drag file here or Click to browse
            </span>
          </button>
        </div>
        <div className="text-center font-medium text-xs py-2 text-gray">or</div>
        <div className="">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-28 py-5 text-base font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full flex justify-center items-center"
          >
            Connect to Github
            <AiFillGithub className="h-10 w-10 pl-2" />
          </button>
          <div className="flex pt-6 place-content-between">
            <button
              type="button"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Import
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
