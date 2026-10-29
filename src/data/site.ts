// All links point at the live site so the replica is clickable end-to-end.
export const SITE = 'https://www.assessprep.com';
export const url = (path: string) => (path.startsWith('http') ? path : `${SITE}/${path.replace(/^\.?\//, '')}`);

export const BOOK_DEMO = url('book-a-demo/main-contact#contact-form');
export const SIGN_IN = 'https://app.assessprep.com/';

export type MenuItem = { title: string; sub: string; href: string; icon: string };
export type Menu = { label: string; mobileLabel?: string; heading: string; accent: string; items: MenuItem[] };

export const MENUS: Menu[] = [
  {
    label: 'Features',
    heading: 'Explore the features',
    accent: '#00b2c9',
    items: [
      { title: 'Create', sub: 'Rich Interactive Assessments', href: url('features/create-online-assessments'), icon: 'create' },
      { title: 'Deliver', sub: 'Secure and Flexible', href: url('features/deliver'), icon: 'deliver' },
      { title: 'Monitor', sub: 'Real-time Progress', href: url('features/monitor'), icon: 'monitor' },
      { title: 'Grade', sub: 'Grading Made Easier', href: url('features/grade-with-ai'), icon: 'grade' },
      { title: 'Analyse', sub: 'Actionable Insights', href: url('features/analyse'), icon: 'analyse' },
      { title: 'AI Assistant', sub: 'Your Teaching Assistant', href: url('features/ai'), icon: 'ai-assistant' },
      { title: 'Paper Mode', sub: 'Digitize Paper Assessments', href: url('features/papermode'), icon: 'paper-mode' },
      { title: 'Integrations', sub: 'Use Your Go-To Tools', href: url('integration'), icon: 'integrations' },
    ],
  },
  {
    label: 'Solutions',
    mobileLabel: 'Curriculum',
    heading: 'Explore the Curriculum',
    accent: '#00ad09',
    items: [
      { title: 'IB MYP', sub: 'Middle Years Programme', href: url('solutions/ib-myp'), icon: 'ib-myp' },
      { title: 'IB DP', sub: 'Diploma Programme', href: url('solutions/ib-dp'), icon: 'ib-dp' },
      { title: 'IGCSE', sub: 'Cambridge Assessment', href: url('solutions/igcse'), icon: 'igcse' },
      { title: 'Districts', sub: 'Common Assessment', href: url('solutions/districts'), icon: 'districts' },
      { title: 'AP', sub: 'Advanced Placement', href: url('solutions/ap'), icon: 'ap' },
      { title: 'Other Curricula', sub: '600+ Curriculum Standards', href: url('solutions/other-curricula'), icon: 'other-curricula' },
    ],
  },
  {
    label: 'Resources',
    heading: 'Explore the resources',
    accent: '#d4a217',
    items: [
      { title: 'Case Studies', sub: 'Real Success Stories', href: url('case-study'), icon: 'case-studies' },
      { title: 'Blogs', sub: 'Your Knowledge Hub', href: url('blogs'), icon: 'blogs' },
      { title: 'Help', sub: 'Help Guides and Videos', href: 'https://assessprep.zendesk.com/hc/en-us', icon: 'help' },
    ],
  },
  {
    label: 'Company',
    heading: 'About AssessPrep',
    accent: '#030202',
    items: [
      { title: 'About Us', sub: 'Know Us', href: url(''), icon: 'about-us' },
      { title: 'Careers', sub: 'See Current Openings', href: url('careers'), icon: 'careers' },
      { title: 'Contact Us', sub: 'An Email Away', href: url('book-a-demo/main-contact'), icon: 'contact-us' },
      { title: 'Media Coverage', sub: 'Read about us', href: url('features/articles'), icon: 'media-coverage' },
    ],
  },
];

export const PLANS = url('book-a-demo/plans');
