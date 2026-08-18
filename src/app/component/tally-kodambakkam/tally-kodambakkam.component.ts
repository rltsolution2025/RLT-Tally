import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tally-kodambakkam',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tally-kodambakkam.component.html',
  styleUrl: './tally-kodambakkam.component.css',
})
export class TallyKodambakkamComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit(): void {
    /* ==========================
       PAGE TITLE
    ========================== */

    this.title.setTitle(
      'Tally Training Institute in Kodambakkam | Authorized Tally Partner | TallyPrime & GST | Placement Assistance',
    );

    /* ==========================
       SEO META TAGS
    ========================== */

    this.meta.updateTag({
      name: 'description',
      content:
        'Looking to develop accounting skills in Kodambakkam, Chennai? Learn TallyPrime, GST, accounting, inventory management, payroll, and financial reporting through practical training at RLT Edzaro.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Tally Training Institute Kodambakkam, TallyPrime Training Kodambakkam, GST Training Kodambakkam, Accounting Training Kodambakkam, Finance Course Chennai',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    this.meta.updateTag({
      name: 'author',
      content: 'RLT Edzaro',
    });

    this.meta.updateTag({
      name: 'language',
      content: 'English',
    });

    this.meta.updateTag({
      name: 'revisit-after',
      content: '7 days',
    });

    /* ==========================
       GEO TARGETING
    ========================== */

    this.meta.updateTag({
      name: 'geo.region',
      content: 'IN-TN',
    });

    this.meta.updateTag({
      name: 'geo.placename',
      content: 'Kodambakkam, Chennai',
    });

    this.meta.updateTag({
      name: 'geo.position',
      content: '13.0524;80.2257',
    });

    this.meta.updateTag({
      name: 'ICBM',
      content: '13.0524,80.2257',
    });

    /* ==========================
       OPEN GRAPH
    ========================== */

    this.meta.updateTag({
      property: 'og:title',
      content: 'Tally Training Institute in Kodambakkam | Authorized Tally Partner',
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Practical TallyPrime, GST and accounting learning experiences in Kodambakkam.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:locale',
      content: 'en_IN',
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: 'RLT Edzaro',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'SEO-IMAGES/Accounts-Image/Lab-3.jpeg',
    });

    /* ==========================
       TWITTER TAGS
    ========================== */

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Tally Training Institute in Kodambakkam',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Learn practical accounting skills, TallyPrime and GST systems.',
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: 'SEO-IMAGES/Accounts-Image/Lab-3.jpeg',
    });

    /* ==========================
       SCHEMA
    ========================== */

    const schema = {
      '@context': 'https://schema.org',

      '@graph': [
        {
          '@type': 'EducationalOrganization',

          name: 'RLT Edzaro',

          description: 'Practical TallyPrime and accounting learning institute in Kodambakkam.',

          url: 'https://www.rltedzaro.com',

          logo: 'https://www.rltedzaro.com/Logo/RLT-Logo-Final.png',

          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kodambakkam',
            addressRegion: 'Tamil Nadu',
            addressCountry: 'India',
          },

          areaServed: ['Kodambakkam', 'Chennai', 'Vadapalani', 'Ashok Nagar', 'West Mambalam'],
        },

        {
          '@type': 'Course',

          name: 'TallyPrime Training Course',

          description:
            'Practical TallyPrime training with GST systems, payroll, inventory management and accounting workflows.',

          provider: {
            '@type': 'EducationalOrganization',
            name: 'RLT Edzaro',
          },
        },

        {
          '@type': 'FAQPage',

          mainEntity: [
            {
              '@type': 'Question',

              name: 'Can beginners learn TallyPrime?',

              acceptedAnswer: {
                '@type': 'Answer',

                text: 'Yes. Learning starts from accounting fundamentals and gradually progresses toward practical implementation.',
              },
            },

            {
              '@type': 'Question',

              name: 'Does the course include GST?',

              acceptedAnswer: {
                '@type': 'Answer',

                text: 'Yes. Students learn GST systems and practical taxation workflows.',
              },
            },

            {
              '@type': 'Question',

              name: 'Are practical sessions included?',

              acceptedAnswer: {
                '@type': 'Answer',

                text: 'Students receive practical exposure through real-world business scenarios.',
              },
            },
          ],
        },

        {
          '@type': 'LocalBusiness',

          name: 'RLT Edzaro',

          image: 'https://www.rltedzaro.com/tally-website/Program-Image/GST-Simulation.jpg',

          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kodambakkam',
            addressRegion: 'Tamil Nadu',
            addressCountry: 'India',
          },

          geo: {
            '@type': 'GeoCoordinates',
            latitude: '13.0524',
            longitude: '80.2257',
          },
        },
      ],
    };

    const script = document.createElement('script');

    script.type = 'application/ld+json';

    script.text = JSON.stringify(schema);

    document.head.appendChild(script);
  }
}
