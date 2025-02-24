import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { toast } from "sonner";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const ReferralModal = ({ isOpen, onClose }: ReferralModalProps) => {
  const [formData, setFormData] = useState({
    friendName: "",
    friendEmail: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Invitation sent successfully!");
    onClose();
    setFormData({ friendName: "", friendEmail: "" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white/95 backdrop-blur-sm border border-neutral-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-neutral-800">
            Refer a Friend
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="friendName" className="text-neutral-700">
              Friend's Name
            </Label>
            <Input
              id="friendName"
              value={formData.friendName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, friendName: e.target.value })
              }
              className="w-full border-neutral-300 focus:border-primary focus:ring-primary"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="friendEmail" className="text-neutral-700">
              Friend's Email
            </Label>
            <Input
              id="friendEmail"
              type="email"
              value={formData.friendEmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, friendEmail: e.target.value })
              }
              className="w-full border-neutral-300 focus:border-primary focus:ring-primary"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300"
          >
            Send Invitation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default ReferralModal;
