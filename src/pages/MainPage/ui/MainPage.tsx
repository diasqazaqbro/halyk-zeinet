import dynamic from "next/dynamic";

const PensionAnnuity = dynamic(
  () => import("@/widgets/PensionAnnuity/ui/PensionAnnuity"),
  {
    ssr: false,
  }
);

const Annuity = dynamic(() => import("@/widgets/Annuity/ui/Annuity"), {
  ssr: false,
});

const Oppv = dynamic(() => import("@/widgets/Oppv/ui/Oppv"), {
  ssr: false,
});

const OpvOppv = dynamic(() => import("@/widgets/OpvOppv/ui/OpvOppv"), {
  ssr: false,
});

const Benefits = dynamic(() => import("@/widgets/Benefits/ui/Benefits"), {
  ssr: false,
});

const Security = dynamic(() => import("@/widgets/Security/ui/Security"), {
  ssr: false,
});

const Faq = dynamic(() => import("@/widgets/FAQ/ui/FAQ"), {
  ssr: false,
});

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
