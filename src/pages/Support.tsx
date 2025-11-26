import { Link } from "react-router-dom";
import { Mail, FileText } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Support() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Support</h1>
        <p className="text-xl text-gray-600 mb-12">
          We're here to help. Choose the best way to get in touch.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Mail className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>
                Send us an email and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:timetocode22@gmail.com"
                className="text-primary hover:underline font-medium"
              >
                timetocode22@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Documentation</CardTitle>
              <CardDescription>
                Read our privacy policy and learn more about how Syngo works.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                to="/privacy"
                className="text-primary hover:underline font-medium"
              >
                View Privacy Policy
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                How do I pair with someone?
              </h3>
              <p className="text-gray-600">
                One person generates a pairing code in the app, and the other
                person enters that code. The code expires after 10 minutes for
                security.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Can I pair with more than one person?
              </h3>
              <p className="text-gray-600">
                Currently, Syngo is designed for pairs only. You can unpair and
                pair with someone else, but you can only be paired with one
                person at a time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Is my data private?
              </h3>
              <p className="text-gray-600">
                Yes. Your data is only visible to you and your paired partner.
                We use Firebase security rules to ensure no one else can access
                your information.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                How do I delete my data?
              </h3>
              <p className="text-gray-600">
                You can unpair from the Settings screen, which will remove your
                pairing. To fully delete your data, contact us at
                timetocode22@gmail.com.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Does Syngo work offline?
              </h3>
              <p className="text-gray-600">
                Yes, you can view and create todos offline. Changes will sync
                automatically when you're back online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
