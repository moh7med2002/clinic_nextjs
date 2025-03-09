import React from "react";
import InputField from "@/components/ui/InputField";
import SubmitButton from "@/components/ui/SubmitButton";
import { FiCalendar, FiCheckCircle, FiXCircle } from "react-icons/fi";

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Update Appointment</h2>

            {/* Update Date & Time */}
            <form className="mb-4">
                <InputField
                    type="datetime-local"
                    required={true}
                    name="datetime"
                    placeholder="Update Date & Time"
                    icon={FiCalendar}
                />
                <SubmitButton>Save Date</SubmitButton>
            </form>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
                {/* Complete Button */}
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2">
                    <FiCheckCircle />
                    Complete
                </button>

                {/* Cancel Button */}
                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2">
                    <FiXCircle />
                    Cancel
                </button>
            </div>
        </div>
    );
}
