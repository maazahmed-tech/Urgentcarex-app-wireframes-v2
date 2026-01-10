import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { ArrowLeft, X } from 'lucide-react';

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  purpose: string;
}

interface CurrentMedicationsProps {
  onContinue: (medications: Medication[]) => void;
  onSkip: () => void;
  onBack: () => void;
  initialData?: Medication[];
}

const FREQUENCIES = ['Once daily', 'Twice daily', 'Three times daily', 'Four times daily', 'As needed', 'Weekly'];

export default function CurrentMedications({ onContinue, onSkip, onBack, initialData = [] }: CurrentMedicationsProps) {
  const [medications, setMedications] = useState<Medication[]>(
    initialData.length > 0 ? initialData : [
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', purpose: 'Blood pressure' },
      { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', purpose: 'Diabetes' }
    ]
  );
  const [noneSelected, setNoneSelected] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMedication, setNewMedication] = useState<Medication>({
    name: '',
    dosage: '',
    frequency: '',
    purpose: ''
  });

  const handleAddMedication = () => {
    if (newMedication.name && newMedication.dosage && newMedication.frequency) {
      setMedications([...medications, newMedication]);
      setNewMedication({ name: '', dosage: '', frequency: '', purpose: '' });
      setShowAddModal(false);
      setNoneSelected(false);
    }
  };

  const handleRemoveMedication = (index: number) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  const handleNoneToggle = () => {
    setNoneSelected(!noneSelected);
    if (!noneSelected) {
      setMedications([]);
    }
  };

  const handleContinue = () => {
    onContinue(noneSelected ? [] : medications);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Progress */}
      <div className="px-4 pt-4 pb-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2 mb-4">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <div className="px-2">
          <p className="text-sm font-medium text-[#6B7280] mb-2">
            Step 5 of 9
          </p>
          <div className="w-full h-1 bg-[#E5E7EB] rounded-full overflow-hidden">
            <div className="h-full bg-[#1F2937] rounded-full" style={{ width: '55.56%' }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            Current Medications
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-6">
            What medications do you take regularly?
          </p>

          {/* Add Medication Button */}
          <Button 
            onClick={() => setShowAddModal(true)}
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6] mb-6"
          >
            + Add Medication
          </Button>

          {/* Your Medications */}
          {medications.length > 0 && (
            <>
              <h3 className="text-base font-semibold text-[#1F2937] mb-4">
                Your Medications
              </h3>
              <div className="space-y-3 mb-6">
                {medications.map((medication, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#E5E7EB] rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">💊</span>
                        <p className="text-base font-semibold text-[#1F2937]">
                          {medication.name}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveMedication(index)}
                        className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-[#6B7280]" />
                      </button>
                    </div>
                    <p className="text-sm text-[#6B7280] ml-7 mb-1">{medication.dosage}</p>
                    <p className="text-sm text-[#6B7280] ml-7 mb-1">{medication.frequency}</p>
                    {medication.purpose && (
                      <p className="text-sm text-[#6B7280] ml-7">For: {medication.purpose}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* None of the above */}
          <div
            onClick={handleNoneToggle}
            className="flex items-center gap-3 cursor-pointer mb-6 p-4 bg-[#F3F4F6] rounded-xl"
          >
            <Checkbox
              checked={noneSelected}
              onCheckedChange={handleNoneToggle}
            />
            <label className="text-base text-[#1F2937] cursor-pointer flex-1">
              Not currently taking any medications
            </label>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="bg-white border-t border-[#E5E7EB] p-4">
        <div className="flex gap-3">
          <Button 
            onClick={onSkip}
            variant="outline"
            className="flex-1 h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
          >
            Skip
          </Button>
          <Button 
            onClick={handleContinue}
            className="flex-1 h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
          >
            Continue
          </Button>
        </div>
      </div>

      {/* Add Medication Modal */}
      {showAddModal && (
        <div className="absolute inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-white w-full rounded-t-3xl p-6 animate-slide-up max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-[#1F2937] mb-6">Add Medication</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Medication Name
                </label>
                <input
                  type="text"
                  value={newMedication.name}
                  onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
                  placeholder="e.g., Metformin"
                  className="w-full h-[52px] px-4 rounded-xl border border-[#E5E7EB] text-base"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Dosage
                </label>
                <input
                  type="text"
                  value={newMedication.dosage}
                  onChange={(e) => setNewMedication({ ...newMedication, dosage: e.target.value })}
                  placeholder="e.g., 500mg"
                  className="w-full h-[52px] px-4 rounded-xl border border-[#E5E7EB] text-base"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Frequency
                </label>
                <select
                  value={newMedication.frequency}
                  onChange={(e) => setNewMedication({ ...newMedication, frequency: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-xl border border-[#E5E7EB] text-base"
                >
                  <option value="">Select frequency...</option>
                  {FREQUENCIES.map(freq => (
                    <option key={freq} value={freq}>{freq}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#374151] mb-2 block">
                  Purpose (Optional)
                </label>
                <input
                  type="text"
                  value={newMedication.purpose}
                  onChange={(e) => setNewMedication({ ...newMedication, purpose: e.target.value })}
                  placeholder="e.g., Diabetes"
                  className="w-full h-[52px] px-4 rounded-xl border border-[#E5E7EB] text-base"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => {
                  setShowAddModal(false);
                  setNewMedication({ name: '', dosage: '', frequency: '', purpose: '' });
                }}
                variant="outline"
                className="flex-1 h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleAddMedication}
                disabled={!newMedication.name || !newMedication.dosage || !newMedication.frequency}
                className="flex-1 h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151] disabled:bg-[#E5E7EB] disabled:text-[#9CA3AF]"
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}