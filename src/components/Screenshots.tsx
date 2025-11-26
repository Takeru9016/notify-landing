import { motion } from "motion/react";

type ScreenConfig = {
  key: string;
  title: string;
  caption: string;
  badge: string;
  image: string;
};

const screens: ScreenConfig[] = [
  {
    key: "onboarding",
    title: "Onboarding",
    caption:
      "A gentle first-time experience that sets the tone: calm, focused, and just for two.",
    badge: "Step 1 · Welcome",
    image: "/screens/onboarding.png", // replace with your real screenshot
  },
  {
    key: "pairing",
    title: "Pairing",
    caption:
      "Connect in seconds with a rotating 10-minute code. No accounts or emails required.",
    badge: "Step 2 · Pairing",
    image: "/screens/pairing.png",
  },
  {
    key: "todos",
    title: "Shared todos",
    caption:
      "Plan groceries, chores, and little promises with a timeline that both of you can see.",
    badge: "Step 3 · Day to day",
    image: "/screens/todos.png",
  },
  {
    key: "notifications",
    title: "Notification center",
    caption:
      "A calm feed of what changed—what was created, completed, or updated between you two.",
    badge: "Step 4 · Stay in sync",
    image: "/screens/notifications.png",
  },
];

export default function Screenshots() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-3">
            The flow
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            From pairing to everyday moments
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Syngo is designed as a simple journey. Pair once, then live in a
            shared space that quietly keeps you both on the same page.
          </p>
        </div>

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.key}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
            >
              {/* Phone mockup */}
              <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
                {/* Glow */}
                <div className="absolute inset-0 -z-10 blur-3xl bg-linear-to-br from-primary/25 via-secondary/15 to-accent/15" />

                <div className="relative rounded-[2.25rem] bg-linear-to-br from-card via-muted/80 to-card p-2 shadow-xl border border-border/70">
                  <div className="rounded-[1.75rem] bg-black overflow-hidden aspect-[9/19.5]">
                    <img
                      src={screen.image}
                      alt={`${screen.title} screen`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {screen.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {screen.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {screen.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
