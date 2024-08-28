import { lazy, Suspense } from "react";

const PensionAnnuity = lazy(
  () => import("@/widgets/PensionAnnuity/ui/PensionAnnuity")
);
const Annuity = lazy(() => import("@/widgets/Annuity/ui/Annuity"));
const Oppv = lazy(() => import("@/widgets/Oppv/ui/Oppv"));
const OpvOppv = lazy(() => import("@/widgets/OpvOppv/ui/OpvOppv"));
const Benefits = lazy(() => import("@/widgets/Benefits/ui/Benefits"));
const Security = lazy(() => import("@/widgets/Security/ui/Security"));
const Faq = lazy(() => import("@/widgets/FAQ/ui/FAQ"));

export default function MainPage() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <PensionAnnuity />
      <Annuity />
      <Oppv />
      <OpvOppv />
      <Benefits />
      <Security />
      <Faq />
    </Suspense>
  );
}
