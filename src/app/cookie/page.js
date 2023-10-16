'use client';
import Footer from '@/components/global/Footer/Footer';
import LegalPageNav from '@/components/global/LegalPageNav/LegalPageNav';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';
import styles from './cookie.module.css';
import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <React.Fragment>
      <JobsHeaderNav />
      <div className="col-12 d-inline-flex align-items-stretch h-100">
        <LegalPageNav link="cookie" />
        <div className={`d-inline-flex flex-grow-1`}>
          <div className="container">
            <div
              className={`${styles.termsContainer} d-inline-flex flex-column col-12 pt-5 pb-5`}
            >
              <h1>Cokkie Policy</h1>
              <p>
                <i>
                  These Terms of Use (<strong> &quot;Terms&quot; </strong>) were
                  last updated on May 8, 2023.
                </i>
              </p>
              <p>
                <strong>
                  Please review these Terms carefully as they serve as an
                  enforceable contract between us and contain important
                  information about your legal rights, remedies, and
                  obligations.
                </strong>
              </p>
              <p>
                <strong>
                  IF YOU LIVE IN THE UNITED STATES OR CANADA, BY AGREEING TO
                  THESE TERMS, YOU AGREE TO RESOLVE ALL DISPUTES WITH Aus
                  Getters IN SMALL CLAIMS COURT OR THROUGH BINDING INDIVIDUAL
                  ARBITRATION ONLY, AND YOU WAIVE THE RIGHT TO PARTICIPATE IN
                  ANY CLASS ACTIONS AND TO HAVE CLAIMS DECIDED BY A JURY, AS
                  EXPLAINED IN THE DISPUTE RESOLUTION SECTION.
                </strong>
              </p>
              <p>
                Aus Getters’s mission is to improve lives through learning. We
                enable anyone anywhere to create and share educational content
                (instructors) and to access that educational content to learn
                (students). We consider our marketplace model the best way to
                offer valuable educational content to our users. We need rules
                to keep our platform and services safe for you, us, and our
                student and instructor community. These Terms apply to all your
                activities on the Aus Getters website, the Aus Getters mobile
                applications, our TV applications, our APIs, and other related
                services (<strong>“Services”</strong>).
              </p>
              <p>
                If you publish a course on the Aus Getters platform, you must
                also agree to the{' '}
                <Link href="/terms/instructor/">Instructor Terms</Link>. We also
                provide details regarding our processing of personal data of our
                students and instructors in our{' '}
                <Link href="/terms/privacy/">Privacy Policy</Link>. If you are
                using Aus Getters as part of your employer’s Aus Getters
                Business learning and development program, you can consult our{' '}
                <Link href="/terms/ub-privacy/">
                  Aus Getters Business Privacy Statement
                </Link>
                . Our <Link href="/terms/instructor/">Instructor Terms</Link>,{' '}
                <Link href="/terms/privacy/">Privacy Policy</Link>, and other
                Aus Getters policies applicable to your use of our Services are
                incorporated by reference into these Terms.
              </p>
              <p>
                Our website and apps cause communications about your browsing
                and app activities and app usage to be sent from you to third
                parties who provide services to Aus Getters. By using our
                Services, you consent to these communications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
