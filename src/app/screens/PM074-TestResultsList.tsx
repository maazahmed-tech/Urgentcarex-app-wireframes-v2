import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Download, Share, Filter, TrendingUp, TrendingDown } from 'lucide-react';

interface TestResult {
  id: string;
  name: string;
  date: string;
  provider: string;
  status: 'normal' | 'abnormal' | 'pending';
  category: string;
}

interface TestResultsListProps {
  onViewResult: (result: TestResult) => void;
  onBack: () => void;
}

const DEMO_RESULTS: TestResult[] = [
  {
    id: '1',
    name: 'Complete Blood Count (CBC)',
    date: '2026-01-08',
    provider: 'Dr. Sarah Johnson',
    status: 'normal',
    category: 'Blood Work'
  },
  {
    id: '2',
    name: 'Lipid Panel',
    date: '2026-01-08',
    provider: 'Dr. Sarah Johnson',
    status: 'abnormal',
    category: 'Blood Work'
  },
  {
    id: '3',
    name: 'Thyroid Function Test',
    date: '2026-01-08',
    provider: 'Dr. Sarah Johnson',
    status: 'normal',
    category: 'Blood Work'
  },
  {
    id: '4',
    name: 'Chest X-Ray',
    date: '2025-12-20',
    provider: 'Dr. Michael Chen',
    status: 'normal',
    category: 'Imaging'
  },
  {
    id: '5',
    name: 'COVID-19 PCR Test',
    date: '2025-11-15',
    provider: 'Dr. Emily Rodriguez',
    status: 'normal',
    category: 'Lab Test'
  }
];

export default function TestResultsList({ onViewResult, onBack }: TestResultsListProps) {
  const [results] = useState<TestResult[]>(DEMO_RESULTS);
  const [filter, setFilter] = useState<'all' | 'blood' | 'imaging' | 'lab'>('all');

  const filteredResults = results.filter(result => {
    if (filter === 'all') return true;
    if (filter === 'blood') return result.category === 'Blood Work';
    if (filter === 'imaging') return result.category === 'Imaging';
    if (filter === 'lab') return result.category === 'Lab Test';
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-[#10B981] bg-[#10B981]/10';
      case 'abnormal': return 'text-[#F59E0B] bg-[#F59E0B]/10';
      case 'pending': return 'text-[#6B7280] bg-[#6B7280]/10';
      default: return 'text-[#6B7280] bg-[#6B7280]/10';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'normal': return 'Normal';
      case 'abnormal': return 'Needs Review';
      case 'pending': return 'Pending';
      default: return status;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h2 className="text-lg font-semibold text-[#1F2937]">Test Results</h2>
        <button className="p-2">
          <Download className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 px-4 py-3 border-b border-[#E5E7EB] overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'all'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          All Results ({results.length})
        </button>
        <button
          onClick={() => setFilter('blood')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'blood'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          Blood Work ({results.filter(r => r.category === 'Blood Work').length})
        </button>
        <button
          onClick={() => setFilter('imaging')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'imaging'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          Imaging ({results.filter(r => r.category === 'Imaging').length})
        </button>
        <button
          onClick={() => setFilter('lab')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'lab'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          Lab Tests ({results.filter(r => r.category === 'Lab Test').length})
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Alert Banner */}
        {results.some(r => r.status === 'abnormal') && (
          <div className="bg-[#F59E0B]/10 border-l-4 border-[#F59E0B] rounded-xl p-4 mb-4">
            <div className="flex items-start gap-2">
              <span className="text-lg">⚠️</span>
              <div>
                <p className="text-sm font-semibold text-[#1F2937] mb-1">Action Needed</p>
                <p className="text-sm text-[#6B7280]">
                  Some results need review. Please contact your provider to discuss.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="space-y-3 pb-4">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              onClick={() => onViewResult(result)}
              className="border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#1F2937] transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#1F2937] mb-1">
                    {result.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-2">
                    {result.category}
                  </p>
                </div>
                <div className={`px-3 py-1 rounded-full ${getStatusColor(result.status)}`}>
                  <p className="text-xs font-medium">{getStatusText(result.status)}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-[#6B7280]">
                <div className="flex items-center gap-4">
                  <span>{new Date(result.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{result.provider}</span>
                </div>
                {result.status === 'abnormal' && (
                  <TrendingUp className="w-4 h-4 text-[#F59E0B]" />
                )}
                {result.status === 'normal' && (
                  <TrendingDown className="w-4 h-4 text-[#10B981]" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredResults.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-24 h-24 bg-[#F3F4F6] rounded-full flex items-center justify-center mb-4">
              <Filter className="w-12 h-12 text-[#6B7280]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">No Results Found</h3>
            <p className="text-sm text-[#6B7280] text-center">
              No test results match your current filter
            </p>
          </div>
        )}

        {/* Info Notice */}
        <div className="bg-[#10B981]/10 rounded-xl p-4 mt-4">
          <p className="text-sm text-[#6B7280]">
            <span className="font-semibold text-[#1F2937]">Need help understanding your results?</span> Schedule a follow-up appointment with your provider to discuss.
          </p>
        </div>
      </div>
    </div>
  );
}
