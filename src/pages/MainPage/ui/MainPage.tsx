import { Benefits } from "@/widgets/Benefits/ui/Benefits";
import { Faq } from "@/widgets/FAQ/ui/FAQ";
import React, { lazy, Suspense } from "react";

const PensionAnnuity = React.memo(
  lazy(() => import("@/widgets/PensionAnnuity/ui/PensionAnnuity"))
);
const Annuity = React.memo(lazy(() => import("@/widgets/Annuity/ui/Annuity")));
const Oppv = React.memo(lazy(() => import("@/widgets/Oppv/ui/Oppv")));
const OpvOppv = React.memo(lazy(() => import("@/widgets/OpvOppv/ui/OpvOppv")));
const Security = lazy(() => import("@/widgets/Security/ui/Security"));

export default function MainPage() {
  return (
    <>
      <Suspense
        fallback={<div className="text-center">Loading Pension Annuity...</div>}
      >
        <PensionAnnuity />
      </Suspense>

      <Suspense
        fallback={<div className="text-center">Loading Annuity...</div>}
      >
        <Annuity />
      </Suspense>

      <Suspense fallback={<div className="text-center">Loading Oppv...</div>}>
        <Oppv />
      </Suspense>

      <Suspense
        fallback={<div className="text-center">Loading OpvOppv...</div>}
      >
        <OpvOppv />
      </Suspense>

      <Benefits />

      <Suspense
        fallback={<div className="text-center">Loading Security...</div>}
      >
        <Security />
      </Suspense>

      <Faq />
    </>
  );
}
