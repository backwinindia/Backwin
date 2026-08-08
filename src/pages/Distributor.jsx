import { useEffect } from "react";

import DistributorHero from "../components/distributor/DistributorHero";
import PartnerBenefits from "../components/distributor/PartnerBenefits";
import DistributorBenefits from "../components/distributor/DistributorBenefits";
import DistributorProcess from "../components/distributor/DistributorProcess";
import Eligibility from "../components/distributor/Eligibility";
import DistributorForm from "../components/distributor/DistributorForm";
import DistributorFAQ from "../components/distributor/DistributorFAQ";
import DistributorCTA from "../components/distributor/DistributorCTA";

const Distributor = () => {

  useEffect(() => {

    if (window.location.hash === "#distributor-form") {

      setTimeout(() => {

        const form = document.getElementById("distributor-form");

        if (form) {

          form.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 100);

    }

  }, []);

  return (
    <>
      <DistributorHero />

      <PartnerBenefits />

      <DistributorBenefits />

      <DistributorProcess />

      <Eligibility />

      <DistributorForm />

      <DistributorFAQ />

      <DistributorCTA />
    </>
  );
};

export default Distributor;