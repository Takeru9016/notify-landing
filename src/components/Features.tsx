import { motion } from "motion/react";
import { Bell, CheckCircle2, HeartHandshake, Shield } from "lucide-react";

const items = [
  {
    icon: CheckCircle2,
    label: "Shared todos",
    description: "See what needs doing at a glance.",
  },
  {
    icon: Bell,
    label: "Gentle reminders",
    description: "Thoughtful notifications, not noise.",
  },
  {
    icon: HeartHandshake,
    label: "Built for two",
    description: "Everything is centered on your pair.",
  },
  {
    icon: Shield,
    label: "Private by default",
    description: "Your data stays between you and your partner.",
  },
];

export default function Features() {
  return (
    <section className="border-y border-border/60 bg-card/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
