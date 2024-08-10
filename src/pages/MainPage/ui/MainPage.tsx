import { Benefits } from "@/widgets/Benefits";
import { Faq } from "@/widgets/FAQ";
import { Oppv } from "@/widgets/Oppv";
import { PensionAnnuity } from "@/widgets/PensionAnnuity";

export const MainPage = () => {
  return (
    <>
      <PensionAnnuity />
      <Oppv />
      <Benefits />
      <Faq />
    </>
  );
};
