import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';
import { TallyEssential } from './component/courses/tally-essential/tally-essential';
import { TallyPrime } from './component/courses/tally-prime/tally-prime';
import { TallyProfessional } from './component/courses/tally-professional/tally-professional';
import { GSTSimulation } from './component/courses/gst-simulation/gst-simulation';
import { MasterAccountant } from './component/courses/master-accountant/master-accountant';
import { OfficeAutomation } from './component/courses/office-automation/office-automation';
import { PayrollIncomeTax } from './component/courses/payroll-income-tax/payroll-income-tax';
import { Career } from './component/career/career';
import { Hire } from './component/hire/hire';
import { Platform } from './component/platform/platform';
import { Refer } from './component/refer/refer';
import { EnrollComponent } from './component/enroll/enroll.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { TallyKodambakkamComponent } from './component/tally-kodambakkam/tally-kodambakkam.component';
import { TallyMaraimalaiNagarComponent } from './component/tally-maraimalai-nagar/tally-maraimalai-nagar.component';
import { TallyChennaiComponent } from './component/tally-chennai/tally-chennai.component';
import { TallyMambalamComponent } from './component/tally-mambalam/tally-mambalam.component';
import { TallySaidapetComponent } from './component/tally-saidapet/tally-saidapet.component';
import { TallyVadapalaniComponent } from './component/tally-vadapalani/tally-vadapalani.component';
import { TallyKkNagarComponent } from './component/tally-kk-nagar/tally-kk-nagar.component';
import { TallyAshokNagarComponent } from './component/tally-ashok-nagar/tally-ashok-nagar.component';
import { TallyNungambakkamComponent } from './component/tally-nungambakkam/tally-nungambakkam.component';
import { TallyTNagarComponent } from './component/tally-t-nagar/tally-t-nagar.component';
import { AIMLLearningComponent } from './IT-industries/ai-ml-learning/ai-ml-learning.component';
import { CloudComponent } from './IT-industries/cloud/cloud.component';
import { DatascienceComponent } from './IT-industries/datascience/datascience.component';
import { DigitalMarketingComponent } from './IT-industries/digital-marketing/digital-marketing.component';
import { JavaFullstackComponent } from './IT-industries/java-fullstack/java-fullstack.component';
import { DotnetFullstackComponent } from './IT-industries/dotnet-fullstack/dotnet-fullstack.component';
import { PythonFullStackComponent } from './IT-industries/python-full-stack/python-full-stack.component';
import { UiUxDesignerComponent } from './IT-industries/ui-ux-designer/ui-ux-designer.component';
import { CCNAComponent } from './IT-industries/ccna/ccna.component';
import { PowerBIComponent } from './IT-industries/power-bi/power-bi.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { TallyprimeVsExcelComponent } from './blogs/tallyprime-vs-excel/tallyprime-vs-excel.component';
import { TallyAccountantSalaryInIndiaComponent } from './blogs/tally-accountant-salary-in-india/tally-accountant-salary-in-india.component';
import { JobsAfterLearningTallyComponent } from './blogs/jobs-after-learning-tally/jobs-after-learning-tally.component';
import { TallyCourseAfterTwelfthComponent } from './blogs/tally-course-after-twelfth/tally-course-after-twelfth.component';
import { TallyCourseFeesDurationSyllabusCareerComponent } from './blogs/tally-course-fees-duration-syllabus-career/tally-course-fees-duration-syllabus-career.component';
import { LearnTallyWithoutAccountingKnowledgeComponent } from './blogs/learn-tally-without-accounting-knowledge/learn-tally-without-accounting-knowledge.component';
import { HowLongDoesItTakeToLearnTallyprimeComponent } from './blogs/how-long-does-it-take-to-learn-tallyprime/how-long-does-it-take-to-learn-tallyprime.component';
import { IsTallyprimeEasyToLearnForBeginnersComponent } from './blogs/is-tallyprime-easy-to-learn-for-beginners/is-tallyprime-easy-to-learn-for-beginners.component';
import { TallyCourseInTambaramComponent } from './component/tally-course-in-tambaram/tally-course-in-tambaram.component';
import { TallyCourseInChengalpattuComponent } from './component/tally-course-in-chengalpattu/tally-course-in-chengalpattu.component';
import { TallyMaduraiComponent } from './component/city/tally-madurai/tally-madurai.component';
import { TallyTrichyComponent } from './component/city/tally-trichy/tally-trichy.component';
import { TallyThiruvallurComponent } from './component/city/tally-thiruvallur/tally-thiruvallur.component';
import { TallyKanchipuramComponent } from './component/city/tally-kanchipuram/tally-kanchipuram.component';
import { TallyCoimbatoreComponent } from './component/city/tally-coimbatore/tally-coimbatore.component';
import { TallyCuddaloreComponent } from './component/city/tally-cuddalore/tally-cuddalore.component';
import { TallyErodeComponent } from './component/city/tally-erode/tally-erode.component';
import { TallyNammakalComponent } from './component/city/tally-nammakal/tally-nammakal.component';
import { TallyPondyComponent } from './component/city/tally-pondy/tally-pondy.component';
import { TallySalemComponent } from './component/city/tally-salem/tally-salem.component';
import { TallyVelloreComponent } from './component/city/tally-vellore/tally-vellore.component';
import { TDLComponent } from './component/courses/tdl/tdl.component';
import { InventoryManagementComponent } from './component/courses/inventory-management/inventory-management.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'header', component: Header },
  { path: 'footer', component: Footer },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'career', component: Career },
  { path: 'hire-for-us', component: Hire },
  { path: 'platform', component: Platform },
  { path: 'register', component: Refer },
  { path: 'enroll', component: EnrollComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },

  // Tally Course
  { path: 'tally-essential', component: TallyEssential },
  { path: 'tally-prime', component: TallyPrime },
  { path: 'tally-professional', component: TallyProfessional },
  { path: 'gst-simulation', component: GSTSimulation },
  { path: 'master-accountant', component: MasterAccountant },
  { path: 'office-automation', component: OfficeAutomation },
  { path: 'payroll-and-income-tax', component: PayrollIncomeTax },
  { path: 'tdl-essential', component: TDLComponent },
  { path: 'complete-guide-to-inventory-management', component: InventoryManagementComponent },

  //SEO - Chennai major city
  { path: 'tally-training-institute-in-kodambakkam', component: TallyKodambakkamComponent },
  {
    path: 'tally-training-institute-in-maraimalai-nagar',
    component: TallyMaraimalaiNagarComponent,
  },
  { path: 'tally-training-institute-in-chennai', component: TallyChennaiComponent },
  { path: 'tally-training-institute-in-mambalam', component: TallyMambalamComponent },
  { path: 'tally-training-institute-in-saidapet', component: TallySaidapetComponent },
  { path: 'tally-training-institute-in-vadapalani', component: TallyVadapalaniComponent },
  { path: 'tally-training-institute-in-kk-nagar', component: TallyKkNagarComponent },
  { path: 'tally-training-institute-in-ashok-nagar', component: TallyAshokNagarComponent },
  { path: 'tally-training-institute-in-nungambakkam', component: TallyNungambakkamComponent },
  { path: 'tally-training-institute-in-t-nagar', component: TallyTNagarComponent },
  { path: 'tally-course-in-chengalpattu', component: TallyCourseInChengalpattuComponent },
  { path: 'tally-course-in-tambaram', component: TallyCourseInTambaramComponent },

  //District
  { path: 'tally-course-in-madurai', component: TallyMaduraiComponent },
  { path: 'tally-course-in-trichy', component: TallyTrichyComponent },
  { path: 'tally-course-in-thiruvallur', component: TallyThiruvallurComponent },
  { path: 'tally-course-in-kanchipuran', component: TallyKanchipuramComponent },
  { path: 'tally-course-in-coimbatore', component: TallyCoimbatoreComponent },
  { path: 'tally-course-in-cuddalore', component: TallyCuddaloreComponent },
  { path: 'tally-course-in-erode', component: TallyErodeComponent },
  { path: 'tally-course-in-namakkal', component: TallyNammakalComponent },
  { path: 'tally-course-in-pondicherry', component: TallyPondyComponent },
  { path: 'tally-course-in-salem', component: TallySalemComponent },
  { path: 'tally-course-in-vellore', component: TallyVelloreComponent },

  //IT Industries
  { path: 'artificial-intelligence-machine-learning-course', component: AIMLLearningComponent },
  { path: 'cloud-computing-course', component: CloudComponent },
  { path: 'data-science-with-ai-course', component: DatascienceComponent },
  { path: 'digital-marketing-course', component: DigitalMarketingComponent },
  { path: 'java-full-stack-developer-course', component: JavaFullstackComponent },
  { path: 'dotnet-full-stack-developer-course', component: DotnetFullstackComponent },
  { path: 'python-full-stack-developer-course', component: PythonFullStackComponent },
  { path: 'ui-ux-designer-course', component: UiUxDesignerComponent },
  { path: 'ccna-networking-course', component: CCNAComponent },
  { path: 'power-bi-tableau-course', component: PowerBIComponent },

  //blogs
  { path: 'blogs', component: BlogsComponent },
  { path: 'tallyprime-vs-excel-for-accounting', component: TallyprimeVsExcelComponent },
  { path: 'tally-accountant-salary-in-india', component: TallyAccountantSalaryInIndiaComponent },
  { path: 'jobs-after-learning-tally', component: JobsAfterLearningTallyComponent },
  { path: 'tally-course-after-12th', component: TallyCourseAfterTwelfthComponent },
  {
    path: 'tally-course-fees-duration-syllabus-career',
    component: TallyCourseFeesDurationSyllabusCareerComponent,
  },
  {
    path: 'learn-tally-without-accounting-knowledge',
    component: LearnTallyWithoutAccountingKnowledgeComponent,
  },
  {
    path: 'how-long-does-it-take-to-learn-tallyprime',
    component: HowLongDoesItTakeToLearnTallyprimeComponent,
  },
  {
    path: 'is-tallyprime-easy-to-learn-for-beginners',
    component: IsTallyprimeEasyToLearnForBeginnersComponent,
  },

];
