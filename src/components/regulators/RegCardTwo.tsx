import React from 'react';

interface RegulatorCardProps {
  name: string;
  shortName: string;
  description: string;
  country: string;
  region: string;
  established: number;
  logo: string;
  trustScore: number;
  slug: string;
}

export const RegulatorCard: React.FC<RegulatorCardProps> = ({
  name,
  shortName,
  description,
  country,
  region,
  established,
  logo,
  trustScore,
  slug,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 relative mr-4">
            <img
              src={logo}
              alt={`${shortName} ${name} logo`}
              style={{ objectFit: 'contain' }}
              className="rounded-md"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">{shortName}</h3>
            <p className="text-sm text-gray-500">
              {country}, {region}
            </p>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Established</p>
            <p className="font-semibold">{established}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Trust Score</p>
            <div className="flex items-center">
              <span className="font-semibold mr-1">{trustScore}/100</span>
              <div className="w-full bg-gray-200 rounded-full h-2 ml-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${trustScore}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <a
            href={`/regulators/${slug}`}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegulatorCard;
