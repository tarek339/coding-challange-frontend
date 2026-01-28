import { IconBrandWhatsapp, IconMail, IconPrinter } from "@tabler/icons-react";
import React from "react";

const FooterSection = ({
  first,
  second,
}: {
  first: React.ReactNode[];
  second: React.ReactNode[];
}) => {
  return (
    <section className="flex flex-col gap-5">
      <aside className="flex flex-col gap-2">{first}</aside>
      <aside className="flex flex-col gap-2">{second}</aside>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="flex max-md:flex-col max-md:gap-10 max-md:text-center md:items-start justify-between  py-5 px-5 border-t-2 border-primary">
      <div className="flex max-md:flex-col gap-10 items-center">
        <FooterSection
          first={[
            <span key="line1" className="text-sm">
              CPE Europe GmbH
            </span>,
            <span key="line2" className="text-sm">
              Albert-Einstein-Ring 11-15
            </span>,
            <span key="line3" className="text-sm">
              D – 22761 Hamburg
            </span>,
          ]}
          second={[
            <span key="managingTitle" className="text-sm">
              Managing Director (Geschäftsführer):
            </span>,
            <span key="managing1" className="text-sm">
              Hon. -Prof. Christopher M.F. Musmann M.Sc.
            </span>,
            <span key="managing2" className="text-sm">
              Karina Krasnicka
            </span>,
          ]}
        />
        <FooterSection
          first={[
            <span key="tax1" className="text-sm">
              Tax number (Steuer-Nr.): 41/713/04216
            </span>,
            <span key="tax2" className="text-sm">
              Value added tax identification number
            </span>,
            <span key="tax3" className="text-sm">
              (USt-ID Nr.): DE 315 633 695
            </span>,
          ]}
          second={[
            <span key="regTitle" className="text-sm">
              Commercial register of the Local Court of Hamburg
            </span>,
            <span key="regTitle1" className="text-sm">
              (Handelsregister beim Amtsgericht Hamburg):
            </span>,
            <span key="regNumber" className="text-sm">
              HRB 158160
            </span>,
          ]}
        />
        <FooterSection
          first={[
            <span key="bank1" className="text-sm ">
              Deutsche Apotheker- und Ärztekbank
            </span>,
            <span key="bank1-iban" className="text-sm">
              IBAN: DE33 3006 0601 0006 3911 85
            </span>,
            <span key="bank1-bic" className="text-sm">
              BIC: DAAEDEDDXXX
            </span>,
          ]}
          second={[
            <span key="bank2" className="text-sm ">
              Hamburger Sparkasse (HASPA)
            </span>,
            <span key="bank2-iban" className="text-sm">
              IBAN: DE92 2005 0550 1503 6472 71
            </span>,
            <span key="bank2-bic" className="text-sm">
              BIC: HASPDEHHXXX
            </span>,
          ]}
        />
      </div>

      <section className="flex flex-col max-md:w-full gap-5 max-md:items-center">
        <span className="text-sm flex items-center text-primary">
          <IconBrandWhatsapp />
          &nbsp; +49 40 2286 9279 0
        </span>
        <span className="text-sm flex items-center text-primary">
          <IconPrinter />
          &nbsp; +49 40 2286 9279 0
        </span>
        <span className="text-sm flex items-center text-primary">
          <IconMail />
          &nbsp; info@cpe-europe.de
        </span>
      </section>
    </footer>
  );
};

export default Footer;
