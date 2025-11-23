import { Apple, Play } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-background to-muted/40">
      <div
        className="
          container mx-auto
          px-4 sm:px-6 lg:px-8
          pt-20 sm:pt-24 lg:pt-28
          pb-12 sm:pb-16
          min-h-[70vh] lg:min-h-[78vh]
      "
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: COPY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Shared todos and reminders for two
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-tight mb-4">
              A calm shared space
              <br />
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                just for you two
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-7 max-w-md">
              Notify helps you and your favorite person stay in sync with shared
              todos, reminders, and small moments that matter. No feeds, no
              noise—just the two of you.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-3">
              <Button size="lg" className="gap-2">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="w-5 h-5" />
                Google Play
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Coming soon on iOS and Android. No accounts required—pair in
              seconds with a one-time code.
            </p>
          </motion.div>

          {/* RIGHT: PHONE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              flex justify-center lg:justify-end
              lg:self-center
            "
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Subtle background glow, but constrained */}
              <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl bg-linear-to-br from-primary/30 via-secondary/20 to-accent/20" />

              <div className="rounded-[2.4rem] bg-linear-to-br from-card via-muted/80 to-card p-1.5 shadow-2xl border border-border/60">
                <div className="relative rounded-4xl bg-black overflow-hidden aspect-[9/19.5]">
                  {/* Replace with your actual screenshot */}
                  <img
                    src="/screens/onboarding.png"
                    alt="Notify onboarding screen"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Small label under phone, close to it (no extra vertical growth) */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-3 rounded-2xl bg-card/95 shadow-md px-3.5 py-2.5 border border-border flex items-center gap-2 text-xs text-muted-foreground"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[0.65rem]">
                  ♥
                </span>
                Designed for two. No feeds. No followers.
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
