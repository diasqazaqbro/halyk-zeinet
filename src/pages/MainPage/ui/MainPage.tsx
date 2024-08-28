import React, { lazy, Suspense } from "react";

const PensionAnnuity = React.memo(
  lazy(() => import("@/widgets/PensionAnnuity/ui/PensionAnnuity"))
);
const Annuity = React.memo(lazy(() => import("@/widgets/Annuity/ui/Annuity")));
const Oppv = React.memo(lazy(() => import("@/widgets/Oppv/ui/Oppv")));
const OpvOppv = React.memo(lazy(() => import("@/widgets/OpvOppv/ui/OpvOppv")));
const Benefits = lazy(() => import("@/widgets/Benefits/ui/Benefits"));
const Security = lazy(() => import("@/widgets/Security/ui/Security"));
const Faq = lazy(() => import("@/widgets/FAQ/ui/FAQ"));

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

      <Suspense
        fallback={<div className="text-center">Loading Benefits...</div>}
      >
        <Benefits />
      </Suspense>

      <Suspense
        fallback={<div className="text-center">Loading Security...</div>}
      >
        <Security />
      </Suspense>

      <Suspense fallback={<div className="text-center">Loading FAQ...</div>}>
        <Faq />
      </Suspense>
    </>
  );
}
