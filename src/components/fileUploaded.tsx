import { ArchiveBoxIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

export default function FileUploaded({
  contractFile,
  reviewedCode,
  clearData,
  setShowResults,
}: {
  contractFile: File;
  reviewedCode: string | null;
  clearData: () => void;
  setShowResults: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="">
        <button className="relative w-full rounded-lg border-2 border-dashed border-gray p-2 text-center hover:border-gray-400 mt-6 flex item-center justify-between">
          <div className="flex justify-center item-center mt-1.5">
            <ArchiveBoxIcon className="h-6 w-6 text-gray m-0 mx-2" />
            <span className="text-sm font-regular text-gray flex item-center align-baseline inline-block mx-2">
              {contractFile.name}
            </span>
          </div>
          <div className="h-6">
            {reviewedCode ? (
              <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1" />
            ) : (
              <Spinner />
            )}
          </div>
        </button>
        <div className="flex pt-6 place-content-between">
          <button
            type="button"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={clearData}
          >
            Cancel
          </button>
          <button
            disabled={!reviewedCode}
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setShowResults(true)}
          >
            View Output
          </button>
        </div>
      </div>
    </>
  );
}

export function Spinner() {
  return (
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 text-gray border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
