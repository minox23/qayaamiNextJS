import { InputwHelp, Uploadfile } from "@components/form/input";
import { BlueBtn } from "@components/ui/Buttons";

export default function BusinessProfile() {
  return (
    <div className="bg-gray-100 p-5 rounded-md">
      <h3 className="py-3 font-semibold text-lg">Profile Information</h3>
      <form action="">
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 gap-x-8 gap-y-3">
          <div className="mx-auto mt-10">
            <Uploadfile
              label="Upload Profile picture"
              uploadMsg="Upload a picture"
              fileType="PNG, JPG up to 1MB"
            />
          </div>
          <div>
            <InputwHelp
              label="Display name"
              name="display-name"
              type="text"
              placeholder=""
              required
              htmlFor="display-name"
              helpMsg="This is the name shown on your profile"
            />
            <div className="mt-3">
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tell us about yourself
              </label>
              <div className="mt-2">
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-3 w-fit mx-auto">
          <BlueBtn type="submit" name="Save Changes" />
        </div>
      </form>
    </div>
  );
}
