import { PhotoIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface InputProps {
  htmlFor?: string;
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  id?: string | number;
  helpMsg?: string;
  uploadMsg?: string;
  fileType?: string;
}

export const Input = (props: InputProps) => {
  return (
    <div>
      <label
        htmlFor={props.htmlFor}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2">
        <input
          id={props.name}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          autoComplete="on"
          required={props.required}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export const InputwHelp = (props: InputProps) => {
  return (
    <div>
      <label
        htmlFor={props.htmlFor}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2">
        <input
          id={props.name}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          autoComplete="on"
          required={props.required}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
      <p id="description" className="mt-1 text-sm text-gray-500 text-nowrap">
        {props.helpMsg}
      </p>
    </div>
  );
};

function Divider() {
  return <div className="w-full border-t border-gray-300" />;
}

export function DisabledInput(props: InputProps) {
  return (
    <div>
      <label
        htmlFor={props.htmlFor}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2">
        <input
          id={props.name}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          disabled
          autoComplete="on"
          className="block w-full disabled:bg-gray-100 placeholder:text-base rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export function Uploadfile(props: InputProps): JSX.Element {
  return (
    <div className="col-span-full">
      <label
        htmlFor="file-upload"
        className="block text-sm font-medium leading-6 text-gray-900 text-center"
      >
        {props.label}
      </label>
      <div className="mt-2 flex justify-center rounded-md border border-dashed border-gray-900/25 px-6 py-3 mx-auto bg-gray-50">
        <div className="text-center">
          <PhotoIcon
            aria-hidden="true"
            className="mx-auto h-12 w-12 text-gray-300"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-sm font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:underline"
            >
              <span>{props.uploadMsg}</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">{props.fileType}</p>
        </div>
      </div>
    </div>
  );
}

export const SearchInput = ({className}: {className: string}) => {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="h-5 w-5 text-gray-400"
          />
        </div>
        <input
          name="search"
          type="search"
          placeholder="Search"
          required
          className={`${className} block w-full rounded-md border-0 bg-white py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-blue-600 sm:text-base sm:leading-6`}
        />
      </div>
    </div>
  );
};
