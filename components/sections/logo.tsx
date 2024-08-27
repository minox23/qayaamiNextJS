import Image from "next/image";

export default function Logo() {
  return (
    <div className="mx-auto mt-40 mb-10 w-96 px-8 md:px-0 flex">
      <Image
        src="/assets/images/qmi-full-logo.png"
        alt="qayaami-logo"
        width={500}
        height={700}
      />
    </div>
  );
}
