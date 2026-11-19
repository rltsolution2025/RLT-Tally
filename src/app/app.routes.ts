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
import { TallyWithGstTraining } from './blogs/tally-with-gst-training/tally-with-gst-training';
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
import { GoogleReviews } from './components/google-reviews/google-reviews';
import { Robotics } from './component/Emerging-technologies/robotics/robotics';
import { IoT } from './component/Emerging-technologies/io-t/io-t';
import { GenAI } from './component/Emerging-technologies/gen-ai/gen-ai';
import { DroneTechnologies } from './component/Emerging-technologies/drone-technologies/drone-technologies';
import { KidsProgram } from './component/kids-program/kids-program';
import { TallyprimeForEveryBeginners } from './blogs/tallyprime-for-every-beginners/tallyprime-for-every-beginners';
import { TallyprimePracticalTestQuestionsAccountantJobs } from './blogs/tallyprime-practical-test-questions-accountant-jobs/tallyprime-practical-test-questions-accountant-jobs';
import { TallyprimePayrollManageEmployeeSalaries } from './blogs/tallyprime-payroll-manage-employee-salaries/tallyprime-payroll-manage-employee-salaries';
import { TallyLandingPage } from './landing-page/tally-landing-page/tally-landing-page';
import { HowToCreateCompanyInTallyprime } from './blogs/how-to-create-company-in-tallyprime/how-to-create-company-in-tallyprime';
import { HowToCreateLedgersInTallyprime } from './blogs/how-to-create-ledgers-in-tallyprime/how-to-create-ledgers-in-tallyprime';
import { TallyprimeVoucherTypesExplainedWithExamples } from './blogs/tallyprime-voucher-types-explained-with-examples/tallyprime-voucher-types-explained-with-examples';
import { TallyprimeShortcutKeys } from './blogs/tallyprime-shortcut-keys/tallyprime-shortcut-keys';
import { TallyprimeSalesPurchaseShortcutKeys } from './blogs/tallyprime-sales-purchase-shortcut-keys/tallyprime-sales-purchase-shortcut-keys';
import { HowToUseGoToSearchInTallyprime } from './blogs/how-to-use-go-to-search-in-tallyprime/how-to-use-go-to-search-in-tallyprime';
import { HowToCreateMastersInTallyprime } from './blogs/how-to-create-masters-in-tallyprime/how-to-create-masters-in-tallyprime';
import { TallyprimeTipsToReduceManualAccountingWork } from './blogs/tallyprime-tips-to-reduce-manual-accounting-work/tallyprime-tips-to-reduce-manual-accounting-work';
import { HowToCustomizeReportsInTallyprime } from './blogs/how-to-customize-reports-in-tallyprime/how-to-customize-reports-in-tallyprime';
import { HowToUseFiltersInTallyprimeReports } from './blogs/how-to-use-filters-in-tallyprime-reports/how-to-use-filters-in-tallyprime-reports';
import { HowToExportTallyprimeReportsToExcelAndPdf } from './blogs/how-to-export-tallyprime-reports-to-excel-and-pdf/how-to-export-tallyprime-reports-to-excel-and-pdf';
import { HowToCreateProformaInvoiceInTallyprime } from './blogs/how-to-create-proforma-invoice-in-tallyprime/how-to-create-proforma-invoice-in-tallyprime';
import { HowToDeleteACompanyInTallyprime } from './blogs/how-to-delete-a-company-in-tallyprime/how-to-delete-a-company-in-tallyprime';
import { HowToDeleteUnusedLedgerInTallyprime } from './blogs/how-to-delete-unused-ledger-in-tallyprime/how-to-delete-unused-ledger-in-tallyprime';
import { HowToMakeCreditNoteInTallyprime } from './blogs/how-to-make-credit-note-in-tallyprime/how-to-make-credit-note-in-tallyprime';
import { GenerateTrialBalanceInTallyprime } from './blogs/generate-trial-balance-in-tallyprime/generate-trial-balance-in-tallyprime';
import { PaidInternshipsComponent } from './landing-page/paid-internships/paid-internships';
import { OurCourses } from './component/our-courses/our-courses';
import { HowToReadProfitAndLossStatementInTallyprime } from './blogs/how-to-read-profit-and-loss-statement-in-tallyprime/how-to-read-profit-and-loss-statement-in-tallyprime';
import { HowToViewBalanceSheetInTallyprime } from './blogs/how-to-view-balance-sheet-in-tallyprime/how-to-view-balance-sheet-in-tallyprime';
import { HowToCheckCashFlowInTallyprime } from './blogs/how-to-check-cash-flow-in-tallyprime/how-to-check-cash-flow-in-tallyprime';
import { TrackReceivablesAndPayablesInTallyprime } from './blogs/track-receivables-and-payables-in-tallyprime/track-receivables-and-payables-in-tallyprime';
import { HowToCheckDayBookInTallyprime } from './blogs/how-to-check-day-book-in-tallyprime/how-to-check-day-book-in-tallyprime';
import { HowToViewLedgerReportsInTallyprime } from './blogs/how-to-view-ledger-reports-in-tallyprime/how-to-view-ledger-reports-in-tallyprime';
import { TrackExpensesUsingCostCentresInTallyprime } from './blogs/track-expenses-using-cost-centres-in-tallyprime/track-expenses-using-cost-centres-in-tallyprime';
import { RatioAnalysisInTallyprimeBusinessReporting } from './blogs/ratio-analysis-in-tallyprime-business-reporting/ratio-analysis-in-tallyprime-business-reporting';
import { CreateStockItemsInTallyprime } from './blogs/create-stock-items-in-tallyprime/create-stock-items-in-tallyprime';
import { HowToCreateStockGroupsAndCategoriesInTallyprime } from './blogs/how-to-create-stock-groups-and-categories-in-tallyprime/how-to-create-stock-groups-and-categories-in-tallyprime';
import { HowToManageMultipleGodownsInTallyprime } from './blogs/how-to-manage-multiple-godowns-in-tallyprime/how-to-manage-multiple-godowns-in-tallyprime';
import { HowToTrackStockMovementInTallyprime } from './blogs/how-to-track-stock-movement-in-tallyprime/how-to-track-stock-movement-in-tallyprime';
import { HowToCheckStockSummaryInTallyprime } from './blogs/how-to-check-stock-summary-in-tallyprime/how-to-check-stock-summary-in-tallyprime';
import { HowToManageBatchWiseInventoryInTallyprime } from './blogs/how-to-manage-batch-wise-inventory-in-tallyprime/how-to-manage-batch-wise-inventory-in-tallyprime';
import { HowToSetReorderLevelsInTallyprime } from './blogs/how-to-set-reorder-levels-in-tallyprime/how-to-set-reorder-levels-in-tallyprime';
import { HowToTrackStockAgeingInTallyprime } from './blogs/how-to-track-stock-ageing-in-tallyprime/how-to-track-stock-ageing-in-tallyprime';
import { StockTransferBetweenGodownsInTallyprime } from './blogs/stock-transfer-between-godowns-in-tallyprime/stock-transfer-between-godowns-in-tallyprime';
import { HowToCalculateStockValuationInTallyprime } from './blogs/how-to-calculate-stock-valuation-in-tallyprime/how-to-calculate-stock-valuation-in-tallyprime';
import { BankReconciliationInTallyprime } from './blogs/bank-reconciliation-in-tallyprime/bank-reconciliation-in-tallyprime';
import { HowToImportBankStatementsInTallyprime } from './blogs/how-to-import-bank-statements-in-tallyprime/how-to-import-bank-statements-in-tallyprime';
import { BankReconciliationTallyprimeErrorsSolutions } from './blogs/bank-reconciliation-tallyprime-errors-solutions/bank-reconciliation-tallyprime-errors-solutions';
import { HowToRecordBankTransactionsInTallyprime } from './blogs/how-to-record-bank-transactions-in-tallyprime/how-to-record-bank-transactions-in-tallyprime';
import { HowToCheckBankBookInTallyprime } from './blogs/how-to-check-bank-book-in-tallyprime/how-to-check-bank-book-in-tallyprime';
import { MatchBankTransactionsWithTallyprimeEntries } from './blogs/match-bank-transactions-with-tallyprime-entries/match-bank-transactions-with-tallyprime-entries';
import { TallyprimeBankingFeaturesForAccountants } from './blogs/tallyprime-banking-features-for-accountants/tallyprime-banking-features-for-accountants';
import { TrackReceivablesAndPaymentsThroughBankingReports } from './blogs/track-receivables-and-payments-through-banking-reports/track-receivables-and-payments-through-banking-reports';
import { HowConnectedBankingWorksInTallyprime } from './blogs/how-connected-banking-works-in-tallyprime/how-connected-banking-works-in-tallyprime';
import { TallyprimeBankReconciliationPracticalExample } from './blogs/tallyprime-bank-reconciliation-practical-example/tallyprime-bank-reconciliation-practical-example';


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
  { path: 'how-to-create-company-in-tallyprime', component: HowToCreateCompanyInTallyprime },
  { path: 'how-to-create-ledgers-in-tallyprime', component: HowToCreateLedgersInTallyprime },
  { path: 'how-to-create-masters-in-tallyprime', component: HowToCreateMastersInTallyprime },
  { path: 'tallyprime-tips-to-reduce-manual-accounting-work', component: TallyprimeTipsToReduceManualAccountingWork },
  { path: 'how-to-customize-reports-in-tallyprime', component: HowToCustomizeReportsInTallyprime },
  { path: 'how-to-use-filters-in-tallyprime-reports', component: HowToUseFiltersInTallyprimeReports },
  { path: 'how-to-export-tallyprime-reports-to-excel-and-pdf', component: HowToExportTallyprimeReportsToExcelAndPdf },
  { path: 'how-to-create-proforma-invoice-in-tallyprime', component: HowToCreateProformaInvoiceInTallyprime },

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
  { path: 'ui-ux-design-course', component: UiUxDesignerComponent },
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

  { path: 'google-review', component: GoogleReviews },
  { path: 'tally-with-gst-training-what-will-you-learn', component: TallyWithGstTraining },
  { path: 'tallyprime-accounting-entries-beginners-should-practice', component: TallyprimeForEveryBeginners },
  { path: 'tallyprime-voucher-types-explained-with-examples', component: TallyprimeVoucherTypesExplainedWithExamples },
  { path: 'tallyprime-practical-test-questions-accountant-jobs', component: TallyprimePracticalTestQuestionsAccountantJobs },
  { path: 'tallyprime-payroll-manage-employee-salaries', component: TallyprimePayrollManageEmployeeSalaries },
  { path: 'tallyprime-shortcut-keys', component: TallyprimeShortcutKeys },
  { path: 'tallyprime-sales-purchase-shortcut-keys', component: TallyprimeSalesPurchaseShortcutKeys },
  { path: 'how-to-use-go-to-search-in-tallyprime', component: HowToUseGoToSearchInTallyprime },
  { path: 'how-to-create-masters-in-tallyprime', component: HowToCreateMastersInTallyprime },
  { path: 'how-to-create-proforma-invoice-in-tallyprime', component: HowToCreateProformaInvoiceInTallyprime },
  { path: 'how-to-delete-a-company-in-tallyprime', component: HowToDeleteACompanyInTallyprime },
  { path: 'how-to-delete-unused-ledger-in-tallyprime', component: HowToDeleteUnusedLedgerInTallyprime },
  { path: 'how-to-make-credit-note-in-tallyprime', component: HowToMakeCreditNoteInTallyprime },
  { path: 'generate-trial-balance-in-tallyprime', component: GenerateTrialBalanceInTallyprime },
  { path: 'how-to-read-profit-and-loss-statement-in-tallyprime', component: HowToReadProfitAndLossStatementInTallyprime },
  { path: 'how-to-view-balance-sheet-in-tallyprime', component: HowToViewBalanceSheetInTallyprime },
  { path: 'how-to-check-cash-flow-in-tallyprime', component: HowToCheckCashFlowInTallyprime },
  { path: 'track-receivables-and-payables-in-tallyprime', component: TrackReceivablesAndPayablesInTallyprime },
  { path: 'how-to-check-day-book-in-tallyprime', component: HowToCheckDayBookInTallyprime },
  { path: 'how-to-view-ledger-reports-in-tallyprime', component: HowToViewLedgerReportsInTallyprime },
  { path: 'track-expenses-using-cost-centres-in-tallyprime', component: TrackExpensesUsingCostCentresInTallyprime },
  { path: 'ratio-analysis-in-tallyprime-business-reporting', component: RatioAnalysisInTallyprimeBusinessReporting },
  { path: 'create-stock-items-in-tallyprime', component: CreateStockItemsInTallyprime },
  { path: 'how-to-create-stock-groups-and-categories-in-tallyprime', component: HowToCreateStockGroupsAndCategoriesInTallyprime },
  { path: 'how-to-manage-multiple-godowns-in-tallyprime', component: HowToManageMultipleGodownsInTallyprime },
  { path: 'how-to-track-stock-movement-in-tallyprime', component: HowToTrackStockMovementInTallyprime },
  { path: 'how-to-check-stock-summary-in-tallyprime', component: HowToCheckStockSummaryInTallyprime },
  { path: 'how-to-manage-batch-wise-inventory-in-tallyprime', component: HowToManageBatchWiseInventoryInTallyprime },
  { path: 'how-to-set-reorder-levels-in-tallyprime', component: HowToSetReorderLevelsInTallyprime },
  { path: 'how-to-track-stock-ageing-in-tallyprime', component: HowToTrackStockAgeingInTallyprime },
  { path: 'stock-transfer-between-godowns-in-tallyprime', component: StockTransferBetweenGodownsInTallyprime },
  { path: 'how-to-calculate-stock-valuation-in-tallyprime', component: HowToCalculateStockValuationInTallyprime},
  {path: 'bank-reconciliation-in-tallyprime', component: BankReconciliationInTallyprime},
  { path: 'how-to-import-bank-statements-in-tallyprime', component: HowToImportBankStatementsInTallyprime },
  { path: 'bank-reconciliation-tallyprime-errors-solutions', component: BankReconciliationTallyprimeErrorsSolutions },
  { path: 'how-to-record-bank-transactions-in-tallyprime', component: HowToRecordBankTransactionsInTallyprime },
  { path: 'how-to-check-bank-book-in-tallyprime', component: HowToCheckBankBookInTallyprime },
  { path: 'match-bank-transactions-with-tallyprime-entries', component: MatchBankTransactionsWithTallyprimeEntries },
  { path: 'tallyprime-banking-features-for-accountants', component: TallyprimeBankingFeaturesForAccountants },
  { path: 'track-receivables-and-payments-through-banking-reports', component: TrackReceivablesAndPaymentsThroughBankingReports },
  { path: 'how-connected-banking-works-in-tallyprime', component: HowConnectedBankingWorksInTallyprime },
  { path: 'tallyprime-bank-reconciliation-practical-example', component: TallyprimeBankReconciliationPracticalExample },





  //Emerging Technologies
  { path: 'robitics-course', component: Robotics },
  { path: 'internet-of-things-course', component: IoT },
  { path: 'generative-ai-course', component: GenAI },
  { path: 'drone-technology-course', component: DroneTechnologies },

  // Kids Programs
  { path: 'future-tech-programs-for-kids', component: KidsProgram },

  //landing pages
  { path: 'tally-landing-page', component: TallyLandingPage },

  //Interships
  { path: 'internship-for-college-students-in-chennai', component: PaidInternshipsComponent },
  { path: 'courses', component: OurCourses }
];
