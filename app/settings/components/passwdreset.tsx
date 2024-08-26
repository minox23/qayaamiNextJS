import { BlueBtn } from "@components/ui/Buttons";
import { Input } from "@components/form/input";

export default function PasswordReset() {
  return (
    <div className="bg-gray-100 p-5 rounded-md mt-5">
      <h3 className="py-3 font-semibold text-lg">Password</h3>
      <p>
        Your password must be at least 6 characters and should include a
        combination numbers, letters and special characters.
      </p>
      <form action="">
        <div className="grid grid-cols-2 gap-3">
          <div className="mt-3 col-span-2">
            <Input
              label="Current Password"
              name="current-password"
              type="password"
              required
              htmlFor="current-password"
            />
          </div>
          <Input
            label="New Password"
            name="new-password"
            type="password"
            required
            htmlFor="new-password"
          />
          <Input
            label="Retype Password"
            name="retype-password"
            type="password"
            required
            htmlFor="retype-password"
          />
        </div>
        <div className="mt-8 mb-3 md:mx-0 mx-auto w-fit">
          <BlueBtn name="Update Password" type="submit" />
        </div>
      </form>
    </div>
  );
}
