import {
  BadgeIndianRupee,
  Infinity,
  Shield,
  DatabaseBackup,
  FileStack,
  Lightbulb,
} from "lucide-react";

const faq = [
  {
    icon: BadgeIndianRupee,
    question: "Is ZakatPay really free to use?",
    answer:
      "Yes. ZakatPay does not charge users for calculation or record-keeping. The full amount of your Zakat goes directly to the recipient. The only costs may be minimal payment processing fees from UPI or the bank.",
  },
  {
    icon: Infinity,
    question: "How many profiles can I create in ZakatPay?",
    answer:
      "You can create separate profiles for each family member or dependent you want to calculate Zakat for. There is no hard limit—manage as many as you need.",
  },
  {
    icon: Shield,
    question: "How secure is my personal and financial information?",
    answer:
      "ZakatPay uses industry-standard security practices to keep your data safe. Your Zakat history, asset information, and payment records are encrypted and accessible only to you.",
  },
  {
    icon: DatabaseBackup,
    question: "Can I access my Zakat records later?",
    answer:
      "Yes. ZakatPay keeps a permanent record of your calculations and payments. You can access your history at any time from web, tablet, or mobile, and download detailed reports for personal use.",
  },
  {
    icon: FileStack,
    question: "What if my asset details change before my Zakat anniversary?",
    answer:
      "You can update or revise your Zakat calculation as many times as needed before locking it on your anniversary date. This ensures your Zakat is always accurate and up to date.",
  },
  {
    icon: Lightbulb,
    question: "Do I need to know Zakat rules to use the app?",
    answer:
      "No. ZakatPay guides you step by step. Tooltips, inline help, and an integrated Zakat Guide explain the rules clearly—even if it’s your first time calculating Zakat.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Quick answers to common questions about our platform.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
