import { Benefits } from "@/widgets/Benefits";
import { Faq } from "@/widgets/FAQ";
import { Oppv } from "@/widgets/Oppv";
import { PensionAnnuity } from "@/widgets/PensionAnnuity";
// 
export default function MainPage() {
  return (
    <>
      <PensionAnnuity />
      <Oppv />
      <Benefits />
      <Faq />
    </>
  );
}
