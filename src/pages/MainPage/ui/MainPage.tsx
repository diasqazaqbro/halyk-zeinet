import dynamic from "next/dynamic";
import React, { lazy, Suspense } from "react";

const PensionAnnuity = React.memo(
  dynamic(() => import("@/widgets/PensionAnnuity/ui/PensionAnnuity"), {
    ssr: false,
  })
);
const Annuity = React.memo(lazy(() => import("@/widgets/Annuity/ui/Annuity")));

const Oppv = React.memo(
  dynamic(() => import("@/widgets/Oppv/ui/Oppv"), { ssr: false })
);
const OpvOppv = React.memo(
  dynamic(() => import("@/widgets/OpvOppv/ui/OpvOppv"), { ssr: false })
);
const Benefits = dynamic(() => import("@/widgets/Benefits/ui/Benefits"), {
  ssr: false,
});
const Security = dynamic(() => import("@/widgets/Security/ui/Security"), {
  ssr: false,
});
const Faq = dynamic(() => import("@/widgets/FAQ/ui/FAQ"), { ssr: false });

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
