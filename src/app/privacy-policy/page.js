import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/css/privacy-page.css";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="fit-body">
        <h1 className="main-heading">Privacy Policy</h1>
        <p style={{ textAlign: "center", fontWeight: "1000" }}>
          This Privacy Policy explains how Orient Digital ("we", "us", or "our")
          collects, uses, and shares your personal information.
        </p>
        <div className="legal-details">
          <div className="right">
            <h2>1. Information We Collect</h2>
            <p>
              We may collect and process the following categories of personal
              information:
            </p>

            <h3>a. Information You Provide to Us</h3>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone
                number, or other contact details provided through contact forms,
                talent submission forms, job inquiries, or newsletter sign-ups.
              </li>
              <li>
                <strong>Talent Information:</strong> If you are submitting
                yourself or someone else for talent consideration, we may
                collect photos, portfolios, CVs, and social media links.
              </li>
              <li>
                <strong>Business Inquiries:</strong> Company names, professional
                titles, and correspondence for brands or businesses interested
                in collaboration or services.
              </li>
            </ul>

            <h3>b. Automatically Collected Information</h3>
            <p>When you access our Site, we may automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Referring URLs</li>
              <li>Date/time of visits</li>
            </ul>
            <p>
              This information is used for analytics, security, and improving
              our services.
            </p>

            <h3>c. Cookies and Similar Technologies</h3>
            <p>
              We use cookies and similar technologies to enhance user
              experience, gather general visitor information, and track usage of
              our Site. You can manage your cookie preferences through your
              browser settings.
            </p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To operate and maintain our Site</li>
              <li>To evaluate and manage talent submissions</li>
              <li>To respond to inquiries and business opportunities</li>
              <li>
                To send newsletters or marketing materials (only with your
                consent)
              </li>
              <li>To analyze trends and improve our Site</li>
              <li>To protect the security of our users and systems</li>
            </ul>
            <p>
              If you have submitted information to us in the context of becoming
              talent, we may use your data to evaluate representation or
              collaboration opportunities and store your information for future
              consideration.
            </p>

            <h2>3. Sharing Your Information</h2>
            <p>
              We do not sell your personal data. We may share your data in
              limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may engage trusted
                third-party vendors to assist in hosting, analytics, email
                communications, or other operational needs.
              </li>
              <li>
                <strong>Legal Obligations:</strong> We may disclose information
                where required by law or legal process.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or asset sale, your data may be transferred as part
                of that transaction.
              </li>
            </ul>
          </div>
          <div className="left">
            <h2>4. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul>
              <li>To access, update, or delete your personal information</li>
              <li>To withdraw consent at any time (if consent was provided)</li>
              <li>To object to or restrict processing of your personal data</li>
              <li>
                To lodge a complaint with a supervisory authority (e.g., for EU
                residents)
              </li>
            </ul>
            <p>
              To exercise your rights, please contact us at{" "}
              <strong>[insert contact email]</strong>.
            </p>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              information from unauthorized access, alteration, disclosure, or
              destruction. However, no online platform can be guaranteed to be
              100% secure.
            </p>
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to
              fulfill the purposes described in this policy or as required by
              law.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. We are not
              responsible for the privacy practices or content of such sites. We
              encourage you to review their privacy policies before submitting
              any personal information.
            </p>

            <h2>8. International Visitors</h2>
            <p>
              If you are visiting our Site from outside Egypt, please be aware
              that your data may be transferred to, stored, and processed in
              Egypt or other countries. We take appropriate measures to ensure
              your data is treated securely and in accordance with this Privacy
              Policy.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be posted on this page with a revised “Last Updated”
              date. We encourage you to review this policy periodically.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              For questions or concerns about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <p>
              <strong>Orient Digital</strong>
              <br />
              Email:{" "}
              <a href="mailto:info@orientdigital.net">info@orientdigital.net</a>
            </p>

            <p>Last updated: March 14, 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
