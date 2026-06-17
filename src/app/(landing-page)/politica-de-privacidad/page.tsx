import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Eye, Lock, FileText, ArrowLeft, Mail, Phone, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Purrfect Glow',
  description: 'Privacy Policy and treatment of personal data for The Purrfect Glow.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-brand-cream/40">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-brown hover:text-brand-brown-dark transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="bg-white/80 backdrop-blur-md border border-brand-brown/10 rounded-3xl p-8 sm:p-12 shadow-soft-lg mb-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/30 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="p-4 bg-brand-yellow/20 rounded-2xl mb-4 text-brand-brown-dark">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-baloo font-bold text-brand-brown mb-4">
              Privacy Policy
            </h1>
            <p className="text-brand-brown-dark/80 max-w-2xl text-lg font-medium leading-relaxed">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <div className="mt-4 text-xs font-semibold text-brand-brown/60 bg-brand-cream-dark px-3 py-1 rounded-full border border-brand-brown/5">
              Last updated: March 17, 2026
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white/90 backdrop-blur-md border border-brand-brown/10 rounded-4xl p-8 sm:p-12 shadow-soft space-y-10 text-brand-brown-dark/95">
          
          {/* Section 1: Intro */}
          <section className="space-y-4">
            <p className="leading-relaxed">
              We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
            </p>
          </section>

          {/* Section 2: Interpretation and Definitions */}
          <section className="space-y-6 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Interpretation and Definitions
            </h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-brand-brown-dark">Interpretation</h3>
              <p className="leading-relaxed text-sm">
                The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-brand-brown-dark">Definitions</h3>
              <p className="text-sm italic">For the purposes of this Privacy Policy:</p>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    term: 'Account',
                    desc: 'means a unique account created for You to access our Service or parts of our Service.'
                  },
                  {
                    term: 'Affiliate',
                    desc: 'means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.'
                  },
                  {
                    term: 'Company',
                    desc: 'referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy refers to The Purrfect Glow.'
                  },
                  {
                    term: 'Cookies',
                    desc: 'are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.'
                  },
                  {
                    term: 'Country',
                    desc: 'refers to: Peru'
                  },
                  {
                    term: 'Device',
                    desc: 'means any device that can access the Service such as a computer, a cell phone or a digital tablet.'
                  },
                  {
                    term: 'Personal Data (or "Personal Information")',
                    desc: 'is any information that relates to an identified or identifiable individual. We use "Personal Data" and "Personal Information" interchangeably unless a law uses a specific term.'
                  },
                  {
                    term: 'Service',
                    desc: 'refers to the Website.'
                  },
                  {
                    term: 'Service Provider',
                    desc: 'means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.'
                  },
                  {
                    term: 'Usage Data',
                    desc: 'refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).'
                  },
                  {
                    term: 'Website',
                    desc: 'refers to The Purrfect Glow, accessible from https://the-purrfect-glow.vercel.app/.'
                  },
                  {
                    term: 'You',
                    desc: 'means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-brand-cream/30 rounded-2xl border border-brand-brown/5 space-y-1">
                    <strong className="text-brand-brown font-bold text-sm block sm:inline-block sm:w-48 sm:align-top">
                      {item.term}
                    </strong>
                    <span className="text-sm text-brand-brown-dark/90 inline-block sm:w-[calc(100%-12.5rem)]">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Collecting and Using Your Personal Data */}
          <section className="space-y-6 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Collecting and Using Your Personal Data
            </h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-brand-brown-dark">Types of Data Collected</h3>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-brand-brown">Personal Data</h4>
                <p className="text-sm leading-relaxed">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="list-disc list-inside text-sm pl-4 space-y-1 text-brand-brown-dark font-medium">
                  <li>Email address</li>
                  <li>First name and last name</li>
                </ul>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-semibold text-brand-brown">Usage Data</h4>
                <p className="text-sm leading-relaxed">
                  Usage Data is collected automatically when using the Service.
                </p>
                <p className="text-sm leading-relaxed">
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
                <p className="text-sm leading-relaxed">
                  When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                </p>
                <p className="text-sm leading-relaxed">
                  We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-brand-brown/5">
                <h4 className="font-semibold text-brand-brown">Tracking Technologies and Cookies</h4>
                <p className="text-sm leading-relaxed">
                  We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                </p>
                <ul className="list-disc list-inside text-sm pl-4 space-y-3 text-brand-brown-dark">
                  <li>
                    <strong>Cookies or Browser Cookies:</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.
                  </li>
                  <li>
                    <strong>Web Beacons:</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                  </li>
                </ul>

                <p className="text-sm leading-relaxed">
                  Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
                </p>
                <p className="text-sm leading-relaxed">
                  Where required by law, we use non-essential cookies (such as analytics, advertising, and remarketing cookies) only with Your consent. You can withdraw or change Your consent at any time using Our cookie preferences tool (if available) or through Your browser/device settings. Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.
                </p>
                
                <p className="text-sm font-semibold text-brand-brown-dark">
                  We use both Session and Persistent Cookies for the purposes set out below:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="bg-brand-cream/20 p-5 rounded-2xl border border-brand-brown/10">
                    <h5 className="font-bold text-brand-brown text-sm mb-1">Necessary / Essential Cookies</h5>
                    <p className="text-xs text-brand-brown/70 mb-3 font-semibold">Type: Session Cookies | Admin: Us</p>
                    <p className="text-xs leading-relaxed text-brand-brown-dark/90">
                      These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts.
                    </p>
                  </div>

                  <div className="bg-brand-cream/20 p-5 rounded-2xl border border-brand-brown/10">
                    <h5 className="font-bold text-brand-brown text-sm mb-1">Cookies Policy / Notice Acceptance</h5>
                    <p className="text-xs text-brand-brown/70 mb-3 font-semibold">Type: Persistent Cookies | Admin: Us</p>
                    <p className="text-xs leading-relaxed text-brand-brown-dark/90">
                      These Cookies identify if users have accepted the use of cookies on the Website.
                    </p>
                  </div>

                  <div className="bg-brand-cream/20 p-5 rounded-2xl border border-brand-brown/10">
                    <h5 className="font-bold text-brand-brown text-sm mb-1">Functionality Cookies</h5>
                    <p className="text-xs text-brand-brown/70 mb-3 font-semibold">Type: Persistent Cookies | Admin: Us</p>
                    <p className="text-xs leading-relaxed text-brand-brown-dark/90">
                      These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Use of Your Personal Data */}
          <section className="space-y-6 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Use of Your Personal Data
            </h2>
            <p className="text-sm leading-relaxed">
              The Company may use Personal Data for the following purposes:
            </p>

            <ul className="list-disc list-inside text-sm pl-4 space-y-2 text-brand-brown-dark font-medium">
              <li><strong>To provide and maintain our Service:</strong> including to monitor the usage of our Service.</li>
              <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
              <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
              <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application&apos;s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates.</li>
              <li><strong>To provide You with news and special offers:</strong> and general information about other goods, services and events which We offer that are similar to those that you have already purchased or inquired about unless You have opted not to receive such information.</li>
              <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
              <li><strong>For business transfers:</strong> We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.</li>
              <li><strong>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service.</li>
            </ul>

            <div className="pt-4 space-y-3">
              <h3 className="text-lg font-bold text-brand-brown-dark">Sharing Your Personal Data</h3>
              <p className="text-sm leading-relaxed">
                We may share Your Personal Data in the following situations:
              </p>
              <ul className="list-disc list-inside text-sm pl-4 space-y-2 text-brand-brown-dark font-medium">
                <li><strong>With Service Providers:</strong> We may share Your Personal Data with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                <li><strong>For business transfers:</strong> We may share or transfer Your Personal Data in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business.</li>
                <li><strong>With Affiliates:</strong> We may share Your Personal Data with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                <li><strong>With business partners:</strong> We may share Your Personal Data with Our business partners to offer You certain products, services or promotions.</li>
                <li><strong>With other users:</strong> When You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                <li><strong>With Your consent:</strong> We may disclose Your Personal Data for any other purpose with Your consent.</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Retention of Your Personal Data */}
          <section className="space-y-6 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Retention of Your Personal Data
            </h2>
            <p className="text-sm leading-relaxed">
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if We are required to retain Your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p className="text-sm leading-relaxed">
              Where possible, We apply shorter retention periods and/or reduce identifiability by deleting, aggregating, or anonymizing data. Unless otherwise stated, the retention periods below are maximum periods (&quot;up to&quot;) and We may delete or anonymize data sooner when it is no longer needed for the relevant purpose. We apply different retention periods to different categories of Personal Data based on the purpose of processing and legal obligations:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-brand-cream/30 p-5 rounded-2xl border border-brand-brown/5">
                <h4 className="font-bold text-brand-brown text-sm mb-2">Account Information</h4>
                <p className="text-xs leading-relaxed text-brand-brown-dark/90">
                  <strong>User Accounts:</strong> Retained for the duration of your account relationship plus up to 24 months after account closure to handle any post-termination issues or resolve disputes.
                </p>
              </div>

              <div className="bg-brand-cream/30 p-5 rounded-2xl border border-brand-brown/5">
                <h4 className="font-bold text-brand-brown text-sm mb-2">Customer Support Data</h4>
                <p className="text-xs leading-relaxed text-brand-brown-dark/90 mb-2">
                  <strong>Tickets & Correspondence:</strong> Up to 24 months from the date of ticket closure.
                </p>
                <p className="text-xs leading-relaxed text-brand-brown-dark/90">
                  <strong>Chat transcripts:</strong> Up to 24 months for quality assurance.
                </p>
              </div>

              <div className="bg-brand-cream/30 p-5 rounded-2xl border border-brand-brown/5">
                <h4 className="font-bold text-brand-brown text-sm mb-2">Usage Data</h4>
                <p className="text-xs leading-relaxed text-brand-brown-dark/90 mb-2">
                  <strong>Analytics data:</strong> Up to 24 months from the date of collection.
                </p>
                <p className="text-xs leading-relaxed text-brand-brown-dark/90">
                  <strong>Server logs:</strong> Up to 24 months for security monitoring.
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed">
              We may retain Personal Data beyond the periods stated above for different reasons:
            </p>
            <ul className="list-disc list-inside text-sm pl-4 space-y-1 text-brand-brown-dark font-medium">
              <li><strong>Legal obligation:</strong> We are required by law to retain specific data (e.g., financial records for tax authorities).</li>
              <li><strong>Legal claims:</strong> Data is necessary to establish, exercise, or defend legal claims.</li>
              <li><strong>Your explicit request:</strong> You ask Us to retain specific information.</li>
              <li><strong>Technical limitations:</strong> Data exists in backup systems that are scheduled for routine deletion.</li>
            </ul>

            <p className="text-sm leading-relaxed">
              When retention periods expire, We securely delete or anonymize Personal Data according to the following procedures:
            </p>
            <ul className="list-disc list-inside text-sm pl-4 space-y-1 text-brand-brown-dark font-medium">
              <li><strong>Deletion:</strong> Personal Data is removed from Our systems and no longer actively processed.</li>
              <li><strong>Backup retention:</strong> Residual copies may remain in encrypted backups for a limited period consistent with our backup retention schedule.</li>
              <li><strong>Anonymization:</strong> In some cases, We convert Personal Data into anonymous statistical data that cannot be linked back to You.</li>
            </ul>
          </section>

          {/* Section 6: Transfer of Your Personal Data */}
          <section className="space-y-4 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Transfer of Your Personal Data
            </h2>
            <p className="text-sm leading-relaxed">
              Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.
            </p>
            <p className="text-sm leading-relaxed">
              Where required by applicable law, We will ensure that international transfers of Your Personal Data are subject to appropriate safeguards and supplementary measures where appropriate. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Section 7: Delete Your Personal Data */}
          <section className="space-y-4 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Delete Your Personal Data
            </h2>
            <p className="text-sm leading-relaxed">
              You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
            </p>
            <p className="text-sm leading-relaxed">
              Our Service may give You the ability to delete certain information about You from within the Service.
            </p>
            <p className="text-sm leading-relaxed">
              You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any Personal Data that You have provided to Us.
            </p>
            <p className="text-sm leading-relaxed text-brand-orange font-semibold">
              Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
            </p>
          </section>

          {/* Section 8: Disclosure of Your Personal Data */}
          <section className="space-y-6 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Disclosure of Your Personal Data
            </h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-brand-brown-dark">Business Transactions</h3>
              <p className="text-sm leading-relaxed">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-brand-brown-dark">Law enforcement</h3>
              <p className="text-sm leading-relaxed">
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-brand-brown-dark">Other legal requirements</h3>
              <p className="text-sm leading-relaxed">
                The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
              </p>
              <ul className="list-disc list-inside text-sm pl-4 space-y-1 text-brand-brown-dark font-medium">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
              </ul>
            </div>
          </section>

          {/* Section 9: Security of Your Personal Data */}
          <section className="space-y-4 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Security of Your Personal Data
            </h2>
            <p className="text-sm leading-relaxed">
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>
          </section>

          {/* Section 10: Children's Privacy */}
          <section className="space-y-4 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Children&apos;s Privacy
            </h2>
            <p className="text-sm leading-relaxed">
              Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 16 without verification of parental consent, We take steps to remove that information from Our servers.
            </p>
            <p className="text-sm leading-relaxed">
              If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent&apos;s consent before We collect and use that information.
            </p>
          </section>

          {/* Section 11: Links to Other Websites */}
          <section className="space-y-4 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Links to Other Websites
            </h2>
            <p className="text-sm leading-relaxed">
              Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>
            <p className="text-sm leading-relaxed">
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
          </section>

          {/* Section 12: Changes to this Privacy Policy */}
          <section className="space-y-4 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Changes to this Privacy Policy
            </h2>
            <p className="text-sm leading-relaxed">
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="text-sm leading-relaxed">
              We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>
            <p className="text-sm leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Section 13: Contact Us */}
          <section className="space-y-6 border-t border-brand-brown/10 pt-8">
            <h2 className="text-2xl font-baloo font-bold text-brand-brown">
              Contact Us
            </h2>
            <p className="text-sm leading-relaxed">
              If you have any questions about this Privacy Policy, You can contact us:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:959619405"
                className="flex items-center gap-3 p-4 bg-brand-cream/40 hover:bg-brand-cream/80 border border-brand-brown/10 rounded-2xl transition-colors font-semibold group"
              >
                <div className="p-2.5 bg-white rounded-xl text-brand-orange group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-brown-dark/60 block">By Phone</span>
                  <span className="text-sm text-brand-brown">959619405</span>
                </div>
              </a>

              <a 
                href="mailto:soporte@the-purrfect-glow.com"
                className="flex items-center gap-3 p-4 bg-brand-cream/40 hover:bg-brand-cream/80 border border-brand-brown/10 rounded-2xl transition-colors font-semibold group"
              >
                <div className="p-2.5 bg-white rounded-xl text-brand-orange group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-brown-dark/60 block">By Email</span>
                  <span className="text-sm text-brand-brown">soporte@the-purrfect-glow.com</span>
                </div>
              </a>
            </div>

            <div className="mt-6 p-4 bg-brand-cream/20 rounded-2xl border border-brand-brown/5 text-xs text-brand-brown-dark/70 italic text-center">
              Generated using TermsFeed Privacy Policy Generator
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
