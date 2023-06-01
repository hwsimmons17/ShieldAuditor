import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import NoFileUploaded from "./noFileUploaded";
import FileUploaded from "./fileUploaded";

export default function HomeView({
  contractFile,
  setContractFile,
  reviewedCode,
  clearData,
  setShowResults,
}: {
  contractFile: File | null;
  setContractFile: Dispatch<SetStateAction<File | null>>;
  reviewedCode: string | null;
  clearData: () => void;
  setShowResults: Dispatch<SetStateAction<boolean>>;
}) {
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
            className="relative block w-full rounded-lg border-2 border-dashed border-gray p-12 text-center hover:border-gray-400 mt-2"
            onClick={openFileExplorer}
          >
            <input
              type="file"
              className="hidden"
              ref={fileRef}
              accept=".sol"
              name="SolidityFile"
              onChange={(e) => {
                console.log("uploading file");
                if (e.target.files && e.target.files[0]) {
                  console.log("file uploaded");
                  setContractFile(e.target.files[0]);
                }
              }}
              onClick={(e) => {
                clearData();
                //@ts-ignore
                e.target.value = null;
              }}
            />
            <DocumentTextIcon className="mx-auto h-12 w-12 text-gray" />
            <span className="mt-2 block text-sm font-regular text-gray-900">
              Drag file here or Click to browse
            </span>
          </button>
        </div>
        {contractFile ? (
          <FileUploaded
            contractFile={contractFile}
            clearData={clearData}
            reviewedCode={reviewedCode}
            setShowResults={setShowResults}
          />
        ) : (
          <NoFileUploaded />
        )}
      </div>
    </>
  );
}
