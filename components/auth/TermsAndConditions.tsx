"use client";

import React from "react";

import { useMediaQuery } from "@uidotdev/usehooks";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { Button } from "../ui/button";

function TermsAndConditionsContent() {
  return (
    <div className="space-y-2 overflow-y-auto text-white">
      <h3 className="font-semibold">Effective Date: May 06, 2025</h3>
      <p>
        <b>Eligibility</b>
        <br />
        You must be at least 18 years old and capable of forming legally binding
        contracts. By registering, you confirm that the information you provide
        is accurate, up-to-date, and complete.
        <br />
        <br />
        <b>Affiliate Account</b>
        <br />
        <li>
          You are responsible for all activity under your account. - Multiple
          accounts, impersonation, or fraudulent sign-ups are prohibited. - We
          reserve the right to approve or reject any account at our sole
          discretion.
        </li>
        <br />
        <br />
        <b>Offers & Promotions</b>
        <br />
        <li>
          Affleego connects users to third-party affiliate networks, brokers,
          and brands offering CPA, CPL, RevShare, and hybrid models. - All
          promotional activities must comply with the offer guidelines,
          applicable laws, and the terms of the respective third-party
          companies. - You are solely responsible for the manner in which you
          promote affiliate links.
        </li>
        <br />
        <br />
        <b>Traffic Quality & Compliance</b>
        <br />
        <li>
          Affiliates must only generate legitimate traffic from approved
          sources. - Prohibited sources include but are not limited to: bot
          traffic, incentivized traffic, forced clicks, spam, fake leads, and
          unauthorized redirects. - Violation of traffic terms may result in
          removal from the platform and disqualification from active deals.
        </li>
        <br />
        <br />
        <b>Commission & Payment</b>
        <br />
        <li>
          Affleego does not handle, process, or guarantee any affiliate payouts.
        </li>
        <li>
          All payments are processed directly by the third-party companies or
          networks you work with. - We are not liable for late payments, missing
          commissions, or rejected leads by any partner.
        </li>
        <br />
        <br />
        <b>Transparency & Reviews</b>
        <br />
        <li>
          Our platform aims to provide honest, transparent reviews of affiliate
          offers, broker deals, and networks. - Ratings, comments, and reviews
          are contributed by our user community based on their real-world
          experiences.
        </li>
        <li>
          We do not guarantee the accuracy, profitability, or safety of any
          deal, brand, or offer listed on Affleego. - The reviews and
          experiences shared on our site are not financial advice.{" "}
        </li>
        <br />
        <br />
        <b>Disclaimer</b>
        <br />
        <li>
          Affleego is a research and matchmaking platform, not a broker or
          financial service provider. - We do not guarantee any earnings,
          success, or specific outcomes from any offer. - We are not responsible
          for decisions you make based on the listings, reviews, or content on
          our platform. - Affiliates must perform their own due diligence before
          promoting any offer.
        </li>
        <br />
        <br />
        <b>Intellectual Property</b>
        <br />
        <li>
          All platform content, branding, and trademarks belong to Affleego or
          its partners. - Unauthorized copying, distribution, or misuse of
          content is strictly prohibited.
        </li>
        <br />
        <br />
        <b>Account Termination</b>
        <br />
        <li>
          You may deactivate your account at any time. - We may suspend or
          terminate accounts for violations of these terms without notice. - Any
          account found engaging in suspicious or unethical behavior may be
          removed immediately.
        </li>
        <br />
        <br />
        <b>Changes to Terms</b>
        <br />
        We reserve the right to update or modify these Terms and Conditions at
        any time. You will be notified of significant changes, and continued use
        of the platform constitutes acceptance.
        <br />
        <br />
        <b>Governing Law</b>
        <br />
        These terms shall be governed by and interpreted in accordance with the
        laws of Nigeria, without regard to conflict of law principles.
        <br />
        <br />
        <b>Final Consent</b>
        <br />
        By signing up, you acknowledge that you&apos;ve read, understood, and
        accepted these Terms and Conditions.
      </p>
    </div>
  );
}

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function TermsAndConditions({ open, setOpen }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="h-[70vh] max-w-lg bg-[#11111A]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">
              Affleego Terms and Conditions
            </DialogTitle>
            <DialogDescription className="text-gray-200">
              Please read the following terms and conditions carefully.
            </DialogDescription>
          </DialogHeader>
          <TermsAndConditionsContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="mx-auto h-[60vh] w-[calc(100%-1rem)] bg-[#11111A]">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-2xl text-white">
            Affleego Terms and Conditions
          </DrawerTitle>
          <DrawerDescription className="text-gray-200">
            Please read the following terms and conditions carefully.
          </DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto w-[90%] overflow-y-auto">
          <TermsAndConditionsContent />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" className="text-white">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default TermsAndConditions;
