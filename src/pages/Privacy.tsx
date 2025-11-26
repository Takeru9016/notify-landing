export default function Privacy() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <em>Last updated: November 20, 2025</em>
          </p>

          <p>
            Thank you for using <strong>Syngo</strong> ("we", "us", or "our").
            This Privacy Policy explains how we collect, use, and protect your
            information when you use the Syngo mobile application (the "App").
          </p>

          <p>
            By using the App, you agree to the collection and use of information
            in accordance with this policy.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">
            1. Information We Collect
          </h2>
          <p>
            We collect the minimum information needed to provide the core
            features of Syngo.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            1.1. Account and Device Information
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Anonymous identifiers:</strong> We use Firebase
              Authentication with anonymous sign-in to create a unique ID for
              your device. We do not require your name, email address, or phone
              number to use the App.
            </li>
            <li>
              <strong>Device information:</strong> Basic device information
              (such as device model, operating system version, and app version)
              may be collected for diagnostics, analytics, and to improve
              performance.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            1.2. Pairing and App Content
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Pairing data:</strong> When you pair your device with
              another person, we store pairing codes and pair records so that
              your data can be shared securely between the two of you.
            </li>
            <li>
              <strong>App content:</strong> We store content you create in the
              App, such as:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Todos and reminders</li>
                <li>Favorites, notes and links</li>
                <li>Stickers and related metadata</li>
                <li>Notifications and activity history</li>
              </ul>
            </li>
          </ul>
          <p>
            This data is stored in Firebase Firestore and Firebase Storage, and
            is only accessible to you and your paired partner according to our
            security rules.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            1.3. Images and Media
          </h3>
          <p>
            If you upload images (for example, stickers or avatars), those files
            are stored using Firebase Storage and/or Cloudinary. Image URLs and
            metadata are stored in Firestore to display them inside the App.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            1.4. Notifications and Device Tokens
          </h3>
          <p>If you enable push notifications, we collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              A <strong>device push token</strong> (e.g. from Apple Push
              Notification service and Firebase Cloud Messaging)
            </li>
            <li>
              Your notification preferences (which types of notifications you
              want to receive)
            </li>
          </ul>
          <p>
            We use these tokens only to send you notifications related to the
            App's features (such as reminders and pair activity). We do not sell
            or share these tokens with advertisers.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            1.5. Usage and Diagnostics Data
          </h3>
          <p>
            We may collect anonymous usage statistics and crash reports (for
            example, via Firebase, Sentry, or similar tools) to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Monitor app reliability</li>
            <li>Understand feature usage at an aggregate level</li>
            <li>Fix bugs and improve performance</li>
          </ul>
          <p>
            This data does not include the content of your todos, notes, or
            stickers.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            1.6. Objectionable Content
          </h3>
          <p>
            We have a zero-tolerance policy for objectionable content. While
            your content is private between you and your partner, we reserve the
            right to investigate reports of abuse. If content is found to
            violate our End User License Agreement (EULA)—such as being
            harassment, pornography, or illegal—we will remove it and may
            suspend the offending account.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and operate the App and its features</li>
            <li>Sync your data across devices within a pair</li>
            <li>
              Send you reminders and notifications that you have opted in to
              receive
            </li>
            <li>
              Maintain and improve the App's performance, reliability, and
              security
            </li>
            <li>Detect, prevent, and address technical issues or abuse</li>
          </ul>
          <p className="font-semibold mt-4">
            We do <strong>not</strong> sell your data or use it for third-party
            advertising.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">
            3. Data Sharing and Disclosure
          </h2>
          <p>
            We do not share your personal information with third parties except
            in the following cases:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            Service providers
          </h3>
          <p>We use trusted third-party services such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Google Firebase (Authentication, Firestore, Storage, Cloud
              Messaging)
            </li>
            <li>Cloudinary (image hosting)</li>
          </ul>
          <p>
            These providers process data on our behalf to deliver core
            functionality such as storage, synchronization, and notifications.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">
            Legal requirements
          </h3>
          <p>
            We may disclose information if required by law or in response to
            valid legal requests (e.g. subpoena, court order).
          </p>
          <p>
            We do not sell your data to data brokers or advertising networks.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">4. Data Security</h2>
          <p>
            We use industry-standard security practices and the built-in
            security features of our service providers (such as Firebase
            Security Rules and HTTPS) to protect your data in transit and at
            rest.
          </p>
          <p>
            However, no method of transmission over the Internet or method of
            electronic storage is 100% secure. While we strive to protect your
            data, we cannot guarantee absolute security.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">
            5. Data Retention and Deletion
          </h2>
          <p>
            We retain your data as long as your account and pairing are active,
            or as needed to provide the App's services.
          </p>
          <p>
            You may request deletion of your data by contacting us (see the
            "Contact Us" section below). Upon a valid deletion request, we will
            remove or anonymize your data from our systems, subject to technical
            and legal limitations.
          </p>
          <p>
            If you uninstall the App without requesting deletion, your data may
            remain in our systems so that it can be restored if you reinstall
            and pair again.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">
            6. Children's Privacy
          </h2>
          <p>
            Syngo is not directed to children under the age of 13, and we do
            not knowingly collect personal information from children under 13.
            If you are a parent or guardian and believe that your child has
            provided us with personal information, please contact us so we can
            take appropriate action.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">
            7. International Transfers
          </h2>
          <p>
            Our service providers (such as Firebase) may store and process data
            on servers located in different countries. By using the App, you
            consent to the transfer of your information to these locations,
            which may have different data protection laws than your country of
            residence.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">8. Your Choices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Notifications:</strong> You can enable or disable push
              notifications in your device settings and in the App's settings.
            </li>
            <li>
              <strong>Images and media:</strong> You can choose whether to grant
              the App access to your camera and photo library. If you deny
              access, some features (like stickers or avatars) may not be
              available.
            </li>
            <li>
              <strong>Account and data:</strong> You may request deletion of
              your data by contacting us.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we
            will update the "Last updated" date at the top of this page.
          </p>
          <p>
            We recommend reviewing this page periodically to stay informed about
            how we protect your information.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or your data,
            you can contact us at:
          </p>
          <p className="mt-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:timetocode22@gmail.com"
              className="text-primary hover:underline"
            >
              timetocode22@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
