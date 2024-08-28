import Annuity from "@/widgets/Annuity/ui/Annuity";
import { Benefits } from "@/widgets/Benefits";
import Faq from "@/widgets/FAQ/ui/FAQ";
import Oppv from "@/widgets/Oppv/ui/Oppv";
import OpvOppv from "@/widgets/OpvOppv/ui/OpvOppv";
import PensionAnnuity from "@/widgets/PensionAnnuity/ui/PensionAnnuity";
import { Security } from "@/widgets/Security";

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
