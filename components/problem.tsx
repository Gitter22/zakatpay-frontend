export default function Problem() {
  return (
    <section id="problem" className="w-full py-12 xs:py-20 px-6">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col p-4 space-y-12 md:w-1/2 md:p-10">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left md:text-4xl">
            Too many Muslims guess their Zakat—ZakatPay helps you get it right.
          </h2>
          <p className="max-w-sm text-center text-muted-foreground md:text-left">
            Many Muslims struggle to accurately calculate their Zakat, leading
            to confusion and uncertainty. This can result in missed
            opportunities to fulfill this important obligation, and can also
            lead to feelings of guilt and anxiety.
          </p>
        </div>

        <div className="flex flex-col bg-accent rounded-xl p-4 space-y-8 md:w-1/2 md:p-10">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-full bg-muted md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-foreground">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  It&apos;s easy to get it wrong
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                It&apos;s easy to get it wrong
              </h3>
              <p className="text-muted-foreground">
                Zakat involves various asset types, fluctuating values, and
                detailed rules that are hard to keep track of without help.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-full bg-muted md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-foreground">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Managing it all is a burden
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Managing it all is a burden
              </h3>
              <p className="text-muted-foreground">
                Calculating for yourself and others, remembering dates, and
                keeping records often becomes overwhelming.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-full bg-muted md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-foreground">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  You miss out on impact
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                You miss out on impact
              </h3>
              <p className="text-muted-foreground">
                Without proper tracking and digital tools, Zakat payments often
                go unrecorded and the spiritual value gets diluted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why ZakatPay?

// The Challenges of Zakat Calculation

// It's easy to get it wrong – Zakat involves various asset types, fluctuating values, and detailed rules that are hard to keep track of without help.

// Managing it all is a burden – Calculating for yourself and others, remembering dates, and keeping records often becomes overwhelming.

// You miss out on impact – Without proper tracking and digital tools, Zakat payments often go unrecorded and the spiritual value gets diluted.
