import AccStatus from "./components/accstatus";
import PasswordReset from "./components/passwdreset";
import PersonalInfo from "./components/personalInfo";

export default function AccCenter() {
  return (
    <div>
      <AccStatus />
      <PersonalInfo />
      <PasswordReset />
    </div>
  );
}
