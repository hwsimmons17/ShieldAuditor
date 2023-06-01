import { AiFillGithub } from "react-icons/ai";

export default function NoFileUploaded() {
  return (
    <>
      <div className="text-center font-medium text-xs py-2 text-gray">or</div>
      <div className="">
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-28 py-3 text-base font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full flex justify-center items-center"
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
    </>
  );
}
