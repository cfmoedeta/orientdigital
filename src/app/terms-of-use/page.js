import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/css/privacy-page.css";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="fit-body">
        <h1 className="main-heading">TERMS OF USE AGREEMENT</h1>
        <p style={{ textAlign: "center", fontWeight: "1000" }}>
          This Terms of Use Agreement (“Agreement”) governs your use of the
          websites, platforms, services, and any digital tools operated by X
          Media UAE (“X Media,” “we,” “our,” or “us”). By accessing or using our
          websites, platforms, or services (collectively, the “Services”), you
          (“you” or “User”) agree to be bound by the terms of this Agreement. If
          you do not agree to this Agreement, you must not access or use the
          Services.
        </p>
        <div className="legal-details">
          <div className="right">
            <p>
              <strong>Last Updated:</strong> March 14, 2025
            </p>
            <p>
              We reserve the right to change or update these terms at any time,
              and such changes will be effective upon posting. Your continued
              use of our Services after changes are posted constitutes your
              agreement to the revised terms.
            </p>

            <h2>1. Description of Service</h2>
            <p>
              X Media UAE is a talent management and digital media company that
              offers tools and platforms for creators, artists, and brands to
              manage their media presence, promote their work, and engage
              audiences. Our services may include custom profile pages,
              promotional campaign tools, performance analytics, and other
              digital solutions to help talent and partners thrive in today’s
              media landscape.
            </p>

            <h2>2. Eligibility and Membership</h2>
            <p>
              You must be at least 13 years of age to use our Services. By using
              our Services, you represent and warrant that you meet this
              requirement. Access to certain Services may be restricted to
              invited members or subscribers. We reserve the right to offer
              tiered services, including free and paid subscription models, and
              to modify pricing and access levels at any time.
            </p>

            <h2>3. Acceptable Use and User Conduct</h2>
            <ul>
              <li>
                Upload, share, or transmit content that is unlawful, harmful,
                abusive, defamatory, or otherwise objectionable;
              </li>
              <li>
                Infringe the intellectual property rights or privacy of others;
              </li>
              <li>Transmit viruses, malware, or other harmful software;</li>
              <li>
                Engage in spam, scams, or unauthorized commercial promotions;
              </li>
              <li>Impersonate any person or misrepresent your affiliation;</li>
              <li>
                Circumvent security features or access systems without
                authorization;
              </li>
              <li>Upload any content that you do not have rights to use.</li>
            </ul>
            <p>
              X Media UAE reserves the right to monitor, suspend, or terminate
              access to the Services if you violate these terms or applicable
              law.
            </p>

            <h2>4. User Content and Licensing</h2>
            <p>
              You retain ownership of any original content you upload or submit,
              but by doing so, you grant X Media UAE a worldwide, non-exclusive,
              royalty-free license to use, reproduce, display, and distribute
              such content solely for the purpose of operating and promoting the
              Services. You represent that you have all necessary rights to
              grant this license.
            </p>

            <h2>5. Privacy and Data</h2>
            <p>
              Your use of our Services is also governed by our Privacy Policy,
              which outlines how we collect, use, and protect your personal
              data. By using the Services, you consent to our data practices as
              outlined in that policy.
            </p>

            <h2>6. Communications</h2>
            <p>
              You agree that X Media UAE may contact you via email or other
              provided contact methods to communicate information about your
              account, updates to the Services, promotions, and related matters.
              You may opt out of marketing emails at any time, though we may
              still send important service-related notices.
            </p>

            <h2>7. Third-Party Links and Content</h2>
            <p>
              Our Services may include links to third-party websites or content.
              We do not endorse, control, or assume responsibility for the
              content, policies, or practices of any third-party site. Use of
              any linked site is at your own risk.
            </p>
          </div>
          <div className="left">
            <h2>8. Metrics and Analytics</h2>
            <p>
              X Media UAE may collect data about your use of our Services,
              including usage statistics and performance metrics, to improve our
              offerings and user experience. We retain full ownership and rights
              to these aggregated, anonymized analytics.
            </p>

            <h2>9. Service Availability and Modifications</h2>
            <p>
              We strive to keep our Services available but do not guarantee
              uninterrupted access. We may change, suspend, or discontinue any
              feature at any time without notice. We are not liable for any
              downtime, data loss, or disruptions caused by system updates,
              technical issues, or external factors.
            </p>

            <h2>10. Intellectual Property</h2>
            <p>
              All logos, trademarks, design elements, and platform technology
              are owned by X Media UAE or its licensors. You may not copy,
              modify, distribute, or reverse-engineer any part of our Services
              without express written permission.
            </p>
            <h2>11. Disclaimers</h2>
            <p>
              The Services are provided “as is” without warranties of any kind.
              We do not guarantee the accuracy, completeness, or reliability of
              any content or metrics. X Media UAE disclaims all warranties,
              express or implied, including merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>

            <h2>12. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, X Media UAE shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the Services. Our total
              liability for any claim shall not exceed the amount paid by you
              (if any) for the Services during the past 6 months.
            </p>

            <h2>13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless X Media UAE and
              its affiliates from any claims, damages, or legal proceedings
              arising from your use of the Services, your violation of this
              Agreement, or your infringement of any rights of a third party.
            </p>

            <h2>14. Governing Law</h2>
            <p>
              This Agreement shall be governed by and construed in accordance
              with the laws of the United Arab Emirates. Any disputes arising
              out of or relating to this Agreement shall be resolved in the
              courts of Dubai.
            </p>

            <h2>15. Termination</h2>
            <p>
              We may terminate or suspend your access to the Services at our
              sole discretion, with or without notice, if you violate this
              Agreement. Upon termination, your license to use the Services will
              cease immediately.
            </p>

            <h2>16. Contact Us</h2>
            <p>
              For questions about these Terms of Use, you can contact us at:
              <br />X Media UAE
              <br />
              Email: <a href="mailto:info@xmediauae.com">info@xmediauae.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
