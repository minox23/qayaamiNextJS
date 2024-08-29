import { GoogleBtn, PlainBtn } from "@components/ui/Buttons";
import { doSocialLogin, doLogout } from "@app/actions";

const GoogleLogin = () => {
  return (
    <form action={doSocialLogin}>
      <GoogleBtn />
    </form>
  );
};

const LogOut = ({ className }: { className: string }) => {
  return (
    <form action={doLogout}>
      <PlainBtn name="Log Out" type="submit" className={className} />
    </form>
  );
};
export { GoogleLogin, LogOut };
