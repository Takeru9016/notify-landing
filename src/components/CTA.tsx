import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary to-secondary">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Start a shared space today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Download Notify and connect with your favorite person in seconds.
          </p>

          <p className="text-xl font-bold text-white/90">
            Coming soon on iOS and Android.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-3">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-white text-black hover:bg-gray-100"
            >
              <img src="/apple.svg" className="w-5 h-5" />
              App Store
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-white text-black hover:bg-gray-100"
            >
              <img src="/google-play.svg" className="w-5 h-5" />
              Google Play
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
