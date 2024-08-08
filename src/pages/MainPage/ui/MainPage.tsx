import { Benefits } from "@/widgets/Benefits";
import { Oppv } from "@/widgets/Oppv";
import { PensionAnnuity } from "@/widgets/PensionAnnuity";

export const MainPage = () => {
  return (
    <>
      <PensionAnnuity />
      <Oppv />
      <Benefits />
    </>
  );
};
