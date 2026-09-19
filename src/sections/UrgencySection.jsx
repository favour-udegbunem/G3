import { useEffect, useState } from "react";
import { Clock3, ArrowRight } from "lucide-react";

const OFFER_END_DATE = "2026-09-30T23:59:59+01:00";

const getTimeLeft = () => {
  const difference =
    new Date(OFFER_END_DATE).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
};

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    {
      label: "Days",
      value: timeLeft.days,
    },
    {
      label: "Hours",
      value: timeLeft.hours,
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
    },
  ];

  return (
    <section className="bg-[#FFF8F5] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[1.75rem] bg-gray-950 px-4 py-10 text-center shadow-xl sm:rounded-[2rem] sm:px-8 sm:py-12 lg:px-16">
          
          {/* Icon */}
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#D84B83] text-white sm:h-14 sm:w-14">
            <Clock3 size={24} className="sm:h-[27px] sm:w-[27px]" />
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#D84B83] sm:mt-6 sm:text-sm sm:tracking-[0.2em]">
            Limited-Time Offer
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Give Her the Gift of Growth Today
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            Our current promotional pricing is available for a limited
            time. Secure your G3 collection before the offer ends.
          </p>

          {/* Countdown */}
          {!timeLeft.expired ? (
            <div className="mx-auto mt-7 grid w-full max-w-xl grid-cols-4 gap-2 sm:mt-8 sm:gap-3 md:gap-4">
              {timeBlocks.map((block) => (
                <div
                  key={block.label}
                  className="min-w-0 rounded-xl border border-white/10 bg-white/5 px-1.5 py-3 sm:rounded-2xl sm:px-3 sm:py-4 md:px-4 md:py-5"
                >
                  <div className="truncate text-xl font-black leading-none text-white sm:text-3xl md:text-4xl">
                    {String(block.value).padStart(2, "0")}
                  </div>

                  <div className="mt-2 truncate text-[8px] font-semibold uppercase tracking-[0.08em] text-gray-500 sm:text-[10px] sm:tracking-wider md:text-xs">
                    {block.label}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
              <p className="font-semibold text-white">
                This offer has ended.
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Check the collections below for the latest available
                pricing.
              </p>
            </div>
          )}

          {/* CTA */}
          <a
            href="#products"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D84B83] px-6 py-4 text-sm font-bold text-white transition hover:opacity-90 sm:mt-9 sm:w-auto sm:px-7 sm:text-base"
          >
            Get Your G3 Collection
            <ArrowRight size={18} />
          </a>

          <p className="mt-4 text-xs text-gray-500">
            Offer ends September 30, 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;