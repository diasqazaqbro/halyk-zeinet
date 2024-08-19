import { Annuity } from "@/widgets/Annuity";
import { Benefits } from "@/widgets/Benefits";
import { Faq } from "@/widgets/FAQ";
import { Footer } from "@/widgets/Footer";
import { Oppv } from "@/widgets/Oppv";
import { OpvOppv } from "@/widgets/OpvOppv";
import { PensionAnnuity } from "@/widgets/PensionAnnuity";
import { Security } from "@/widgets/Security";
//
export default function MainPage() {
  return (
    <>
      <PensionAnnuity />
      <Annuity />

      <Oppv />
      <OpvOppv />

      <Benefits />
      <Security />

      <Faq />
    </>
  );
}
