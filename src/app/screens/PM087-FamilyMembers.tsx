import { Button } from '../components/ui/button';
import { ArrowLeft, Plus, Users } from 'lucide-react';

interface FamilyMembersProps {
  onAddMember: () => void;
  onViewMember: (id: string) => void;
  onBack: () => void;
}

export default function FamilyMembers({ onAddMember, onViewMember, onBack }: FamilyMembersProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center p-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h2 className="text-lg font-semibold text-[#1F2937] ml-2">Family Members</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-12 h-12 text-[#6B7280]" />
          </div>
          <h3 className="text-lg font-semibold text-[#1F2937] mb-2">No Family Members Added</h3>
          <p className="text-sm text-[#6B7280] mb-6">
            Add family members to book appointments for them
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 max-w-[390px] mx-auto">
        <Button 
          onClick={onAddMember}
          className="w-full h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Family Member
        </Button>
      </div>
    </div>
  );
}
