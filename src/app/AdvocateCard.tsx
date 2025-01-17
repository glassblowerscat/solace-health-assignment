import { Advocate } from "@/db/seed/advocates";

interface AdvocateCardProps {
  advocate: Advocate;
}

export function AdvocateCard({ advocate }: AdvocateCardProps) {
  const {
    firstName,
    lastName,
    city,
    degree,
    specialties,
    yearsOfExperience,
    phoneNumber,
  } = advocate;

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-6 p-6 max-w-2xl w-full">
      <div className="flex justify-between items-center">
        <div className="flex align-baseline">
          <h3 className="font-bold text-xl leading-3">
            {firstName} {lastName}
          </h3>
          <p className="text-gray-600 text-sm leading-4 ml-2">{degree}</p>
        </div>
        <p className="text-gray-600 text-md">{city}</p>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        {yearsOfExperience} years experience
      </p>
      <h4 className="mb-2 font-bold">Specialties</h4>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
        {specialties.map((specialty, index) => (
          <p key={index} className="text-gray-600 text-sm">
            {specialty}
          </p>
        ))}
      </div>
      <p className="text-gray-600 text-md font-extrabold ml-auto">
        Phone:{" "}
        {String(phoneNumber).replace(
          /(\d{3})(\d{3})(\d{2})(\d{1,2})/,
          "($1) $2-$3$4"
        )}
      </p>
    </div>
  );
}
