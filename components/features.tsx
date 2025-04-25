import {
  Footprints,
  LayoutGrid,
  ShieldAlert,
  Bell,
  Users,
  KeyRound,
  HandCoins,
  HeartHandshake,
  LibraryBig,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Footprints,
    title: "Guided step-by-step process",
    description:
      "No expertise needed; the app walks you through the entire Zakat calculation process.",
  },
  {
    icon: LayoutGrid,
    title: "Covers 15+ asset types",
    description:
      "Suitable for salaried individuals, business owners, homemakers, and more",
  },
  {
    icon: ShieldAlert,
    title: "Separate Interest Disposal",
    description: "Helps purify your income from unintended interest sources.",
  },
  {
    icon: Bell,
    title: "Automated reminders for your Zakat Anniversary",
    description: "Ensures you never miss your set due date.",
  },
  {
    icon: Users,
    title: "Manage Zakat for Multiple People",
    description:
      "Create separate profiles for family members and dependents, all in one place.",
  },
  {
    icon: KeyRound,
    title: "Securely store past records",
    description: "No need for spreadsheets or separate logs.",
  },

  {
    icon: HandCoins,
    title: "Pay directly from the app",
    description:
      "Pay to trusted institutions, individuals or discover new causes.",
  },
  {
    icon: LibraryBig,
    title: "Comprehensive Zakat Guide",
    description:
      "Integrated knowledge base explaining Zakat rules and categories.",
  },
  {
    icon: HeartHandshake,
    title: "100% Free & Transparent",
    description:
      "ZakatPay does not charge users; all funds go directly to recipients.",
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        How ZakatPay helps?
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
