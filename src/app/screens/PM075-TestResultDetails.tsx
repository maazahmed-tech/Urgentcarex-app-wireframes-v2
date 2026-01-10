import { Button } from '../components/ui/button';
import { ArrowLeft, Download, Share, FileText, Calendar, User, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface TestResult {
  id: string;
  name: string;
  date: string;
  provider: string;
  status: 'normal' | 'abnormal' | 'pending';
  category: string;
}

interface TestResultDetailsProps {
  result: TestResult;
  onScheduleFollowUp: () => void;
  onBack: () => void;
}

const RESULT_VALUES = {
  'Complete Blood Count (CBC)': [
    { name: 'White Blood Cells', value: '7.2', unit: 'K/uL', range: '4.0-11.0', status: 'normal' },
    { name: 'Red Blood Cells', value: '5.1', unit: 'M/uL', range: '4.5-5.9', status: 'normal' },
    { name: 'Hemoglobin', value: '15.2', unit: 'g/dL', range: '13.5-17.5', status: 'normal' },
    { name: 'Hematocrit', value: '44.5', unit: '%', range: '38.8-50.0', status: 'normal' },
    { name: 'Platelets', value: '250', unit: 'K/uL', range: '150-400', status: 'normal' }
  ],
  'Lipid Panel': [
    { name: 'Total Cholesterol', value: '220', unit: 'mg/dL', range: '<200', status: 'high' },
    { name: 'LDL Cholesterol', value: '145', unit: 'mg/dL', range: '<100', status: 'high' },
    { name: 'HDL Cholesterol', value: '52', unit: 'mg/dL', range: '>40', status: 'normal' },
    { name: 'Triglycerides', value: '115', unit: 'mg/dL', range: '<150', status: 'normal' }
  ]
};

export default function TestResultDetails({ result, onScheduleFollowUp, onBack }: TestResultDetailsProps) {
  const values = RESULT_VALUES[result.name as keyof typeof RESULT_VALUES] || [];
  const hasAbnormal = values.some(v => v.status === 'high' || v.status === 'low');

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h2 className="text-lg font-semibold text-[#1F2937]">Test Results</h2>
        <button className="p-2">
          <Share className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-8">
        {/* Status Banner */}
        {hasAbnormal ? (
          <div className="bg-[#F59E0B] px-6 py-4">
            <div className="flex items-center gap-2 text-white">
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm font-medium">Some values are outside normal range</p>
            </div>
          </div>
        ) : (
          <div className="bg-[#10B981] px-6 py-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-lg">✓</span>
              <p className="text-sm font-medium">All values are within normal range</p>
            </div>
          </div>
        )}

        {/* Test Info */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <h3 className="text-xl font-bold text-[#1F2937] mb-4">
            {result.name}
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <Calendar className="w-4 h-4" />
              <span>{new Date(result.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <User className="w-4 h-4" />
              <span>{result.provider}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <FileText className="w-4 h-4" />
              <span>{result.category}</span>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Results</h3>
          
          <div className="space-y-3">
            {values.map((item, index) => (
              <div key={index} className="bg-[#F3F4F6] rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1F2937] mb-1">{item.name}</p>
                    <p className="text-xs text-[#6B7280]">Reference: {item.range} {item.unit}</p>
                  </div>
                  {item.status === 'high' && (
                    <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
                  )}
                  {item.status === 'low' && (
                    <TrendingDown className="w-5 h-5 text-[#F59E0B]" />
                  )}
                  {item.status === 'normal' && (
                    <div className="w-5 h-5 bg-[#10B981] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <p className={`text-2xl font-bold ${
                    item.status === 'normal' ? 'text-[#10B981]' : 'text-[#F59E0B]'
                  }`}>
                    {item.value}
                  </p>
                  <p className="text-sm text-[#6B7280]">{item.unit}</p>
                  {item.status !== 'normal' && (
                    <div className="ml-auto px-2 py-1 bg-[#F59E0B]/10 rounded-full">
                      <p className="text-xs font-medium text-[#F59E0B]">
                        {item.status === 'high' ? 'High' : 'Low'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Provider Notes */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Provider Notes</h3>
          <div className="bg-[#F3F4F6] rounded-xl p-4">
            {hasAbnormal ? (
              <p className="text-sm text-[#1F2937]">
                Your cholesterol levels are slightly elevated. I recommend dietary modifications and increased physical activity. Let's schedule a follow-up in 3 months to recheck. Please call the office if you have any questions.
              </p>
            ) : (
              <p className="text-sm text-[#1F2937]">
                All results are within normal limits. Continue with your current health regimen. No follow-up needed unless you have concerns.
              </p>
            )}
          </div>
        </div>

        {/* What These Results Mean */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">What These Results Mean</h3>
          <div className="space-y-3">
            <div className="bg-[#10B981]/10 rounded-xl p-4">
              <p className="text-sm font-medium text-[#1F2937] mb-2">✓ Normal Values</p>
              <p className="text-sm text-[#6B7280]">
                Values within the reference range indicate healthy levels for this test.
              </p>
            </div>
            {hasAbnormal && (
              <div className="bg-[#F59E0B]/10 rounded-xl p-4">
                <p className="text-sm font-medium text-[#1F2937] mb-2">⚠️ Values Outside Range</p>
                <p className="text-sm text-[#6B7280]">
                  These values may require attention. Your provider will discuss next steps and any needed lifestyle changes.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action Items */}
        {hasAbnormal && (
          <div className="px-6 py-6 border-b border-[#E5E7EB]">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Recommended Actions</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 bg-[#F3F4F6] rounded-xl">
                <span className="text-base">1️⃣</span>
                <p className="text-sm text-[#1F2937]">Review results with your provider</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-[#F3F4F6] rounded-xl">
                <span className="text-base">2️⃣</span>
                <p className="text-sm text-[#1F2937]">Follow dietary and lifestyle recommendations</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-[#F3F4F6] rounded-xl">
                <span className="text-base">3️⃣</span>
                <p className="text-sm text-[#1F2937]">Schedule follow-up testing as advised</p>
              </div>
            </div>
          </div>
        )}

        {/* Documents */}
        <div className="px-6 py-6">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Documents</h3>
          <button className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#1F2937] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1F2937]/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#1F2937]" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-[#1F2937]">Full Lab Report</p>
                <p className="text-xs text-[#6B7280]">PDF • 3 pages</p>
              </div>
            </div>
            <Download className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6 space-y-3">
          {hasAbnormal && (
            <Button 
              onClick={onScheduleFollowUp}
              className="w-full h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Follow-Up
            </Button>
          )}

          <Button 
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Results
          </Button>

          <Button 
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
          >
            <Share className="w-5 h-5 mr-2" />
            Share with Provider
          </Button>
        </div>
      </div>
    </div>
  );
}
