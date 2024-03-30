import { useLoaderData } from "react-router-dom";

interface University {
  id: number;
  name: string;
  founded: string;
  location: string;
  website: string;
  img_url: string;
  version: number;
}

interface Metadata {
  current_page: number;
  page_size: number;
  first_page: number;
  last_page: number;
  total_records: number;
}

interface UniversityData {
  metadata: Metadata;
  universities: University[];
}

const UniversitiesLoader = async () => {
  const response = await fetch("https://api.kolehiyo.live/v0/universities");
  // const response = await fetch("http://localhost:4000/v0/universities");

  const data: UniversityData = await response.json();
  return data.universities;
};

const Explore = () => {
  const universities = useLoaderData() as University[];

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {universities.map((university) => (
          <div
            key={university.id}
            className="card card-compact md:card lg:card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={university.img_url}
                alt="University Image"
                className="object-cover h-48 w-96"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl font-bold">
                {university.name}
              </h2>
              <p>Founded: {university.founded}</p>
              <p>Location: {university.location}</p>
              <a
                className="link link-primary"
                href={university.website}
                target="_blank"
                rel="noreferrer"
              >
                {university.website}
              </a>

              {/* <div className="card-actions">
                <Link
                  className="btn btn-primary"
                  to={`/universities/${university.id}`}
                >
                  Read More
                </Link>
              </div> */}
              <div className="card-actions">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { Explore as default, UniversitiesLoader };
