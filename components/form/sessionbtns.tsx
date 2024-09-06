import { GoogleBtn, PlainBtn } from "@components/ui/Buttons";
import { doSocialLogin, doLogout } from "@app/actions";
import { signIn } from "@auth"

const GoogleLogin = () => {
  return (
    <form action={doSocialLogin}>
      <GoogleBtn />
    </form>
  );
};

 
function ResendSignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("resend", formData)
      }}
    className="flex flex-col">
      <input type="text" name="email" placeholder="Email" />
      <button type="submit" className="bg-blue-600 mt-4 p-2 text-white">Signin with Resend</button>
    </form>
  )
}

const LogOut = ({ className }: { className: string }) => {
  return (
    <form action={doLogout}>
      <PlainBtn name="Log Out" type="submit" className={className} />
    </form>
  );
};
export { GoogleLogin, LogOut, ResendSignIn };
